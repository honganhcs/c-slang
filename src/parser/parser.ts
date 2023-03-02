/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { CLexer } from '../lang/CLexer'
import {
  AdditiveExpressionContext,
  CastExpressionContext,
  CParser,
  ExpressionContext,
  MultiplicativeExpressionContext,
  ProgramContext
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { stripIndent } from '../utils/formatters'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts estree node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation, public message: string) {}

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ParserRuleContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}
class AdditiveExpressionGenerator implements CVisitor<es.Expression> {
  visitCastExpression(ctx: CastExpressionContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): es.Expression {
    if (!ctx.multiplicativeExpression()) {
      return this.visit(ctx.castExpression())
    } else {
      const op = ctx.Star() ? '*' : ctx.Mod() ? '%' : '/'
      return {
        type: 'BinaryExpression',
        operator: op,
        left: this.visit(ctx.multiplicativeExpression()!),
        right: this.visit(ctx.castExpression()),
        loc: contextToLocation(ctx)
      }
    }
  }
  visitAdditiveExpression(ctx: AdditiveExpressionContext): es.Expression {
    if (!ctx.additiveExpression()) {
      return this.visit(ctx.multiplicativeExpression())
    } else {
      const op = ctx.Plus() ? '+' : '-'
      return {
        type: 'BinaryExpression',
        operator: op,
        left: this.visit(ctx.additiveExpression()!),
        right: this.visit(ctx.multiplicativeExpression()),
        loc: contextToLocation(ctx)
      }
    }
  }

  visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined

  visitProgram?: ((ctx: ProgramContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Expression {
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Expression {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

function convertAdditiveExpression(expression: AdditiveExpressionContext): es.Expression {
  const generator = new AdditiveExpressionGenerator()
  return expression.accept(generator)
}

function convertSource(program: ProgramContext): es.Program {
  const addExp = program
    .blockItemList()
    .blockItem()!
    .statement()!
    .expressionStatement()!
    .expression()!
    .assignmentExpression()!
    .conditionalExpression()!
    .logicalOrExpression()!
    .logicalAndExpression()
    .equalityExpression()
    .relationalExpression()
    .additiveExpression()
  return {
    type: 'Program',
    sourceType: 'script',
    body: [
      {
        type: 'ExpressionStatement',
        expression: convertAdditiveExpression(addExp)
      }
    ]
  }
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new CLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.program()
      program = convertSource(tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
