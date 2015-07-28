module GLSC {
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

        public setName(): string {
            return this.Name;
        }

        public setExtension(): string {
            return this.Extension;
        }

        public setPrintFunction(): string {
            return this.PrintFunction;
        }

        public setSemiColon(): string {
            return this.SemiColon;
        }

        public setCommentorBlockStart(): string {
            return this.CommentorBlockStart;
        }

        public setCommentorBlockEnd(): string {
            return this.CommentorBlockEnd;
        }

        public setCommentorInline(): string {
            return this.CommentorInline;
        }

        public setConditionStartLeft(): string {
            return this.ConditionStartLeft;
        }

        public setConditionStartRight(): string {
            return this.ConditionStartRight;
        }

        public setConditionContinueLeft(): string {
            return this.ConditionContinueLeft;
        }

        public setConditionContinueRight(): string {
            return this.ConditionContinueRight;
        }

        public setConditionEnd(): string {
            return this.ConditionEnd;
        }

        public setElif(): string {
            return this.Elif;
        }

        public setElse(): string {
            return this.Else;
        }

        public setIf(): string {
            return this.If;
        }

        public setAnd(): string {
            return this.And;
        }

        public setGreaterThan(): string {
            return this.GreaterThan;
        }

        public setGreaterThanOrEqual(): string {
            return this.GreaterThanOrEqual;
        }

        public setLessThan(): string {
            return this.LessThan;
        }

        public setLessThanOrEqual(): string {
            return this.LessThanOrEqual;
        }

        public setOr(): string {
            return this.Or;
        }

        public setVariableTypesExplicit(): boolean {
            return this.VariableTypesExplicit;
        }

        public setVariableTypesAfterName(): boolean {
            return this.VariableTypesAfterName;
        }

        public setVariableTypeMarker(): string {
            return this.VariableTypeMarker;
        }

        public setVariableDeclareStart(): string {
            return this.VariableDeclareStart;
        }

        public setBooleanClass(): string {
            return this.BooleanClass;
        }

        public setTrue(): string {
            return this.True;
        }

        public setFalse(): string {
            return this.False;
        }

        public setNumberClass(): string {
            return this.NumberClass;
        }

        public setStringClass(): string {
            return this.StringClass;
        }

        public setStringLength(): string {
            return this.StringLength;
        }

        public setRangedForLoops(): boolean {
            return this.RangedForLoops;
        }

        public setArrayClass(): string {
            return this.ArrayClass;
        }

        public setArrayLength(): string {
            return this.ArrayLength;
        }

        public setFunctionDefine(): string {
            return this.FunctionDefine;
        }

        public setFunctionDefineRight(): string {
            return this.FunctionDefineRight;
        }

        public setFunctionDefineEnd(): string {
            return this.FunctionDefineEnd;
        }

        public setFunctionReturnsExplicit(): boolean {
            return this.FunctionReturnsExplicit;
        }

        public setDictionaryClass(): string {
            return this.DictionaryClass;
        }

        public setClassConstructorName(): string {
            return this.ClassConstructorName;
        }

        public setClassEnder(): string {
            return this.ClassEnder;
        }

        public setClassFunctionsTakeThis(): boolean {
            return this.ClassFunctionsTakeThis;
        }

        public setClassFunctionsStart(): string {
            return this.ClassFunctionsStart;
        }

        public setClassFunctionsThis(): string {
            return this.ClassFunctionsThis;
        }

        public setClassMemberVariableDefault(): string {
            return this.ClassMemberVariableDefault;
        }

        public setClassNewer(): string {
            return this.ClassNewer;
        }

        public setClassPrivacy(): boolean {
            return this.ClassPrivacy;
        }

        public setClassStartLeft(): string {
            return this.ClassStartLeft;
        }

        public setClassStartRight(): string {
            return this.ClassStartRight;
        }

        public setClassThis(): string {
            return this.ClassThis;
        }

        public setClassThisAccess(): string {
            return this.ClassThisAccess;
        }

        public setFileEndLine(): string {
            return this.FileEndLine;
        }

        public setFileStartLeft(): string {
            return this.FileStartLeft;
        }

        public setFileStartRight(): string {
            return this.FileStartRight;
        }

        public setMainEndLine(): string {
            return this.MainEndLine;
        }

        public setMainStartLine(): string {
            return this.MainStartLine;
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
                return ["Function not found: " + functionName, 0];
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

                for (i = 1; i < arguments.length; i += 2) {
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

        public ClassEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getClassEnder(), -1];
        }

        // string variable, string function, [, string argumentName, string argumentType, ... ]
        public ClassMemberFunctionCall(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = functionArgs[0] + "." + functionArgs[1] + "(",
                i: number;

            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length - 1; i += 1) {
                    output + functionArgs[i] + ", ";
                }
                output += arguments[i];
            }

            return [output, 0];
        }

        public ClassMemberFunctionEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string class, string visibility, string name, string return, [, string argumentName, string argumentType...]
        public ClassMemberFunctionStart(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getClassFunctionsStart(),
                variableDeclarationArguments: string[] = [],
                i: number;

            if (this.getFunctionReturnsExplicit()) {
                output = functionArgs[3] + " ";
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

            output += ")" + this.getFunctionDefineRight();
            return [output, 1];
        }


        // string name, string type
        public ClassMemberVariableDeclare(functionArgs: string[], isInline?: boolean): any[] {
            return ["NOPE LOL", 0];
        }

        // string name
        public ClassMemberVariableGet(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getClassThis() + this.getClassThisAccess() + functionArgs[0], 0];
        }

        // string name, string value
        public ClassMemberVariableSet(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getClassThis() + this.getClassThisAccess();

            output += functionArgs[0] + " " + this.getOperationAlias("equals") + " " + functionArgs[1];
            output += this.getSemiColon();

            return [output, 0];
        }

        // string name
        public ClassStart(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getClassStartLeft() + functionArgs[0] + this.getClassStartRight(), 1];
        }

        // string name[, string argumentName, string argumentType, ...]
        public ClassNew(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getClassNewer() + arguments[0] + "(",
                i: number;

            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length; i += 1) {
                    output += functionArgs[i] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";
            return [output, 0];
        }

        // [string message, ...]
        public CommentBlock(functionArgs: string[], isInline?: boolean): any[] {
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

        // string left, string comparison, string right
        public Comparison(functionArgs: string[], isInline?: boolean): any[] {
            return [functionArgs[0] + " " + this.getOperationAlias(arguments[1]) + " " + functionArgs[2], 0];
        }

        public FileEnd(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getFileEndLine();
            return [output, output.length === 0 ? this.INT_MIN : -1];
        }

        // string name
        public FileStart(functionArgs: string[], isInline?: boolean): any[] {
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

        // string name, stirng return[, string argumentName, string argumentType, ...]
        public FunctionStart(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = "",
                variableDeclarationArguments: string[],
                i: number;

            if (this.getFunctionReturnsExplicit() && functionArgs[1] !== "") {
                output += functionArgs[1] + " ";
            }

            output += this.getFunctionDefine() + functionArgs[0] + "(";

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }
            }

            output += ")" + this.getFunctionDefineRight();
            return [output, 1];
        }

        // string value
        public FunctionReturn(functionArgs: string[], isInline?: boolean): any[] {
            return ["return " + functionArgs[0] + this.getSemiColon(), 0];
        }

        // string left, string operator, string right
        public IfConditionStart(functionArgs: string[], isInline?: boolean): any[] {
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
            var variableDeclared: any[] = this.VariableDeclarePartial(functionArgs, isInline);

            variableDeclared[0] = this.getVariableDeclareStart() + variableDeclared[0];

            return variableDeclared;
        }

        // string name, string type[, string value]
        public VariableDeclarePartial(functionArgs: string[], isInline?: boolean): any[] {
            var output: string;

            if (this.getVariableTypesExplicit()) {
                if (this.getVariableTypesAfterName()) {
                    output += functionArgs[0] + this.getVariableTypeMarker() + this.getTypeAlias(arguments[1]);
                } else {
                    output += this.getTypeAlias(arguments[1]) + " " + functionArgs[0];
                }
            } else {
                output += functionArgs[0];
            }

            if (functionArgs.length >= 3) {
                output += " " + this.getOperationAlias("equals") + " " + this.getValueAlias(functionArgs[2]);
            }

            return [output, 0];
        }

        // string left, string operator, string right
        public WhileConditionStart(functionArgs: string[], isInline?: boolean): any[] {
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
            var output: string = "while" + this.getConditionStartLeft();

            output += this.getOperationAlias(functionArgs[0]) + this.getConditionStartRight();

            return [output, 1];
        }
    }
}
