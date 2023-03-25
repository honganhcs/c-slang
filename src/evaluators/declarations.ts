import {
  Expression,
  FunctionDeclaration,
  Identifier,
  VariableDeclaration,
  VariableDeclarator
} from 'estree'

import { getCurrentFrame, getGlobalFrame, updateFrame } from '../createContext'
import { actualValue } from '../interpreter/interpreter'
import { actual } from '../utils/astMaps'

export function* evaluateVariableDeclaration(node: VariableDeclaration, context: any) {
  const kind = actual['kind'](node.kind)
  let result
  for (const declarator of node.declarations) {
    result = yield* evaluateVariableDeclarator(declarator, kind, context)
  }
  return result
}

function* evaluateVariableDeclarator(node: VariableDeclarator, kind: any, context: any) {
  let init = node.init
  if (init) {
    init = yield* actualValue(init as Expression, context)
  }
  const frame = getCurrentFrame(context)
  const id = node.id as Identifier
  updateFrame(frame, id.name, kind, init)
  return init
}

export function evaluateFunctionDeclaration(node: FunctionDeclaration, context: any) {
  const frame = getGlobalFrame(context)
  const id = node.id as Identifier
  const props = node.params
  const ret = (props[0] as Identifier).name
  const params = props.slice(1)
  updateFrame(frame, id.name, ret, params)
  return undefined
}
