import { actualValue } from '../interpreter/interpreter'

export function* evaluateConditionalExpression(
  test: any,
  alternate: any,
  consequent: any,
  context: any
) {
  return test ? yield* actualValue(consequent, context) : yield* actualValue(alternate, context)
}
