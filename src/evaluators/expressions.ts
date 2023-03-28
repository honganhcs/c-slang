import {
  AssignmentOperator,
  BigIntLiteral,
  BlockStatement,
  FunctionExpression,
  Identifier,
  MemberExpression,
  SequenceExpression,
  UpdateOperator
} from 'estree'

import { getCurrentFrame, getGlobalFrame, lookupFrame, updateFrame } from '../createContext'
import { actualValue, evaluate } from '../interpreter/interpreter'
import { validateFunction } from '../validator/validator'

export function evaluateFunctionExpression(node: FunctionExpression, context: any) {
  const id = node.id as Identifier
  const name = id.name
  const props = node.params
  const kind = (props[0] as MemberExpression).property
  const params = props.slice(1)
  const value = {
    params: params,
    body: null
  }
  const frame = getGlobalFrame(context)
  validateFunction(frame, name, kind, value)
  updateFrame(frame, name, kind, value)
  return undefined
}

export function* evaluateCallExpression(callee: Identifier, args: any, context: any) {
  // TODO: handle type-cast of arguments and return
  const func = callee.name
  const value = yield* actualValue(callee, context)
  const global = lookupFrame(context, func)
  if (global) {
    const kind = global[func].kind as BigIntLiteral
    const params = value.params
    const body = value.body as BlockStatement
    const frame = getCurrentFrame(context)
    for (const p of params) {
      const param = {
        name: (p.object as Identifier).name,
        kind: p.property as BigIntLiteral
      }
      const arg = args.shift()
      updateFrame(frame, param.name, param.kind, arg)
    }

    const result = yield* evaluate(body, context)
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
  }
  return result
}

export function* evaluateConditionalExpression(
  test: any,
  alternate: any,
  consequent: any,
  context: any
) {
  return test ? yield* actualValue(consequent, context) : yield* actualValue(alternate, context)
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
  const rhs = yield* actualValue(right, context)
  const frame = lookupFrame(context, name)
  if (frame) {
    const id = frame[name]
    const value = assignmentMicrocode[operator](lhs, rhs)
    updateFrame(frame, name, id.kind, value)
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
    const id = frame[name]
    updateFrame(frame, name, id.kind, after)
    return prefix ? after : before
  }
}
