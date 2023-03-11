import { AssignmentOperator, SequenceExpression } from 'estree'

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
  name: any,
  left: any,
  right: any,
  context: any
) {
  const frame = lookupFrame(context, name)
  if (frame) {
    const id = frame[name]
    const value = assignmentMicrocode[operator](left, right)
    updateFrame(frame, name, id.kind, value)
    return value
  }
}
