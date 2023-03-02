// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { CListener } from './CListener'
import { CVisitor } from './CVisitor'

export class CParser extends Parser {
  public static readonly T__0 = 1
  public static readonly Break = 2
  public static readonly Char = 3
  public static readonly Const = 4
  public static readonly Continue = 5
  public static readonly Do = 6
  public static readonly Double = 7
  public static readonly Else = 8
  public static readonly Enum = 9
  public static readonly Float = 10
  public static readonly For = 11
  public static readonly If = 12
  public static readonly Int = 13
  public static readonly Long = 14
  public static readonly Return = 15
  public static readonly Short = 16
  public static readonly Void = 17
  public static readonly While = 18
  public static readonly Bool = 19
  public static readonly LeftParen = 20
  public static readonly RightParen = 21
  public static readonly LeftBracket = 22
  public static readonly RightBracket = 23
  public static readonly LeftBrace = 24
  public static readonly RightBrace = 25
  public static readonly Less = 26
  public static readonly LessEqual = 27
  public static readonly Greater = 28
  public static readonly GreaterEqual = 29
  public static readonly Plus = 30
  public static readonly PlusPlus = 31
  public static readonly Minus = 32
  public static readonly MinusMinus = 33
  public static readonly Star = 34
  public static readonly Div = 35
  public static readonly Mod = 36
  public static readonly AndAnd = 37
  public static readonly OrOr = 38
  public static readonly Not = 39
  public static readonly Question = 40
  public static readonly Colon = 41
  public static readonly Semi = 42
  public static readonly Comma = 43
  public static readonly Assign = 44
  public static readonly StarAssign = 45
  public static readonly DivAssign = 46
  public static readonly ModAssign = 47
  public static readonly PlusAssign = 48
  public static readonly MinusAssign = 49
  public static readonly Equal = 50
  public static readonly NotEqual = 51
  public static readonly Identifier = 52
  public static readonly Constant = 53
  public static readonly DigitSequence = 54
  public static readonly StringLiteral = 55
  public static readonly ComplexDefine = 56
  public static readonly IncludeDirective = 57
  public static readonly AsmBlock = 58
  public static readonly LineAfterPreprocessing = 59
  public static readonly LineDirective = 60
  public static readonly PragmaDirective = 61
  public static readonly Whitespace = 62
  public static readonly Newline = 63
  public static readonly BlockComment = 64
  public static readonly LineComment = 65
  public static readonly RULE_primaryExpression = 0
  public static readonly RULE_postfixExpression = 1
  public static readonly RULE_argumentExpressionList = 2
  public static readonly RULE_unaryExpression = 3
  public static readonly RULE_unaryOperator = 4
  public static readonly RULE_castExpression = 5
  public static readonly RULE_multiplicativeExpression = 6
  public static readonly RULE_additiveExpression = 7
  public static readonly RULE_relationalExpression = 8
  public static readonly RULE_equalityExpression = 9
  public static readonly RULE_logicalAndExpression = 10
  public static readonly RULE_logicalOrExpression = 11
  public static readonly RULE_conditionalExpression = 12
  public static readonly RULE_assignmentExpression = 13
  public static readonly RULE_assignmentOperator = 14
  public static readonly RULE_expression = 15
  public static readonly RULE_constantExpression = 16
  public static readonly RULE_declaration = 17
  public static readonly RULE_declarationSpecifiers = 18
  public static readonly RULE_declarationSpecifiers2 = 19
  public static readonly RULE_declarationSpecifier = 20
  public static readonly RULE_initDeclaratorList = 21
  public static readonly RULE_initDeclarator = 22
  public static readonly RULE_typeSpecifier = 23
  public static readonly RULE_specifierQualifierList = 24
  public static readonly RULE_typeQualifier = 25
  public static readonly RULE_declarator = 26
  public static readonly RULE_directDeclarator = 27
  public static readonly RULE_pointer = 28
  public static readonly RULE_typeQualifierList = 29
  public static readonly RULE_parameterTypeList = 30
  public static readonly RULE_parameterList = 31
  public static readonly RULE_parameterDeclaration = 32
  public static readonly RULE_identifierList = 33
  public static readonly RULE_typeName = 34
  public static readonly RULE_abstractDeclarator = 35
  public static readonly RULE_directAbstractDeclarator = 36
  public static readonly RULE_initializer = 37
  public static readonly RULE_initializerList = 38
  public static readonly RULE_statement = 39
  public static readonly RULE_compoundStatement = 40
  public static readonly RULE_blockItemList = 41
  public static readonly RULE_blockItem = 42
  public static readonly RULE_expressionStatement = 43
  public static readonly RULE_selectionStatement = 44
  public static readonly RULE_iterationStatement = 45
  public static readonly RULE_forCondition = 46
  public static readonly RULE_forDeclaration = 47
  public static readonly RULE_forExpression = 48
  public static readonly RULE_jumpStatement = 49
  public static readonly RULE_functionDefinition = 50
  public static readonly RULE_declarationList = 51
  public static readonly RULE_program = 52
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'primaryExpression',
    'postfixExpression',
    'argumentExpressionList',
    'unaryExpression',
    'unaryOperator',
    'castExpression',
    'multiplicativeExpression',
    'additiveExpression',
    'relationalExpression',
    'equalityExpression',
    'logicalAndExpression',
    'logicalOrExpression',
    'conditionalExpression',
    'assignmentExpression',
    'assignmentOperator',
    'expression',
    'constantExpression',
    'declaration',
    'declarationSpecifiers',
    'declarationSpecifiers2',
    'declarationSpecifier',
    'initDeclaratorList',
    'initDeclarator',
    'typeSpecifier',
    'specifierQualifierList',
    'typeQualifier',
    'declarator',
    'directDeclarator',
    'pointer',
    'typeQualifierList',
    'parameterTypeList',
    'parameterList',
    'parameterDeclaration',
    'identifierList',
    'typeName',
    'abstractDeclarator',
    'directAbstractDeclarator',
    'initializer',
    'initializerList',
    'statement',
    'compoundStatement',
    'blockItemList',
    'blockItem',
    'expressionStatement',
    'selectionStatement',
    'iterationStatement',
    'forCondition',
    'forDeclaration',
    'forExpression',
    'jumpStatement',
    'functionDefinition',
    'declarationList',
    'program'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'&'",
    "'break'",
    "'char'",
    "'const'",
    "'continue'",
    "'do'",
    "'double'",
    "'else'",
    "'enum'",
    "'float'",
    "'for'",
    "'if'",
    "'int'",
    "'long'",
    "'return'",
    "'short'",
    "'void'",
    "'while'",
    "'_Bool'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'+'",
    "'++'",
    "'-'",
    "'--'",
    "'*'",
    "'/'",
    "'%'",
    "'&&'",
    "'||'",
    "'!'",
    "'?'",
    "':'",
    "';'",
    "','",
    "'='",
    "'*='",
    "'/='",
    "'%='",
    "'+='",
    "'-='",
    "'=='",
    "'!='"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    'Break',
    'Char',
    'Const',
    'Continue',
    'Do',
    'Double',
    'Else',
    'Enum',
    'Float',
    'For',
    'If',
    'Int',
    'Long',
    'Return',
    'Short',
    'Void',
    'While',
    'Bool',
    'LeftParen',
    'RightParen',
    'LeftBracket',
    'RightBracket',
    'LeftBrace',
    'RightBrace',
    'Less',
    'LessEqual',
    'Greater',
    'GreaterEqual',
    'Plus',
    'PlusPlus',
    'Minus',
    'MinusMinus',
    'Star',
    'Div',
    'Mod',
    'AndAnd',
    'OrOr',
    'Not',
    'Question',
    'Colon',
    'Semi',
    'Comma',
    'Assign',
    'StarAssign',
    'DivAssign',
    'ModAssign',
    'PlusAssign',
    'MinusAssign',
    'Equal',
    'NotEqual',
    'Identifier',
    'Constant',
    'DigitSequence',
    'StringLiteral',
    'ComplexDefine',
    'IncludeDirective',
    'AsmBlock',
    'LineAfterPreprocessing',
    'LineDirective',
    'PragmaDirective',
    'Whitespace',
    'Newline',
    'BlockComment',
    'LineComment'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CParser._LITERAL_NAMES,
    CParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'C.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(CParser._ATN, this)
  }
  // @RuleVersion(0)
  public primaryExpression(): PrimaryExpressionContext {
    const _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CParser.RULE_primaryExpression)
    try {
      let _alt: number
      this.state = 117
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 106
            this.match(CParser.Identifier)
          }
          break
        case CParser.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 107
            this.match(CParser.Constant)
          }
          break
        case CParser.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 109
            this._errHandler.sync(this)
            _alt = 1
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 108
                      this.match(CParser.StringLiteral)
                    }
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 111
              this._errHandler.sync(this)
              _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx)
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
          }
          break
        case CParser.LeftParen:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 113
            this.match(CParser.LeftParen)
            this.state = 114
            this.expression(0)
            this.state = 115
            this.match(CParser.RightParen)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public postfixExpression(): PostfixExpressionContext
  public postfixExpression(_p: number): PostfixExpressionContext
  // @RuleVersion(0)
  public postfixExpression(_p?: number): PostfixExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState)
    let _prevctx: PostfixExpressionContext = _localctx
    const _startState: number = 2
    this.enterRecursionRule(_localctx, 2, CParser.RULE_postfixExpression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 120
          this.primaryExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 139
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 137
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_postfixExpression
                    )
                    this.state = 122
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 123
                    this.match(CParser.LeftBracket)
                    this.state = 124
                    this.expression(0)
                    this.state = 125
                    this.match(CParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_postfixExpression
                    )
                    this.state = 127
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 128
                    this.match(CParser.LeftParen)
                    this.state = 130
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CParser.T__0) |
                            (1 << CParser.LeftParen) |
                            (1 << CParser.Plus) |
                            (1 << CParser.PlusPlus))) !==
                          0) ||
                      (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                          ((1 << (CParser.Minus - 32)) |
                            (1 << (CParser.MinusMinus - 32)) |
                            (1 << (CParser.Star - 32)) |
                            (1 << (CParser.Not - 32)) |
                            (1 << (CParser.Identifier - 32)) |
                            (1 << (CParser.Constant - 32)) |
                            (1 << (CParser.DigitSequence - 32)) |
                            (1 << (CParser.StringLiteral - 32)))) !==
                          0)
                    ) {
                      {
                        this.state = 129
                        this.argumentExpressionList(0)
                      }
                    }

                    this.state = 132
                    this.match(CParser.RightParen)
                  }
                  break

                case 3:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_postfixExpression
                    )
                    this.state = 133
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 134
                    this.match(CParser.PlusPlus)
                  }
                  break

                case 4:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_postfixExpression
                    )
                    this.state = 135
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 136
                    this.match(CParser.MinusMinus)
                  }
                  break
              }
            }
          }
          this.state = 141
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public argumentExpressionList(): ArgumentExpressionListContext
  public argumentExpressionList(_p: number): ArgumentExpressionListContext
  // @RuleVersion(0)
  public argumentExpressionList(_p?: number): ArgumentExpressionListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(
      this._ctx,
      _parentState
    )
    let _prevctx: ArgumentExpressionListContext = _localctx
    const _startState: number = 4
    this.enterRecursionRule(_localctx, 4, CParser.RULE_argumentExpressionList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 143
          this.assignmentExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 150
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ArgumentExpressionListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CParser.RULE_argumentExpressionList
                )
                this.state = 145
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 146
                this.match(CParser.Comma)
                this.state = 147
                this.assignmentExpression()
              }
            }
          }
          this.state = 152
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public unaryExpression(): UnaryExpressionContext {
    const _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CParser.RULE_unaryExpression)
    try {
      this.state = 161
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.LeftParen:
        case CParser.Identifier:
        case CParser.Constant:
        case CParser.StringLiteral:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 153
            this.postfixExpression(0)
          }
          break
        case CParser.PlusPlus:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 154
            this.match(CParser.PlusPlus)
            this.state = 155
            this.unaryExpression()
          }
          break
        case CParser.MinusMinus:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 156
            this.match(CParser.MinusMinus)
            this.state = 157
            this.unaryExpression()
          }
          break
        case CParser.T__0:
        case CParser.Plus:
        case CParser.Minus:
        case CParser.Star:
        case CParser.Not:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 158
            this.unaryOperator()
            this.state = 159
            this.castExpression()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public unaryOperator(): UnaryOperatorContext {
    const _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, CParser.RULE_unaryOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 163
        _la = this._input.LA(1)
        if (
          !(
            _la === CParser.T__0 ||
            _la === CParser.Plus ||
            (((_la - 32) & ~0x1f) === 0 &&
              ((1 << (_la - 32)) &
                ((1 << (CParser.Minus - 32)) |
                  (1 << (CParser.Star - 32)) |
                  (1 << (CParser.Not - 32)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public castExpression(): CastExpressionContext {
    const _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, CParser.RULE_castExpression)
    try {
      this.state = 172
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 165
            this.unaryExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 166
            this.match(CParser.LeftParen)
            this.state = 167
            this.typeName()
            this.state = 168
            this.match(CParser.RightParen)
            this.state = 169
            this.castExpression()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 171
            this.match(CParser.DigitSequence)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public multiplicativeExpression(): MultiplicativeExpressionContext
  public multiplicativeExpression(_p: number): MultiplicativeExpressionContext
  // @RuleVersion(0)
  public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: MultiplicativeExpressionContext = _localctx
    const _startState: number = 12
    this.enterRecursionRule(_localctx, 12, CParser.RULE_multiplicativeExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 175
          this.castExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 188
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 186
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                  {
                    _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_multiplicativeExpression
                    )
                    this.state = 177
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 178
                    this.match(CParser.Star)
                    this.state = 179
                    this.castExpression()
                  }
                  break

                case 2:
                  {
                    _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_multiplicativeExpression
                    )
                    this.state = 180
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 181
                    this.match(CParser.Div)
                    this.state = 182
                    this.castExpression()
                  }
                  break

                case 3:
                  {
                    _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_multiplicativeExpression
                    )
                    this.state = 183
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 184
                    this.match(CParser.Mod)
                    this.state = 185
                    this.castExpression()
                  }
                  break
              }
            }
          }
          this.state = 190
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public additiveExpression(): AdditiveExpressionContext
  public additiveExpression(_p: number): AdditiveExpressionContext
  // @RuleVersion(0)
  public additiveExpression(_p?: number): AdditiveExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: AdditiveExpressionContext = _localctx
    const _startState: number = 14
    this.enterRecursionRule(_localctx, 14, CParser.RULE_additiveExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 192
          this.multiplicativeExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 202
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 200
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                  {
                    _localctx = new AdditiveExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_additiveExpression
                    )
                    this.state = 194
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 195
                    this.match(CParser.Plus)
                    this.state = 196
                    this.multiplicativeExpression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new AdditiveExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_additiveExpression
                    )
                    this.state = 197
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 198
                    this.match(CParser.Minus)
                    this.state = 199
                    this.multiplicativeExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 204
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public relationalExpression(): RelationalExpressionContext
  public relationalExpression(_p: number): RelationalExpressionContext
  // @RuleVersion(0)
  public relationalExpression(_p?: number): RelationalExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: RelationalExpressionContext = new RelationalExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: RelationalExpressionContext = _localctx
    const _startState: number = 16
    this.enterRecursionRule(_localctx, 16, CParser.RULE_relationalExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 206
          this.additiveExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 222
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 220
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_relationalExpression
                    )
                    this.state = 208
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 209
                    this.match(CParser.Less)
                    this.state = 210
                    this.additiveExpression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_relationalExpression
                    )
                    this.state = 211
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 212
                    this.match(CParser.Greater)
                    this.state = 213
                    this.additiveExpression(0)
                  }
                  break

                case 3:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_relationalExpression
                    )
                    this.state = 214
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 215
                    this.match(CParser.LessEqual)
                    this.state = 216
                    this.additiveExpression(0)
                  }
                  break

                case 4:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_relationalExpression
                    )
                    this.state = 217
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 218
                    this.match(CParser.GreaterEqual)
                    this.state = 219
                    this.additiveExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 224
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public equalityExpression(): EqualityExpressionContext
  public equalityExpression(_p: number): EqualityExpressionContext
  // @RuleVersion(0)
  public equalityExpression(_p?: number): EqualityExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: EqualityExpressionContext = new EqualityExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: EqualityExpressionContext = _localctx
    const _startState: number = 18
    this.enterRecursionRule(_localctx, 18, CParser.RULE_equalityExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 226
          this.relationalExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 236
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 234
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                  {
                    _localctx = new EqualityExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_equalityExpression
                    )
                    this.state = 228
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 229
                    this.match(CParser.Equal)
                    this.state = 230
                    this.relationalExpression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new EqualityExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_equalityExpression
                    )
                    this.state = 231
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 232
                    this.match(CParser.NotEqual)
                    this.state = 233
                    this.relationalExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 238
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public logicalAndExpression(): LogicalAndExpressionContext
  public logicalAndExpression(_p: number): LogicalAndExpressionContext
  // @RuleVersion(0)
  public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: LogicalAndExpressionContext = _localctx
    const _startState: number = 20
    this.enterRecursionRule(_localctx, 20, CParser.RULE_logicalAndExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 240
          this.equalityExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 247
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new LogicalAndExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CParser.RULE_logicalAndExpression
                )
                this.state = 242
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 243
                this.match(CParser.AndAnd)
                this.state = 244
                this.equalityExpression(0)
              }
            }
          }
          this.state = 249
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public logicalOrExpression(): LogicalOrExpressionContext
  public logicalOrExpression(_p: number): LogicalOrExpressionContext
  // @RuleVersion(0)
  public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: LogicalOrExpressionContext = _localctx
    const _startState: number = 22
    this.enterRecursionRule(_localctx, 22, CParser.RULE_logicalOrExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 251
          this.logicalAndExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 258
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new LogicalOrExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CParser.RULE_logicalOrExpression
                )
                this.state = 253
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 254
                this.match(CParser.OrOr)
                this.state = 255
                this.logicalAndExpression(0)
              }
            }
          }
          this.state = 260
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public conditionalExpression(): ConditionalExpressionContext {
    const _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 24, CParser.RULE_conditionalExpression)
    try {
      this.state = 270
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 261
            this.logicalOrExpression(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 262
            this.logicalOrExpression(0)
            this.state = 268
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
              case 1:
                {
                  this.state = 263
                  this.match(CParser.Question)
                  this.state = 264
                  this.expression(0)
                  this.state = 265
                  this.match(CParser.Colon)
                  this.state = 266
                  this.conditionalExpression()
                }
                break
            }
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignmentExpression(): AssignmentExpressionContext {
    const _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 26, CParser.RULE_assignmentExpression)
    try {
      this.state = 278
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 272
            this.conditionalExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 273
            this.unaryExpression()
            this.state = 274
            this.assignmentOperator()
            this.state = 275
            this.assignmentExpression()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 277
            this.match(CParser.DigitSequence)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignmentOperator(): AssignmentOperatorContext {
    const _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 28, CParser.RULE_assignmentOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 280
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 44) & ~0x1f) === 0 &&
            ((1 << (_la - 44)) &
              ((1 << (CParser.Assign - 44)) |
                (1 << (CParser.StarAssign - 44)) |
                (1 << (CParser.DivAssign - 44)) |
                (1 << (CParser.ModAssign - 44)) |
                (1 << (CParser.PlusAssign - 44)) |
                (1 << (CParser.MinusAssign - 44)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 30
    this.enterRecursionRule(_localctx, 30, CParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 283
          this.assignmentExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 290
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression)
                this.state = 285
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 286
                this.match(CParser.Comma)
                this.state = 287
                this.assignmentExpression()
              }
            }
          }
          this.state = 292
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public constantExpression(): ConstantExpressionContext {
    const _localctx: ConstantExpressionContext = new ConstantExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 32, CParser.RULE_constantExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 293
        this.conditionalExpression()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    const _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 34, CParser.RULE_declaration)
    try {
      this.state = 300
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 295
            this.declarationSpecifiers()
            this.state = 296
            this.initDeclaratorList(0)
            this.state = 297
            this.match(CParser.Semi)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 299
            this.functionDefinition()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declarationSpecifiers(): DeclarationSpecifiersContext {
    const _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 36, CParser.RULE_declarationSpecifiers)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 303
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 302
              this.declarationSpecifier()
            }
          }
          this.state = 305
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << CParser.Char) |
              (1 << CParser.Const) |
              (1 << CParser.Double) |
              (1 << CParser.Float) |
              (1 << CParser.Int) |
              (1 << CParser.Long) |
              (1 << CParser.Short) |
              (1 << CParser.Void))) !==
            0
        )
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declarationSpecifiers2(): DeclarationSpecifiers2Context {
    const _localctx: DeclarationSpecifiers2Context = new DeclarationSpecifiers2Context(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 38, CParser.RULE_declarationSpecifiers2)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 308
        this._errHandler.sync(this)
        _alt = 1
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 307
                  this.declarationSpecifier()
                }
              }
              break
            default:
              throw new NoViableAltException(this)
          }
          this.state = 310
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx)
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declarationSpecifier(): DeclarationSpecifierContext {
    const _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 40, CParser.RULE_declarationSpecifier)
    try {
      this.state = 314
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.Char:
        case CParser.Double:
        case CParser.Float:
        case CParser.Int:
        case CParser.Long:
        case CParser.Short:
        case CParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 312
            this.typeSpecifier()
          }
          break
        case CParser.Const:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 313
            this.typeQualifier()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public initDeclaratorList(): InitDeclaratorListContext
  public initDeclaratorList(_p: number): InitDeclaratorListContext
  // @RuleVersion(0)
  public initDeclaratorList(_p?: number): InitDeclaratorListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(
      this._ctx,
      _parentState
    )
    let _prevctx: InitDeclaratorListContext = _localctx
    const _startState: number = 42
    this.enterRecursionRule(_localctx, 42, CParser.RULE_initDeclaratorList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 317
          this.initDeclarator()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 324
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new InitDeclaratorListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CParser.RULE_initDeclaratorList
                )
                this.state = 319
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 320
                this.match(CParser.Comma)
                this.state = 321
                this.initDeclarator()
              }
            }
          }
          this.state = 326
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public initDeclarator(): InitDeclaratorContext {
    const _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 44, CParser.RULE_initDeclarator)
    try {
      this.state = 332
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 327
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 328
            this.declarator()
            this.state = 329
            this.match(CParser.Assign)
            this.state = 330
            this.initializer()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public typeSpecifier(): TypeSpecifierContext {
    const _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 46, CParser.RULE_typeSpecifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 334
        _la = this._input.LA(1)
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CParser.Char) |
                (1 << CParser.Double) |
                (1 << CParser.Float) |
                (1 << CParser.Int) |
                (1 << CParser.Long) |
                (1 << CParser.Short) |
                (1 << CParser.Void))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public specifierQualifierList(): SpecifierQualifierListContext {
    const _localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 48, CParser.RULE_specifierQualifierList)
    let _la: number
    try {
      this.state = 344
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.Char:
        case CParser.Double:
        case CParser.Float:
        case CParser.Int:
        case CParser.Long:
        case CParser.Short:
        case CParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 336
            this.typeSpecifier()
            this.state = 338
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << CParser.Char) |
                  (1 << CParser.Const) |
                  (1 << CParser.Double) |
                  (1 << CParser.Float) |
                  (1 << CParser.Int) |
                  (1 << CParser.Long) |
                  (1 << CParser.Short) |
                  (1 << CParser.Void))) !==
                0
            ) {
              {
                this.state = 337
                this.specifierQualifierList()
              }
            }
          }
          break
        case CParser.Const:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 340
            this.typeQualifier()
            this.state = 342
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << CParser.Char) |
                  (1 << CParser.Const) |
                  (1 << CParser.Double) |
                  (1 << CParser.Float) |
                  (1 << CParser.Int) |
                  (1 << CParser.Long) |
                  (1 << CParser.Short) |
                  (1 << CParser.Void))) !==
                0
            ) {
              {
                this.state = 341
                this.specifierQualifierList()
              }
            }
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public typeQualifier(): TypeQualifierContext {
    const _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 50, CParser.RULE_typeQualifier)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 346
        this.match(CParser.Const)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declarator(): DeclaratorContext {
    const _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 52, CParser.RULE_declarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 349
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CParser.Star) {
          {
            this.state = 348
            this.pointer()
          }
        }

        this.state = 351
        this.directDeclarator(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public directDeclarator(): DirectDeclaratorContext
  public directDeclarator(_p: number): DirectDeclaratorContext
  // @RuleVersion(0)
  public directDeclarator(_p?: number): DirectDeclaratorContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, _parentState)
    let _prevctx: DirectDeclaratorContext = _localctx
    const _startState: number = 54
    this.enterRecursionRule(_localctx, 54, CParser.RULE_directDeclarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 359
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CParser.Identifier:
            {
              this.state = 354
              this.match(CParser.Identifier)
            }
            break
          case CParser.LeftParen:
            {
              this.state = 355
              this.match(CParser.LeftParen)
              this.state = 356
              this.declarator()
              this.state = 357
              this.match(CParser.RightParen)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 380
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 378
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_directDeclarator
                    )
                    this.state = 361
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 362
                    this.match(CParser.LeftBracket)
                    this.state = 364
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CParser.T__0) |
                            (1 << CParser.LeftParen) |
                            (1 << CParser.Plus) |
                            (1 << CParser.PlusPlus))) !==
                          0) ||
                      (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                          ((1 << (CParser.Minus - 32)) |
                            (1 << (CParser.MinusMinus - 32)) |
                            (1 << (CParser.Star - 32)) |
                            (1 << (CParser.Not - 32)) |
                            (1 << (CParser.Identifier - 32)) |
                            (1 << (CParser.Constant - 32)) |
                            (1 << (CParser.DigitSequence - 32)) |
                            (1 << (CParser.StringLiteral - 32)))) !==
                          0)
                    ) {
                      {
                        this.state = 363
                        this.constantExpression()
                      }
                    }

                    this.state = 366
                    this.match(CParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_directDeclarator
                    )
                    this.state = 367
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 368
                    this.match(CParser.LeftParen)
                    this.state = 369
                    this.parameterTypeList()
                    this.state = 370
                    this.match(CParser.RightParen)
                  }
                  break

                case 3:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_directDeclarator
                    )
                    this.state = 372
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 373
                    this.match(CParser.LeftParen)
                    this.state = 375
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === CParser.Identifier) {
                      {
                        this.state = 374
                        this.identifierList(0)
                      }
                    }

                    this.state = 377
                    this.match(CParser.RightParen)
                  }
                  break
              }
            }
          }
          this.state = 382
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public pointer(): PointerContext {
    const _localctx: PointerContext = new PointerContext(this._ctx, this.state)
    this.enterRule(_localctx, 56, CParser.RULE_pointer)
    let _la: number
    try {
      this.state = 392
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 383
            this.match(CParser.Star)
            this.state = 385
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
              case 1:
                {
                  this.state = 384
                  this.typeQualifierList(0)
                }
                break
            }
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 387
            this.match(CParser.Star)
            this.state = 389
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === CParser.Const) {
              {
                this.state = 388
                this.typeQualifierList(0)
              }
            }

            this.state = 391
            this.pointer()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public typeQualifierList(): TypeQualifierListContext
  public typeQualifierList(_p: number): TypeQualifierListContext
  // @RuleVersion(0)
  public typeQualifierList(_p?: number): TypeQualifierListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: TypeQualifierListContext = new TypeQualifierListContext(this._ctx, _parentState)
    let _prevctx: TypeQualifierListContext = _localctx
    const _startState: number = 58
    this.enterRecursionRule(_localctx, 58, CParser.RULE_typeQualifierList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 395
          this.typeQualifier()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 401
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new TypeQualifierListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_typeQualifierList)
                this.state = 397
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 398
                this.typeQualifier()
              }
            }
          }
          this.state = 403
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public parameterTypeList(): ParameterTypeListContext {
    const _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state)
    this.enterRule(_localctx, 60, CParser.RULE_parameterTypeList)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 404
        this.parameterList(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public parameterList(): ParameterListContext
  public parameterList(_p: number): ParameterListContext
  // @RuleVersion(0)
  public parameterList(_p?: number): ParameterListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ParameterListContext = new ParameterListContext(this._ctx, _parentState)
    let _prevctx: ParameterListContext = _localctx
    const _startState: number = 62
    this.enterRecursionRule(_localctx, 62, CParser.RULE_parameterList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 407
          this.parameterDeclaration()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 414
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ParameterListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_parameterList)
                this.state = 409
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 410
                this.match(CParser.Comma)
                this.state = 411
                this.parameterDeclaration()
              }
            }
          }
          this.state = 416
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public parameterDeclaration(): ParameterDeclarationContext {
    const _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 64, CParser.RULE_parameterDeclaration)
    try {
      this.state = 424
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 417
            this.declarationSpecifiers()
            this.state = 418
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 420
            this.declarationSpecifiers2()
            this.state = 422
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
              case 1:
                {
                  this.state = 421
                  this.abstractDeclarator()
                }
                break
            }
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public identifierList(): IdentifierListContext
  public identifierList(_p: number): IdentifierListContext
  // @RuleVersion(0)
  public identifierList(_p?: number): IdentifierListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, _parentState)
    let _prevctx: IdentifierListContext = _localctx
    const _startState: number = 66
    this.enterRecursionRule(_localctx, 66, CParser.RULE_identifierList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 427
          this.match(CParser.Identifier)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 434
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new IdentifierListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_identifierList)
                this.state = 429
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 430
                this.match(CParser.Comma)
                this.state = 431
                this.match(CParser.Identifier)
              }
            }
          }
          this.state = 436
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public typeName(): TypeNameContext {
    const _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state)
    this.enterRule(_localctx, 68, CParser.RULE_typeName)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 437
        this.specifierQualifierList()
        this.state = 439
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CParser.LeftParen || _la === CParser.Star) {
          {
            this.state = 438
            this.abstractDeclarator()
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public abstractDeclarator(): AbstractDeclaratorContext {
    const _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 70, CParser.RULE_abstractDeclarator)
    let _la: number
    try {
      this.state = 446
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 441
            this.pointer()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 443
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === CParser.Star) {
              {
                this.state = 442
                this.pointer()
              }
            }

            this.state = 445
            this.directAbstractDeclarator(0)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public directAbstractDeclarator(): DirectAbstractDeclaratorContext
  public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext
  // @RuleVersion(0)
  public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(
      this._ctx,
      _parentState
    )
    let _prevctx: DirectAbstractDeclaratorContext = _localctx
    const _startState: number = 72
    this.enterRecursionRule(_localctx, 72, CParser.RULE_directAbstractDeclarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 458
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
          case 1:
            {
              this.state = 449
              this.match(CParser.LeftParen)
              this.state = 450
              this.abstractDeclarator()
              this.state = 451
              this.match(CParser.RightParen)
            }
            break

          case 2:
            {
              this.state = 453
              this.match(CParser.LeftParen)
              this.state = 455
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                (_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.Char) |
                    (1 << CParser.Const) |
                    (1 << CParser.Double) |
                    (1 << CParser.Float) |
                    (1 << CParser.Int) |
                    (1 << CParser.Long) |
                    (1 << CParser.Short) |
                    (1 << CParser.Void))) !==
                  0
              ) {
                {
                  this.state = 454
                  this.parameterTypeList()
                }
              }

              this.state = 457
              this.match(CParser.RightParen)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 474
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 472
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                  {
                    _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_directAbstractDeclarator
                    )
                    this.state = 460
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 461
                    this.match(CParser.LeftBracket)
                    this.state = 463
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CParser.T__0) |
                            (1 << CParser.LeftParen) |
                            (1 << CParser.Plus) |
                            (1 << CParser.PlusPlus))) !==
                          0) ||
                      (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                          ((1 << (CParser.Minus - 32)) |
                            (1 << (CParser.MinusMinus - 32)) |
                            (1 << (CParser.Star - 32)) |
                            (1 << (CParser.Not - 32)) |
                            (1 << (CParser.Identifier - 32)) |
                            (1 << (CParser.Constant - 32)) |
                            (1 << (CParser.DigitSequence - 32)) |
                            (1 << (CParser.StringLiteral - 32)))) !==
                          0)
                    ) {
                      {
                        this.state = 462
                        this.constantExpression()
                      }
                    }

                    this.state = 465
                    this.match(CParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CParser.RULE_directAbstractDeclarator
                    )
                    this.state = 466
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 467
                    this.match(CParser.LeftParen)
                    this.state = 469
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      (_la & ~0x1f) === 0 &&
                      ((1 << _la) &
                        ((1 << CParser.Char) |
                          (1 << CParser.Const) |
                          (1 << CParser.Double) |
                          (1 << CParser.Float) |
                          (1 << CParser.Int) |
                          (1 << CParser.Long) |
                          (1 << CParser.Short) |
                          (1 << CParser.Void))) !==
                        0
                    ) {
                      {
                        this.state = 468
                        this.parameterTypeList()
                      }
                    }

                    this.state = 471
                    this.match(CParser.RightParen)
                  }
                  break
              }
            }
          }
          this.state = 476
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public initializer(): InitializerContext {
    const _localctx: InitializerContext = new InitializerContext(this._ctx, this.state)
    this.enterRule(_localctx, 74, CParser.RULE_initializer)
    try {
      this.state = 487
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 477
            this.assignmentExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 478
            this.match(CParser.LeftBrace)
            this.state = 479
            this.initializerList(0)
            this.state = 480
            this.match(CParser.RightBrace)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 482
            this.match(CParser.LeftBrace)
            this.state = 483
            this.initializerList(0)
            this.state = 484
            this.match(CParser.Comma)
            this.state = 485
            this.match(CParser.RightBrace)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public initializerList(): InitializerListContext
  public initializerList(_p: number): InitializerListContext
  // @RuleVersion(0)
  public initializerList(_p?: number): InitializerListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: InitializerListContext = new InitializerListContext(this._ctx, _parentState)
    let _prevctx: InitializerListContext = _localctx
    const _startState: number = 76
    this.enterRecursionRule(_localctx, 76, CParser.RULE_initializerList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 490
          this.initializer()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 497
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new InitializerListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initializerList)
                this.state = 492
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 493
                this.match(CParser.Comma)
                this.state = 494
                this.initializer()
              }
            }
          }
          this.state = 499
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 78, CParser.RULE_statement)
    try {
      this.state = 505
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.LeftBrace:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 500
            this.compoundStatement()
          }
          break
        case CParser.T__0:
        case CParser.LeftParen:
        case CParser.Plus:
        case CParser.PlusPlus:
        case CParser.Minus:
        case CParser.MinusMinus:
        case CParser.Star:
        case CParser.Not:
        case CParser.Semi:
        case CParser.Identifier:
        case CParser.Constant:
        case CParser.DigitSequence:
        case CParser.StringLiteral:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 501
            this.expressionStatement()
          }
          break
        case CParser.If:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 502
            this.selectionStatement()
          }
          break
        case CParser.Do:
        case CParser.For:
        case CParser.While:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 503
            this.iterationStatement()
          }
          break
        case CParser.Break:
        case CParser.Continue:
        case CParser.Return:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 504
            this.jumpStatement()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public compoundStatement(): CompoundStatementContext {
    const _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 80, CParser.RULE_compoundStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 507
        this.match(CParser.LeftBrace)
        this.state = 509
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CParser.T__0) |
                (1 << CParser.Break) |
                (1 << CParser.Char) |
                (1 << CParser.Const) |
                (1 << CParser.Continue) |
                (1 << CParser.Do) |
                (1 << CParser.Double) |
                (1 << CParser.Float) |
                (1 << CParser.For) |
                (1 << CParser.If) |
                (1 << CParser.Int) |
                (1 << CParser.Long) |
                (1 << CParser.Return) |
                (1 << CParser.Short) |
                (1 << CParser.Void) |
                (1 << CParser.While) |
                (1 << CParser.LeftParen) |
                (1 << CParser.LeftBrace) |
                (1 << CParser.Plus) |
                (1 << CParser.PlusPlus))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (CParser.Minus - 32)) |
                (1 << (CParser.MinusMinus - 32)) |
                (1 << (CParser.Star - 32)) |
                (1 << (CParser.Not - 32)) |
                (1 << (CParser.Semi - 32)) |
                (1 << (CParser.Identifier - 32)) |
                (1 << (CParser.Constant - 32)) |
                (1 << (CParser.DigitSequence - 32)) |
                (1 << (CParser.StringLiteral - 32)))) !==
              0)
        ) {
          {
            this.state = 508
            this.blockItemList(0)
          }
        }

        this.state = 511
        this.match(CParser.RightBrace)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public blockItemList(): BlockItemListContext
  public blockItemList(_p: number): BlockItemListContext
  // @RuleVersion(0)
  public blockItemList(_p?: number): BlockItemListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, _parentState)
    let _prevctx: BlockItemListContext = _localctx
    const _startState: number = 82
    this.enterRecursionRule(_localctx, 82, CParser.RULE_blockItemList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 514
          this.blockItem()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 520
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new BlockItemListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_blockItemList)
                this.state = 516
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 517
                this.blockItem()
              }
            }
          }
          this.state = 522
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public blockItem(): BlockItemContext {
    const _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state)
    this.enterRule(_localctx, 84, CParser.RULE_blockItem)
    try {
      this.state = 525
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 523
            this.statement()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 524
            this.declaration()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 86, CParser.RULE_expressionStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 528
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CParser.T__0) |
                (1 << CParser.LeftParen) |
                (1 << CParser.Plus) |
                (1 << CParser.PlusPlus))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (CParser.Minus - 32)) |
                (1 << (CParser.MinusMinus - 32)) |
                (1 << (CParser.Star - 32)) |
                (1 << (CParser.Not - 32)) |
                (1 << (CParser.Identifier - 32)) |
                (1 << (CParser.Constant - 32)) |
                (1 << (CParser.DigitSequence - 32)) |
                (1 << (CParser.StringLiteral - 32)))) !==
              0)
        ) {
          {
            this.state = 527
            this.expression(0)
          }
        }

        this.state = 530
        this.match(CParser.Semi)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public selectionStatement(): SelectionStatementContext {
    const _localctx: SelectionStatementContext = new SelectionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 88, CParser.RULE_selectionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 532
        this.match(CParser.If)
        this.state = 533
        this.match(CParser.LeftParen)
        this.state = 534
        this.expression(0)
        this.state = 535
        this.match(CParser.RightParen)
        this.state = 536
        this.statement()
        this.state = 539
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
          case 1:
            {
              this.state = 537
              this.match(CParser.Else)
              this.state = 538
              this.statement()
            }
            break
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public iterationStatement(): IterationStatementContext {
    const _localctx: IterationStatementContext = new IterationStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 90, CParser.RULE_iterationStatement)
    try {
      this.state = 561
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.While:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 541
            this.match(CParser.While)
            this.state = 542
            this.match(CParser.LeftParen)
            this.state = 543
            this.expression(0)
            this.state = 544
            this.match(CParser.RightParen)
            this.state = 545
            this.statement()
          }
          break
        case CParser.Do:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 547
            this.match(CParser.Do)
            this.state = 548
            this.statement()
            this.state = 549
            this.match(CParser.While)
            this.state = 550
            this.match(CParser.LeftParen)
            this.state = 551
            this.expression(0)
            this.state = 552
            this.match(CParser.RightParen)
            this.state = 553
            this.match(CParser.Semi)
          }
          break
        case CParser.For:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 555
            this.match(CParser.For)
            this.state = 556
            this.match(CParser.LeftParen)
            this.state = 557
            this.forCondition()
            this.state = 558
            this.match(CParser.RightParen)
            this.state = 559
            this.statement()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public forCondition(): ForConditionContext {
    const _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state)
    this.enterRule(_localctx, 92, CParser.RULE_forCondition)
    let _la: number
    try {
      this.state = 583
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.Char:
        case CParser.Const:
        case CParser.Double:
        case CParser.Float:
        case CParser.Int:
        case CParser.Long:
        case CParser.Short:
        case CParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 563
            this.forDeclaration()
            this.state = 564
            this.match(CParser.Semi)
            this.state = 566
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.T__0) |
                    (1 << CParser.LeftParen) |
                    (1 << CParser.Plus) |
                    (1 << CParser.PlusPlus))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (CParser.Minus - 32)) |
                    (1 << (CParser.MinusMinus - 32)) |
                    (1 << (CParser.Star - 32)) |
                    (1 << (CParser.Not - 32)) |
                    (1 << (CParser.Identifier - 32)) |
                    (1 << (CParser.Constant - 32)) |
                    (1 << (CParser.DigitSequence - 32)) |
                    (1 << (CParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 565
                this.forExpression(0)
              }
            }

            this.state = 568
            this.match(CParser.Semi)
            this.state = 570
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.T__0) |
                    (1 << CParser.LeftParen) |
                    (1 << CParser.Plus) |
                    (1 << CParser.PlusPlus))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (CParser.Minus - 32)) |
                    (1 << (CParser.MinusMinus - 32)) |
                    (1 << (CParser.Star - 32)) |
                    (1 << (CParser.Not - 32)) |
                    (1 << (CParser.Identifier - 32)) |
                    (1 << (CParser.Constant - 32)) |
                    (1 << (CParser.DigitSequence - 32)) |
                    (1 << (CParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 569
                this.forExpression(0)
              }
            }
          }
          break
        case CParser.T__0:
        case CParser.LeftParen:
        case CParser.Plus:
        case CParser.PlusPlus:
        case CParser.Minus:
        case CParser.MinusMinus:
        case CParser.Star:
        case CParser.Not:
        case CParser.Semi:
        case CParser.Identifier:
        case CParser.Constant:
        case CParser.DigitSequence:
        case CParser.StringLiteral:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 573
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.T__0) |
                    (1 << CParser.LeftParen) |
                    (1 << CParser.Plus) |
                    (1 << CParser.PlusPlus))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (CParser.Minus - 32)) |
                    (1 << (CParser.MinusMinus - 32)) |
                    (1 << (CParser.Star - 32)) |
                    (1 << (CParser.Not - 32)) |
                    (1 << (CParser.Identifier - 32)) |
                    (1 << (CParser.Constant - 32)) |
                    (1 << (CParser.DigitSequence - 32)) |
                    (1 << (CParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 572
                this.expression(0)
              }
            }

            this.state = 575
            this.match(CParser.Semi)
            this.state = 577
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.T__0) |
                    (1 << CParser.LeftParen) |
                    (1 << CParser.Plus) |
                    (1 << CParser.PlusPlus))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (CParser.Minus - 32)) |
                    (1 << (CParser.MinusMinus - 32)) |
                    (1 << (CParser.Star - 32)) |
                    (1 << (CParser.Not - 32)) |
                    (1 << (CParser.Identifier - 32)) |
                    (1 << (CParser.Constant - 32)) |
                    (1 << (CParser.DigitSequence - 32)) |
                    (1 << (CParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 576
                this.forExpression(0)
              }
            }

            this.state = 579
            this.match(CParser.Semi)
            this.state = 581
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.T__0) |
                    (1 << CParser.LeftParen) |
                    (1 << CParser.Plus) |
                    (1 << CParser.PlusPlus))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (CParser.Minus - 32)) |
                    (1 << (CParser.MinusMinus - 32)) |
                    (1 << (CParser.Star - 32)) |
                    (1 << (CParser.Not - 32)) |
                    (1 << (CParser.Identifier - 32)) |
                    (1 << (CParser.Constant - 32)) |
                    (1 << (CParser.DigitSequence - 32)) |
                    (1 << (CParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 580
                this.forExpression(0)
              }
            }
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public forDeclaration(): ForDeclarationContext {
    const _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 94, CParser.RULE_forDeclaration)
    try {
      this.state = 589
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 585
            this.declarationSpecifiers()
            this.state = 586
            this.initDeclaratorList(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 588
            this.declarationSpecifiers()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public forExpression(): ForExpressionContext
  public forExpression(_p: number): ForExpressionContext
  // @RuleVersion(0)
  public forExpression(_p?: number): ForExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, _parentState)
    let _prevctx: ForExpressionContext = _localctx
    const _startState: number = 96
    this.enterRecursionRule(_localctx, 96, CParser.RULE_forExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 592
          this.assignmentExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 599
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ForExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_forExpression)
                this.state = 594
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 595
                this.match(CParser.Comma)
                this.state = 596
                this.assignmentExpression()
              }
            }
          }
          this.state = 601
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public jumpStatement(): JumpStatementContext {
    const _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 98, CParser.RULE_jumpStatement)
    let _la: number
    try {
      this.state = 611
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.Continue:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 602
            this.match(CParser.Continue)
            this.state = 603
            this.match(CParser.Semi)
          }
          break
        case CParser.Break:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 604
            this.match(CParser.Break)
            this.state = 605
            this.match(CParser.Semi)
          }
          break
        case CParser.Return:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 606
            this.match(CParser.Return)
            this.state = 608
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << CParser.T__0) |
                    (1 << CParser.LeftParen) |
                    (1 << CParser.Plus) |
                    (1 << CParser.PlusPlus))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (CParser.Minus - 32)) |
                    (1 << (CParser.MinusMinus - 32)) |
                    (1 << (CParser.Star - 32)) |
                    (1 << (CParser.Not - 32)) |
                    (1 << (CParser.Identifier - 32)) |
                    (1 << (CParser.Constant - 32)) |
                    (1 << (CParser.DigitSequence - 32)) |
                    (1 << (CParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 607
                this.expression(0)
              }
            }

            this.state = 610
            this.match(CParser.Semi)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public functionDefinition(): FunctionDefinitionContext {
    const _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 100, CParser.RULE_functionDefinition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 614
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << CParser.Char) |
              (1 << CParser.Const) |
              (1 << CParser.Double) |
              (1 << CParser.Float) |
              (1 << CParser.Int) |
              (1 << CParser.Long) |
              (1 << CParser.Short) |
              (1 << CParser.Void))) !==
            0
        ) {
          {
            this.state = 613
            this.declarationSpecifiers()
          }
        }

        this.state = 616
        this.declarator()
        this.state = 618
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CParser.Char) |
                (1 << CParser.Const) |
                (1 << CParser.Double) |
                (1 << CParser.Float) |
                (1 << CParser.Int) |
                (1 << CParser.Long) |
                (1 << CParser.Short) |
                (1 << CParser.Void) |
                (1 << CParser.LeftParen))) !==
              0) ||
          _la === CParser.Star ||
          _la === CParser.Identifier
        ) {
          {
            this.state = 617
            this.declarationList(0)
          }
        }

        this.state = 620
        this.compoundStatement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public declarationList(): DeclarationListContext
  public declarationList(_p: number): DeclarationListContext
  // @RuleVersion(0)
  public declarationList(_p?: number): DeclarationListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, _parentState)
    let _prevctx: DeclarationListContext = _localctx
    const _startState: number = 102
    this.enterRecursionRule(_localctx, 102, CParser.RULE_declarationList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 623
          this.declaration()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 629
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new DeclarationListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_declarationList)
                this.state = 625
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 626
                this.declaration()
              }
            }
          }
          this.state = 631
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
    this.enterRule(_localctx, 104, CParser.RULE_program)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 632
        this.blockItemList(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 1:
        return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex)

      case 2:
        return this.argumentExpressionList_sempred(
          _localctx as ArgumentExpressionListContext,
          predIndex
        )

      case 6:
        return this.multiplicativeExpression_sempred(
          _localctx as MultiplicativeExpressionContext,
          predIndex
        )

      case 7:
        return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex)

      case 8:
        return this.relationalExpression_sempred(
          _localctx as RelationalExpressionContext,
          predIndex
        )

      case 9:
        return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex)

      case 10:
        return this.logicalAndExpression_sempred(
          _localctx as LogicalAndExpressionContext,
          predIndex
        )

      case 11:
        return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex)

      case 15:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 21:
        return this.initDeclaratorList_sempred(_localctx as InitDeclaratorListContext, predIndex)

      case 27:
        return this.directDeclarator_sempred(_localctx as DirectDeclaratorContext, predIndex)

      case 29:
        return this.typeQualifierList_sempred(_localctx as TypeQualifierListContext, predIndex)

      case 31:
        return this.parameterList_sempred(_localctx as ParameterListContext, predIndex)

      case 33:
        return this.identifierList_sempred(_localctx as IdentifierListContext, predIndex)

      case 36:
        return this.directAbstractDeclarator_sempred(
          _localctx as DirectAbstractDeclaratorContext,
          predIndex
        )

      case 38:
        return this.initializerList_sempred(_localctx as InitializerListContext, predIndex)

      case 41:
        return this.blockItemList_sempred(_localctx as BlockItemListContext, predIndex)

      case 48:
        return this.forExpression_sempred(_localctx as ForExpressionContext, predIndex)

      case 51:
        return this.declarationList_sempred(_localctx as DeclarationListContext, predIndex)
    }
    return true
  }
  private postfixExpression_sempred(
    _localctx: PostfixExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 4)

      case 1:
        return this.precpred(this._ctx, 3)

      case 2:
        return this.precpred(this._ctx, 2)

      case 3:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private argumentExpressionList_sempred(
    _localctx: ArgumentExpressionListContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 4:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private multiplicativeExpression_sempred(
    _localctx: MultiplicativeExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 3)

      case 6:
        return this.precpred(this._ctx, 2)

      case 7:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private additiveExpression_sempred(
    _localctx: AdditiveExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 8:
        return this.precpred(this._ctx, 2)

      case 9:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private relationalExpression_sempred(
    _localctx: RelationalExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 10:
        return this.precpred(this._ctx, 4)

      case 11:
        return this.precpred(this._ctx, 3)

      case 12:
        return this.precpred(this._ctx, 2)

      case 13:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private equalityExpression_sempred(
    _localctx: EqualityExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 14:
        return this.precpred(this._ctx, 2)

      case 15:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logicalAndExpression_sempred(
    _localctx: LogicalAndExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 16:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logicalOrExpression_sempred(
    _localctx: LogicalOrExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 17:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 18:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private initDeclaratorList_sempred(
    _localctx: InitDeclaratorListContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 19:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private directDeclarator_sempred(_localctx: DirectDeclaratorContext, predIndex: number): boolean {
    switch (predIndex) {
      case 20:
        return this.precpred(this._ctx, 3)

      case 21:
        return this.precpred(this._ctx, 2)

      case 22:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private typeQualifierList_sempred(
    _localctx: TypeQualifierListContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 23:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private parameterList_sempred(_localctx: ParameterListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 24:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private identifierList_sempred(_localctx: IdentifierListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 25:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private directAbstractDeclarator_sempred(
    _localctx: DirectAbstractDeclaratorContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 26:
        return this.precpred(this._ctx, 2)

      case 27:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private initializerList_sempred(_localctx: InitializerListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 28:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private blockItemList_sempred(_localctx: BlockItemListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 29:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private forExpression_sempred(_localctx: ForExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 30:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private declarationList_sempred(_localctx: DeclarationListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 31:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  private static readonly _serializedATNSegments: number = 2
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03C\u027D\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044' +
    '\t4\x045\t5\x046\t6\x03\x02\x03\x02\x03\x02\x06\x02p\n\x02\r\x02\x0E\x02' +
    'q\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02x\n\x02\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03' +
    '\x85\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x8C\n\x03\f' +
    '\x03\x0E\x03\x8F\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x07\x04\x97\n\x04\f\x04\x0E\x04\x9A\v\x04\x03\x05\x03\x05\x03\x05\x03' +
    '\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xA4\n\x05\x03\x06\x03\x06' +
    '\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xAF\n' +
    '\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b' +
    '\x03\b\x07\b\xBD\n\b\f\b\x0E\b\xC0\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03' +
    '\t\x03\t\x03\t\x03\t\x07\t\xCB\n\t\f\t\x0E\t\xCE\v\t\x03\n\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x07\n\xDF\n\n\f\n\x0E\n\xE2\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v' +
    '\x03\v\x03\v\x03\v\x07\v\xED\n\v\f\v\x0E\v\xF0\v\v\x03\f\x03\f\x03\f\x03' +
    '\f\x03\f\x03\f\x07\f\xF8\n\f\f\f\x0E\f\xFB\v\f\x03\r\x03\r\x03\r\x03\r' +
    '\x03\r\x03\r\x07\r\u0103\n\r\f\r\x0E\r\u0106\v\r\x03\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u010F\n\x0E\x05\x0E\u0111\n\x0E' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0119\n\x0F\x03' +
    '\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0123' +
    '\n\x11\f\x11\x0E\x11\u0126\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x05\x13\u012F\n\x13\x03\x14\x06\x14\u0132\n\x14\r\x14' +
    '\x0E\x14\u0133\x03\x15\x06\x15\u0137\n\x15\r\x15\x0E\x15\u0138\x03\x16' +
    '\x03\x16\x05\x16\u013D\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03' +
    '\x17\x07\x17\u0145\n\x17\f\x17\x0E\x17\u0148\v\x17\x03\x18\x03\x18\x03' +
    '\x18\x03\x18\x03\x18\x05\x18\u014F\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A' +
    '\x05\x1A\u0155\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0159\n\x1A\x05\x1A\u015B' +
    '\n\x1A\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u0160\n\x1C\x03\x1C\x03\x1C\x03' +
    '\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u016A\n\x1D\x03\x1D' +
    '\x03\x1D\x03\x1D\x05\x1D\u016F\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03' +
    '\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u017A\n\x1D\x03\x1D\x07\x1D' +
    '\u017D\n\x1D\f\x1D\x0E\x1D\u0180\v\x1D\x03\x1E\x03\x1E\x05\x1E\u0184\n' +
    '\x1E\x03\x1E\x03\x1E\x05\x1E\u0188\n\x1E\x03\x1E\x05\x1E\u018B\n\x1E\x03' +
    '\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0192\n\x1F\f\x1F\x0E\x1F' +
    '\u0195\v\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x07!\u019F\n!\f!' +
    '\x0E!\u01A2\v!\x03"\x03"\x03"\x03"\x03"\x05"\u01A9\n"\x05"\u01AB' +
    '\n"\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u01B3\n#\f#\x0E#\u01B6\v#\x03' +
    '$\x03$\x05$\u01BA\n$\x03%\x03%\x05%\u01BE\n%\x03%\x05%\u01C1\n%\x03&\x03' +
    '&\x03&\x03&\x03&\x03&\x03&\x05&\u01CA\n&\x03&\x05&\u01CD\n&\x03&\x03&' +
    '\x03&\x05&\u01D2\n&\x03&\x03&\x03&\x03&\x05&\u01D8\n&\x03&\x07&\u01DB' +
    "\n&\f&\x0E&\u01DE\v&\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03" +
    "'\x03'\x05'\u01EA\n'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u01F2\n(\f" +
    '(\x0E(\u01F5\v(\x03)\x03)\x03)\x03)\x03)\x05)\u01FC\n)\x03*\x03*\x05*' +
    '\u0200\n*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x07+\u0209\n+\f+\x0E+\u020C' +
    '\v+\x03,\x03,\x05,\u0210\n,\x03-\x05-\u0213\n-\x03-\x03-\x03.\x03.\x03' +
    '.\x03.\x03.\x03.\x03.\x05.\u021E\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03' +
    '/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05' +
    '/\u0234\n/\x030\x030\x030\x050\u0239\n0\x030\x030\x050\u023D\n0\x030\x05' +
    '0\u0240\n0\x030\x030\x050\u0244\n0\x030\x030\x050\u0248\n0\x050\u024A' +
    '\n0\x031\x031\x031\x031\x051\u0250\n1\x032\x032\x032\x032\x032\x032\x07' +
    '2\u0258\n2\f2\x0E2\u025B\v2\x033\x033\x033\x033\x033\x033\x053\u0263\n' +
    '3\x033\x053\u0266\n3\x034\x054\u0269\n4\x034\x034\x054\u026D\n4\x034\x03' +
    '4\x035\x035\x035\x035\x035\x075\u0276\n5\f5\x0E5\u0279\v5\x036\x036\x03' +
    '6\x02\x02\x15\x04\x06\x0E\x10\x12\x14\x16\x18 ,8<@DJNTbh7\x02\x02\x04' +
    '\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02' +
    '\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.' +
    '\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02' +
    'J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02' +
    'f\x02h\x02j\x02\x02\x05\x07\x02\x03\x03  ""$$))\x03\x02.3\x07\x02\x05' +
    '\x05\t\t\f\f\x0F\x10\x12\x13\x02\u02A5\x02w\x03\x02\x02\x02\x04y\x03\x02' +
    '\x02\x02\x06\x90\x03\x02\x02\x02\b\xA3\x03\x02\x02\x02\n\xA5\x03\x02\x02' +
    '\x02\f\xAE\x03\x02\x02\x02\x0E\xB0\x03\x02\x02\x02\x10\xC1\x03\x02\x02' +
    '\x02\x12\xCF\x03\x02\x02\x02\x14\xE3\x03\x02\x02\x02\x16\xF1\x03\x02\x02' +
    '\x02\x18\xFC\x03\x02\x02\x02\x1A\u0110\x03\x02\x02\x02\x1C\u0118\x03\x02' +
    '\x02\x02\x1E\u011A\x03\x02\x02\x02 \u011C\x03\x02\x02\x02"\u0127\x03' +
    '\x02\x02\x02$\u012E\x03\x02\x02\x02&\u0131\x03\x02\x02\x02(\u0136\x03' +
    '\x02\x02\x02*\u013C\x03\x02\x02\x02,\u013E\x03\x02\x02\x02.\u014E\x03' +
    '\x02\x02\x020\u0150\x03\x02\x02\x022\u015A\x03\x02\x02\x024\u015C\x03' +
    '\x02\x02\x026\u015F\x03\x02\x02\x028\u0169\x03\x02\x02\x02:\u018A\x03' +
    '\x02\x02\x02<\u018C\x03\x02\x02\x02>\u0196\x03\x02\x02\x02@\u0198\x03' +
    '\x02\x02\x02B\u01AA\x03\x02\x02\x02D\u01AC\x03\x02\x02\x02F\u01B7\x03' +
    '\x02\x02\x02H\u01C0\x03\x02\x02\x02J\u01CC\x03\x02\x02\x02L\u01E9\x03' +
    '\x02\x02\x02N\u01EB\x03\x02\x02\x02P\u01FB\x03\x02\x02\x02R\u01FD\x03' +
    '\x02\x02\x02T\u0203\x03\x02\x02\x02V\u020F\x03\x02\x02\x02X\u0212\x03' +
    '\x02\x02\x02Z\u0216\x03\x02\x02\x02\\\u0233\x03\x02\x02\x02^\u0249\x03' +
    '\x02\x02\x02`\u024F\x03\x02\x02\x02b\u0251\x03\x02\x02\x02d\u0265\x03' +
    '\x02\x02\x02f\u0268\x03\x02\x02\x02h\u0270\x03\x02\x02\x02j\u027A\x03' +
    '\x02\x02\x02lx\x076\x02\x02mx\x077\x02\x02np\x079\x02\x02on\x03\x02\x02' +
    '\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rx\x03\x02\x02' +
    '\x02st\x07\x16\x02\x02tu\x05 \x11\x02uv\x07\x17\x02\x02vx\x03\x02\x02' +
    '\x02wl\x03\x02\x02\x02wm\x03\x02\x02\x02wo\x03\x02\x02\x02ws\x03\x02\x02' +
    '\x02x\x03\x03\x02\x02\x02yz\b\x03\x01\x02z{\x05\x02\x02\x02{\x8D\x03\x02' +
    '\x02\x02|}\f\x06\x02\x02}~\x07\x18\x02\x02~\x7F\x05 \x11\x02\x7F\x80\x07' +
    '\x19\x02\x02\x80\x8C\x03\x02\x02\x02\x81\x82\f\x05\x02\x02\x82\x84\x07' +
    '\x16\x02\x02\x83\x85\x05\x06\x04\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03' +
    '\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x8C\x07\x17\x02\x02\x87\x88\f' +
    '\x04\x02\x02\x88\x8C\x07!\x02\x02\x89\x8A\f\x03\x02\x02\x8A\x8C\x07#\x02' +
    '\x02\x8B|\x03\x02\x02\x02\x8B\x81\x03\x02\x02\x02\x8B\x87\x03\x02\x02' +
    '\x02\x8B\x89\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02' +
    '\x02\x8D\x8E\x03\x02\x02\x02\x8E\x05\x03\x02\x02\x02\x8F\x8D\x03\x02\x02' +
    '\x02\x90\x91\b\x04\x01\x02\x91\x92\x05\x1C\x0F\x02\x92\x98\x03\x02\x02' +
    '\x02\x93\x94\f\x03\x02\x02\x94\x95\x07-\x02\x02\x95\x97\x05\x1C\x0F\x02' +
    '\x96\x93\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02' +
    '\x98\x99\x03\x02\x02\x02\x99\x07\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02' +
    '\x9B\xA4\x05\x04\x03\x02\x9C\x9D\x07!\x02\x02\x9D\xA4\x05\b\x05\x02\x9E' +
    '\x9F\x07#\x02\x02\x9F\xA4\x05\b\x05\x02\xA0\xA1\x05\n\x06\x02\xA1\xA2' +
    '\x05\f\x07\x02\xA2\xA4\x03\x02\x02\x02\xA3\x9B\x03\x02\x02\x02\xA3\x9C' +
    '\x03\x02\x02\x02\xA3\x9E\x03\x02\x02\x02\xA3\xA0\x03\x02\x02\x02\xA4\t' +
    '\x03\x02\x02\x02\xA5\xA6\t\x02\x02\x02\xA6\v\x03\x02\x02\x02\xA7\xAF\x05' +
    '\b\x05\x02\xA8\xA9\x07\x16\x02\x02\xA9\xAA\x05F$\x02\xAA\xAB\x07\x17\x02' +
    '\x02\xAB\xAC\x05\f\x07\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAF\x078\x02\x02' +
    '\xAE\xA7\x03\x02\x02\x02\xAE\xA8\x03\x02\x02\x02\xAE\xAD\x03\x02\x02\x02' +
    '\xAF\r\x03\x02\x02\x02\xB0\xB1\b\b\x01\x02\xB1\xB2\x05\f\x07\x02\xB2\xBE' +
    '\x03\x02\x02\x02\xB3\xB4\f\x05\x02\x02\xB4\xB5\x07$\x02\x02\xB5\xBD\x05' +
    '\f\x07\x02\xB6\xB7\f\x04\x02\x02\xB7\xB8\x07%\x02\x02\xB8\xBD\x05\f\x07' +
    '\x02\xB9\xBA\f\x03\x02\x02\xBA\xBB\x07&\x02\x02\xBB\xBD\x05\f\x07\x02' +
    '\xBC\xB3\x03\x02\x02\x02\xBC\xB6\x03\x02\x02\x02\xBC\xB9\x03\x02\x02\x02' +
    '\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02' +
    '\xBF\x0F\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\b\t\x01\x02\xC2' +
    '\xC3\x05\x0E\b\x02\xC3\xCC\x03\x02\x02\x02\xC4\xC5\f\x04\x02\x02\xC5\xC6' +
    '\x07 \x02\x02\xC6\xCB\x05\x0E\b\x02\xC7\xC8\f\x03\x02\x02\xC8\xC9\x07' +
    '"\x02\x02\xC9\xCB\x05\x0E\b\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC7\x03\x02' +
    '\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02' +
    '\x02\x02\xCD\x11\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD0\b\n\x01' +
    '\x02\xD0\xD1\x05\x10\t\x02\xD1\xE0\x03\x02\x02\x02\xD2\xD3\f\x06\x02\x02' +
    '\xD3\xD4\x07\x1C\x02\x02\xD4\xDF\x05\x10\t\x02\xD5\xD6\f\x05\x02\x02\xD6' +
    '\xD7\x07\x1E\x02\x02\xD7\xDF\x05\x10\t\x02\xD8\xD9\f\x04\x02\x02\xD9\xDA' +
    '\x07\x1D\x02\x02\xDA\xDF\x05\x10\t\x02\xDB\xDC\f\x03\x02\x02\xDC\xDD\x07' +
    '\x1F\x02\x02\xDD\xDF\x05\x10\t\x02\xDE\xD2\x03\x02\x02\x02\xDE\xD5\x03' +
    '\x02\x02\x02\xDE\xD8\x03\x02\x02\x02\xDE\xDB\x03\x02\x02\x02\xDF\xE2\x03' +
    '\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\x13\x03' +
    '\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4\b\v\x01\x02\xE4\xE5\x05\x12' +
    '\n\x02\xE5\xEE\x03\x02\x02\x02\xE6\xE7\f\x04\x02\x02\xE7\xE8\x074\x02' +
    '\x02\xE8\xED\x05\x12\n\x02\xE9\xEA\f\x03\x02\x02\xEA\xEB\x075\x02\x02' +
    '\xEB\xED\x05\x12\n\x02\xEC\xE6\x03\x02\x02\x02\xEC\xE9\x03\x02\x02\x02' +
    '\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02' +
    '\xEF\x15\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\b\f\x01\x02\xF2' +
    '\xF3\x05\x14\v\x02\xF3\xF9\x03\x02\x02\x02\xF4\xF5\f\x03\x02\x02\xF5\xF6' +
    "\x07'\x02\x02\xF6\xF8\x05\x14\v\x02\xF7\xF4\x03\x02\x02\x02\xF8\xFB\x03" +
    '\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\x17\x03' +
    '\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFD\b\r\x01\x02\xFD\xFE\x05\x16' +
    '\f\x02\xFE\u0104\x03\x02\x02\x02\xFF\u0100\f\x03\x02\x02\u0100\u0101\x07' +
    '(\x02\x02\u0101\u0103\x05\x16\f\x02\u0102\xFF\x03\x02\x02\x02\u0103\u0106' +
    '\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02' +
    '\u0105\x19\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0111\x05' +
    '\x18\r\x02\u0108\u010E\x05\x18\r\x02\u0109\u010A\x07*\x02\x02\u010A\u010B' +
    '\x05 \x11\x02\u010B\u010C\x07+\x02\x02\u010C\u010D\x05\x1A\x0E\x02\u010D' +
    '\u010F\x03\x02\x02\x02\u010E\u0109\x03\x02\x02\x02\u010E\u010F\x03\x02' +
    '\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0110' +
    '\u0108\x03\x02\x02\x02\u0111\x1B\x03\x02\x02\x02\u0112\u0119\x05\x1A\x0E' +
    '\x02\u0113\u0114\x05\b\x05\x02\u0114\u0115\x05\x1E\x10\x02\u0115\u0116' +
    '\x05\x1C\x0F\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0119\x078\x02\x02' +
    '\u0118\u0112\x03\x02\x02\x02\u0118\u0113\x03\x02\x02\x02\u0118\u0117\x03' +
    '\x02\x02\x02\u0119\x1D\x03\x02\x02\x02\u011A\u011B\t\x03\x02\x02\u011B' +
    '\x1F\x03\x02\x02\x02\u011C\u011D\b\x11\x01\x02\u011D\u011E\x05\x1C\x0F' +
    '\x02\u011E\u0124\x03\x02\x02\x02\u011F\u0120\f\x03\x02\x02\u0120\u0121' +
    '\x07-\x02\x02\u0121\u0123\x05\x1C\x0F\x02\u0122\u011F\x03\x02\x02\x02' +
    '\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03' +
    '\x02\x02\x02\u0125!\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127' +
    '\u0128\x05\x1A\x0E\x02\u0128#\x03\x02\x02\x02\u0129\u012A\x05&\x14\x02' +
    '\u012A\u012B\x05,\x17\x02\u012B\u012C\x07,\x02\x02\u012C\u012F\x03\x02' +
    '\x02\x02\u012D\u012F\x05f4\x02\u012E\u0129\x03\x02\x02\x02\u012E\u012D' +
    '\x03\x02\x02\x02\u012F%\x03\x02\x02\x02\u0130\u0132\x05*\x16\x02\u0131' +
    '\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0131\x03\x02' +
    "\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134'\x03\x02\x02\x02\u0135\u0137" +
    '\x05*\x16\x02\u0136\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02' +
    '\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139)\x03\x02' +
    '\x02\x02\u013A\u013D\x050\x19\x02\u013B\u013D\x054\x1B\x02\u013C\u013A' +
    '\x03\x02\x02\x02\u013C\u013B\x03\x02\x02\x02\u013D+\x03\x02\x02\x02\u013E' +
    '\u013F\b\x17\x01\x02\u013F\u0140\x05.\x18\x02\u0140\u0146\x03\x02\x02' +
    '\x02\u0141\u0142\f\x03\x02\x02\u0142\u0143\x07-\x02\x02\u0143\u0145\x05' +
    '.\x18\x02\u0144\u0141\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146' +
    '\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147-\x03\x02\x02' +
    '\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014F\x056\x1C\x02\u014A\u014B' +
    "\x056\x1C\x02\u014B\u014C\x07.\x02\x02\u014C\u014D\x05L'\x02\u014D\u014F" +
    '\x03\x02\x02\x02\u014E\u0149\x03\x02\x02\x02\u014E\u014A\x03\x02\x02\x02' +
    '\u014F/\x03\x02\x02\x02\u0150\u0151\t\x04\x02\x02\u01511\x03\x02\x02\x02' +
    '\u0152\u0154\x050\x19\x02\u0153\u0155\x052\x1A\x02\u0154\u0153\x03\x02' +
    '\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u015B\x03\x02\x02\x02\u0156' +
    '\u0158\x054\x1B\x02\u0157\u0159\x052\x1A\x02\u0158\u0157\x03\x02\x02\x02' +
    '\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x03\x02\x02\x02\u015A\u0152\x03' +
    '\x02\x02\x02\u015A\u0156\x03\x02\x02\x02\u015B3\x03\x02\x02\x02\u015C' +
    '\u015D\x07\x06\x02\x02\u015D5\x03\x02\x02\x02\u015E\u0160\x05:\x1E\x02' +
    '\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03' +
    '\x02\x02\x02\u0161\u0162\x058\x1D\x02\u01627\x03\x02\x02\x02\u0163\u0164' +
    '\b\x1D\x01\x02\u0164\u016A\x076\x02\x02\u0165\u0166\x07\x16\x02\x02\u0166' +
    '\u0167\x056\x1C\x02\u0167\u0168\x07\x17\x02\x02\u0168\u016A\x03\x02\x02' +
    '\x02\u0169\u0163\x03\x02\x02\x02\u0169\u0165\x03\x02\x02\x02\u016A\u017E' +
    '\x03\x02\x02\x02\u016B\u016C\f\x05\x02\x02\u016C\u016E\x07\x18\x02\x02' +
    '\u016D\u016F\x05"\x12\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03' +
    '\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u017D\x07\x19\x02\x02\u0171' +
    '\u0172\f\x04\x02\x02\u0172\u0173\x07\x16\x02\x02\u0173\u0174\x05> \x02' +
    '\u0174\u0175\x07\x17\x02\x02\u0175\u017D\x03\x02\x02\x02\u0176\u0177\f' +
    '\x03\x02\x02\u0177\u0179\x07\x16\x02\x02\u0178\u017A\x05D#\x02\u0179\u0178' +
    '\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02' +
    '\u017B\u017D\x07\x17\x02\x02\u017C\u016B\x03\x02\x02\x02\u017C\u0171\x03' +
    '\x02\x02\x02\u017C\u0176\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E' +
    '\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F9\x03\x02\x02' +
    '\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0183\x07$\x02\x02\u0182\u0184' +
    '\x05<\x1F\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02' +
    '\u0184\u018B\x03\x02\x02\x02\u0185\u0187\x07$\x02\x02\u0186\u0188\x05' +
    '<\x1F\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188' +
    '\u0189\x03\x02\x02\x02\u0189\u018B\x05:\x1E\x02\u018A\u0181\x03\x02\x02' +
    '\x02\u018A\u0185\x03\x02\x02\x02\u018B;\x03\x02\x02\x02\u018C\u018D\b' +
    '\x1F\x01\x02\u018D\u018E\x054\x1B\x02\u018E\u0193\x03\x02\x02\x02\u018F' +
    '\u0190\f\x03\x02\x02\u0190\u0192\x054\x1B\x02\u0191\u018F\x03\x02\x02' +
    '\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194' +
    '\x03\x02\x02\x02\u0194=\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196' +
    '\u0197\x05@!\x02\u0197?\x03\x02\x02\x02\u0198\u0199\b!\x01\x02\u0199\u019A' +
    '\x05B"\x02\u019A\u01A0\x03\x02\x02\x02\u019B\u019C\f\x03\x02\x02\u019C' +
    '\u019D\x07-\x02\x02\u019D\u019F\x05B"\x02\u019E\u019B\x03\x02\x02\x02' +
    '\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03' +
    '\x02\x02\x02\u01A1A\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3' +
    '\u01A4\x05&\x14\x02\u01A4\u01A5\x056\x1C\x02\u01A5\u01AB\x03\x02\x02\x02' +
    '\u01A6\u01A8\x05(\x15\x02\u01A7\u01A9\x05H%\x02\u01A8\u01A7\x03\x02\x02' +
    '\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01A3' +
    '\x03\x02\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01ABC\x03\x02\x02\x02\u01AC' +
    '\u01AD\b#\x01\x02\u01AD\u01AE\x076\x02\x02\u01AE\u01B4\x03\x02\x02\x02' +
    '\u01AF\u01B0\f\x03\x02\x02\u01B0\u01B1\x07-\x02\x02\u01B1\u01B3\x076\x02' +
    '\x02\u01B2\u01AF\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2' +
    '\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5E\x03\x02\x02\x02\u01B6' +
    '\u01B4\x03\x02\x02\x02\u01B7\u01B9\x052\x1A\x02\u01B8\u01BA\x05H%\x02' +
    '\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BAG\x03\x02' +
    '\x02\x02\u01BB\u01C1\x05:\x1E\x02\u01BC\u01BE\x05:\x1E\x02\u01BD\u01BC' +
    '\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02' +
    '\u01BF\u01C1\x05J&\x02\u01C0\u01BB\x03\x02\x02\x02\u01C0\u01BD\x03\x02' +
    '\x02\x02\u01C1I\x03\x02\x02\x02\u01C2\u01C3\b&\x01\x02\u01C3\u01C4\x07' +
    '\x16\x02\x02\u01C4\u01C5\x05H%\x02\u01C5\u01C6\x07\x17\x02\x02\u01C6\u01CD' +
    '\x03\x02\x02\x02\u01C7\u01C9\x07\x16\x02\x02\u01C8\u01CA\x05> \x02\u01C9' +
    '\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02' +
    '\x02\x02\u01CB\u01CD\x07\x17\x02\x02\u01CC\u01C2\x03\x02\x02\x02\u01CC' +
    '\u01C7\x03\x02\x02\x02\u01CD\u01DC\x03\x02\x02\x02\u01CE\u01CF\f\x04\x02' +
    '\x02\u01CF\u01D1\x07\x18\x02\x02\u01D0\u01D2\x05"\x12\x02\u01D1\u01D0' +
    '\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02' +
    '\u01D3\u01DB\x07\x19\x02\x02\u01D4\u01D5\f\x03\x02\x02\u01D5\u01D7\x07' +
    '\x16\x02\x02\u01D6\u01D8\x05> \x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8' +
    '\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DB\x07\x17\x02\x02' +
    '\u01DA\u01CE\x03\x02\x02\x02\u01DA\u01D4\x03\x02\x02\x02\u01DB\u01DE\x03' +
    '\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD' +
    'K\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01EA\x05\x1C\x0F' +
    '\x02\u01E0\u01E1\x07\x1A\x02\x02\u01E1\u01E2\x05N(\x02\u01E2\u01E3\x07' +
    '\x1B\x02\x02\u01E3\u01EA\x03\x02\x02\x02\u01E4\u01E5\x07\x1A\x02\x02\u01E5' +
    '\u01E6\x05N(\x02\u01E6\u01E7\x07-\x02\x02\u01E7\u01E8\x07\x1B\x02\x02' +
    '\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01DF\x03\x02\x02\x02\u01E9\u01E0\x03' +
    '\x02\x02\x02\u01E9\u01E4\x03\x02\x02\x02\u01EAM\x03\x02\x02\x02\u01EB' +
    "\u01EC\b(\x01\x02\u01EC\u01ED\x05L'\x02\u01ED\u01F3\x03\x02\x02\x02\u01EE" +
    "\u01EF\f\x03\x02\x02\u01EF\u01F0\x07-\x02\x02\u01F0\u01F2\x05L'\x02\u01F1" +
    '\u01EE\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02' +
    '\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4O\x03\x02\x02\x02\u01F5\u01F3' +
    '\x03\x02\x02\x02\u01F6\u01FC\x05R*\x02\u01F7\u01FC\x05X-\x02\u01F8\u01FC' +
    '\x05Z.\x02\u01F9\u01FC\x05\\/\x02\u01FA\u01FC\x05d3\x02\u01FB\u01F6\x03' +
    '\x02\x02\x02\u01FB\u01F7\x03\x02\x02\x02\u01FB\u01F8\x03\x02\x02\x02\u01FB' +
    '\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FCQ\x03\x02\x02' +
    '\x02\u01FD\u01FF\x07\x1A\x02\x02\u01FE\u0200\x05T+\x02\u01FF\u01FE\x03' +
    '\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201' +
    '\u0202\x07\x1B\x02\x02\u0202S\x03\x02\x02\x02\u0203\u0204\b+\x01\x02\u0204' +
    '\u0205\x05V,\x02\u0205\u020A\x03\x02\x02\x02\u0206\u0207\f\x03\x02\x02' +
    '\u0207\u0209\x05V,\x02\u0208\u0206\x03\x02\x02\x02\u0209\u020C\x03\x02' +
    '\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B' +
    'U\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D\u0210\x05P)\x02\u020E' +
    '\u0210\x05$\x13\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E\x03\x02\x02' +
    '\x02\u0210W\x03\x02\x02\x02\u0211\u0213\x05 \x11\x02\u0212\u0211\x03\x02' +
    '\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214' +
    '\u0215\x07,\x02\x02\u0215Y\x03\x02\x02\x02\u0216\u0217\x07\x0E\x02\x02' +
    '\u0217\u0218\x07\x16\x02\x02\u0218\u0219\x05 \x11\x02\u0219\u021A\x07' +
    '\x17\x02\x02\u021A\u021D\x05P)\x02\u021B\u021C\x07\n\x02\x02\u021C\u021E' +
    '\x05P)\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E' +
    '[\x03\x02\x02\x02\u021F\u0220\x07\x14\x02\x02\u0220\u0221\x07\x16\x02' +
    '\x02\u0221\u0222\x05 \x11\x02\u0222\u0223\x07\x17\x02\x02\u0223\u0224' +
    '\x05P)\x02\u0224\u0234\x03\x02\x02\x02\u0225\u0226\x07\b\x02\x02\u0226' +
    '\u0227\x05P)\x02\u0227\u0228\x07\x14\x02\x02\u0228\u0229\x07\x16\x02\x02' +
    '\u0229\u022A\x05 \x11\x02\u022A\u022B\x07\x17'
  private static readonly _serializedATNSegment1: string =
    '\x02\x02\u022B\u022C\x07,\x02\x02\u022C\u0234\x03\x02\x02\x02\u022D\u022E' +
    '\x07\r\x02\x02\u022E\u022F\x07\x16\x02\x02\u022F\u0230\x05^0\x02\u0230' +
    '\u0231\x07\x17\x02\x02\u0231\u0232\x05P)\x02\u0232\u0234\x03\x02\x02\x02' +
    '\u0233\u021F\x03\x02\x02\x02\u0233\u0225\x03\x02\x02\x02\u0233\u022D\x03' +
    '\x02\x02\x02\u0234]\x03\x02\x02\x02\u0235\u0236\x05`1\x02\u0236\u0238' +
    '\x07,\x02\x02\u0237\u0239\x05b2\x02\u0238\u0237\x03\x02\x02\x02\u0238' +
    '\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023C\x07,\x02' +
    '\x02\u023B\u023D\x05b2\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03' +
    '\x02\x02\x02\u023D\u024A\x03\x02\x02\x02\u023E\u0240\x05 \x11\x02\u023F' +
    '\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0241\x03\x02' +
    '\x02\x02\u0241\u0243\x07,\x02\x02\u0242\u0244\x05b2\x02\u0243\u0242\x03' +
    '\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245' +
    '\u0247\x07,\x02\x02\u0246\u0248\x05b2\x02\u0247\u0246\x03\x02\x02\x02' +
    '\u0247\u0248\x03\x02\x02\x02\u0248\u024A\x03\x02\x02\x02\u0249\u0235\x03' +
    '\x02\x02\x02\u0249\u023F\x03\x02\x02\x02\u024A_\x03\x02\x02\x02\u024B' +
    '\u024C\x05&\x14\x02\u024C\u024D\x05,\x17\x02\u024D\u0250\x03\x02\x02\x02' +
    '\u024E\u0250\x05&\x14\x02\u024F\u024B\x03\x02\x02\x02\u024F\u024E\x03' +
    '\x02\x02\x02\u0250a\x03\x02\x02\x02\u0251\u0252\b2\x01\x02\u0252\u0253' +
    '\x05\x1C\x0F\x02\u0253\u0259\x03\x02\x02\x02\u0254\u0255\f\x03\x02\x02' +
    '\u0255\u0256\x07-\x02\x02\u0256\u0258\x05\x1C\x0F\x02\u0257\u0254\x03' +
    '\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259' +
    '\u025A\x03\x02\x02\x02\u025Ac\x03\x02\x02\x02\u025B\u0259\x03\x02\x02' +
    '\x02\u025C\u025D\x07\x07\x02\x02\u025D\u0266\x07,\x02\x02\u025E\u025F' +
    '\x07\x04\x02\x02\u025F\u0266\x07,\x02\x02\u0260\u0262\x07\x11\x02\x02' +
    '\u0261\u0263\x05 \x11\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263\x03' +
    '\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0266\x07,\x02\x02\u0265' +
    '\u025C\x03\x02\x02\x02\u0265\u025E\x03\x02\x02\x02\u0265\u0260\x03\x02' +
    '\x02\x02\u0266e\x03\x02\x02\x02\u0267\u0269\x05&\x14\x02\u0268\u0267\x03' +
    '\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A' +
    '\u026C\x056\x1C\x02\u026B\u026D\x05h5\x02\u026C\u026B\x03\x02\x02\x02' +
    '\u026C\u026D\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x05' +
    'R*\x02\u026Fg\x03\x02\x02\x02\u0270\u0271\b5\x01\x02\u0271\u0272\x05$' +
    '\x13\x02\u0272\u0277\x03\x02\x02\x02\u0273\u0274\f\x03\x02\x02\u0274\u0276' +
    '\x05$\x13\x02\u0275\u0273\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02' +
    '\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278i\x03\x02' +
    '\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027B\x05T+\x02\u027Bk\x03' +
    '\x02\x02\x02Nqw\x84\x8B\x8D\x98\xA3\xAE\xBC\xBE\xCA\xCC\xDE\xE0\xEC\xEE' +
    '\xF9\u0104\u010E\u0110\u0118\u0124\u012E\u0133\u0138\u013C\u0146\u014E' +
    '\u0154\u0158\u015A\u015F\u0169\u016E\u0179\u017C\u017E\u0183\u0187\u018A' +
    '\u0193\u01A0\u01A8\u01AA\u01B4\u01B9\u01BD\u01C0\u01C9\u01CC\u01D1\u01D7' +
    '\u01DA\u01DC\u01E9\u01F3\u01FB\u01FF\u020A\u020F\u0212\u021D\u0233\u0238' +
    '\u023C\u023F\u0243\u0247\u0249\u024F\u0259\u0262\u0265\u0268\u026C\u0277'
  public static readonly _serializedATN: string = Utils.join(
    [CParser._serializedATNSegment0, CParser._serializedATNSegment1],
    ''
  )
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CParser.__ATN) {
      CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN))
    }

    return CParser.__ATN
  }
}

export class PrimaryExpressionContext extends ParserRuleContext {
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Identifier, 0)
  }
  public Constant(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Constant, 0)
  }
  public StringLiteral(): TerminalNode[]
  public StringLiteral(i: number): TerminalNode
  public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.StringLiteral)
    } else {
      return this.getToken(CParser.StringLiteral, i)
    }
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftParen, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightParen, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_primaryExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PostfixExpressionContext extends ParserRuleContext {
  public primaryExpression(): PrimaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, PrimaryExpressionContext)
  }
  public postfixExpression(): PostfixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostfixExpressionContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftBracket, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightBracket, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightParen, 0)
  }
  public argumentExpressionList(): ArgumentExpressionListContext | undefined {
    return this.tryGetRuleContext(0, ArgumentExpressionListContext)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.PlusPlus, 0)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.MinusMinus, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_postfixExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterPostfixExpression) {
      listener.enterPostfixExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitPostfixExpression) {
      listener.exitPostfixExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitPostfixExpression) {
      return visitor.visitPostfixExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArgumentExpressionListContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getRuleContext(0, AssignmentExpressionContext)
  }
  public argumentExpressionList(): ArgumentExpressionListContext | undefined {
    return this.tryGetRuleContext(0, ArgumentExpressionListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_argumentExpressionList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterArgumentExpressionList) {
      listener.enterArgumentExpressionList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitArgumentExpressionList) {
      listener.exitArgumentExpressionList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitArgumentExpressionList) {
      return visitor.visitArgumentExpressionList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryExpressionContext extends ParserRuleContext {
  public postfixExpression(): PostfixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostfixExpressionContext)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.PlusPlus, 0)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.MinusMinus, 0)
  }
  public unaryOperator(): UnaryOperatorContext | undefined {
    return this.tryGetRuleContext(0, UnaryOperatorContext)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_unaryExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryOperatorContext extends ParserRuleContext {
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Star, 0)
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Minus, 0)
  }
  public Not(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Not, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_unaryOperator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterUnaryOperator) {
      listener.enterUnaryOperator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitUnaryOperator) {
      listener.exitUnaryOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitUnaryOperator) {
      return visitor.visitUnaryOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CastExpressionContext extends ParserRuleContext {
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftParen, 0)
  }
  public typeName(): TypeNameContext | undefined {
    return this.tryGetRuleContext(0, TypeNameContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightParen, 0)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  public DigitSequence(): TerminalNode | undefined {
    return this.tryGetToken(CParser.DigitSequence, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_castExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterCastExpression) {
      listener.enterCastExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitCastExpression) {
      listener.exitCastExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitCastExpression) {
      return visitor.visitCastExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MultiplicativeExpressionContext extends ParserRuleContext {
  public castExpression(): CastExpressionContext {
    return this.getRuleContext(0, CastExpressionContext)
  }
  public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
    return this.tryGetRuleContext(0, MultiplicativeExpressionContext)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Star, 0)
  }
  public Div(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Div, 0)
  }
  public Mod(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Mod, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_multiplicativeExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpression) {
      return visitor.visitMultiplicativeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AdditiveExpressionContext extends ParserRuleContext {
  public multiplicativeExpression(): MultiplicativeExpressionContext {
    return this.getRuleContext(0, MultiplicativeExpressionContext)
  }
  public additiveExpression(): AdditiveExpressionContext | undefined {
    return this.tryGetRuleContext(0, AdditiveExpressionContext)
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Minus, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_additiveExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAdditiveExpression) {
      return visitor.visitAdditiveExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class RelationalExpressionContext extends ParserRuleContext {
  public additiveExpression(): AdditiveExpressionContext {
    return this.getRuleContext(0, AdditiveExpressionContext)
  }
  public relationalExpression(): RelationalExpressionContext | undefined {
    return this.tryGetRuleContext(0, RelationalExpressionContext)
  }
  public Less(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Less, 0)
  }
  public Greater(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Greater, 0)
  }
  public LessEqual(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LessEqual, 0)
  }
  public GreaterEqual(): TerminalNode | undefined {
    return this.tryGetToken(CParser.GreaterEqual, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_relationalExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterRelationalExpression) {
      listener.enterRelationalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitRelationalExpression) {
      listener.exitRelationalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitRelationalExpression) {
      return visitor.visitRelationalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EqualityExpressionContext extends ParserRuleContext {
  public relationalExpression(): RelationalExpressionContext {
    return this.getRuleContext(0, RelationalExpressionContext)
  }
  public equalityExpression(): EqualityExpressionContext | undefined {
    return this.tryGetRuleContext(0, EqualityExpressionContext)
  }
  public Equal(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Equal, 0)
  }
  public NotEqual(): TerminalNode | undefined {
    return this.tryGetToken(CParser.NotEqual, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_equalityExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterEqualityExpression) {
      listener.enterEqualityExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitEqualityExpression) {
      listener.exitEqualityExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitEqualityExpression) {
      return visitor.visitEqualityExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalAndExpressionContext extends ParserRuleContext {
  public equalityExpression(): EqualityExpressionContext {
    return this.getRuleContext(0, EqualityExpressionContext)
  }
  public logicalAndExpression(): LogicalAndExpressionContext | undefined {
    return this.tryGetRuleContext(0, LogicalAndExpressionContext)
  }
  public AndAnd(): TerminalNode | undefined {
    return this.tryGetToken(CParser.AndAnd, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_logicalAndExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterLogicalAndExpression) {
      listener.enterLogicalAndExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitLogicalAndExpression) {
      listener.exitLogicalAndExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitLogicalAndExpression) {
      return visitor.visitLogicalAndExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalOrExpressionContext extends ParserRuleContext {
  public logicalAndExpression(): LogicalAndExpressionContext {
    return this.getRuleContext(0, LogicalAndExpressionContext)
  }
  public logicalOrExpression(): LogicalOrExpressionContext | undefined {
    return this.tryGetRuleContext(0, LogicalOrExpressionContext)
  }
  public OrOr(): TerminalNode | undefined {
    return this.tryGetToken(CParser.OrOr, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_logicalOrExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterLogicalOrExpression) {
      listener.enterLogicalOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitLogicalOrExpression) {
      listener.exitLogicalOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitLogicalOrExpression) {
      return visitor.visitLogicalOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalExpressionContext extends ParserRuleContext {
  public logicalOrExpression(): LogicalOrExpressionContext {
    return this.getRuleContext(0, LogicalOrExpressionContext)
  }
  public Question(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Question, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Colon, 0)
  }
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_conditionalExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public assignmentOperator(): AssignmentOperatorContext | undefined {
    return this.tryGetRuleContext(0, AssignmentOperatorContext)
  }
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public DigitSequence(): TerminalNode | undefined {
    return this.tryGetToken(CParser.DigitSequence, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_assignmentExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAssignmentExpression) {
      listener.enterAssignmentExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAssignmentExpression) {
      listener.exitAssignmentExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAssignmentExpression) {
      return visitor.visitAssignmentExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentOperatorContext extends ParserRuleContext {
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Assign, 0)
  }
  public StarAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.StarAssign, 0)
  }
  public DivAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.DivAssign, 0)
  }
  public ModAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.ModAssign, 0)
  }
  public PlusAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.PlusAssign, 0)
  }
  public MinusAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.MinusAssign, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_assignmentOperator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAssignmentOperator) {
      listener.enterAssignmentOperator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAssignmentOperator) {
      listener.exitAssignmentOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAssignmentOperator) {
      return visitor.visitAssignmentOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getRuleContext(0, AssignmentExpressionContext)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_expression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstantExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext {
    return this.getRuleContext(0, ConditionalExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_constantExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterConstantExpression) {
      listener.enterConstantExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitConstantExpression) {
      listener.exitConstantExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitConstantExpression) {
      return visitor.visitConstantExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiersContext)
  }
  public initDeclaratorList(): InitDeclaratorListContext | undefined {
    return this.tryGetRuleContext(0, InitDeclaratorListContext)
  }
  public Semi(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Semi, 0)
  }
  public functionDefinition(): FunctionDefinitionContext | undefined {
    return this.tryGetRuleContext(0, FunctionDefinitionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_declaration
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDeclaration) {
      listener.enterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDeclaration) {
      listener.exitDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDeclaration) {
      return visitor.visitDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationSpecifiersContext extends ParserRuleContext {
  public declarationSpecifier(): DeclarationSpecifierContext[]
  public declarationSpecifier(i: number): DeclarationSpecifierContext
  public declarationSpecifier(
    i?: number
  ): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationSpecifierContext)
    } else {
      return this.getRuleContext(i, DeclarationSpecifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_declarationSpecifiers
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDeclarationSpecifiers) {
      listener.enterDeclarationSpecifiers(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDeclarationSpecifiers) {
      listener.exitDeclarationSpecifiers(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDeclarationSpecifiers) {
      return visitor.visitDeclarationSpecifiers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationSpecifiers2Context extends ParserRuleContext {
  public declarationSpecifier(): DeclarationSpecifierContext[]
  public declarationSpecifier(i: number): DeclarationSpecifierContext
  public declarationSpecifier(
    i?: number
  ): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationSpecifierContext)
    } else {
      return this.getRuleContext(i, DeclarationSpecifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_declarationSpecifiers2
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDeclarationSpecifiers2) {
      listener.enterDeclarationSpecifiers2(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDeclarationSpecifiers2) {
      listener.exitDeclarationSpecifiers2(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDeclarationSpecifiers2) {
      return visitor.visitDeclarationSpecifiers2(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationSpecifierContext extends ParserRuleContext {
  public typeSpecifier(): TypeSpecifierContext | undefined {
    return this.tryGetRuleContext(0, TypeSpecifierContext)
  }
  public typeQualifier(): TypeQualifierContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_declarationSpecifier
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDeclarationSpecifier) {
      listener.enterDeclarationSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDeclarationSpecifier) {
      listener.exitDeclarationSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDeclarationSpecifier) {
      return visitor.visitDeclarationSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitDeclaratorListContext extends ParserRuleContext {
  public initDeclarator(): InitDeclaratorContext {
    return this.getRuleContext(0, InitDeclaratorContext)
  }
  public initDeclaratorList(): InitDeclaratorListContext | undefined {
    return this.tryGetRuleContext(0, InitDeclaratorListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_initDeclaratorList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterInitDeclaratorList) {
      listener.enterInitDeclaratorList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitInitDeclaratorList) {
      listener.exitInitDeclaratorList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitInitDeclaratorList) {
      return visitor.visitInitDeclaratorList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitDeclaratorContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Assign, 0)
  }
  public initializer(): InitializerContext | undefined {
    return this.tryGetRuleContext(0, InitializerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_initDeclarator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterInitDeclarator) {
      listener.enterInitDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitInitDeclarator) {
      listener.exitInitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitInitDeclarator) {
      return visitor.visitInitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeSpecifierContext extends ParserRuleContext {
  public Void(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Void, 0)
  }
  public Char(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Char, 0)
  }
  public Short(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Short, 0)
  }
  public Int(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Int, 0)
  }
  public Long(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Long, 0)
  }
  public Float(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Float, 0)
  }
  public Double(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Double, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_typeSpecifier
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterTypeSpecifier) {
      listener.enterTypeSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitTypeSpecifier) {
      listener.exitTypeSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitTypeSpecifier) {
      return visitor.visitTypeSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SpecifierQualifierListContext extends ParserRuleContext {
  public typeSpecifier(): TypeSpecifierContext | undefined {
    return this.tryGetRuleContext(0, TypeSpecifierContext)
  }
  public specifierQualifierList(): SpecifierQualifierListContext | undefined {
    return this.tryGetRuleContext(0, SpecifierQualifierListContext)
  }
  public typeQualifier(): TypeQualifierContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_specifierQualifierList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterSpecifierQualifierList) {
      listener.enterSpecifierQualifierList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitSpecifierQualifierList) {
      listener.exitSpecifierQualifierList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitSpecifierQualifierList) {
      return visitor.visitSpecifierQualifierList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeQualifierContext extends ParserRuleContext {
  public Const(): TerminalNode {
    return this.getToken(CParser.Const, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_typeQualifier
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterTypeQualifier) {
      listener.enterTypeQualifier(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitTypeQualifier) {
      listener.exitTypeQualifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitTypeQualifier) {
      return visitor.visitTypeQualifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclaratorContext extends ParserRuleContext {
  public directDeclarator(): DirectDeclaratorContext {
    return this.getRuleContext(0, DirectDeclaratorContext)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_declarator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDeclarator) {
      listener.enterDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDeclarator) {
      listener.exitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDeclarator) {
      return visitor.visitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DirectDeclaratorContext extends ParserRuleContext {
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Identifier, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftParen, 0)
  }
  public declarator(): DeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DeclaratorContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightParen, 0)
  }
  public directDeclarator(): DirectDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DirectDeclaratorContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightBracket, 0)
  }
  public constantExpression(): ConstantExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConstantExpressionContext)
  }
  public parameterTypeList(): ParameterTypeListContext | undefined {
    return this.tryGetRuleContext(0, ParameterTypeListContext)
  }
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_directDeclarator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDirectDeclarator) {
      listener.enterDirectDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDirectDeclarator) {
      listener.exitDirectDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDirectDeclarator) {
      return visitor.visitDirectDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerContext extends ParserRuleContext {
  public Star(): TerminalNode {
    return this.getToken(CParser.Star, 0)
  }
  public typeQualifierList(): TypeQualifierListContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierListContext)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_pointer
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterPointer) {
      listener.enterPointer(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitPointer) {
      listener.exitPointer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitPointer) {
      return visitor.visitPointer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeQualifierListContext extends ParserRuleContext {
  public typeQualifier(): TypeQualifierContext {
    return this.getRuleContext(0, TypeQualifierContext)
  }
  public typeQualifierList(): TypeQualifierListContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_typeQualifierList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterTypeQualifierList) {
      listener.enterTypeQualifierList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitTypeQualifierList) {
      listener.exitTypeQualifierList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitTypeQualifierList) {
      return visitor.visitTypeQualifierList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterTypeListContext extends ParserRuleContext {
  public parameterList(): ParameterListContext {
    return this.getRuleContext(0, ParameterListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_parameterTypeList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterParameterTypeList) {
      listener.enterParameterTypeList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitParameterTypeList) {
      listener.exitParameterTypeList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitParameterTypeList) {
      return visitor.visitParameterTypeList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterListContext extends ParserRuleContext {
  public parameterDeclaration(): ParameterDeclarationContext {
    return this.getRuleContext(0, ParameterDeclarationContext)
  }
  public parameterList(): ParameterListContext | undefined {
    return this.tryGetRuleContext(0, ParameterListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_parameterList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterParameterList) {
      listener.enterParameterList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitParameterList) {
      listener.exitParameterList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitParameterList) {
      return visitor.visitParameterList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterDeclarationContext extends ParserRuleContext {
  public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiersContext)
  }
  public declarator(): DeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DeclaratorContext)
  }
  public declarationSpecifiers2(): DeclarationSpecifiers2Context | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiers2Context)
  }
  public abstractDeclarator(): AbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_parameterDeclaration
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterParameterDeclaration) {
      listener.enterParameterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitParameterDeclaration) {
      listener.exitParameterDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitParameterDeclaration) {
      return visitor.visitParameterDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierListContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(CParser.Identifier, 0)
  }
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_identifierList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterIdentifierList) {
      listener.enterIdentifierList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitIdentifierList) {
      listener.exitIdentifierList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitIdentifierList) {
      return visitor.visitIdentifierList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeNameContext extends ParserRuleContext {
  public specifierQualifierList(): SpecifierQualifierListContext {
    return this.getRuleContext(0, SpecifierQualifierListContext)
  }
  public abstractDeclarator(): AbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_typeName
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterTypeName) {
      listener.enterTypeName(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitTypeName) {
      listener.exitTypeName(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitTypeName) {
      return visitor.visitTypeName(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AbstractDeclaratorContext extends ParserRuleContext {
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_abstractDeclarator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAbstractDeclarator) {
      listener.enterAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAbstractDeclarator) {
      listener.exitAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAbstractDeclarator) {
      return visitor.visitAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DirectAbstractDeclaratorContext extends ParserRuleContext {
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftParen, 0)
  }
  public abstractDeclarator(): AbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightParen, 0)
  }
  public parameterTypeList(): ParameterTypeListContext | undefined {
    return this.tryGetRuleContext(0, ParameterTypeListContext)
  }
  public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightBracket, 0)
  }
  public constantExpression(): ConstantExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConstantExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_directAbstractDeclarator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDirectAbstractDeclarator) {
      listener.enterDirectAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDirectAbstractDeclarator) {
      listener.exitDirectAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclarator) {
      return visitor.visitDirectAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public LeftBrace(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftBrace, 0)
  }
  public initializerList(): InitializerListContext | undefined {
    return this.tryGetRuleContext(0, InitializerListContext)
  }
  public RightBrace(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightBrace, 0)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_initializer
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterInitializer) {
      listener.enterInitializer(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitInitializer) {
      listener.exitInitializer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitInitializer) {
      return visitor.visitInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerListContext extends ParserRuleContext {
  public initializer(): InitializerContext {
    return this.getRuleContext(0, InitializerContext)
  }
  public initializerList(): InitializerListContext | undefined {
    return this.tryGetRuleContext(0, InitializerListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_initializerList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterInitializerList) {
      listener.enterInitializerList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitInitializerList) {
      listener.exitInitializerList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitInitializerList) {
      return visitor.visitInitializerList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public compoundStatement(): CompoundStatementContext | undefined {
    return this.tryGetRuleContext(0, CompoundStatementContext)
  }
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
  }
  public selectionStatement(): SelectionStatementContext | undefined {
    return this.tryGetRuleContext(0, SelectionStatementContext)
  }
  public iterationStatement(): IterationStatementContext | undefined {
    return this.tryGetRuleContext(0, IterationStatementContext)
  }
  public jumpStatement(): JumpStatementContext | undefined {
    return this.tryGetRuleContext(0, JumpStatementContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_statement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CompoundStatementContext extends ParserRuleContext {
  public LeftBrace(): TerminalNode {
    return this.getToken(CParser.LeftBrace, 0)
  }
  public RightBrace(): TerminalNode {
    return this.getToken(CParser.RightBrace, 0)
  }
  public blockItemList(): BlockItemListContext | undefined {
    return this.tryGetRuleContext(0, BlockItemListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_compoundStatement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterCompoundStatement) {
      listener.enterCompoundStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitCompoundStatement) {
      listener.exitCompoundStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitCompoundStatement) {
      return visitor.visitCompoundStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockItemListContext extends ParserRuleContext {
  public blockItem(): BlockItemContext {
    return this.getRuleContext(0, BlockItemContext)
  }
  public blockItemList(): BlockItemListContext | undefined {
    return this.tryGetRuleContext(0, BlockItemListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_blockItemList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterBlockItemList) {
      listener.enterBlockItemList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitBlockItemList) {
      listener.exitBlockItemList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitBlockItemList) {
      return visitor.visitBlockItemList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockItemContext extends ParserRuleContext {
  public statement(): StatementContext | undefined {
    return this.tryGetRuleContext(0, StatementContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_blockItem
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterBlockItem) {
      listener.enterBlockItem(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitBlockItem) {
      listener.exitBlockItem(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitBlockItem) {
      return visitor.visitBlockItem(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public Semi(): TerminalNode {
    return this.getToken(CParser.Semi, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_expressionStatement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SelectionStatementContext extends ParserRuleContext {
  public If(): TerminalNode {
    return this.getToken(CParser.If, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(CParser.LeftParen, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(CParser.RightParen, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  public Else(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Else, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_selectionStatement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterSelectionStatement) {
      listener.enterSelectionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitSelectionStatement) {
      listener.exitSelectionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitSelectionStatement) {
      return visitor.visitSelectionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IterationStatementContext extends ParserRuleContext {
  public While(): TerminalNode | undefined {
    return this.tryGetToken(CParser.While, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(CParser.LeftParen, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(CParser.RightParen, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public Do(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Do, 0)
  }
  public Semi(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Semi, 0)
  }
  public For(): TerminalNode | undefined {
    return this.tryGetToken(CParser.For, 0)
  }
  public forCondition(): ForConditionContext | undefined {
    return this.tryGetRuleContext(0, ForConditionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_iterationStatement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterIterationStatement) {
      listener.enterIterationStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitIterationStatement) {
      listener.exitIterationStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitIterationStatement) {
      return visitor.visitIterationStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForConditionContext extends ParserRuleContext {
  public forDeclaration(): ForDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ForDeclarationContext)
  }
  public Semi(): TerminalNode[]
  public Semi(i: number): TerminalNode
  public Semi(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Semi)
    } else {
      return this.getToken(CParser.Semi, i)
    }
  }
  public forExpression(): ForExpressionContext[]
  public forExpression(i: number): ForExpressionContext
  public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ForExpressionContext)
    } else {
      return this.getRuleContext(i, ForExpressionContext)
    }
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_forCondition
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterForCondition) {
      listener.enterForCondition(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitForCondition) {
      listener.exitForCondition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitForCondition) {
      return visitor.visitForCondition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForDeclarationContext extends ParserRuleContext {
  public declarationSpecifiers(): DeclarationSpecifiersContext {
    return this.getRuleContext(0, DeclarationSpecifiersContext)
  }
  public initDeclaratorList(): InitDeclaratorListContext | undefined {
    return this.tryGetRuleContext(0, InitDeclaratorListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_forDeclaration
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterForDeclaration) {
      listener.enterForDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitForDeclaration) {
      listener.exitForDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitForDeclaration) {
      return visitor.visitForDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForExpressionContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getRuleContext(0, AssignmentExpressionContext)
  }
  public forExpression(): ForExpressionContext | undefined {
    return this.tryGetRuleContext(0, ForExpressionContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_forExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterForExpression) {
      listener.enterForExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitForExpression) {
      listener.exitForExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitForExpression) {
      return visitor.visitForExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class JumpStatementContext extends ParserRuleContext {
  public Continue(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Continue, 0)
  }
  public Semi(): TerminalNode {
    return this.getToken(CParser.Semi, 0)
  }
  public Break(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Break, 0)
  }
  public Return(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Return, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_jumpStatement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterJumpStatement) {
      listener.enterJumpStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitJumpStatement) {
      listener.exitJumpStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitJumpStatement) {
      return visitor.visitJumpStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionDefinitionContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiersContext)
  }
  public declarationList(): DeclarationListContext | undefined {
    return this.tryGetRuleContext(0, DeclarationListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_functionDefinition
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitFunctionDefinition) {
      return visitor.visitFunctionDefinition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationListContext extends ParserRuleContext {
  public declaration(): DeclarationContext {
    return this.getRuleContext(0, DeclarationContext)
  }
  public declarationList(): DeclarationListContext | undefined {
    return this.tryGetRuleContext(0, DeclarationListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_declarationList
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterDeclarationList) {
      listener.enterDeclarationList(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitDeclarationList) {
      listener.exitDeclarationList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitDeclarationList) {
      return visitor.visitDeclarationList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ProgramContext extends ParserRuleContext {
  public blockItemList(): BlockItemListContext {
    return this.getRuleContext(0, BlockItemListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_program
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
