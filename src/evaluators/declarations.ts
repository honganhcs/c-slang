import {
  ArrayExpression,
  BigIntLiteral,
  Expression,
  FunctionDeclaration,
  FunctionExpression,
  Identifier,
  Literal,
  MemberExpression,
  VariableDeclaration,
  VariableDeclarator
} from 'estree'

import { getCurrentEnvironment, getCurrentFrame, getGlobalFrame, updateFrame } from '../environment'
import { actualValue } from '../interpreter/interpreter'
import { Kind, toKind } from '../types'
import { actual } from '../utils/astMaps'
import { validateDeclarator, validateFunction } from '../validator/validator'
import { evaluateCastExpression } from './expressions'

export function* evaluateVariableDeclaration(node: VariableDeclaration, context: any) {
  const kind = actual['kind'](node.kind)
  let result
  for (const declarator of node.declarations) {
    result = yield* evaluateVariableDeclarator(declarator, kind, context)
  }
  return result
}

const declaratorMicrocode = {
  Identifier: function* (o: any, k: any, p: any) {
    const object = o
    const kind = {
      primitive: k,
      pointers: p
    } as Kind
    return [object, kind]
  },
  ArrayExpression: function* (o: any, k: any, p: any, c: any) {
    const elements = (o as ArrayExpression).elements
    const object = elements[0]
    const dims = elements.slice(1)
    const dimensions = []
    for (const dim of dims) {
      const dimension = dim as unknown as Expression
      dimensions.push(yield* actualValue(dimension, c))
    }
    const kind = {
      primitive: k,
      pointers: p,
      dimensions: dimensions
    } as Kind
    return [object, kind]
  },
  FunctionExpression: function* (o: any, k: any, p: any) {
    const object = (o as FunctionExpression).id
    const kind = {
      primitive: k,
      pointers: p
    } as Kind
    return [object, kind]
  }
}

function* evaluateVariableDeclarator(node: VariableDeclarator, type: any, context: any) {
  const id = node.id as MemberExpression
  const object = id.object
  const pointer = (id.property as Literal).value
  const props = yield* declaratorMicrocode[object.type](object, type, pointer, context)
  const name = (props[0] as Identifier).name
  const kind = props[1]
  const init = node.init
  let value = init ? yield* actualValue(init as Expression, context) : undefined
  value && (value = evaluateCastExpression(value, kind))
  const frame = getCurrentFrame(context)
  validateDeclarator(frame, name, kind, value, object.type)
  // TODO add check for malloc
  // TODO check for function definition
  const isHeap = getCurrentEnvironment(context).name === 'global'
  const address = context.runtime.memory.allocateMemory(value, kind, isHeap)
  updateFrame(frame, name, kind, address)
  return value
}

export function evaluateFunctionDeclaration(node: FunctionDeclaration, context: any) {
  const id = node.id as Identifier
  const name = id.name
  const props = node.params
  const ret = (props[0] as MemberExpression).property
  const kind = toKind(ret as BigIntLiteral)
  const params = []
  for (const p of props.slice(1)) {
    const prop = p as MemberExpression
    const name = (prop.object as Identifier).name
    const kind = toKind(prop.property as BigIntLiteral)
    params.push({
      name: name,
      kind: kind
    })
  }
  const body = node.body
  const value = {
    params: params,
    body: body
  }
  const frame = getGlobalFrame(context)
  validateFunction(frame, name, kind, value)
  updateFrame(frame, name, kind, value)
  return value
}
