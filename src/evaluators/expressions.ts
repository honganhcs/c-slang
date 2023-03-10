import { AssignmentOperator, SequenceExpression } from 'estree'

import { getCurrentFrame, updateFrame } from '../createContext'
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
  console.log('in eval assingmnet')
  console.log(name)
  console.log(left)
  console.log(right)
  const frame = getCurrentFrame(context)
  const id = frame[name]
  const value = assignmentMicrocode[operator](left, right)
  console.log(value)
  updateFrame(frame, name, id.kind, value)
  console.log(context)
  return value
}
