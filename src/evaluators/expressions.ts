import {
  AssignmentOperator,
  BlockStatement,
  Identifier,
  MemberExpression,
  SequenceExpression,
  UpdateOperator
} from 'estree'

import { getCurrentFrame, lookupFrame, updateFrame } from '../createContext'
import { actualValue, evaluate } from '../interpreter/interpreter'

export function* evaluateCallExpression(callee: Identifier, args: any, context: any) {
  // TODO: handle non-identifier
  const func = callee.name
  const value = yield* actualValue(callee, context)
  const global = lookupFrame(context, func)
  if (global) {
    const kind = global[func].kind
    const params = value.params
    const body = value.body as BlockStatement
    const frame = getCurrentFrame(context)
    for (const i in params) {
      const param = params[i] as MemberExpression
      const arg = args[i]
      updateFrame(frame, param.object, param.property, arg)
    }

    // TODO: type-cast result to kind
    const result = yield* evaluate(body, context)
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
