import { BinaryOperator, LogicalOperator, UnaryOperator } from 'estree'

import { LazyBuiltIn } from '../createContext'
import {
  CallingNonFunctionValue,
  ExceptionError,
  GetInheritedPropertyError,
  InvalidNumberOfArguments
} from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Thunk } from '../types'
import { locationDummyNode } from './astCreator'
import * as create from './astCreator'
import { makeWrapper } from './makeWrapper'
import * as rttc from './rttc'

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

export type UnaryOp = UnaryOperator | '&' | '*'

export type BinaryOp = BinaryOperator

export type LogicalOp = LogicalOperator

const toNumber = (val: Boolean) => (val ? 0 : 1)

const toBoolean = (val: Number) => val !== 0

const unaryop_mircocode = {
  // TODO: handle & and *
  '&': (v: any) => v,
  '*': (v: any) => v,
  '+': (v: any) => +v,
  '-': (v: any) => -v,
  '!': (v: any) => !v
}

export function unaryOp(operator: UnaryOp, argument: any, line: number, column: number) {
  argument = forceIt(argument)
  const error = rttc.checkUnaryExpression(
    create.locationDummyNode(line, column),
    operator,
    argument
  )
  if (error === undefined) {
    return evaluateUnaryExpression(operator, argument)
  } else {
    throw error
  }
}

export function evaluateUnaryExpression(operator: UnaryOp, value: any) {
  return toNumber(unaryop_mircocode[operator](value))
}

const binop_mircrocode = {
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

export function binaryOp(operator: BinaryOp, left: any, right: any, line: number, column: number) {
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

export function evaluateBinaryExpression(operator: BinaryOp, left: any, right: any) {
  return toNumber(binop_mircrocode[operator](left, right))
}

export function evaluateConditionalExpression(test: any, alternate: any, consequent: any) {
  return toNumber(toBoolean(test) ? alternate() : consequent())
}

const logicalop_microcode = {
  '||': (l: any, r: any) => (l() ? true : r()),
  '&&': (l: any, r: any) => l() && r()
}

export function logicalOp(
  operator: LogicalOp,
  left: any,
  right: any,
  line: number,
  column: number
) {
  left = forceIt(left)
  right = forceIt(right)
  const error = rttc.checkLogicalExpression(
    create.locationDummyNode(line, column),
    operator,
    left,
    right
  )
  if (error === undefined) {
    return evaluateLogialExpression(operator, left, right)
  } else {
    throw error
  }
}

export function evaluateLogialExpression(operator: LogicalOp, left: any, right: any) {
  return toNumber(logicalop_microcode[operator](left, right))
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
