// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { PrimaryExpressionContext } from './CParser'
import { PostfixExpressionContext } from './CParser'
import { ArgumentExpressionListContext } from './CParser'
import { UnaryExpressionContext } from './CParser'
import { UnaryOperatorContext } from './CParser'
import { CastExpressionContext } from './CParser'
import { MultiplicativeExpressionContext } from './CParser'
import { AdditiveExpressionContext } from './CParser'
import { RelationalExpressionContext } from './CParser'
import { EqualityExpressionContext } from './CParser'
import { LogicalAndExpressionContext } from './CParser'
import { LogicalOrExpressionContext } from './CParser'
import { ConditionalExpressionContext } from './CParser'
import { AssignmentExpressionContext } from './CParser'
import { AssignmentOperatorContext } from './CParser'
import { ExpressionContext } from './CParser'
import { ConstantExpressionContext } from './CParser'
import { DeclarationContext } from './CParser'
import { InitDeclaratorListContext } from './CParser'
import { InitDeclaratorContext } from './CParser'
import { TypeSpecifierContext } from './CParser'
import { DeclaratorContext } from './CParser'
import { DirectDeclaratorContext } from './CParser'
import { PointerContext } from './CParser'
import { ParameterTypeListContext } from './CParser'
import { ParameterListContext } from './CParser'
import { ParameterDeclarationContext } from './CParser'
import { IdentifierListContext } from './CParser'
import { TypeNameContext } from './CParser'
import { AbstractDeclaratorContext } from './CParser'
import { DirectAbstractDeclaratorContext } from './CParser'
import { InitializerContext } from './CParser'
import { InitializerListContext } from './CParser'
import { StatementContext } from './CParser'
import { CompoundStatementContext } from './CParser'
import { BlockItemListContext } from './CParser'
import { BlockItemContext } from './CParser'
import { ExpressionStatementContext } from './CParser'
import { SelectionStatementContext } from './CParser'
import { IterationStatementContext } from './CParser'
import { ForConditionContext } from './CParser'
import { ForDeclarationContext } from './CParser'
import { ForExpressionContext } from './CParser'
import { JumpStatementContext } from './CParser'
import { FunctionDefinitionContext } from './CParser'
import { DeclarationListContext } from './CParser'
import { ProgramItemContext } from './CParser'
import { ProgramContext } from './CParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CParser`.
 */
export interface CListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `CParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.postfixExpression`.
   * @param ctx the parse tree
   */
  enterPostfixExpression?: (ctx: PostfixExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.postfixExpression`.
   * @param ctx the parse tree
   */
  exitPostfixExpression?: (ctx: PostfixExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.argumentExpressionList`.
   * @param ctx the parse tree
   */
  enterArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void
  /**
   * Exit a parse tree produced by `CParser.argumentExpressionList`.
   * @param ctx the parse tree
   */
  exitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void

  /**
   * Enter a parse tree produced by `CParser.unaryExpression`.
   * @param ctx the parse tree
   */
  enterUnaryExpression?: (ctx: UnaryExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.unaryExpression`.
   * @param ctx the parse tree
   */
  exitUnaryExpression?: (ctx: UnaryExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.unaryOperator`.
   * @param ctx the parse tree
   */
  enterUnaryOperator?: (ctx: UnaryOperatorContext) => void
  /**
   * Exit a parse tree produced by `CParser.unaryOperator`.
   * @param ctx the parse tree
   */
  exitUnaryOperator?: (ctx: UnaryOperatorContext) => void

  /**
   * Enter a parse tree produced by `CParser.castExpression`.
   * @param ctx the parse tree
   */
  enterCastExpression?: (ctx: CastExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.castExpression`.
   * @param ctx the parse tree
   */
  exitCastExpression?: (ctx: CastExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.additiveExpression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.additiveExpression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.relationalExpression`.
   * @param ctx the parse tree
   */
  enterRelationalExpression?: (ctx: RelationalExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.relationalExpression`.
   * @param ctx the parse tree
   */
  exitRelationalExpression?: (ctx: RelationalExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.equalityExpression`.
   * @param ctx the parse tree
   */
  enterEqualityExpression?: (ctx: EqualityExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.equalityExpression`.
   * @param ctx the parse tree
   */
  exitEqualityExpression?: (ctx: EqualityExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.logicalAndExpression`.
   * @param ctx the parse tree
   */
  enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.logicalAndExpression`.
   * @param ctx the parse tree
   */
  exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.logicalOrExpression`.
   * @param ctx the parse tree
   */
  enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.logicalOrExpression`.
   * @param ctx the parse tree
   */
  exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.assignmentOperator`.
   * @param ctx the parse tree
   */
  enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void
  /**
   * Exit a parse tree produced by `CParser.assignmentOperator`.
   * @param ctx the parse tree
   */
  exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void

  /**
   * Enter a parse tree produced by `CParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.constantExpression`.
   * @param ctx the parse tree
   */
  enterConstantExpression?: (ctx: ConstantExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.constantExpression`.
   * @param ctx the parse tree
   */
  exitConstantExpression?: (ctx: ConstantExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Exit a parse tree produced by `CParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void

  /**
   * Enter a parse tree produced by `CParser.initDeclaratorList`.
   * @param ctx the parse tree
   */
  enterInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void
  /**
   * Exit a parse tree produced by `CParser.initDeclaratorList`.
   * @param ctx the parse tree
   */
  exitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void

  /**
   * Enter a parse tree produced by `CParser.initDeclarator`.
   * @param ctx the parse tree
   */
  enterInitDeclarator?: (ctx: InitDeclaratorContext) => void
  /**
   * Exit a parse tree produced by `CParser.initDeclarator`.
   * @param ctx the parse tree
   */
  exitInitDeclarator?: (ctx: InitDeclaratorContext) => void

  /**
   * Enter a parse tree produced by `CParser.typeSpecifier`.
   * @param ctx the parse tree
   */
  enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void
  /**
   * Exit a parse tree produced by `CParser.typeSpecifier`.
   * @param ctx the parse tree
   */
  exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void

  /**
   * Enter a parse tree produced by `CParser.declarator`.
   * @param ctx the parse tree
   */
  enterDeclarator?: (ctx: DeclaratorContext) => void
  /**
   * Exit a parse tree produced by `CParser.declarator`.
   * @param ctx the parse tree
   */
  exitDeclarator?: (ctx: DeclaratorContext) => void

  /**
   * Enter a parse tree produced by `CParser.directDeclarator`.
   * @param ctx the parse tree
   */
  enterDirectDeclarator?: (ctx: DirectDeclaratorContext) => void
  /**
   * Exit a parse tree produced by `CParser.directDeclarator`.
   * @param ctx the parse tree
   */
  exitDirectDeclarator?: (ctx: DirectDeclaratorContext) => void

  /**
   * Enter a parse tree produced by `CParser.pointer`.
   * @param ctx the parse tree
   */
  enterPointer?: (ctx: PointerContext) => void
  /**
   * Exit a parse tree produced by `CParser.pointer`.
   * @param ctx the parse tree
   */
  exitPointer?: (ctx: PointerContext) => void

  /**
   * Enter a parse tree produced by `CParser.parameterTypeList`.
   * @param ctx the parse tree
   */
  enterParameterTypeList?: (ctx: ParameterTypeListContext) => void
  /**
   * Exit a parse tree produced by `CParser.parameterTypeList`.
   * @param ctx the parse tree
   */
  exitParameterTypeList?: (ctx: ParameterTypeListContext) => void

  /**
   * Enter a parse tree produced by `CParser.parameterList`.
   * @param ctx the parse tree
   */
  enterParameterList?: (ctx: ParameterListContext) => void
  /**
   * Exit a parse tree produced by `CParser.parameterList`.
   * @param ctx the parse tree
   */
  exitParameterList?: (ctx: ParameterListContext) => void

  /**
   * Enter a parse tree produced by `CParser.parameterDeclaration`.
   * @param ctx the parse tree
   */
  enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void
  /**
   * Exit a parse tree produced by `CParser.parameterDeclaration`.
   * @param ctx the parse tree
   */
  exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void

  /**
   * Enter a parse tree produced by `CParser.identifierList`.
   * @param ctx the parse tree
   */
  enterIdentifierList?: (ctx: IdentifierListContext) => void
  /**
   * Exit a parse tree produced by `CParser.identifierList`.
   * @param ctx the parse tree
   */
  exitIdentifierList?: (ctx: IdentifierListContext) => void

  /**
   * Enter a parse tree produced by `CParser.typeName`.
   * @param ctx the parse tree
   */
  enterTypeName?: (ctx: TypeNameContext) => void
  /**
   * Exit a parse tree produced by `CParser.typeName`.
   * @param ctx the parse tree
   */
  exitTypeName?: (ctx: TypeNameContext) => void

  /**
   * Enter a parse tree produced by `CParser.abstractDeclarator`.
   * @param ctx the parse tree
   */
  enterAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => void
  /**
   * Exit a parse tree produced by `CParser.abstractDeclarator`.
   * @param ctx the parse tree
   */
  exitAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => void

  /**
   * Enter a parse tree produced by `CParser.directAbstractDeclarator`.
   * @param ctx the parse tree
   */
  enterDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => void
  /**
   * Exit a parse tree produced by `CParser.directAbstractDeclarator`.
   * @param ctx the parse tree
   */
  exitDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => void

  /**
   * Enter a parse tree produced by `CParser.initializer`.
   * @param ctx the parse tree
   */
  enterInitializer?: (ctx: InitializerContext) => void
  /**
   * Exit a parse tree produced by `CParser.initializer`.
   * @param ctx the parse tree
   */
  exitInitializer?: (ctx: InitializerContext) => void

  /**
   * Enter a parse tree produced by `CParser.initializerList`.
   * @param ctx the parse tree
   */
  enterInitializerList?: (ctx: InitializerListContext) => void
  /**
   * Exit a parse tree produced by `CParser.initializerList`.
   * @param ctx the parse tree
   */
  exitInitializerList?: (ctx: InitializerListContext) => void

  /**
   * Enter a parse tree produced by `CParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.compoundStatement`.
   * @param ctx the parse tree
   */
  enterCompoundStatement?: (ctx: CompoundStatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.compoundStatement`.
   * @param ctx the parse tree
   */
  exitCompoundStatement?: (ctx: CompoundStatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.blockItemList`.
   * @param ctx the parse tree
   */
  enterBlockItemList?: (ctx: BlockItemListContext) => void
  /**
   * Exit a parse tree produced by `CParser.blockItemList`.
   * @param ctx the parse tree
   */
  exitBlockItemList?: (ctx: BlockItemListContext) => void

  /**
   * Enter a parse tree produced by `CParser.blockItem`.
   * @param ctx the parse tree
   */
  enterBlockItem?: (ctx: BlockItemContext) => void
  /**
   * Exit a parse tree produced by `CParser.blockItem`.
   * @param ctx the parse tree
   */
  exitBlockItem?: (ctx: BlockItemContext) => void

  /**
   * Enter a parse tree produced by `CParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.selectionStatement`.
   * @param ctx the parse tree
   */
  enterSelectionStatement?: (ctx: SelectionStatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.selectionStatement`.
   * @param ctx the parse tree
   */
  exitSelectionStatement?: (ctx: SelectionStatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.iterationStatement`.
   * @param ctx the parse tree
   */
  enterIterationStatement?: (ctx: IterationStatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.iterationStatement`.
   * @param ctx the parse tree
   */
  exitIterationStatement?: (ctx: IterationStatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.forCondition`.
   * @param ctx the parse tree
   */
  enterForCondition?: (ctx: ForConditionContext) => void
  /**
   * Exit a parse tree produced by `CParser.forCondition`.
   * @param ctx the parse tree
   */
  exitForCondition?: (ctx: ForConditionContext) => void

  /**
   * Enter a parse tree produced by `CParser.forDeclaration`.
   * @param ctx the parse tree
   */
  enterForDeclaration?: (ctx: ForDeclarationContext) => void
  /**
   * Exit a parse tree produced by `CParser.forDeclaration`.
   * @param ctx the parse tree
   */
  exitForDeclaration?: (ctx: ForDeclarationContext) => void

  /**
   * Enter a parse tree produced by `CParser.forExpression`.
   * @param ctx the parse tree
   */
  enterForExpression?: (ctx: ForExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.forExpression`.
   * @param ctx the parse tree
   */
  exitForExpression?: (ctx: ForExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.jumpStatement`.
   * @param ctx the parse tree
   */
  enterJumpStatement?: (ctx: JumpStatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.jumpStatement`.
   * @param ctx the parse tree
   */
  exitJumpStatement?: (ctx: JumpStatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.functionDefinition`.
   * @param ctx the parse tree
   */
  enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void
  /**
   * Exit a parse tree produced by `CParser.functionDefinition`.
   * @param ctx the parse tree
   */
  exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void

  /**
   * Enter a parse tree produced by `CParser.declarationList`.
   * @param ctx the parse tree
   */
  enterDeclarationList?: (ctx: DeclarationListContext) => void
  /**
   * Exit a parse tree produced by `CParser.declarationList`.
   * @param ctx the parse tree
   */
  exitDeclarationList?: (ctx: DeclarationListContext) => void

  /**
   * Enter a parse tree produced by `CParser.programItem`.
   * @param ctx the parse tree
   */
  enterProgramItem?: (ctx: ProgramItemContext) => void
  /**
   * Exit a parse tree produced by `CParser.programItem`.
   * @param ctx the parse tree
   */
  exitProgramItem?: (ctx: ProgramItemContext) => void

  /**
   * Enter a parse tree produced by `CParser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void
  /**
   * Exit a parse tree produced by `CParser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void
}
