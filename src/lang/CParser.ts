// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CListener } from "./CListener";
import { CVisitor } from "./CVisitor";


export class CParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly Break = 2;
	public static readonly Char = 3;
	public static readonly Const = 4;
	public static readonly Continue = 5;
	public static readonly Do = 6;
	public static readonly Double = 7;
	public static readonly Else = 8;
	public static readonly Enum = 9;
	public static readonly Float = 10;
	public static readonly For = 11;
	public static readonly If = 12;
	public static readonly Int = 13;
	public static readonly Long = 14;
	public static readonly Return = 15;
	public static readonly Short = 16;
	public static readonly Void = 17;
	public static readonly While = 18;
	public static readonly Bool = 19;
	public static readonly LeftParen = 20;
	public static readonly RightParen = 21;
	public static readonly LeftBracket = 22;
	public static readonly RightBracket = 23;
	public static readonly LeftBrace = 24;
	public static readonly RightBrace = 25;
	public static readonly Less = 26;
	public static readonly LessEqual = 27;
	public static readonly Greater = 28;
	public static readonly GreaterEqual = 29;
	public static readonly Plus = 30;
	public static readonly PlusPlus = 31;
	public static readonly Minus = 32;
	public static readonly MinusMinus = 33;
	public static readonly Star = 34;
	public static readonly Div = 35;
	public static readonly Mod = 36;
	public static readonly AndAnd = 37;
	public static readonly OrOr = 38;
	public static readonly Not = 39;
	public static readonly Question = 40;
	public static readonly Colon = 41;
	public static readonly Semi = 42;
	public static readonly Comma = 43;
	public static readonly Assign = 44;
	public static readonly StarAssign = 45;
	public static readonly DivAssign = 46;
	public static readonly ModAssign = 47;
	public static readonly PlusAssign = 48;
	public static readonly MinusAssign = 49;
	public static readonly Equal = 50;
	public static readonly NotEqual = 51;
	public static readonly Identifier = 52;
	public static readonly Constant = 53;
	public static readonly DigitSequence = 54;
	public static readonly StringLiteral = 55;
	public static readonly ComplexDefine = 56;
	public static readonly IncludeDirective = 57;
	public static readonly AsmBlock = 58;
	public static readonly LineAfterPreprocessing = 59;
	public static readonly LineDirective = 60;
	public static readonly PragmaDirective = 61;
	public static readonly Whitespace = 62;
	public static readonly Newline = 63;
	public static readonly BlockComment = 64;
	public static readonly LineComment = 65;
	public static readonly RULE_primaryExpression = 0;
	public static readonly RULE_postfixExpression = 1;
	public static readonly RULE_argumentExpressionList = 2;
	public static readonly RULE_unaryExpression = 3;
	public static readonly RULE_unaryOperator = 4;
	public static readonly RULE_castExpression = 5;
	public static readonly RULE_multiplicativeExpression = 6;
	public static readonly RULE_additiveExpression = 7;
	public static readonly RULE_relationalExpression = 8;
	public static readonly RULE_equalityExpression = 9;
	public static readonly RULE_logicalAndExpression = 10;
	public static readonly RULE_logicalOrExpression = 11;
	public static readonly RULE_conditionalExpression = 12;
	public static readonly RULE_assignmentExpression = 13;
	public static readonly RULE_assignmentOperator = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_constantExpression = 16;
	public static readonly RULE_declaration = 17;
	public static readonly RULE_initDeclaratorList = 18;
	public static readonly RULE_initDeclarator = 19;
	public static readonly RULE_typeSpecifier = 20;
	public static readonly RULE_declarator = 21;
	public static readonly RULE_directDeclarator = 22;
	public static readonly RULE_pointer = 23;
	public static readonly RULE_parameterTypeList = 24;
	public static readonly RULE_parameterList = 25;
	public static readonly RULE_parameterDeclaration = 26;
	public static readonly RULE_identifierList = 27;
	public static readonly RULE_typeName = 28;
	public static readonly RULE_abstractDeclarator = 29;
	public static readonly RULE_directAbstractDeclarator = 30;
	public static readonly RULE_initializer = 31;
	public static readonly RULE_initializerList = 32;
	public static readonly RULE_statement = 33;
	public static readonly RULE_compoundStatement = 34;
	public static readonly RULE_blockItemList = 35;
	public static readonly RULE_blockItem = 36;
	public static readonly RULE_expressionStatement = 37;
	public static readonly RULE_selectionStatement = 38;
	public static readonly RULE_iterationStatement = 39;
	public static readonly RULE_forCondition = 40;
	public static readonly RULE_jumpStatement = 41;
	public static readonly RULE_functionDefinition = 42;
	public static readonly RULE_programItem = 43;
	public static readonly RULE_program = 44;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "postfixExpression", "argumentExpressionList", "unaryExpression", 
		"unaryOperator", "castExpression", "multiplicativeExpression", "additiveExpression", 
		"relationalExpression", "equalityExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"initDeclaratorList", "initDeclarator", "typeSpecifier", "declarator", 
		"directDeclarator", "pointer", "parameterTypeList", "parameterList", "parameterDeclaration", 
		"identifierList", "typeName", "abstractDeclarator", "directAbstractDeclarator", 
		"initializer", "initializerList", "statement", "compoundStatement", "blockItemList", 
		"blockItem", "expressionStatement", "selectionStatement", "iterationStatement", 
		"forCondition", "jumpStatement", "functionDefinition", "programItem", 
		"program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'&'", "'break'", "'char'", "'const'", "'continue'", "'do'", 
		"'double'", "'else'", "'enum'", "'float'", "'for'", "'if'", "'int'", "'long'", 
		"'return'", "'short'", "'void'", "'while'", "'_Bool'", "'('", "')'", "'['", 
		"']'", "'{'", "'}'", "'<'", "'<='", "'>'", "'>='", "'+'", "'++'", "'-'", 
		"'--'", "'*'", "'/'", "'%'", "'&&'", "'||'", "'!'", "'?'", "':'", "';'", 
		"','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'=='", "'!='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "Break", "Char", "Const", "Continue", "Do", "Double", 
		"Else", "Enum", "Float", "For", "If", "Int", "Long", "Return", "Short", 
		"Void", "While", "Bool", "LeftParen", "RightParen", "LeftBracket", "RightBracket", 
		"LeftBrace", "RightBrace", "Less", "LessEqual", "Greater", "GreaterEqual", 
		"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "AndAnd", 
		"OrOr", "Not", "Question", "Colon", "Semi", "Comma", "Assign", "StarAssign", 
		"DivAssign", "ModAssign", "PlusAssign", "MinusAssign", "Equal", "NotEqual", 
		"Identifier", "Constant", "DigitSequence", "StringLiteral", "ComplexDefine", 
		"IncludeDirective", "AsmBlock", "LineAfterPreprocessing", "LineDirective", 
		"PragmaDirective", "Whitespace", "Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CParser._ATN, this);
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_primaryExpression);
		try {
			let _alt: number;
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.match(CParser.Identifier);
				}
				break;
			case CParser.Constant:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.match(CParser.Constant);
				}
				break;
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 92;
						this.match(CParser.StringLiteral);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 95;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case CParser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 97;
				this.match(CParser.LeftParen);
				this.state = 98;
				this.expression(0);
				this.state = 99;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixExpression(): PostfixExpressionContext;
	public postfixExpression(_p: number): PostfixExpressionContext;
	// @RuleVersion(0)
	public postfixExpression(_p?: number): PostfixExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CParser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 104;
			this.primaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 123;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 121;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 106;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 107;
						this.match(CParser.LeftBracket);
						this.state = 108;
						this.expression(0);
						this.state = 109;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 111;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 112;
						this.match(CParser.LeftParen);
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
							{
							this.state = 113;
							this.argumentExpressionList(0);
							}
						}

						this.state = 116;
						this.match(CParser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 118;
						this.match(CParser.PlusPlus);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 119;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 120;
						this.match(CParser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public argumentExpressionList(): ArgumentExpressionListContext;
	public argumentExpressionList(_p: number): ArgumentExpressionListContext;
	// @RuleVersion(0)
	public argumentExpressionList(_p?: number): ArgumentExpressionListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, _parentState);
		let _prevctx: ArgumentExpressionListContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CParser.RULE_argumentExpressionList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 127;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArgumentExpressionListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_argumentExpressionList);
					this.state = 129;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 130;
					this.match(CParser.Comma);
					this.state = 131;
					this.assignmentExpression();
					}
					}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CParser.RULE_unaryExpression);
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.LeftParen:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.postfixExpression(0);
				}
				break;
			case CParser.PlusPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
				this.match(CParser.PlusPlus);
				this.state = 139;
				this.unaryExpression();
				}
				break;
			case CParser.MinusMinus:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 140;
				this.match(CParser.MinusMinus);
				this.state = 141;
				this.unaryExpression();
				}
				break;
			case CParser.T__0:
			case CParser.Plus:
			case CParser.Minus:
			case CParser.Star:
			case CParser.Not:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 142;
				this.unaryOperator();
				this.state = 143;
				this.castExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if (!(_la === CParser.T__0 || _la === CParser.Plus || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_castExpression);
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				this.match(CParser.LeftParen);
				this.state = 151;
				this.typeName();
				this.state = 152;
				this.match(CParser.RightParen);
				this.state = 153;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, CParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 158;
			this.castExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 169;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 161;
						this.match(CParser.Star);
						this.state = 162;
						this.castExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 164;
						this.match(CParser.Div);
						this.state = 165;
						this.castExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 167;
						this.match(CParser.Mod);
						this.state = 168;
						this.castExpression();
						}
						break;
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, CParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 175;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 185;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 183;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 177;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 178;
						this.match(CParser.Plus);
						this.state = 179;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 180;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 181;
						this.match(CParser.Minus);
						this.state = 182;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, CParser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 189;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 203;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 191;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 192;
						this.match(CParser.Less);
						this.state = 193;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 194;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 195;
						this.match(CParser.Greater);
						this.state = 196;
						this.additiveExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 197;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 198;
						this.match(CParser.LessEqual);
						this.state = 199;
						this.additiveExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 200;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 201;
						this.match(CParser.GreaterEqual);
						this.state = 202;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, CParser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 209;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 219;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 217;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 211;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 212;
						this.match(CParser.Equal);
						this.state = 213;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 214;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 215;
						this.match(CParser.NotEqual);
						this.state = 216;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 223;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_logicalAndExpression);
					this.state = 225;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 226;
					this.match(CParser.AndAnd);
					this.state = 227;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, CParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 234;
			this.logicalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_logicalOrExpression);
					this.state = 236;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 237;
					this.match(CParser.OrOr);
					this.state = 238;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_conditionalExpression);
		try {
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 244;
				this.logicalOrExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.logicalOrExpression(0);
				this.state = 246;
				this.match(CParser.Question);
				this.state = 247;
				this.expression(0);
				this.state = 248;
				this.match(CParser.Colon);
				this.state = 249;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CParser.RULE_assignmentExpression);
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 254;
				this.unaryExpression();
				this.state = 255;
				this.assignmentOperator();
				this.state = 256;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Assign - 44)) | (1 << (CParser.StarAssign - 44)) | (1 << (CParser.DivAssign - 44)) | (1 << (CParser.ModAssign - 44)) | (1 << (CParser.PlusAssign - 44)) | (1 << (CParser.MinusAssign - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 263;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
					this.state = 265;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 266;
					this.match(CParser.Comma);
					this.state = 267;
					this.assignmentExpression();
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.typeSpecifier();
			this.state = 276;
			this.initDeclaratorList(0);
			this.state = 277;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public initDeclaratorList(): InitDeclaratorListContext;
	public initDeclaratorList(_p: number): InitDeclaratorListContext;
	// @RuleVersion(0)
	public initDeclaratorList(_p?: number): InitDeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, _parentState);
		let _prevctx: InitDeclaratorListContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, CParser.RULE_initDeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 280;
			this.initDeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 287;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitDeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initDeclaratorList);
					this.state = 282;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 283;
					this.match(CParser.Comma);
					this.state = 284;
					this.initDeclarator();
					}
					}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CParser.RULE_initDeclarator);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.declarator();
				this.state = 292;
				this.match(CParser.Assign);
				this.state = 293;
				this.initializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Char) | (1 << CParser.Float) | (1 << CParser.Int) | (1 << CParser.Void))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Star) {
				{
				this.state = 299;
				this.pointer();
				}
			}

			this.state = 302;
			this.directDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public directDeclarator(): DirectDeclaratorContext;
	public directDeclarator(_p: number): DirectDeclaratorContext;
	// @RuleVersion(0)
	public directDeclarator(_p?: number): DirectDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectDeclaratorContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, CParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
				{
				this.state = 305;
				this.match(CParser.Identifier);
				}
				break;
			case CParser.LeftParen:
				{
				this.state = 306;
				this.match(CParser.LeftParen);
				this.state = 307;
				this.declarator();
				this.state = 308;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 329;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 312;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 313;
						this.match(CParser.LeftBracket);
						this.state = 315;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
							{
							this.state = 314;
							this.constantExpression();
							}
						}

						this.state = 317;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 318;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 319;
						this.match(CParser.LeftParen);
						this.state = 320;
						this.parameterTypeList();
						this.state = 321;
						this.match(CParser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 323;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 324;
						this.match(CParser.LeftParen);
						this.state = 326;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Identifier) {
							{
							this.state = 325;
							this.identifierList(0);
							}
						}

						this.state = 328;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CParser.RULE_pointer);
		try {
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 334;
				this.match(CParser.Star);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 335;
				this.match(CParser.Star);
				this.state = 336;
				this.pointer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CParser.RULE_parameterTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.parameterList(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public parameterList(): ParameterListContext;
	public parameterList(_p: number): ParameterListContext;
	// @RuleVersion(0)
	public parameterList(_p?: number): ParameterListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, _parentState);
		let _prevctx: ParameterListContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, CParser.RULE_parameterList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 342;
			this.parameterDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 349;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_parameterList);
					this.state = 344;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 345;
					this.match(CParser.Comma);
					this.state = 346;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CParser.RULE_parameterDeclaration);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 352;
				this.typeSpecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 353;
				this.typeSpecifier();
				this.state = 354;
				this.declarator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.typeSpecifier();
				this.state = 357;
				this.abstractDeclarator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public identifierList(): IdentifierListContext;
	public identifierList(_p: number): IdentifierListContext;
	// @RuleVersion(0)
	public identifierList(_p?: number): IdentifierListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, _parentState);
		let _prevctx: IdentifierListContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, CParser.RULE_identifierList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 362;
			this.match(CParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 369;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new IdentifierListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_identifierList);
					this.state = 364;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 365;
					this.match(CParser.Comma);
					this.state = 366;
					this.match(CParser.Identifier);
					}
					}
				}
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.typeSpecifier();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftParen || _la === CParser.Star) {
				{
				this.state = 373;
				this.abstractDeclarator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractDeclarator(): AbstractDeclaratorContext {
		let _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CParser.RULE_abstractDeclarator);
		let _la: number;
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.pointer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Star) {
					{
					this.state = 377;
					this.pointer();
					}
				}

				this.state = 380;
				this.directAbstractDeclarator(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public directAbstractDeclarator(): DirectAbstractDeclaratorContext;
	public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext;
	// @RuleVersion(0)
	public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectAbstractDeclaratorContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, CParser.RULE_directAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				this.match(CParser.LeftParen);
				this.state = 385;
				this.abstractDeclarator();
				this.state = 386;
				this.match(CParser.RightParen);
				}
				break;

			case 2:
				{
				this.state = 388;
				this.match(CParser.LeftParen);
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Char) | (1 << CParser.Float) | (1 << CParser.Int) | (1 << CParser.Void))) !== 0)) {
					{
					this.state = 389;
					this.parameterTypeList();
					}
				}

				this.state = 392;
				this.match(CParser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 409;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 407;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 395;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 396;
						this.match(CParser.LeftBracket);
						this.state = 398;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
							{
							this.state = 397;
							this.constantExpression();
							}
						}

						this.state = 400;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 401;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 402;
						this.match(CParser.LeftParen);
						this.state = 404;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Char) | (1 << CParser.Float) | (1 << CParser.Int) | (1 << CParser.Void))) !== 0)) {
							{
							this.state = 403;
							this.parameterTypeList();
							}
						}

						this.state = 406;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CParser.RULE_initializer);
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.assignmentExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.match(CParser.LeftBrace);
				this.state = 414;
				this.initializerList(0);
				this.state = 415;
				this.match(CParser.RightBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 417;
				this.match(CParser.LeftBrace);
				this.state = 418;
				this.initializerList(0);
				this.state = 419;
				this.match(CParser.Comma);
				this.state = 420;
				this.match(CParser.RightBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public initializerList(): InitializerListContext;
	public initializerList(_p: number): InitializerListContext;
	// @RuleVersion(0)
	public initializerList(_p?: number): InitializerListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, _parentState);
		let _prevctx: InitializerListContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, CParser.RULE_initializerList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 425;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initializerList);
					this.state = 427;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 428;
					this.match(CParser.Comma);
					this.state = 429;
					this.initializer();
					}
					}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CParser.RULE_statement);
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.LeftBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 435;
				this.compoundStatement();
				}
				break;
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
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 436;
				this.expressionStatement();
				}
				break;
			case CParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 437;
				this.selectionStatement();
				}
				break;
			case CParser.Do:
			case CParser.For:
			case CParser.While:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 438;
				this.iterationStatement();
				}
				break;
			case CParser.Break:
			case CParser.Continue:
			case CParser.Return:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 439;
				this.jumpStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(CParser.LeftBrace);
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.Break) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Do) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Return) | (1 << CParser.Void) | (1 << CParser.While) | (1 << CParser.LeftParen) | (1 << CParser.LeftBrace) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Semi - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 443;
				this.blockItemList();
				}
			}

			this.state = 446;
			this.match(CParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 448;
				this.blockItem();
				}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.Break) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Do) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Return) | (1 << CParser.Void) | (1 << CParser.While) | (1 << CParser.LeftParen) | (1 << CParser.LeftBrace) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Semi - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CParser.RULE_blockItem);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.Break:
			case CParser.Continue:
			case CParser.Do:
			case CParser.For:
			case CParser.If:
			case CParser.Return:
			case CParser.While:
			case CParser.LeftParen:
			case CParser.LeftBrace:
			case CParser.Plus:
			case CParser.PlusPlus:
			case CParser.Minus:
			case CParser.MinusMinus:
			case CParser.Star:
			case CParser.Not:
			case CParser.Semi:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 453;
				this.statement();
				}
				break;
			case CParser.Char:
			case CParser.Float:
			case CParser.Int:
			case CParser.Void:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 454;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 457;
				this.expression(0);
				}
			}

			this.state = 460;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CParser.RULE_selectionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(CParser.If);
			this.state = 463;
			this.match(CParser.LeftParen);
			this.state = 464;
			this.expression(0);
			this.state = 465;
			this.match(CParser.RightParen);
			this.state = 466;
			this.statement();
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 467;
				this.match(CParser.Else);
				this.state = 468;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CParser.RULE_iterationStatement);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.match(CParser.While);
				this.state = 472;
				this.match(CParser.LeftParen);
				this.state = 473;
				this.expression(0);
				this.state = 474;
				this.match(CParser.RightParen);
				this.state = 475;
				this.statement();
				}
				break;
			case CParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.match(CParser.Do);
				this.state = 478;
				this.statement();
				this.state = 479;
				this.match(CParser.While);
				this.state = 480;
				this.match(CParser.LeftParen);
				this.state = 481;
				this.expression(0);
				this.state = 482;
				this.match(CParser.RightParen);
				this.state = 483;
				this.match(CParser.Semi);
				}
				break;
			case CParser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 485;
				this.match(CParser.For);
				this.state = 486;
				this.match(CParser.LeftParen);
				this.state = 487;
				this.forCondition();
				this.state = 488;
				this.match(CParser.RightParen);
				this.state = 489;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CParser.RULE_forCondition);
		let _la: number;
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Char:
			case CParser.Float:
			case CParser.Int:
			case CParser.Void:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.declaration();
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 494;
					_localctx._test = this.expression(0);
					}
				}

				this.state = 497;
				this.match(CParser.Semi);
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 498;
					_localctx._update = this.expression(0);
					}
				}

				}
				break;
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
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 501;
					_localctx._init = this.expression(0);
					}
				}

				this.state = 504;
				this.match(CParser.Semi);
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 505;
					_localctx._test = this.expression(0);
					}
				}

				this.state = 508;
				this.match(CParser.Semi);
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 509;
					_localctx._update = this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Continue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.match(CParser.Continue);
				this.state = 515;
				this.match(CParser.Semi);
				}
				break;
			case CParser.Break:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 516;
				this.match(CParser.Break);
				this.state = 517;
				this.match(CParser.Semi);
				}
				break;
			case CParser.Return:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 518;
				this.match(CParser.Return);
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.LeftParen) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 519;
					this.expression(0);
					}
				}

				this.state = 522;
				this.match(CParser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CParser.RULE_functionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.typeSpecifier();
			this.state = 526;
			this.declarator();
			this.state = 527;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programItem(): ProgramItemContext {
		let _localctx: ProgramItemContext = new ProgramItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CParser.RULE_programItem);
		try {
			this.state = 532;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 529;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 530;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 531;
				this.functionDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 534;
				this.programItem();
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.Break) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Do) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Return) | (1 << CParser.Void) | (1 << CParser.While) | (1 << CParser.LeftParen) | (1 << CParser.LeftBrace) | (1 << CParser.Plus) | (1 << CParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Not - 32)) | (1 << (CParser.Semi - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Constant - 32)) | (1 << (CParser.StringLiteral - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);

		case 2:
			return this.argumentExpressionList_sempred(_localctx as ArgumentExpressionListContext, predIndex);

		case 6:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

		case 7:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 8:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 9:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 10:
			return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

		case 11:
			return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);

		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 18:
			return this.initDeclaratorList_sempred(_localctx as InitDeclaratorListContext, predIndex);

		case 22:
			return this.directDeclarator_sempred(_localctx as DirectDeclaratorContext, predIndex);

		case 25:
			return this.parameterList_sempred(_localctx as ParameterListContext, predIndex);

		case 27:
			return this.identifierList_sempred(_localctx as IdentifierListContext, predIndex);

		case 30:
			return this.directAbstractDeclarator_sempred(_localctx as DirectAbstractDeclaratorContext, predIndex);

		case 32:
			return this.initializerList_sempred(_localctx as InitializerListContext, predIndex);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private argumentExpressionList_sempred(_localctx: ArgumentExpressionListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 4);

		case 11:
			return this.precpred(this._ctx, 3);

		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 2);

		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initDeclaratorList_sempred(_localctx: InitDeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directDeclarator_sempred(_localctx: DirectDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 3);

		case 21:
			return this.precpred(this._ctx, 2);

		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private parameterList_sempred(_localctx: ParameterListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private identifierList_sempred(_localctx: IdentifierListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directAbstractDeclarator_sempred(_localctx: DirectAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 2);

		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializerList_sempred(_localctx: InitializerListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03C\u021E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x02\x06\x02`\n\x02\r\x02" +
		"\x0E\x02a\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02h\n\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03u\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03|\n\x03" +
		"\f\x03\x0E\x03\x7F\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\x87\n\x04\f\x04\x0E\x04\x8A\v\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x94\n\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x9E\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07" +
		"\b\xAC\n\b\f\b\x0E\b\xAF\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x07\t\xBA\n\t\f\t\x0E\t\xBD\v\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xCE" +
		"\n\n\f\n\x0E\n\xD1\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x07\v\xDC\n\v\f\v\x0E\v\xDF\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x07\f\xE7\n\f\f\f\x0E\f\xEA\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x07\r\xF2\n\r\f\r\x0E\r\xF5\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xFE\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0105\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u010F\n\x11\f\x11\x0E\x11\u0112\v\x11\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\u0120\n\x14\f\x14\x0E\x14\u0123\v\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u012A\n\x15\x03\x16\x03\x16\x03" +
		"\x17\x05\x17\u012F\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0139\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u013E" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0149\n\x18\x03\x18\x07\x18\u014C\n\x18\f\x18\x0E\x18" +
		"\u014F\v\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0154\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u015E\n\x1B\f" +
		"\x1B\x0E\x1B\u0161\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u016A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u0172\n\x1D\f\x1D\x0E\x1D\u0175\v\x1D\x03\x1E\x03\x1E\x05" +
		"\x1E\u0179\n\x1E\x03\x1F\x03\x1F\x05\x1F\u017D\n\x1F\x03\x1F\x05\x1F\u0180" +
		"\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0189\n \x03 \x05 \u018C" +
		"\n \x03 \x03 \x03 \x05 \u0191\n \x03 \x03 \x03 \x03 \x05 \u0197\n \x03" +
		" \x07 \u019A\n \f \x0E \u019D\v \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x05!\u01A9\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u01B1" +
		"\n\"\f\"\x0E\"\u01B4\v\"\x03#\x03#\x03#\x03#\x03#\x05#\u01BB\n#\x03$\x03" +
		"$\x05$\u01BF\n$\x03$\x03$\x03%\x06%\u01C4\n%\r%\x0E%\u01C5\x03&\x03&\x05" +
		"&\u01CA\n&\x03\'\x05\'\u01CD\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(" +
		"\x03(\x03(\x05(\u01D8\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u01EE\n)" +
		"\x03*\x03*\x05*\u01F2\n*\x03*\x03*\x05*\u01F6\n*\x03*\x05*\u01F9\n*\x03" +
		"*\x03*\x05*\u01FD\n*\x03*\x03*\x05*\u0201\n*\x05*\u0203\n*\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x05+\u020B\n+\x03+\x05+\u020E\n+\x03,\x03,\x03,\x03," +
		"\x03-\x03-\x03-\x05-\u0217\n-\x03.\x06.\u021A\n.\r.\x0E.\u021B\x03.\x02" +
		"\x02\x11\x04\x06\x0E\x10\x12\x14\x16\x18 &.48>B/\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\x02\x05\x07\x02\x03\x03  \"\"$$))\x03\x02" +
		".3\x06\x02\x05\x05\f\f\x0F\x0F\x13\x13\x02\u023F\x02g\x03\x02\x02\x02" +
		"\x04i\x03\x02\x02\x02\x06\x80\x03\x02\x02\x02\b\x93\x03\x02\x02\x02\n" +
		"\x95\x03\x02\x02\x02\f\x9D\x03\x02\x02\x02\x0E\x9F\x03\x02\x02\x02\x10" +
		"\xB0\x03\x02\x02\x02\x12\xBE\x03\x02\x02\x02\x14\xD2\x03\x02\x02\x02\x16" +
		"\xE0\x03\x02\x02\x02\x18\xEB\x03\x02\x02\x02\x1A\xFD\x03\x02\x02\x02\x1C" +
		"\u0104\x03\x02\x02\x02\x1E\u0106\x03\x02\x02\x02 \u0108\x03\x02\x02\x02" +
		"\"\u0113\x03\x02\x02\x02$\u0115\x03\x02\x02\x02&\u0119\x03\x02\x02\x02" +
		"(\u0129\x03\x02\x02\x02*\u012B\x03\x02\x02\x02,\u012E\x03\x02\x02\x02" +
		".\u0138\x03\x02\x02\x020\u0153\x03\x02\x02\x022\u0155\x03\x02\x02\x02" +
		"4\u0157\x03\x02\x02\x026\u0169\x03\x02\x02\x028\u016B\x03\x02\x02\x02" +
		":\u0176\x03\x02\x02\x02<\u017F\x03\x02\x02\x02>\u018B\x03\x02\x02\x02" +
		"@\u01A8\x03\x02\x02\x02B\u01AA\x03\x02\x02\x02D\u01BA\x03\x02\x02\x02" +
		"F\u01BC\x03\x02\x02\x02H\u01C3\x03\x02\x02\x02J\u01C9\x03\x02\x02\x02" +
		"L\u01CC\x03\x02\x02\x02N\u01D0\x03\x02\x02\x02P\u01ED\x03\x02\x02\x02" +
		"R\u0202\x03\x02\x02\x02T\u020D\x03\x02\x02\x02V\u020F\x03\x02\x02\x02" +
		"X\u0216\x03\x02\x02\x02Z\u0219\x03\x02\x02\x02\\h\x076\x02\x02]h\x077" +
		"\x02\x02^`\x079\x02\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02a_\x03\x02" +
		"\x02\x02ab\x03\x02\x02\x02bh\x03\x02\x02\x02cd\x07\x16\x02\x02de\x05 " +
		"\x11\x02ef\x07\x17\x02\x02fh\x03\x02\x02\x02g\\\x03\x02\x02\x02g]\x03" +
		"\x02\x02\x02g_\x03\x02\x02\x02gc\x03\x02\x02\x02h\x03\x03\x02\x02\x02" +
		"ij\b\x03\x01\x02jk\x05\x02\x02\x02k}\x03\x02\x02\x02lm\f\x06\x02\x02m" +
		"n\x07\x18\x02\x02no\x05 \x11\x02op\x07\x19\x02\x02p|\x03\x02\x02\x02q" +
		"r\f\x05\x02\x02rt\x07\x16\x02\x02su\x05\x06\x04\x02ts\x03\x02\x02\x02" +
		"tu\x03\x02\x02\x02uv\x03\x02\x02\x02v|\x07\x17\x02\x02wx\f\x04\x02\x02" +
		"x|\x07!\x02\x02yz\f\x03\x02\x02z|\x07#\x02\x02{l\x03\x02\x02\x02{q\x03" +
		"\x02\x02\x02{w\x03\x02\x02\x02{y\x03\x02\x02\x02|\x7F\x03\x02\x02\x02" +
		"}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x05\x03\x02\x02\x02\x7F}\x03\x02" +
		"\x02\x02\x80\x81\b\x04\x01\x02\x81\x82\x05\x1C\x0F\x02\x82\x88\x03\x02" +
		"\x02\x02\x83\x84\f\x03\x02\x02\x84\x85\x07-\x02\x02\x85\x87\x05\x1C\x0F" +
		"\x02\x86\x83\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02" +
		"\x02\x88\x89\x03\x02\x02\x02\x89\x07\x03\x02\x02\x02\x8A\x88\x03\x02\x02" +
		"\x02\x8B\x94\x05\x04\x03\x02\x8C\x8D\x07!\x02\x02\x8D\x94\x05\b\x05\x02" +
		"\x8E\x8F\x07#\x02\x02\x8F\x94\x05\b\x05\x02\x90\x91\x05\n\x06\x02\x91" +
		"\x92\x05\f\x07\x02\x92\x94\x03\x02\x02\x02\x93\x8B\x03\x02\x02\x02\x93" +
		"\x8C\x03\x02\x02\x02\x93\x8E\x03\x02\x02\x02\x93\x90\x03\x02\x02\x02\x94" +
		"\t\x03\x02\x02\x02\x95\x96\t\x02\x02\x02\x96\v\x03\x02\x02\x02\x97\x9E" +
		"\x05\b\x05\x02\x98\x99\x07\x16\x02\x02\x99\x9A\x05:\x1E\x02\x9A\x9B\x07" +
		"\x17\x02\x02\x9B\x9C\x05\f\x07\x02\x9C\x9E\x03\x02\x02\x02\x9D\x97\x03" +
		"\x02\x02\x02\x9D\x98\x03\x02\x02\x02\x9E\r\x03\x02\x02\x02\x9F\xA0\b\b" +
		"\x01\x02\xA0\xA1\x05\f\x07\x02\xA1\xAD\x03\x02\x02\x02\xA2\xA3\f\x05\x02" +
		"\x02\xA3\xA4\x07$\x02\x02\xA4\xAC\x05\f\x07\x02\xA5\xA6\f\x04\x02\x02" +
		"\xA6\xA7\x07%\x02\x02\xA7\xAC\x05\f\x07\x02\xA8\xA9\f\x03\x02\x02\xA9" +
		"\xAA\x07&\x02\x02\xAA\xAC\x05\f\x07\x02\xAB\xA2\x03\x02\x02\x02\xAB\xA5" +
		"\x03\x02\x02\x02\xAB\xA8\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB" +
		"\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\x0F\x03\x02\x02\x02\xAF\xAD" +
		"\x03\x02\x02\x02\xB0\xB1\b\t\x01\x02\xB1\xB2\x05\x0E\b\x02\xB2\xBB\x03" +
		"\x02\x02\x02\xB3\xB4\f\x04\x02\x02\xB4\xB5\x07 \x02\x02\xB5\xBA\x05\x0E" +
		"\b\x02\xB6\xB7\f\x03\x02\x02\xB7\xB8\x07\"\x02\x02\xB8\xBA\x05\x0E\b\x02" +
		"\xB9\xB3\x03\x02\x02\x02\xB9\xB6\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02" +
		"\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\x11\x03\x02\x02\x02" +
		"\xBD\xBB\x03\x02\x02\x02\xBE\xBF\b\n\x01\x02\xBF\xC0\x05\x10\t\x02\xC0" +
		"\xCF\x03\x02\x02\x02\xC1\xC2\f\x06\x02\x02\xC2\xC3\x07\x1C\x02\x02\xC3" +
		"\xCE\x05\x10\t\x02\xC4\xC5\f\x05\x02\x02\xC5\xC6\x07\x1E\x02\x02\xC6\xCE" +
		"\x05\x10\t\x02\xC7\xC8\f\x04\x02\x02\xC8\xC9\x07\x1D\x02\x02\xC9\xCE\x05" +
		"\x10\t\x02\xCA\xCB\f\x03\x02\x02\xCB\xCC\x07\x1F\x02\x02\xCC\xCE\x05\x10" +
		"\t\x02\xCD\xC1\x03\x02\x02\x02\xCD\xC4\x03\x02\x02\x02\xCD\xC7\x03\x02" +
		"\x02\x02\xCD\xCA\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02" +
		"\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x13\x03\x02\x02\x02\xD1\xCF\x03\x02" +
		"\x02\x02\xD2\xD3\b\v\x01\x02\xD3\xD4\x05\x12\n\x02\xD4\xDD\x03\x02\x02" +
		"\x02\xD5\xD6\f\x04\x02\x02\xD6\xD7\x074\x02\x02\xD7\xDC\x05\x12\n\x02" +
		"\xD8\xD9\f\x03\x02\x02\xD9\xDA\x075\x02\x02\xDA\xDC\x05\x12\n\x02\xDB" +
		"\xD5\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD" +
		"\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x15\x03\x02\x02\x02\xDF" +
		"\xDD\x03\x02\x02\x02\xE0\xE1\b\f\x01\x02\xE1\xE2\x05\x14\v\x02\xE2\xE8" +
		"\x03\x02\x02\x02\xE3\xE4\f\x03\x02\x02\xE4\xE5\x07\'\x02\x02\xE5\xE7\x05" +
		"\x14\v\x02\xE6\xE3\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
		"\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\x17\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEB\xEC\b\r\x01\x02\xEC\xED\x05\x16\f\x02\xED\xF3\x03\x02" +
		"\x02\x02\xEE\xEF\f\x03\x02\x02\xEF\xF0\x07(\x02\x02\xF0\xF2\x05\x16\f" +
		"\x02\xF1\xEE\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02" +
		"\x02\xF3\xF4\x03\x02\x02\x02\xF4\x19\x03\x02\x02\x02\xF5\xF3\x03\x02\x02" +
		"\x02\xF6\xFE\x05\x18\r\x02\xF7\xF8\x05\x18\r\x02\xF8\xF9\x07*\x02\x02" +
		"\xF9\xFA\x05 \x11\x02\xFA\xFB\x07+\x02\x02\xFB\xFC\x05\x1A\x0E\x02\xFC" +
		"\xFE\x03\x02\x02\x02\xFD\xF6\x03\x02\x02\x02\xFD\xF7\x03\x02\x02\x02\xFE" +
		"\x1B\x03\x02\x02\x02\xFF\u0105\x05\x1A\x0E\x02\u0100\u0101\x05\b\x05\x02" +
		"\u0101\u0102\x05\x1E\x10\x02\u0102\u0103\x05\x1C\x0F\x02\u0103\u0105\x03" +
		"\x02\x02\x02\u0104\xFF\x03\x02\x02\x02\u0104\u0100\x03\x02\x02\x02\u0105" +
		"\x1D\x03\x02\x02\x02\u0106\u0107\t\x03\x02\x02\u0107\x1F\x03\x02\x02\x02" +
		"\u0108\u0109\b\x11\x01\x02\u0109\u010A\x05\x1C\x0F\x02\u010A\u0110\x03" +
		"\x02\x02\x02\u010B\u010C\f\x03\x02\x02\u010C\u010D\x07-\x02\x02\u010D" +
		"\u010F\x05\x1C\x0F\x02\u010E\u010B\x03\x02\x02\x02\u010F\u0112\x03\x02" +
		"\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111" +
		"!\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0114\x05\x1A\x0E" +
		"\x02\u0114#\x03\x02\x02\x02\u0115\u0116\x05*\x16\x02\u0116\u0117\x05&" +
		"\x14\x02\u0117\u0118\x07,\x02\x02\u0118%\x03\x02\x02\x02\u0119\u011A\b" +
		"\x14\x01\x02\u011A\u011B\x05(\x15\x02\u011B\u0121\x03\x02\x02\x02\u011C" +
		"\u011D\f\x03\x02\x02\u011D\u011E\x07-\x02\x02\u011E\u0120\x05(\x15\x02" +
		"\u011F\u011C\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03" +
		"\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\'\x03\x02\x02\x02\u0123" +
		"\u0121\x03\x02\x02\x02\u0124\u012A\x05,\x17\x02\u0125\u0126\x05,\x17\x02" +
		"\u0126\u0127\x07.\x02\x02\u0127\u0128\x05@!\x02\u0128\u012A\x03\x02\x02" +
		"\x02\u0129\u0124\x03\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u012A)\x03" +
		"\x02\x02\x02\u012B\u012C\t\x04\x02\x02\u012C+\x03\x02\x02\x02\u012D\u012F" +
		"\x050\x19\x02\u012E\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02" +
		"\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x05.\x18\x02\u0131-\x03\x02\x02" +
		"\x02\u0132\u0133\b\x18\x01\x02\u0133\u0139\x076\x02\x02\u0134\u0135\x07" +
		"\x16\x02\x02\u0135\u0136\x05,\x17\x02\u0136\u0137\x07\x17\x02\x02\u0137" +
		"\u0139\x03\x02\x02\x02\u0138\u0132\x03\x02\x02\x02\u0138\u0134\x03\x02" +
		"\x02\x02\u0139\u014D\x03\x02\x02\x02\u013A\u013B\f\x05\x02\x02\u013B\u013D" +
		"\x07\x18\x02\x02\u013C\u013E\x05\"\x12\x02\u013D\u013C\x03\x02\x02\x02" +
		"\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u014C\x07" +
		"\x19\x02\x02\u0140\u0141\f\x04\x02\x02\u0141\u0142\x07\x16\x02\x02\u0142" +
		"\u0143\x052\x1A\x02\u0143\u0144\x07\x17\x02\x02\u0144\u014C\x03\x02\x02" +
		"\x02\u0145\u0146\f\x03\x02\x02\u0146\u0148\x07\x16\x02\x02\u0147\u0149" +
		"\x058\x1D\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
		"\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x07\x17\x02\x02\u014B\u013A\x03" +
		"\x02\x02\x02\u014B\u0140\x03\x02\x02\x02\u014B\u0145\x03\x02\x02\x02\u014C" +
		"\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02" +
		"\x02\x02\u014E/\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0154" +
		"\x07$\x02\x02\u0151\u0152\x07$\x02\x02\u0152\u0154\x050\x19\x02\u0153" +
		"\u0150\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u01541\x03\x02\x02" +
		"\x02\u0155\u0156\x054\x1B\x02\u01563\x03\x02\x02\x02\u0157\u0158\b\x1B" +
		"\x01\x02\u0158\u0159\x056\x1C\x02\u0159\u015F\x03\x02\x02\x02\u015A\u015B" +
		"\f\x03\x02\x02\u015B\u015C\x07-\x02\x02\u015C\u015E\x056\x1C\x02\u015D" +
		"\u015A\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u01605\x03\x02\x02\x02\u0161\u015F" +
		"\x03\x02\x02\x02\u0162\u016A\x05*\x16\x02\u0163\u0164\x05*\x16\x02\u0164" +
		"\u0165\x05,\x17\x02\u0165\u016A\x03\x02\x02\x02\u0166\u0167\x05*\x16\x02" +
		"\u0167\u0168\x05<\x1F\x02\u0168\u016A\x03\x02\x02\x02\u0169\u0162\x03" +
		"\x02\x02\x02\u0169\u0163\x03\x02\x02\x02\u0169\u0166\x03\x02\x02\x02\u016A" +
		"7\x03\x02\x02\x02\u016B\u016C\b\x1D\x01\x02\u016C\u016D\x076\x02\x02\u016D" +
		"\u0173\x03\x02\x02\x02\u016E\u016F\f\x03\x02\x02\u016F\u0170\x07-\x02" +
		"\x02\u0170\u0172\x076\x02\x02\u0171\u016E\x03\x02\x02\x02\u0172\u0175" +
		"\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02" +
		"\u01749\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0178\x05*\x16" +
		"\x02\u0177\u0179\x05<\x1F\x02\u0178\u0177\x03\x02\x02\x02\u0178\u0179" +
		"\x03\x02\x02\x02\u0179;\x03\x02\x02\x02\u017A\u0180\x050\x19\x02\u017B" +
		"\u017D\x050\x19\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02" +
		"\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x05> \x02\u017F\u017A\x03" +
		"\x02\x02\x02\u017F\u017C\x03\x02\x02\x02\u0180=\x03\x02\x02\x02\u0181" +
		"\u0182\b \x01\x02\u0182\u0183\x07\x16\x02\x02\u0183\u0184\x05<\x1F\x02" +
		"\u0184\u0185\x07\x17\x02\x02\u0185\u018C\x03\x02\x02\x02\u0186\u0188\x07" +
		"\x16\x02\x02\u0187\u0189\x052\x1A\x02\u0188\u0187\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x07\x17" +
		"\x02\x02\u018B\u0181\x03\x02\x02\x02\u018B\u0186\x03\x02\x02\x02\u018C" +
		"\u019B\x03\x02\x02\x02\u018D\u018E\f\x04\x02\x02\u018E\u0190\x07\x18\x02" +
		"\x02\u018F\u0191\x05\"\x12\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191" +
		"\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u019A\x07\x19\x02\x02" +
		"\u0193\u0194\f\x03\x02\x02\u0194\u0196\x07\x16\x02\x02\u0195\u0197\x05" +
		"2\x1A\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u019A\x07\x17\x02\x02\u0199\u018D\x03\x02" +
		"\x02\x02\u0199\u0193\x03\x02\x02\x02\u019A\u019D\x03\x02\x02\x02\u019B" +
		"\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C?\x03\x02\x02" +
		"\x02\u019D\u019B\x03\x02\x02\x02\u019E\u01A9\x05\x1C\x0F\x02\u019F\u01A0" +
		"\x07\x1A\x02\x02\u01A0\u01A1\x05B\"\x02\u01A1\u01A2\x07\x1B\x02\x02\u01A2" +
		"\u01A9\x03\x02\x02\x02\u01A3\u01A4\x07\x1A\x02\x02\u01A4\u01A5\x05B\"" +
		"\x02\u01A5\u01A6\x07-\x02\x02\u01A6\u01A7\x07\x1B\x02\x02\u01A7\u01A9" +
		"\x03\x02\x02\x02\u01A8\u019E\x03\x02\x02\x02\u01A8\u019F\x03\x02\x02\x02" +
		"\u01A8\u01A3\x03\x02\x02\x02\u01A9A\x03\x02\x02\x02\u01AA\u01AB\b\"\x01" +
		"\x02\u01AB\u01AC\x05@!\x02\u01AC\u01B2\x03\x02\x02\x02\u01AD\u01AE\f\x03" +
		"\x02\x02\u01AE\u01AF\x07-\x02\x02\u01AF\u01B1\x05@!\x02\u01B0\u01AD\x03" +
		"\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3C\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02" +
		"\x02\u01B5\u01BB\x05F$\x02\u01B6\u01BB\x05L\'\x02\u01B7\u01BB\x05N(\x02" +
		"\u01B8\u01BB\x05P)\x02\u01B9\u01BB\x05T+\x02\u01BA\u01B5\x03\x02\x02\x02" +
		"\u01BA\u01B6\x03\x02\x02\x02\u01BA\u01B7\x03\x02\x02\x02\u01BA\u01B8\x03" +
		"\x02\x02\x02\u01BA\u01B9\x03\x02\x02\x02\u01BBE\x03\x02\x02\x02\u01BC" +
		"\u01BE\x07\x1A\x02\x02\u01BD\u01BF\x05H%\x02\u01BE\u01BD\x03\x02\x02\x02" +
		"\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x07" +
		"\x1B\x02\x02\u01C1G\x03\x02\x02\x02\u01C2\u01C4\x05J&\x02\u01C3\u01C2" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02" +
		"\u01C5\u01C6\x03\x02\x02\x02\u01C6I\x03\x02\x02\x02\u01C7\u01CA\x05D#" +
		"\x02\u01C8\u01CA\x05$\x13\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01C8" +
		"\x03\x02\x02\x02\u01CAK\x03\x02\x02\x02\u01CB\u01CD\x05 \x11\x02\u01CC" +
		"\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\u01CF\x07,\x02\x02\u01CFM\x03\x02\x02\x02\u01D0\u01D1\x07" +
		"\x0E\x02\x02\u01D1\u01D2\x07\x16\x02\x02\u01D2\u01D3\x05 \x11\x02\u01D3" +
		"\u01D4\x07\x17\x02\x02\u01D4\u01D7\x05D#\x02\u01D5\u01D6\x07\n\x02\x02" +
		"\u01D6\u01D8\x05D#\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02" +
		"\x02\x02\u01D8O\x03\x02\x02\x02\u01D9\u01DA\x07\x14\x02\x02\u01DA\u01DB" +
		"\x07\x16\x02\x02\u01DB\u01DC\x05 \x11\x02\u01DC\u01DD\x07\x17\x02\x02" +
		"\u01DD\u01DE\x05D#\x02\u01DE\u01EE\x03\x02\x02\x02\u01DF\u01E0\x07\b\x02" +
		"\x02\u01E0\u01E1\x05D#\x02\u01E1\u01E2\x07\x14\x02\x02\u01E2\u01E3\x07" +
		"\x16\x02\x02\u01E3\u01E4\x05 \x11\x02\u01E4\u01E5\x07\x17\x02\x02\u01E5" +
		"\u01E6\x07,\x02\x02\u01E6\u01EE\x03\x02\x02\x02\u01E7\u01E8\x07\r\x02" +
		"\x02\u01E8\u01E9\x07\x16\x02\x02\u01E9\u01EA\x05R*\x02\u01EA\u01EB\x07" +
		"\x17\x02\x02\u01EB\u01EC\x05D#\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01D9" +
		"\x03\x02\x02\x02\u01ED\u01DF\x03\x02\x02\x02\u01ED\u01E7\x03\x02\x02\x02" +
		"\u01EEQ\x03\x02\x02\x02\u01EF\u01F1\x05$\x13\x02\u01F0\u01F2\x05 \x11" +
		"\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3" +
		"\x03\x02\x02\x02\u01F3\u01F5\x07,\x02\x02\u01F4\u01F6\x05 \x11\x02\u01F5" +
		"\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u0203\x03\x02" +
		"\x02\x02\u01F7\u01F9\x05 \x11\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9" +
		"\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FC\x07,\x02\x02" +
		"\u01FB\u01FD\x05 \x11\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03" +
		"\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0200\x07,\x02\x02\u01FF" +
		"\u0201\x05 \x11\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02" +
		"\x02\u0201\u0203\x03\x02\x02\x02\u0202\u01EF\x03\x02\x02\x02\u0202\u01F8" +
		"\x03\x02\x02\x02\u0203S\x03\x02\x02\x02\u0204\u0205\x07\x07\x02\x02\u0205" +
		"\u020E\x07,\x02\x02\u0206\u0207\x07\x04\x02\x02\u0207\u020E\x07,\x02\x02" +
		"\u0208\u020A\x07\x11\x02\x02\u0209\u020B\x05 \x11\x02\u020A\u0209\x03" +
		"\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C" +
		"\u020E\x07,\x02\x02\u020D\u0204\x03\x02\x02\x02\u020D\u0206\x03\x02\x02" +
		"\x02\u020D\u0208\x03\x02\x02\x02\u020EU\x03\x02\x02\x02\u020F\u0210\x05" +
		"*\x16\x02\u0210\u0211\x05,\x17\x02\u0211\u0212\x05F$\x02\u0212W\x03\x02" +
		"\x02\x02\u0213\u0217\x05D#\x02\u0214\u0217\x05$\x13\x02\u0215\u0217\x05" +
		"V,\x02\u0216\u0213\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0215" +
		"\x03\x02\x02\x02\u0217Y\x03\x02\x02\x02\u0218\u021A\x05X-\x02\u0219\u0218" +
		"\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02" +
		"\u021B\u021C\x03\x02\x02\x02\u021C[\x03\x02\x02\x02?agt{}\x88\x93\x9D" +
		"\xAB\xAD\xB9\xBB\xCD\xCF\xDB\xDD\xE8\xF3\xFD\u0104\u0110\u0121\u0129\u012E" +
		"\u0138\u013D\u0148\u014B\u014D\u0153\u015F\u0169\u0173\u0178\u017C\u017F" +
		"\u0188\u018B\u0190\u0196\u0199\u019B\u01A8\u01B2\u01BA\u01BE\u01C5\u01C9" +
		"\u01CC\u01D7\u01ED\u01F1\u01F5\u01F8\u01FC\u0200\u0202\u020A\u020D\u0216" +
		"\u021B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(CParser.Constant, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusMinus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_argumentExpressionList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusPlus, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusMinus, 0); }
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CParser.Minus, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_castExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext {
		return this.getRuleContext(0, CastExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CParser.Mod, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CParser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CParser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CParser.Greater, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CParser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CParser.GreaterEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CParser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CParser.NotEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public logicalAndExpression(): LogicalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalAndExpressionContext);
	}
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CParser.OrOr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CParser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext {
		return this.getRuleContext(0, InitDeclaratorListContext);
	}
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext {
		return this.getRuleContext(0, InitDeclaratorContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public Void(): TerminalNode | undefined { return this.tryGetToken(CParser.Void, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(CParser.Char, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CParser.Int, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CParser.Float, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public directDeclarator(): DirectDeclaratorContext {
		return this.getRuleContext(0, DirectDeclaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public directDeclarator(): DirectDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectDeclaratorContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDirectDeclarator) {
			listener.enterDirectDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDirectDeclarator) {
			listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public Star(): TerminalNode { return this.getToken(CParser.Star, 0); }
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTypeListContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterTypeList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext {
		return this.getRuleContext(0, ParameterDeclarationContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeName; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractDeclaratorContext extends ParserRuleContext {
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_abstractDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAbstractDeclarator) {
			listener.enterAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAbstractDeclarator) {
			listener.exitAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAbstractDeclarator) {
			return visitor.visitAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectAbstractDeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directAbstractDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDirectAbstractDeclarator) {
			listener.enterDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDirectAbstractDeclarator) {
			listener.exitDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectAbstractDeclarator) {
			return visitor.visitDirectAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_statement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CParser.RightBrace, 0); }
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	public blockItem(): BlockItemContext[];
	public blockItem(i: number): BlockItemContext;
	public blockItem(i?: number): BlockItemContext | BlockItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockItemContext);
		} else {
			return this.getRuleContext(i, BlockItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItemList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBlockItemList) {
			listener.enterBlockItemList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBlockItemList) {
			listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItem; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(CParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CParser.Do, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CParser.For, 0); }
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	public _test!: ExpressionContext;
	public _update!: ExpressionContext;
	public _init!: ExpressionContext;
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Semi);
		} else {
			return this.getToken(CParser.Semi, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forCondition; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CParser.Continue, 0); }
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CParser.Break, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_jumpStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_programItem; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterProgramItem) {
			listener.enterProgramItem(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitProgramItem) {
			listener.exitProgramItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitProgramItem) {
			return visitor.visitProgramItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public programItem(): ProgramItemContext[];
	public programItem(i: number): ProgramItemContext;
	public programItem(i?: number): ProgramItemContext | ProgramItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramItemContext);
		} else {
			return this.getRuleContext(i, ProgramItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_program; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


