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
import { Kind } from '../types'

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

export function* evaluateCallExpression(
  name: any,
  params: any,
  body: any,
  args: any,
  context: any
) {
  const global = getGlobalFrame(context)
  if (global && global[name]) {
    const kind = global[name].kind
    const frame = getCurrentFrame(context)
    for (const param of params) {
      const name = param.name
      const kind = param.kind
      const arg = evaluateCastExpression(args.shift(), kind)
      const address = context.runtime.memory.allocateMemory(arg, kind, false)
      updateFrame(frame, name, kind, address)
    }
    let result = yield* evaluate(body, context)
    name !== 'main' && (result = evaluateCastExpression(result, kind))
    if (context.prelude === 'return') {
      context.prelude = null
    }
    return result
  }
}

export function* evaluateSequenceExpression(node: SequenceExpression, context: any) {
  let result
  for (const expression of node.expressions) {
    result = yield* evaluate(expression, context)
    result = result.address || result
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
  left: any,
  right: any,
  context: any
) {
  // TODO: handle non-identifier
  const name = left.name
  const lhs = yield* actualValue(left, context)
  let rhs = yield* actualValue(right, context)
  const frame = lookupFrame(context, name)
  if (frame) {
    const id = frame[name]
    const kind = id.kind
    rhs = evaluateCastExpression(rhs, kind)
    const value = assignmentMicrocode[operator](lhs, rhs)
    const address = frame[name].value
    context.runtime.memory.setMemory(address, value, kind)
    return value
  }
}

const updateMicrocode = {
  '++': (v: any) => ++v,
  '--': (v: any) => --v
}

export function* evaluateUpdateExpression(
  operator: UpdateOperator,
  argument: any,
  prefix: any,
  context: any
) {
  // TODO: handle non-identifier
  const name = argument.name
  const before = yield* actualValue(argument, context)
  const after = updateMicrocode[operator](before)
  const frame = lookupFrame(context, name)
  if (frame) {
    const address = frame[name].value
    const kind = frame[name].kind
    context.runtime.heap.setMemory(address, after, kind)
    return prefix ? after : before
  }
}

export function evaluateCastExpression(value: any, kind: Kind): any {
  // (float) [int *] is considered valid in this implementation
  const valueInt = Number.isInteger(value)
  const valid = !kind.pointers || kind.dimensions || valueInt
  if (!valid) {
    const prim = kind.primitive.toString()
    const ptr = kind.pointers ? ' ' + '*'.repeat(kind.pointers) : ''
    const type = prim + ptr
    throw new Error(`incompatible types when casting to type ${type}`)
  }
  let result
  if (kind.dimensions) {
    result = []
    kind = {
      primitive: kind.primitive,
      pointers: kind.pointers
    } as Kind
    for (const val in value) {
      result.push(evaluateCastExpression(val, kind))
    }
  } else if (valueInt) {
    result = kind.primitive === 'float'
      ? parseFloat(value.toPrecision(6))
      : value
  } else {
    result = kind.primitive === 'float'
      ? value
      : Math.trunc(value)
  }
  return result
}

export function* evaluateArrayAccessExpression(expression: any, index: any, context: any) {
  // TODO: handle actual number of elements < dims[0]
  const kind = expression.kind as Kind
  kind.dimensions?.shift()
  const dims = kind.dimensions
  const offset = index * (dims?.length ? dims[0] : 1)
  const address = expression.address + offset
  const result = dims?.length
    ? {
        kind: kind,
        address: address
      }
    : context.runtime.memory.getMemory(address, kind)
  return result
}
