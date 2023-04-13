import { BinaryOperator, LogicalOperator, UnaryOperator } from 'estree'

import { LazyBuiltIn } from '../createContext'
import {
  CallingNonFunctionValue,
  ExceptionError,
  GetInheritedPropertyError,
  InvalidNumberOfArguments
} from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { actualValue } from '../interpreter/interpreter'
import { Thunk } from '../types'
import { locationDummyNode } from '../utils/astCreator'
import * as create from '../utils/astCreator'
import { actual } from '../utils/astMaps'
import { makeWrapper } from '../utils/makeWrapper'
import * as rttc from '../utils/rttc'

export function forceIt(val: Thunk | any): any {
  if (val !== undefined && val !== null && val.isMemoized !== undefined) {
    if (val.isMemoized) {
      return val.memoizedValue
    }

    const evaluatedValue = forceIt(val.f())

    val.isMemoized = true
    val.memoizedValue = evaluatedValue

    return evaluatedValue
  } else {
    return val
  }
}

export function wrapLazyCallee(candidate: any) {
  candidate = forceIt(candidate)
  if (typeof candidate === 'function') {
    const wrapped: any = (...args: any[]) => candidate(...args.map(forceIt))
    makeWrapper(candidate, wrapped)
    wrapped[Symbol.toStringTag] = () => candidate.toString()
    wrapped.toString = () => candidate.toString()
    return wrapped
  } else if (candidate instanceof LazyBuiltIn) {
    if (candidate.evaluateArgs) {
      const wrapped: any = (...args: any[]) => candidate.func(...args.map(forceIt))
      makeWrapper(candidate.func, wrapped)
      wrapped[Symbol.toStringTag] = () => candidate.toString()
      wrapped.toString = () => candidate.toString()
      return wrapped
    } else {
      return candidate
    }
  }
  // doesn't look like a function, not our business to error now
  return candidate
}

export function makeLazyFunction(candidate: any) {
  return new LazyBuiltIn(candidate, false)
}

export function callIfFuncAndRightArgs(
  candidate: any,
  line: number,
  column: number,
  ...args: any[]
) {
  const dummy = create.callExpression(create.locationDummyNode(line, column), args, {
    start: { line, column },
    end: { line, column }
  })

  if (typeof candidate === 'function') {
    const originalCandidate = candidate
    if (candidate.transformedFunction !== undefined) {
      candidate = candidate.transformedFunction
    }
    const expectedLength = candidate.length
    const receivedLength = args.length
    const hasVarArgs = candidate.minArgsNeeded !== undefined
    if (hasVarArgs ? candidate.minArgsNeeded > receivedLength : expectedLength !== receivedLength) {
      throw new InvalidNumberOfArguments(
        dummy,
        hasVarArgs ? candidate.minArgsNeeded : expectedLength,
        receivedLength,
        hasVarArgs
      )
    }
    try {
      const forcedArgs = args.map(forceIt)
      return originalCandidate(...forcedArgs)
    } catch (error) {
      // if we already handled the error, simply pass it on
      if (!(error instanceof RuntimeSourceError || error instanceof ExceptionError)) {
        throw new ExceptionError(error, dummy.loc!)
      } else {
        throw error
      }
    }
  } else if (candidate instanceof LazyBuiltIn) {
    try {
      if (candidate.evaluateArgs) {
        args = args.map(forceIt)
      }
      return candidate.func(...args)
    } catch (error) {
      // if we already handled the error, simply pass it on
      if (!(error instanceof RuntimeSourceError || error instanceof ExceptionError)) {
        throw new ExceptionError(error, dummy.loc!)
      } else {
        throw error
      }
    }
  } else {
    throw new CallingNonFunctionValue(candidate, dummy)
  }
}

export function boolOrErr(candidate: any, line: number, column: number) {
  candidate = forceIt(candidate)
  const error = rttc.checkIfStatement(create.locationDummyNode(line, column), candidate)
  if (error === undefined) {
    return candidate
  } else {
    throw error
  }
}

export function unaryOp(
  operator: UnaryOperator,
  argument: any,
  context: any,
  line: number,
  column: number
) {
  argument = forceIt(argument)
  const error = rttc.checkUnaryExpression(
    create.locationDummyNode(line, column),
    operator,
    argument
  )
  if (error === undefined) {
    return evaluateUnaryExpression(operator, argument, context)
  } else {
    throw error
  }
}

const toNumber = (value: number | boolean): number =>
  typeof value === 'number' ? value : value ? 1 : 0

const unaryMicrocode = {
  '&': (a: any) => (a.kind ? a.address : a),
  '*': (a: any) => ({
    kind: a.kind,
    address: a.address,
    isValue: true
  }),
  '+': (a: any) => +a,
  '-': (a: any) => -a,
  '!': (a: any) => !a
}

export function evaluateUnaryExpression(operator: UnaryOperator, argument: any, context: any) {
  const op = actual['unary'](operator)
  const value =
    op === '+' || op === '-' || op === '-'
      ? argument.kind
        ? argument.kind.dimensions?.length
          ? argument.address
          : context.runtime.memory.getMemory(argument.address, argument.kind)
        : argument
      : argument
  return unaryMicrocode[op](value, context)
}

export function binaryOp(
  operator: BinaryOperator,
  left: any,
  right: any,
  line: number,
  column: number
) {
  left = forceIt(left)
  right = forceIt(right)
  const error = rttc.checkBinaryExpression(
    create.locationDummyNode(line, column),
    operator,
    left,
    right
  )
  if (error === undefined) {
    return evaluateBinaryExpression(operator, left, right)
  } else {
    throw error
  }
}

const binopMircrocode = {
  '+': (l: any, r: any) => l + r,
  '-': (l: any, r: any) => l - r,
  '*': (l: any, r: any) => l * r,
  '/': (l: any, r: any) => l / r,
  '%': (l: any, r: any) => l % r,
  '==': (l: any, r: any) => l === r,
  '!=': (l: any, r: any) => l !== r,
  '<=': (l: any, r: any) => l <= r,
  '<': (l: any, r: any) => l < r,
  '>': (l: any, r: any) => l > r,
  '>=': (l: any, r: any) => l >= r
}

export function evaluateBinaryExpression(operator: BinaryOperator, left: any, right: any) {
  const fLeft = toNumber(left)
  const fRight = toNumber(right)
  const result = binopMircrocode[operator](fLeft, fRight)
  return toNumber(result)
}

const logicalopMicrocode = {
  '||': function* (l: any, r: any, c: any) {
    return l || (yield* actualValue(r, c))
  },
  '&&': function* (l: any, r: any, c: any) {
    return l && (yield* actualValue(r, c))
  }
}

export function* evaluateLogicalExpression(
  operator: LogicalOperator,
  left: any,
  right: any,
  context: any
) {
  const result = yield* logicalopMicrocode[operator](left, right, context)
  return toNumber(result)
}

export const setProp = (obj: any, prop: any, value: any, line: number, column: number) => {
  const dummy = locationDummyNode(line, column)
  const error = rttc.checkMemberAccess(dummy, obj, prop)
  if (error === undefined) {
    return (obj[prop] = value)
  } else {
    throw error
  }
}

export const getProp = (obj: any, prop: any, line: number, column: number) => {
  const dummy = locationDummyNode(line, column)
  const error = rttc.checkMemberAccess(dummy, obj, prop)
  if (error === undefined) {
    if (obj[prop] !== undefined && !obj.hasOwnProperty(prop)) {
      throw new GetInheritedPropertyError(dummy, obj, prop)
    } else {
      return obj[prop]
    }
  } else {
    throw error
  }
}
