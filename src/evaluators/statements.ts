import { BlockStatement, DoWhileStatement, ForStatement, Program, WhileStatement } from 'estree'

import { actualValue, evaluate } from '../interpreter/interpreter'

export function* evaluateBlockSatement(node: BlockStatement | Program, context: any) {
  let result
  for (const statement of node.body) {
    result = yield* evaluate(statement, context)
    if (context.prelude === 'continue' || context.prelude === 'break') {
      context.prelude = null
      return result
    }
  }
  return result
}

export function* evaluateIfStatement(test: any, consequent: any, alternate: any, context: any) {
  return test ? yield* actualValue(consequent, context) : yield* actualValue(alternate, context)
}

export function* evaluateForStatement(node: ForStatement, context: any) {
  let result
  for (
    node.init && (result = yield* actualValue(node.init, context));
    node.test && (result = yield* actualValue(node.test, context));
    node.update && (result = yield* actualValue(node.update, context))
  ) {
    result = yield* evaluate(node.body, context)

    if (context.prelude === 'continue') {
      context.prelude = null
      continue
    } else if (context.prelude === 'break') {
      context.prelude = null
      break
    }
  }
  return result
}

export function* evaluateWhileStatement(node: WhileStatement, context: any) {
  let result
  while ((result = yield* actualValue(node.test, context))) {
    result = yield* evaluate(node.body, context)

    if (context.prelude === 'continue') {
      context.prelude = null
      continue
    } else if (context.prelude === 'break') {
      context.prelude = null
      break
    }
  }
  return result
}

export function* evaluateDoWhileStatement(node: DoWhileStatement, context: any) {
  let result
  do {
    result = yield* evaluate(node.body, context)

    if (context.prelude === 'continue') {
      context.prelude = null
      continue
    } else if (context.prelude === 'break') {
      context.prelude = null
      break
    }
  } while ((result = yield* actualValue(node.test, context)))
  return result
}
