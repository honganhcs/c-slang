import { BlockStatement, Program } from 'estree'
import { actualValue, evaluate } from '../interpreter/interpreter'

export function* evaluateBlockSatement(node: BlockStatement | Program, context: any) {
  let result
  for (const statement of node.body) {
    result = yield* evaluate(statement, context)
  }
  return result
}

export function* evaluateIfStatement(test: any, consequent: any, alternate: any, context: any) {
  return test ? yield* actualValue(consequent, context) : yield* actualValue(alternate, context)
}

export function* evaluateWhileStatement(test: any, body: any, context: any) {
  return test ? yield* actualValue(body, context) : test
}

export function* evaluateDoWhileStatement(test: any, body: any, context: any) {
  return evaluateWhileStatement(test, body, context)
}
