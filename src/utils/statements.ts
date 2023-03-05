import { actualValue } from '../interpreter/interpreter'

export function* evaluateIfStatement(test: any, consequent: any, alternate: any, context: any) {
  return test ? yield* actualValue(consequent, context) : yield* actualValue(alternate, context)
}

export function* evaluateWhileStatement(test: any, body: any, context: any) {
  return test ? yield* actualValue(body, context) : test
}
