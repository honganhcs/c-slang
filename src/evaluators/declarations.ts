import {
  ArrayExpression,
  Expression,
  FunctionDeclaration,
  FunctionExpression,
  Identifier,
  Literal,
  MemberExpression,
  VariableDeclaration,
  VariableDeclarator
} from 'estree'

import { getCurrentFrame, getGlobalFrame, updateFrame } from '../environment'
import { actualValue } from '../interpreter/interpreter'
import { Kind } from '../types'
import { actual } from '../utils/astMaps'
import { validateDeclarator, validateFunction } from '../validator/validator'

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
      dimensions.unshift(yield* actualValue(dimension, c))
    }
    const kind = {
      primitive: k,
      pointers: p + dimensions.length,
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
  const value = init ? yield* actualValue(init as Expression, context) : undefined
  const frame = getCurrentFrame(context)
  validateDeclarator(frame, name, kind, value, object.type)
  const address = context.runtime.heap.allocateMemory(value, kind)
  updateFrame(frame, name, kind, address)
  return value
}

export function evaluateFunctionDeclaration(node: FunctionDeclaration, context: any) {
  const id = node.id as Identifier
  const name = id.name
  const props = node.params
  const kind = (props[0] as MemberExpression).property
  const params = props.slice(1)
  params.forEach(p => p as MemberExpression)
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
