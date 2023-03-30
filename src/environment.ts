import { Context, Environment, Frame } from "./types"

export const peekCallback = (context: Context) =>
  context.runtime.callbacks.length ? context.runtime.callbacks[0] : undefined
export const popCallback = (context: Context) => context.runtime.callbacks.shift()
export const pushCallback = (context: Context, callback: Environment) => context.runtime.callbacks.unshift(callback)

export const peekEnvironment = (context: Context) => context.runtime.environments[0]
export const popEnvironment = (context: Context, id?: string) => {
  if (!id || context.runtime.environments[0].id === id) {
    context.runtime.environments.shift()
  }
}
export const pushEnvironment = (context: Context, environment: Environment) => {
  context.runtime.environments.unshift(environment)
  context.runtime.environmentTree.insert(environment)
}

export const createGlobalEnvironment = (): Environment => ({
  tail: null,
  name: 'global',
  head: {},
  id: '-1'
})

export const extendEnvironment = (
  context: Context,
  name: string | null,
  enclosing?: Environment
): Environment => ({
  tail: enclosing ? enclosing : context.runtime.environments[0],
  name: name ? name : 'default',
  head: {},
  id: Math.random().toString()
})

export const getCurrentEnvironment = (context: Context): Environment => {
  return context.runtime.environments[0]
}

export const getGlobalEnvironment = (context: Context): Environment => {
  const environments = context.runtime.environments
  const global = environments.find(env => env.name === 'global')
  return global
    ? global
    : {
        tail: null,
        name: 'invalid',
        head: {},
        id: '-1'
      }
}

export const getCurrentFrame = (context: Context): Frame => {
  const env = context.runtime.environments[0]
  return env?.head
}

export const getGlobalFrame = (context: Context): Frame => {
  const environments = context.runtime.environments
  const global = environments.find(env => env.name === 'global')
  return global ? global.head : {}
}

export const lookupFrame = (context: Context, name: string) => {
  let frame
  for (const env of context.runtime.environments) {
    if (context.runtime.callbacks.length && context.runtime.callbacks[0].id === env.id) {
      const global = getGlobalEnvironment(context)
      frame = global.head[name] ? global.head : undefined
      break
    } else if (env.head[name]) {
      frame = env.head
      break
    }
  }
  return frame
}

export const updateFrame = (frame: Frame, name: any, kind: any, value?: any) => {
  frame[name] = {
    kind: kind,
    value: value
  }
}
