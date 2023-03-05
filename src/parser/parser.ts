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
  AssignmentExpressionContext,
  CastExpressionContext,
  ConditionalExpressionContext,
  ConstantExpressionContext,
  CParser,
  EqualityExpressionContext,
  ExpressionContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  ProgramContext,
  ProgramItemContext,
  RelationalExpressionContext,
  StatementContext
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
  public constructor(public location: es.SourceLocation, public message: string) { }

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
  public constructor(public location: es.SourceLocation) { }

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
  public constructor(public location: es.SourceLocation) { }

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

class ProgramGenerator implements CVisitor<es.Program> {
  visitProgram(ctx: ProgramContext): es.Program {
    const items = ctx.programItem()
    let programBody: (es.Statement | es.Directive | es.ModuleDeclaration)[] = []

    for (let i = 0; i < items.length; i++) {
      programBody = programBody.concat(this.visitProgramItem(items[i]).body)
    }
    return {
      type: 'Program',
      sourceType: 'script',
      body: programBody
    }
  }

  visitProgramItem(ctx: ProgramItemContext): es.Program {
    // TODO: add support for ModuleDeclaration
    const generator = new StatementGenerator()
    const stmt: es.Statement = ctx.statement()!.accept(generator)
    return {
      type: 'Program',
      sourceType: 'script',
      body: [stmt]
    }
  }

  visit(tree: ParseTree): es.Program {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Program {
    const programBody: (es.Statement | es.Directive | es.ModuleDeclaration)[] = []
    for (let i = 0; i < node.childCount; i++) {
      programBody.concat(node.getChild(i).accept(this).body)
    }
    return {
      type: 'Program',
      sourceType: 'script',
      body: programBody
    }
  }

  visitTerminal(node: TerminalNode): es.Program {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Program {
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

class StatementGenerator implements CVisitor<es.Statement> {
  visitStatement(ctx: StatementContext): es.Statement {
    // TODO: add support for various types of statements
    const generator = new ExpressionGenerator()
    const expr: es.Expression = ctx.expressionStatement()!.expression()!.accept(generator)
    return {
      type: 'ExpressionStatement',
      expression: expr
    }
  }

  visit(tree: ParseTree): es.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement {
    const blockBody: es.Statement[] = []
    for (let i = 0; i < node.childCount; i++) {
      blockBody.push(node.getChild(i).accept(this))
    }
    return {
      type: 'BlockStatement',
      body: blockBody
    }
  }

  visitTerminal(node: TerminalNode): es.Statement {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Statement {
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

class ExpressionGenerator implements CVisitor<es.Expression> {
  visitExpression(ctx: ExpressionContext): es.Expression {
    // TODO: add support for chained expressions
    return this.visitAssignmentExpression(ctx.assignmentExpression())
  }

  visitAssignmentExpression(ctx: AssignmentExpressionContext): es.Expression {
    // TODO: add support for assignment expression
    return this.visitConditionalExpression(ctx.conditionalExpression()!)
  }

  visitConstantExpression(ctx: ConstantExpressionContext): es.Expression {
    return this.visitConditionalExpression(ctx.conditionalExpression())
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): es.Expression {
    if (ctx.conditionalExpression()) {
      return {
        type: 'ConditionalExpression',
        test: this.visitLogicalOrExpression(ctx.logicalOrExpression()),
        alternate: this.visitConditionalExpression(ctx.conditionalExpression()!),
        consequent: this.visitExpression(ctx.expression()!)
      }
    } else {
      return this.visitLogicalOrExpression(ctx.logicalOrExpression())
    }
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): es.Expression {
    if (ctx.logicalOrExpression()) {
      return {
        type: 'LogicalExpression',
        operator: '||',
        left: this.visitLogicalOrExpression(ctx.logicalOrExpression()!),
        right: this.visitLogicalAndExpression(ctx.logicalAndExpression()!)
      }
    } else {
      return this.visitLogicalAndExpression(ctx.logicalAndExpression())
    }
  }

  visitLogicalAndExpression(ctx: LogicalAndExpressionContext): es.Expression {
    if (ctx.logicalAndExpression()) {
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: this.visitLogicalAndExpression(ctx.logicalAndExpression()!),
        right: this.visitEqualityExpression(ctx.equalityExpression())
      }
    } else {
      return this.visitEqualityExpression(ctx.equalityExpression())
    }
  }

  visitEqualityExpression(ctx: EqualityExpressionContext): es.Expression {
    if (ctx.equalityExpression()) {
      const op = ctx.Equal() ? '==' : '!='
      return {
        type: 'BinaryExpression',
        operator: op,
        left: this.visitEqualityExpression(ctx.equalityExpression()!),
        right: this.visitRelationalExpression(ctx.relationalExpression())
      }
    } else {
      return this.visitRelationalExpression(ctx.relationalExpression())
    }
  }

  visitRelationalExpression(ctx: RelationalExpressionContext): es.Expression {
    if (ctx.relationalExpression()) {
      const op = ctx.Less() ? '<' : ctx.Greater() ? '>' : ctx.LessEqual() ? '<=' : '>='
      return {
        type: 'BinaryExpression',
        operator: op,
        left: this.visitRelationalExpression(ctx.relationalExpression()!),
        right: this.visitAdditiveExpression(ctx.additiveExpression())
      }
    } else {
      return this.visitAdditiveExpression(ctx.additiveExpression())
    }
  }

  visitAdditiveExpression(ctx: AdditiveExpressionContext): es.Expression {
    if (ctx.additiveExpression()) {
      const op = ctx.Plus() ? '+' : '-'
      return {
        type: 'BinaryExpression',
        operator: op,
        left: this.visit(ctx.additiveExpression()!),
        right: this.visit(ctx.multiplicativeExpression()),
        loc: contextToLocation(ctx)
      }
    } else {
      return this.visit(ctx.multiplicativeExpression())
    }
  }

  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): es.Expression {
    if (ctx.multiplicativeExpression()) {
      const op = ctx.Star() ? '*' : ctx.Mod() ? '%' : '/'
      return {
        type: 'BinaryExpression',
        operator: op,
        left: this.visit(ctx.multiplicativeExpression()!),
        right: this.visit(ctx.castExpression()),
        loc: contextToLocation(ctx)
      }
    } else {
      return this.visit(ctx.castExpression())
    }
  }

  visitCastExpression(ctx: CastExpressionContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

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

function convertSource(program: ProgramContext): es.Program {
  const generator = new ProgramGenerator()
  return program.accept(generator)
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'c') {
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
