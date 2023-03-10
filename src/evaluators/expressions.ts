import { AssignmentOperator } from 'estree'
import { getGlobalFrame, updateFrame } from '../createContext'
import { actualValue } from '../interpreter/interpreter'

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
  '%=': (l: any, r: any) => l % r,
}

export function* evaluateAssignmentExpression(
  operator: AssignmentOperator,
  name: any,
  left: any,
  right: any,
  context: any
) {
  console.log("in eval assingmnet")
  console.log(name)
  console.log(left)
  console.log(right)
  const frame = getGlobalFrame(context)
  const id = frame[name]
  const value = assignmentMicrocode[operator](left, right)
  console.log(value)
  updateFrame(frame, name, id.kind, value)
  console.log(context)
  return value
}
