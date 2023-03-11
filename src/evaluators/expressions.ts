import { AssignmentOperator, Identifier, SequenceExpression, UpdateOperator } from 'estree'

import { lookupFrame, updateFrame } from '../createContext'
import { actualValue, evaluate } from '../interpreter/interpreter'

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
