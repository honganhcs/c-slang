import { BlockStatement, DoWhileStatement, Program, WhileStatement } from 'estree'

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

export function* evaluateWhileStatement(node: WhileStatement, context: any) {
  while ((test = yield* actualValue(node.test, context))) {
    yield* evaluate(node.body, context)
  }
  return test
}

export function* evaluateDoWhileStatement(node: DoWhileStatement, context: any) {
  do {
    yield* evaluate(node.body, context)
  } while ((test = yield* actualValue(node.test, context)))
  return test
}
