module GLSC {
    export class Language {
        private printers: any;
        private OperationAliases: any;
        private TypeAliases: any;
        private ValueAliases: any;
        private INT_MIN: number;

        constructor() {
            this.printers = {
                "class constructor end": this.ClassConstructorEnd.bind(this),
                "class constructor start": this.ClassConstructorStart.bind(this),
                "class end": this.ClassEnd.bind(this),
                "class member function call": this.ClassMemberFunctionCall.bind(this),
                "class member function get": this.ClassMemberFunctionGet.bind(this),
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
            if (!this.geters.hasOwnProperty(functionName)) {
                return ["Function not found: " + functionName, 0];
            }

            return this.geters[functionName](functionArgs, isInline);
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

                output += this.getVariableDeclarePartial(variableDeclarationArguments, true)[0];
            }

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 1) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }

                for (i = 1; i < arguments.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.getVariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")" + FunctionDefineRight();
            return [output, 1];
        }

        public ClassEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getClassEnd(), -1];
        }

        // string variable, string function, [, string argumentName, string argumentType, ... ]
        public ClassMemberFunctionCall(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = functionArgs[0] + "." + functionArgs[1] + "(",
                i: number;

            if (functionArgs.length > 2) {
                for (i = 2; i < argumentslength - 1; i += 1) {
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

                output += this.getVariableDeclarePartial(variableDeclarationArguments, true)[0];
            }

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 4) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }

                for (i = 4; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.getVariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
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
            var output: string = this.getClassNew() + arguments[0] + "(",
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
            return [output, output.length === 0 ? this.getINT_MIN : -1];
        }

        // string name
        public FileStart(functionArgs: string[], isInline?: boolean): any[] {
            var left: string = this.getFileStartLeft(),
                right: string = this.getFileStartRight();

            if (left.length === 0 && right.length === 0) {
                return ["", this.getINT_MIN];
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
                variableArgs: any[],
                i: string = functionArgs[0],
                typeName = this.getTypeAlias(functionArgs[1]),
                initial: string = functionArgs[2],
                comparison: string = functionArgs[3],
                boundary: string = functionArgs[4],
                direction: string = functionArgs[5],
                change: string = functionArgs[6];

            if (this.getRangedForLoops()) {
                variableArgs = [i, typeName];
                output += this.getVariableDeclare(variableArgs, false)[0];

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
                variableArgs = [i, typeName, initial];
                output += this.getVariableDeclare(variableArgs, true)[0] + this.getSemiColon();

                variableArgs = [i, comparison, boundary];
                output += " " + this.getComparison(comparisonArgs, true)[0] + this.getSemiColon();

                variableArgs = [i, direction, change];
                output += " " + this.getOperation(operationArgs, true)[0];
            }

            output += ConditionStartRight();

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

                    output += this.getVariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
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
            return [this.getMainEndLine(), thisMainStartLine().length === 0 ? 0 : -1];
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

            variableDeclared[0] = this.getVariableDeclare() + variableDeclared[0];

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
