module GLS {
    export class Language {
        private printers: any;
        private OperationAliases: any;
        private TypeAliases: any;
        private ValueAliases: any;
        private INT_MIN: number;

        // General information
        private Name: string;
        private Extension: string;
        private PrintFunction: string;
        private SemiColon: string;

        // Comments
        private CommentorBlockStart: string;
        private CommentorBlockEnd: string;
        private CommentorInline: string;

        // Conditionals
        private ConditionStartLeft: string;
        private ConditionStartRight: string;
        private ConditionContinueLeft: string;
        private ConditionContinueRight: string;
        private ConditionEnd: string;
        private Elif: string;
        private Else: string;
        private If: string;

        // Operators
        private And: string;
        private GreaterThan: string;
        private GreaterThanOrEqual: string;
        private LessThan: string;
        private LessThanOrEqual: string;
        private Or: string;

        //Variables
        private VariableTypesExplicit: boolean;
        private VariableTypesAfterName: boolean;
        private VariableTypeMarker: string;
        private VariableDeclareStart: string;

        // Booleans
        private BooleanClass: string;
        private True: string;
        private False: string;

        // Numbers
        private NumberClass: string;

        // Strings
        private StringClass: string;
        private StringLength: string;

        // Loops
        private RangedForLoops: boolean;

        // Arrays
        private ArrayClass: string;
        private ArrayLength: string;

        // Functions
        private FunctionDefine: string;
        private FunctionDefineRight: string;
        private FunctionDefineEnd: string;
        private FunctionReturnsExplicit: boolean;
        private FunctionTypeAfterName: boolean;
        private FunctionTypeMarker: string;

        // Dictionaries
        private DictionaryClass: string;

        // Classes
        private ClassConstructorName: string;
        private ClassEnder: string;
        private ClassFunctionsTakeThis: boolean;
        private ClassFunctionsStart: string;
        private ClassFunctionsThis: string;
        private ClassMemberVariableDefault: string;
        private ClassNewer: string;
        private ClassPrivacy: boolean;
        private ClassStartLeft: string;
        private ClassStartRight: string;
        private ClassThis: string;
        private ClassThisAccess: string;

        // File
        private FileEndLine: string;
        private FileStartLeft: string;
        private FileStartRight: string;

        // Main
        private MainEndLine: string;
        private MainStartLine: string;

        constructor() {
            this.printers = {
                "class constructor end": this.ClassConstructorEnd.bind(this),
                "class constructor start": this.ClassConstructorStart.bind(this),
                "class end": this.ClassEnd.bind(this),
                "class member function call": this.ClassMemberFunctionCall.bind(this),
                // "class member function get": this.ClassMemberFunctionGet.bind(this),
                "class member function end": this.ClassMemberFunctionEnd.bind(this),
                "class member function start": this.ClassMemberFunctionStart.bind(this),
                "class member variable declare": this.ClassMemberVariableDeclare.bind(this),
                "class member variable get": this.ClassMemberVariableGet.bind(this),
                "class member variable set": this.ClassMemberVariableSet.bind(this),
                "class new": this.ClassNew.bind(this),
                "class start": this.ClassStart.bind(this),
                "comment block": this.CommentBlock.bind(this),
                "comment line": this.CommentLine.bind(this),
                "comment inline": this.CommentInline.bind(this),
                "comparison": this.Comparison.bind(this),
                "file end": this.FileEnd.bind(this),
                "file start": this.FileStart.bind(this),
                "for end": this.ForEnd.bind(this),
                "for numbers start": this.ForNumbersStart.bind(this),
                "function call": this.FunctionCall.bind(this),
                "function end": this.FunctionEnd.bind(this),
                "function start": this.FunctionStart.bind(this),
                "function return": this.FunctionReturn.bind(this),
                "if condition start": this.IfConditionStart.bind(this),
                "if end": this.IfEnd.bind(this),
                "if variable start": this.IfVariableStart.bind(this),
                "main end": this.MainEnd.bind(this),
                "main start": this.MainStart.bind(this),
                "operation": this.Operation.bind(this),
                "print line": this.PrintLine.bind(this),
                "variable declare": this.VariableDeclare.bind(this),
                "variable declare partial": this.VariableDeclarePartial.bind(this),
                "while condition start": this.WhileConditionStart.bind(this),
                "while end": this.WhileEnd.bind(this),
                "while variable start": this.WhileVariableStart.bind(this)
            };

            this.OperationAliases = {
                "equals": "=",
                "plus": "+",
                "minus": "-",
                "times": "*",
                "divided": "/",
                "increaseby": "+=",
                "decreaseby": "-=",
                "multiplyby": "*=",
                "divideby": "/=",
                "lessthan": "<",
                "greaterthan": ">",
                "lessthanequal": ">",
                "greaterthanequal": ">="
            };

            this.TypeAliases = {};

            this.ValueAliases = {};

            this.INT_MIN = -9001;
        }


        /* Gets
        */

        public getName(): string {
            return this.Name;
        }

        public getExtension(): string {
            return this.Extension;
        }

        public getPrintFunction(): string {
            return this.PrintFunction;
        }

        public getSemiColon(): string {
            return this.SemiColon;
        }

        public getCommentorBlockStart(): string {
            return this.CommentorBlockStart;
        }

        public getCommentorBlockEnd(): string {
            return this.CommentorBlockEnd;
        }

        public getCommentorInline(): string {
            return this.CommentorInline;
        }

        public getConditionStartLeft(): string {
            return this.ConditionStartLeft;
        }

        public getConditionStartRight(): string {
            return this.ConditionStartRight;
        }

        public getConditionContinueLeft(): string {
            return this.ConditionContinueLeft;
        }

        public getConditionContinueRight(): string {
            return this.ConditionContinueRight;
        }

        public getConditionEnd(): string {
            return this.ConditionEnd;
        }

        public getElif(): string {
            return this.Elif;
        }

        public getElse(): string {
            return this.Else;
        }

        public getIf(): string {
            return this.If;
        }

        public getAnd(): string {
            return this.And;
        }

        public getGreaterThan(): string {
            return this.GreaterThan;
        }

        public getGreaterThanOrEqual(): string {
            return this.GreaterThanOrEqual;
        }

        public getLessThan(): string {
            return this.LessThan;
        }

        public getLessThanOrEqual(): string {
            return this.LessThanOrEqual;
        }

        public getOr(): string {
            return this.Or;
        }

        public getVariableTypesExplicit(): boolean {
            return this.VariableTypesExplicit;
        }

        public getVariableTypesAfterName(): boolean {
            return this.VariableTypesAfterName;
        }

        public getVariableTypeMarker(): string {
            return this.VariableTypeMarker;
        }

        public getVariableDeclareStart(): string {
            return this.VariableDeclareStart;
        }

        public getBooleanClass(): string {
            return this.BooleanClass;
        }

        public getTrue(): string {
            return this.True;
        }

        public getFalse(): string {
            return this.False;
        }

        public getNumberClass(): string {
            return this.NumberClass;
        }

        public getStringClass(): string {
            return this.StringClass;
        }

        public getStringLength(): string {
            return this.StringLength;
        }

        public getRangedForLoops(): boolean {
            return this.RangedForLoops;
        }

        public getArrayClass(): string {
            return this.ArrayClass;
        }

        public getArrayLength(): string {
            return this.ArrayLength;
        }

        public getFunctionDefine(): string {
            return this.FunctionDefine;
        }

        public getFunctionDefineRight(): string {
            return this.FunctionDefineRight;
        }

        public getFunctionDefineEnd(): string {
            return this.FunctionDefineEnd;
        }

        public getFunctionReturnsExplicit(): boolean {
            return this.FunctionReturnsExplicit;
        }

        public getFunctionTypeMarker(): string {
            return this.FunctionTypeMarker;
        }

        public getFunctionTypeAfterName(): boolean {
            return this.FunctionTypeAfterName;
        }

        public getDictionaryClass(): string {
            return this.DictionaryClass;
        }

        public getClassConstructorName(): string {
            return this.ClassConstructorName;
        }

        public getClassEnder(): string {
            return this.ClassEnder;
        }

        public getClassFunctionsTakeThis(): boolean {
            return this.ClassFunctionsTakeThis;
        }

        public getClassFunctionsStart(): string {
            return this.ClassFunctionsStart;
        }

        public getClassFunctionsThis(): string {
            return this.ClassFunctionsThis;
        }

        public getClassMemberVariableDefault(): string {
            return this.ClassMemberVariableDefault;
        }

        public getClassNewer(): string {
            return this.ClassNewer;
        }

        public getClassPrivacy(): boolean {
            return this.ClassPrivacy;
        }

        public getClassStartLeft(): string {
            return this.ClassStartLeft;
        }

        public getClassStartRight(): string {
            return this.ClassStartRight;
        }

        public getClassThis(): string {
            return this.ClassThis;
        }

        public getClassThisAccess(): string {
            return this.ClassThisAccess;
        }

        public getFileEndLine(): string {
            return this.FileEndLine;
        }

        public getFileStartLeft(): string {
            return this.FileStartLeft;
        }

        public getFileStartRight(): string {
            return this.FileStartRight;
        }

        public getMainEndLine(): string {
            return this.MainEndLine;
        }

        public getMainStartLine(): string {
            return this.MainStartLine;
        }


        /* Sets
        */

        public setName(value: string): Language {
            this.Name = value;
            return this;
        }

        public setExtension(value: string): Language {
            this.Extension = value;
            return this;
        }

        public setPrintFunction(value: string): Language {
            this.PrintFunction = value;
            return this;
        }

        public setSemiColon(value: string): Language {
            this.SemiColon = value;
            return this;
        }

        public setCommentorBlockStart(value: string): Language {
            this.CommentorBlockStart = value;
            return this;
        }

        public setCommentorBlockEnd(value: string): Language {
            this.CommentorBlockEnd = value;
            return this;
        }

        public setCommentorInline(value: string): Language {
            this.CommentorInline = value;
            return this;
        }

        public setConditionStartLeft(value: string): Language {
            this.ConditionStartLeft = value;
            return this;
        }

        public setConditionStartRight(value: string): Language {
            this.ConditionStartRight = value;
            return this;
        }

        public setConditionContinueLeft(value: string): Language {
            this.ConditionContinueLeft = value;
            return this;
        }

        public setConditionContinueRight(value: string): Language {
            this.ConditionContinueRight = value;
            return this;
        }

        public setConditionEnd(value: string): Language {
            this.ConditionEnd = value;
            return this;
        }

        public setElif(value: string): Language {
            this.Elif = value;
            return this;
        }

        public setElse(value: string): Language {
            this.Else = value;
            return this;
        }

        public setIf(value: string): Language {
            this.If = value;
            return this;
        }

        public setAnd(value: string): Language {
            this.And = value;
            return this;
        }

        public setGreaterThan(value: string): Language {
            this.GreaterThan = value;
            return this;
        }

        public setGreaterThanOrEqual(value: string): Language {
            this.GreaterThanOrEqual = value;
            return this;
        }

        public setLessThan(value: string): Language {
            this.LessThan = value;
            return this;
        }

        public setLessThanOrEqual(value: string): Language {
            this.LessThanOrEqual = value;
            return this;
        }

        public setOr(value: string): Language {
            this.Or = value;
            return this;
        }

        public setVariableTypesExplicit(value: boolean): Language {
            this.VariableTypesExplicit = value;
            return this;
        }

        public setVariableTypesAfterName(value: boolean): Language {
            this.VariableTypesAfterName = value;
            return this;
        }

        public setVariableTypeMarker(value: string): Language {
            this.VariableTypeMarker = value;
            return this;
        }

        public setVariableDeclareStart(value: string): Language {
            this.VariableDeclareStart = value;
            return this;
        }

        public setBooleanClass(value: string): Language {
            this.BooleanClass = value;
            return this;
        }

        public setTrue(value: string): Language {
            this.True = value;
            return this;
        }

        public setFalse(value: string): Language {
            this.False = value;
            return this;
        }

        public setNumberClass(value: string): Language {
            this.NumberClass = value;
            return this;
        }

        public setStringClass(value: string): Language {
            this.StringClass = value;
            return this;
        }

        public setStringLength(value: string): Language {
            this.StringLength = value;
            return this;
        }

        public setRangedForLoops(value: boolean): Language {
            this.RangedForLoops = value;
            return this;
        }

        public setArrayClass(value: string): Language {
            this.ArrayClass = value;
            return this;
        }

        public setArrayLength(value: string): Language {
            this.ArrayLength = value;
            return this;
        }

        public setFunctionDefine(value: string): Language {
            this.FunctionDefine = value;
            return this;
        }

        public setFunctionDefineRight(value: string): Language {
            this.FunctionDefineRight = value;
            return this;
        }

        public setFunctionDefineEnd(value: string): Language {
            this.FunctionDefineEnd = value;
            return this;
        }

        public setFunctionReturnsExplicit(value: boolean): Language {
            this.FunctionReturnsExplicit = value;
            return this;
        }

        public setFunctionTypeAfterName(value: boolean): Language {
            this.FunctionTypeAfterName = value;
            return this;
        }

        public setFunctionTypeMarker(value: string): Language {
            this.FunctionTypeMarker = value;
            return this;
        }

        public setDictionaryClass(value: string): Language {
            this.DictionaryClass = value;
            return this;
        }

        public setClassConstructorName(value: string): Language {
            this.ClassConstructorName = value;
            return this;
        }

        public setClassEnder(value: string): Language {
            this.ClassEnder = value;
            return this;
        }

        public setClassFunctionsTakeThis(value: boolean): Language {
            this.ClassFunctionsTakeThis = value;
            return this;
        }

        public setClassFunctionsStart(value: string): Language {
            this.ClassFunctionsStart = value;
            return this;
        }

        public setClassFunctionsThis(value: string): Language {
            this.ClassFunctionsThis = value;
            return this;
        }

        public setClassMemberVariableDefault(value: string): Language {
            this.ClassMemberVariableDefault = value;
            return this;
        }

        public setClassNewer(value: string): Language {
            this.ClassNewer = value;
            return this;
        }

        public setClassPrivacy(value: boolean): Language {
            this.ClassPrivacy = value;
            return this;
        }

        public setClassStartLeft(value: string): Language {
            this.ClassStartLeft = value;
            return this;
        }

        public setClassStartRight(value: string): Language {
            this.ClassStartRight = value;
            return this;
        }

        public setClassThis(value: string): Language {
            this.ClassThis = value;
            return this;
        }

        public setClassThisAccess(value: string): Language {
            this.ClassThisAccess = value;
            return this;
        }

        public setFileEndLine(value: string): Language {
            this.FileEndLine = value;
            return this;
        }

        public setFileStartLeft(value: string): Language {
            this.FileStartLeft = value;
            return this;
        }

        public setFileStartRight(value: string): Language {
            this.FileStartRight = value;
            return this;
        }

        public setMainEndLine(value: string): Language {
            this.MainEndLine = value;
            return this;
        }

        public setMainStartLine(value: string): Language {
            this.MainStartLine = value;
            return this;
        }

        public AliasOrDefault(aliases: any, key: string): string {
            return aliases.hasOwnProperty(key) ? aliases[key] : key;
        }

        public getTypeAlias(key: string): string {
            return this.AliasOrDefault(this.TypeAliases, key);
        }

        public getOperationAlias(key: string): string {
            return this.AliasOrDefault(this.OperationAliases, key);
        }

        public getValueAlias(key: string): string {
            return this.AliasOrDefault(this.ValueAliases, key);
        }

        public addTypeAlias(key: string, alias: string): Language {
            this.TypeAliases[alias] = key;
            return this;
        }

        public addOperationAlias(key: string, alias: string): Language {
            this.OperationAliases[alias] = key;
            return this;
        }

        public addValueAlias(key: string, alias: string): Language {
            this.ValueAliases[alias] = key;
            return this;
        }

        public inheritTypeAliases(language: Language): Language {
            for (var i in language.TypeAliases) {
                this.addTypeAlias(language.TypeAliases[i], i);
            }

            return this;
        }

        public inheritOperationAliases(language: Language): Language {
            for (var i in language.OperationAliases) {
                this.addOperationAlias(language.OperationAliases[i], i);
            }

            return this;
        }

        public inheritValueAliases(language: Language): Language {
            for (var i in language.ValueAliases) {
                this.addValueAlias(language.ValueAliases[i], i);
            }

            return this;
        }

        public print(functionName: string, functionArgs: string[], isInline?: boolean): any[] {
            if (!this.printers.hasOwnProperty(functionName)) {
                throw new Error("Function not found: " + functionName);
            }

            return this.printers[functionName](functionArgs, isInline);
        }


        /* Printers
        */

        public ClassConstructorEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string name[, string argumentName, string argumentType, ...]
        public ClassConstructorStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassConstructorStart", functionArgs, 1);

            var output: string = this.getClassConstructorName(),
                variableDeclarationArguments: string[] = [],
                i: number;

            if (output.length === 0) {
                output = functionArgs[0];
            }

            output += "(";

            // Languages like Python take a "self" or "this" equivalent first
            if (this.getClassFunctionsTakeThis()) {
                variableDeclarationArguments[0] = this.getClassFunctionsThis();
                variableDeclarationArguments[1] = functionArgs[0];

                output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0];
            }

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 1) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }

                for (i = 1; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")" + this.getFunctionDefineRight();
            return [output, 1];
        }

        public ClassEnd(functionArgs: string[], isInline?: boolean): any[]{
            return [this.getClassEnder(), -1];
        }

        // string variable, string function, [, string argumentName, string argumentType, ... ]
        public ClassMemberFunctionCall(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberFunctionCall", functionArgs, 2);

            var output: string = functionArgs[0] + "." + functionArgs[1] + "(",
                i: number;

            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length - 1; i += 1) {
                    output += functionArgs[i] + ", ";
                }
                output += functionArgs[i];
            }

            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        public ClassMemberFunctionEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string class, string visibility, string name, string return, [, string argumentName, string argumentType...]
        public ClassMemberFunctionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberFunctionStart", functionArgs, 4);

            var output: string = this.getClassFunctionsStart(),
                variableDeclarationArguments: string[] = [],
                i: number;

            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output = this.getTypeAlias(functionArgs[3]) + " ";
            }

            if (this.getClassPrivacy()) {
                output = functionArgs[1] + " " + output;
            }

            output += functionArgs[2] + "(";

            if (this.getClassFunctionsTakeThis()) {
                variableDeclarationArguments[0] = this.getClassFunctionsThis();
                variableDeclarationArguments[1] = functionArgs[0];

                output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0];
            }

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 4) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }

                for (i = 4; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";

            if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                output += this.getFunctionTypeMarker() + this.getTypeAlias(functionArgs[3]);
            }

            output += this.getFunctionDefineRight();
            return [output, 1];
        }


        // string name, string visibility, string type
        public ClassMemberVariableDeclare(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberVariableDeclare", functionArgs, 3);

            var variableDeclarationArgs: string[] = [functionArgs[0], functionArgs[2]],
                variableDeclared: any[] = this.VariableDeclarePartial(variableDeclarationArgs, isInline);

            variableDeclared[0] = functionArgs[1] + " " + variableDeclared[0];

            if (!isInline) {
                variableDeclared[0] += this.getSemiColon();
            }

            return variableDeclared;
        }

        // string name
        public ClassMemberVariableGet(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberVariableGet", functionArgs, 1);

            return [this.getClassThis() + this.getClassThisAccess() + functionArgs[0], 0];
        }

        // string name, string value
        public ClassMemberVariableSet(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClasMemberVariableSet", functionArgs, 2);

            var output: string = this.getClassThis() + this.getClassThisAccess();

            output += functionArgs[0] + " " + this.getOperationAlias("equals") + " " + functionArgs[1];
            output += this.getSemiColon();

            return [output, 0];
        }

        // string name, string visibility
        public ClassStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);

            var output: string = this.getClassStartLeft() + functionArgs[0] + this.getClassStartRight();

            if (functionArgs.length > 1) {
                output = functionArgs[1] + " " + output;
            }

            return [output, 1];
        }

        // string name[, string argumentName, string argumentType, ...]
        public ClassNew(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassNew", functionArgs, 1);

            var output: string = this.getClassNewer() + functionArgs[0] + "(",
                i: number;

            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length; i += 1) {
                    output += functionArgs[i] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        // [string message, ...]
        public CommentBlock(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);

            var output: string = this.getCommentorBlockStart() + "\n",
                i: number;

            for (i = 0; i < functionArgs.length; i += 1) {
                output += functionArgs[i] + "\n";
            }

            output += this.getCommentorBlockEnd();

            return [output, 0];
        }

        // [string message, ...]
        public CommentLine(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getCommentorInline() + " ",
                i: number;

            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + " ";
            }

            output += functionArgs[i];
            return [output, 0];
        }

        // [string message, ...]
        public CommentInline(functionArgs: string[], isInline?: boolean): any[] {
            var result: any[] = this.CommentLine(functionArgs, isInline);

            result[1] = this.INT_MIN;

            return result;
        }

        // string left, string comparison, string right
        public Comparison(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("Comparison", functionArgs, 3);

            return [functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]) + " " + functionArgs[2], 0];
        }

        public FileEnd(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getFileEndLine();
            return [output, output.length === 0 ? this.INT_MIN : -1];
        }

        // string name
        public FileStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FileStart", functionArgs, 1);

            var left: string = this.getFileStartLeft(),
                right: string = this.getFileStartRight();

            if (left.length === 0 && right.length === 0) {
                return ["", this.INT_MIN];
            }

            return [left + functionArgs[0] + right, 1];
        }

        public ForEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getConditionEnd(), -1];
        }

        // string i, string type, string initial, string comparison, string boundary, string direction, string change
        // e.x. i int 0 lessthan 7 increaseby 1
        public ForNumbersStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassStart", functionArgs, 7);

            var output: string = "for" + this.getConditionStartLeft(),
                generalArgs: any[],
                i: string = functionArgs[0],
                typeName = this.getTypeAlias(functionArgs[1]),
                initial: string = functionArgs[2],
                comparison: string = functionArgs[3],
                boundary: string = functionArgs[4],
                direction: string = functionArgs[5],
                change: string = functionArgs[6];

            if (this.getRangedForLoops()) {
                generalArgs = [i, typeName];
                output += this.VariableDeclare(generalArgs, false)[0];

                output += " in range(";
                output += initial + ", " + boundary;

                if (direction === "increaseby") {
                    if (change !== "1") {
                        output += ", " + change;
                    }
                } else if (direction === "decreaseby") {
                    output += ", -" + change;
                }

                output += ")";
            } else {
                generalArgs = [i, typeName, initial];
                output += this.VariableDeclare(generalArgs, true)[0] + this.getSemiColon();

                generalArgs = [i, comparison, boundary];
                output += " " + this.Comparison(generalArgs, true)[0] + this.getSemiColon();

                generalArgs = [i, direction, change];
                output += " " + this.Operation(generalArgs, true)[0];
            }

            output += this.getConditionStartRight();

            return [output, 1];
        }

        // string name
        public FunctionCall(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FunctionCall", functionArgs, 1);

            var output: string = functionArgs[0] + "(",
                i: number;

            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length - 1; i += 1) {
                    output += functionArgs[i] + ", ";
                }
                output += functionArgs[i];
            }

            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        public FunctionEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string name, string return[, string argumentName, string argumentType, ...]
        public FunctionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FunctionStart", functionArgs, 2);

            var output: string = "",
                variableDeclarationArguments: string[] = [],
                i: number;

            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output += this.getTypeAlias(functionArgs[1]) + " ";
            }

            output += this.getFunctionDefine() + functionArgs[0] + "(";

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";

            if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                output += this.getFunctionTypeMarker() + this.getTypeAlias(functionArgs[1]);
            }

            output += this.getFunctionDefineRight();
            return [output, 1];
        }

        // string value
        public FunctionReturn(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FunctionReturn", functionArgs, 1);

            return ["return " + functionArgs[0] + this.getSemiColon(), 0];
        }

        // string left, string operator, string right
        public IfConditionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("IfConditionStart", functionArgs, 3);

            var output: string = "if" + this.getConditionStartLeft();

            output += functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]) + " ";
            output += functionArgs[2] + this.getConditionStartRight();

            return [output, 1];
        }

        public IfEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getConditionEnd(), -1];
        }

        // string variable
        public IfVariableStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("IfVariable", functionArgs, 1);

            var output: string = "if" + this.getConditionStartLeft();

            output += functionArgs[0] + this.getConditionStartRight();

            return [output, 1];
        }

        public MainEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getMainEndLine(), this.getMainStartLine().length === 0 ? 0 : -1];
        }

        public MainStart(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getMainStartLine();

            return [output, output.length === 0 ? 0 : 1];
        }

        // string i, string direction, string difference
        public Operation(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("Operation", functionArgs, 3);

            var output: string = functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]);

            output += " " + this.getValueAlias(functionArgs[2]);

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        // [string message, ...]
        public PrintLine(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getPrintFunction() + "(",
                i: number;

            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }

            output += functionArgs[i];
            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        // string name, string type[, string value]
        public VariableDeclare(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("VariableDeclare", functionArgs, 2);

            var variableDeclared: any[] = this.VariableDeclarePartial(functionArgs, isInline);

            variableDeclared[0] = this.getVariableDeclareStart() + variableDeclared[0];

            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }

            return variableDeclared;
        }

        // string name, string type[, string value]
        public VariableDeclarePartial(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("VariableDeclarePartial", functionArgs, 2);

            var output: string = "";

            if (this.getVariableTypesExplicit()) {
                if (this.getVariableTypesAfterName()) {
                    output += functionArgs[0] + this.getVariableTypeMarker() + this.getTypeAlias(functionArgs[1]);
                } else {
                    output += this.getTypeAlias(functionArgs[1]) + " " + functionArgs[0];
                }
            } else {
                output += functionArgs[0];
            }

            if (functionArgs.length > 2) {
                output += " " + this.getOperationAlias("equals") + " " + this.getValueAlias(functionArgs[2]);
            }

            return [output, 0];
        }

        // string left, string operator, string right
        public WhileConditionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("WhileConditionStart", functionArgs, 3);

            var output: string = "while" + this.getConditionStartLeft() + functionArgs[0] + " ";

            output += this.getOperationAlias(functionArgs[1]) + " ";
            output += functionArgs[2] + this.getConditionStartRight();

            return [output, 1];
        }

        public WhileEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getConditionEnd(), -1];
        }

        // string variable
        public WhileVariableStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("WhileVariableStart", functionArgs, 1);

            var output: string = "while" + this.getConditionStartLeft();

            output += this.getOperationAlias(functionArgs[0]) + this.getConditionStartRight();

            return [output, 1];
        }


        /* Utilities
        */

        private requireArgumentsLength(functionName: string, functionArgs: string[], amount: number) {
            if (functionArgs.length < amount) {
                throw new Error("Not enough arguments given to " + functionName + " (required: " + amount + ").");
            }
        }
    }
}
