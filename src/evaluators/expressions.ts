import {
  ArrayExpression,
  AssignmentOperator,
  BigIntLiteral,
  BlockStatement,
  Identifier,
  MemberExpression,
  Pattern,
  SequenceExpression,
  UpdateOperator
} from 'estree'

import { getCurrentFrame, getGlobalFrame, lookupFrame, updateFrame } from '../createContext'
import { actualValue, evaluate } from '../interpreter/interpreter'

export function* evaluateArrayExpression(node: ArrayExpression, context: any) {
  // TODO: handle array access
  return undefined
}

export function evaluateFunctionExpression(params: Array<Pattern>, body: any) {
  params.forEach(p => p as MemberExpression)
  const value = {
    params: params,
    body: body
  }
  return value
}

export function* evaluateCallExpression(name: any, params: any, body: any, args: any, context: any) {
  // TODO: handle type-cast of arguments and return
  const global = getGlobalFrame(context)
  if (global && global[name]) {
    const kind = global[name].kind as BigIntLiteral
    const frame = getCurrentFrame(context)
    for (const p of params) {
      const param = {
        name: (p.object as Identifier).name,
        kind: p.property as BigIntLiteral
      }
      const arg = args.shift()
      updateFrame(frame, param.name, param.kind, arg)
    }

    const result = yield* evaluate(body, context)
    if (context.prelude === 'return') {
      context.prelude = null
    }
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
