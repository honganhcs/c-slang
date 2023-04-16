import {
  AssignmentOperator,
  Expression,
  MemberExpression,
  Pattern,
  SequenceExpression,
  UpdateOperator
} from 'estree'

import { getCurrentFrame, getGlobalFrame, lookupFrame, updateFrame } from '../environment'
import { actualValue, evaluate } from '../interpreter/interpreter'
import { getValue, Kind } from '../types'

export function evaluateIdentifer(name: any, context: any, isAddress?: boolean) {
  const frame = lookupFrame(context, name)
  if (!frame) {
    throw new Error(`${name} undeclared`)
  }
  const kind = frame[name].kind
  const value = frame[name].value
  const result =
    kind.pointers || kind.dimensions || isAddress
      ? {
          kind: kind,
          address: value
        }
      : value.body
      ? value
      : context.runtime.memory.getMemory(value, kind)
  return result
}

export function* evaluateArrayExpression(elements: Array<any>, context: any) {
  const value = []
  for (const element of elements) {
    value.unshift(yield* actualValue(element as Expression, context))
  }
  return value.flat()
}

export function evaluateFunctionExpression(params: Array<Pattern>, body: any) {
  params.forEach(p => p as MemberExpression)
  const value = {
    params: params,
    body: body
  }
  return value
}

const builtinMicrocode = {
  malloc: (a: any, c: any) => {
    const kind = {
      primitive: 'int',
      pointers: 0
    } as Kind
    const size = evaluateCastExpression(a[0], kind)
    return c.runtime.memory.malloc(size)
  }
}

export function* evaluateCallExpression(
  name: any,
  params: any,
  body: any,
  args: any,
  context: any
) {
  let result
  const global = getGlobalFrame(context)
  if (global && global[name]) {
    const kind = global[name].kind
    const frame = getCurrentFrame(context)
    for (const param of params) {
      const name = param.name
      const kind = param.kind
      const arg = evaluateCastExpression(args.shift(), kind)
      const value = context.runtime.memory.allocateMemory(arg, kind, false)
      updateFrame(frame, name, kind, value)
    }
    result = yield* evaluate(body, context)
    name !== 'main' && (result = evaluateCastExpression(result, kind))
    if (context.prelude === 'return') {
      context.prelude = null
    }
  } else {
    result = builtinMicrocode[name](args, context)
  }
  return result
}

export function* evaluateSequenceExpression(node: SequenceExpression, context: any) {
  let result
  for (const expression of node.expressions) {
    result = yield* evaluate(expression, context)
    result = result.kind ? getValue(result) : result
  }
  return result
}

export function* evaluateConditionalExpression(
  test: any,
  alternate: any,
  consequent: any,
  context: any
) {
  const result = test
    ? yield* actualValue(consequent, context)
    : yield* actualValue(alternate, context)
  return result
}

export function* evaluateTypedExpression(expression: Expression, context: any) {
  let result
  if (expression.type === 'Identifier') {
    let kind, address
    const value = yield* actualValue(expression, context)
    const name = expression.name
    const frame = lookupFrame(context, name)
    if (frame) {
      const id = frame[name]
      kind = id.kind
      address = id.value
    }
    result = {
      kind: kind,
      address: address,
      value: getValue(value)
    }
  } else if (expression.type === 'MemberExpression') {
    const isAddress = true
    const expr = yield* actualValue(expression.object, context)
    const index = yield* actualValue(expression.property, context)
    const object = yield* evaluateArrayAccessExpression(expr, index, context, isAddress)
    const kind = object.kind
    const address = object.address
    const value = context.runtime.memory.getMemory(address, kind)
    result = {
      kind: kind,
      address: address,
      value: value
    }
  } else {
    result = yield* actualValue(expression, context)
  }
  return result
}

const assignmentMicrocode = {
  '=': (l: any, r: any) => r,
  '+=': (l: any, r: any) => l + r,
  '-=': (l: any, r: any) => l - r,
  '*=': (l: any, r: any) => l * r,
  '/=': (l: any, r: any) => l / r,
  '%=': (l: any, r: any) => l % r
}

export function* evaluateAssignmentExpression(
  operator: AssignmentOperator,
  left: Pattern | MemberExpression,
  right: Expression,
  context: any
) {
  const object = yield* evaluateTypedExpression(left as Expression, context)
  const kind = object.kind
  let address, lhs
  if (object.dest === undefined) {
    address = object.address
    lhs = object.value
  } else {
    address = object.dest
    lhs = context.runtime.memory.getMemory(address, kind)
  }
  let rhs = yield* actualValue(right, context)
  rhs = evaluateCastExpression(rhs, kind)
  const value = assignmentMicrocode[operator](lhs, rhs)
  context.runtime.memory.setMemory(address, value, kind)
  return value
}

const updateMicrocode = {
  '++': (v: any) => ++v,
  '--': (v: any) => --v
}

export function* evaluateUpdateExpression(
  operator: UpdateOperator,
  argument: Expression,
  prefix: boolean,
  context: any
) {
  const object = yield* evaluateTypedExpression(argument, context)
  const kind = object.kind
  let address, before
  if (object.dest === undefined) {
    address = object.address
    before = object.value
  } else {
    address = object.dest
    before = context.runtime.memory.getMemory(address, kind)
  }
  const after = updateMicrocode[operator](before)
  context.runtime.memory.setMemory(address, after, kind)
  return prefix ? after : before
}

export function evaluateCastExpression(value: any, kind: Kind): any {
  // (float) [int *] is considered valid in this implementation
  const valueInt = Number.isInteger(value)
  const valueArr = Array.isArray(value)
  const valid = !kind.pointers || (kind.dimensions?.length && valueArr) || valueInt
  if (!valid) {
    const prim = kind.primitive.toString()
    const ptr = kind.pointers
      ? ' ' + '*'.repeat(kind.pointers)
      : kind.dimensions?.length
      ? ' ' + '*'.repeat(kind.dimensions.length)
      : ''
    const type = prim + ptr
    throw new Error(`incompatible types when casting to type ${type}`)
  }
  let result
  if (kind.dimensions?.length) {
    result = []
    kind = {
      primitive: kind.primitive,
      pointers: kind.pointers
    } as Kind
    for (const val of value) {
      result.push(evaluateCastExpression(val, kind))
    }
  } else if (valueInt) {
    result = kind.primitive === 'float' ? parseFloat(value.toPrecision(6)) : value
  } else {
    result = kind.primitive === 'float' ? value : Math.trunc(value)
  }
  return result
}

export function* evaluateArrayAccessExpression(
  expression: any,
  index: any,
  context: any,
  isAddress?: boolean
) {
  const refKind = expression.kind as Kind
  const kind = {
    primitive: refKind.primitive,
    pointers: refKind.pointers,
    dimensions: refKind.dimensions?.slice(1)
  } as Kind
  const dims = kind.dimensions
  const offset = index * (dims?.length ? dims[0] : 1)
  const address = expression.address + offset
  const result =
    dims?.length || isAddress
      ? {
          kind: kind,
          address: address
        }
      : context.runtime.memory.getMemory(address, kind)
  return result
}
