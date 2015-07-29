var GLS;
(function (GLS) {
    var Language = (function () {
        function Language() {
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
        Language.prototype.getName = function () {
            return this.Name;
        };
        Language.prototype.getExtension = function () {
            return this.Extension;
        };
        Language.prototype.getPrintFunction = function () {
            return this.PrintFunction;
        };
        Language.prototype.getSemiColon = function () {
            return this.SemiColon;
        };
        Language.prototype.getCommentorBlockStart = function () {
            return this.CommentorBlockStart;
        };
        Language.prototype.getCommentorBlockEnd = function () {
            return this.CommentorBlockEnd;
        };
        Language.prototype.getCommentorInline = function () {
            return this.CommentorInline;
        };
        Language.prototype.getConditionStartLeft = function () {
            return this.ConditionStartLeft;
        };
        Language.prototype.getConditionStartRight = function () {
            return this.ConditionStartRight;
        };
        Language.prototype.getConditionContinueLeft = function () {
            return this.ConditionContinueLeft;
        };
        Language.prototype.getConditionContinueRight = function () {
            return this.ConditionContinueRight;
        };
        Language.prototype.getConditionEnd = function () {
            return this.ConditionEnd;
        };
        Language.prototype.getElif = function () {
            return this.Elif;
        };
        Language.prototype.getElse = function () {
            return this.Else;
        };
        Language.prototype.getIf = function () {
            return this.If;
        };
        Language.prototype.getAnd = function () {
            return this.And;
        };
        Language.prototype.getGreaterThan = function () {
            return this.GreaterThan;
        };
        Language.prototype.getGreaterThanOrEqual = function () {
            return this.GreaterThanOrEqual;
        };
        Language.prototype.getLessThan = function () {
            return this.LessThan;
        };
        Language.prototype.getLessThanOrEqual = function () {
            return this.LessThanOrEqual;
        };
        Language.prototype.getOr = function () {
            return this.Or;
        };
        Language.prototype.getVariableTypesExplicit = function () {
            return this.VariableTypesExplicit;
        };
        Language.prototype.getVariableTypesAfterName = function () {
            return this.VariableTypesAfterName;
        };
        Language.prototype.getVariableTypeMarker = function () {
            return this.VariableTypeMarker;
        };
        Language.prototype.getVariableDeclareStart = function () {
            return this.VariableDeclareStart;
        };
        Language.prototype.getBooleanClass = function () {
            return this.BooleanClass;
        };
        Language.prototype.getTrue = function () {
            return this.True;
        };
        Language.prototype.getFalse = function () {
            return this.False;
        };
        Language.prototype.getNumberClass = function () {
            return this.NumberClass;
        };
        Language.prototype.getStringClass = function () {
            return this.StringClass;
        };
        Language.prototype.getStringLength = function () {
            return this.StringLength;
        };
        Language.prototype.getRangedForLoops = function () {
            return this.RangedForLoops;
        };
        Language.prototype.getArrayClass = function () {
            return this.ArrayClass;
        };
        Language.prototype.getArrayLength = function () {
            return this.ArrayLength;
        };
        Language.prototype.getFunctionDefine = function () {
            return this.FunctionDefine;
        };
        Language.prototype.getFunctionDefineRight = function () {
            return this.FunctionDefineRight;
        };
        Language.prototype.getFunctionDefineEnd = function () {
            return this.FunctionDefineEnd;
        };
        Language.prototype.getFunctionReturnsExplicit = function () {
            return this.FunctionReturnsExplicit;
        };
        Language.prototype.getDictionaryClass = function () {
            return this.DictionaryClass;
        };
        Language.prototype.getClassConstructorName = function () {
            return this.ClassConstructorName;
        };
        Language.prototype.getClassEnder = function () {
            return this.ClassEnder;
        };
        Language.prototype.getClassFunctionsTakeThis = function () {
            return this.ClassFunctionsTakeThis;
        };
        Language.prototype.getClassFunctionsStart = function () {
            return this.ClassFunctionsStart;
        };
        Language.prototype.getClassFunctionsThis = function () {
            return this.ClassFunctionsThis;
        };
        Language.prototype.getClassMemberVariableDefault = function () {
            return this.ClassMemberVariableDefault;
        };
        Language.prototype.getClassNewer = function () {
            return this.ClassNewer;
        };
        Language.prototype.getClassPrivacy = function () {
            return this.ClassPrivacy;
        };
        Language.prototype.getClassStartLeft = function () {
            return this.ClassStartLeft;
        };
        Language.prototype.getClassStartRight = function () {
            return this.ClassStartRight;
        };
        Language.prototype.getClassThis = function () {
            return this.ClassThis;
        };
        Language.prototype.getClassThisAccess = function () {
            return this.ClassThisAccess;
        };
        Language.prototype.getFileEndLine = function () {
            return this.FileEndLine;
        };
        Language.prototype.getFileStartLeft = function () {
            return this.FileStartLeft;
        };
        Language.prototype.getFileStartRight = function () {
            return this.FileStartRight;
        };
        Language.prototype.getMainEndLine = function () {
            return this.MainEndLine;
        };
        Language.prototype.getMainStartLine = function () {
            return this.MainStartLine;
        };
        /* Sets
        */
        Language.prototype.setName = function () {
            return this.Name;
        };
        Language.prototype.setExtension = function () {
            return this.Extension;
        };
        Language.prototype.setPrintFunction = function () {
            return this.PrintFunction;
        };
        Language.prototype.setSemiColon = function () {
            return this.SemiColon;
        };
        Language.prototype.setCommentorBlockStart = function () {
            return this.CommentorBlockStart;
        };
        Language.prototype.setCommentorBlockEnd = function () {
            return this.CommentorBlockEnd;
        };
        Language.prototype.setCommentorInline = function () {
            return this.CommentorInline;
        };
        Language.prototype.setConditionStartLeft = function () {
            return this.ConditionStartLeft;
        };
        Language.prototype.setConditionStartRight = function () {
            return this.ConditionStartRight;
        };
        Language.prototype.setConditionContinueLeft = function () {
            return this.ConditionContinueLeft;
        };
        Language.prototype.setConditionContinueRight = function () {
            return this.ConditionContinueRight;
        };
        Language.prototype.setConditionEnd = function () {
            return this.ConditionEnd;
        };
        Language.prototype.setElif = function () {
            return this.Elif;
        };
        Language.prototype.setElse = function () {
            return this.Else;
        };
        Language.prototype.setIf = function () {
            return this.If;
        };
        Language.prototype.setAnd = function () {
            return this.And;
        };
        Language.prototype.setGreaterThan = function () {
            return this.GreaterThan;
        };
        Language.prototype.setGreaterThanOrEqual = function () {
            return this.GreaterThanOrEqual;
        };
        Language.prototype.setLessThan = function () {
            return this.LessThan;
        };
        Language.prototype.setLessThanOrEqual = function () {
            return this.LessThanOrEqual;
        };
        Language.prototype.setOr = function () {
            return this.Or;
        };
        Language.prototype.setVariableTypesExplicit = function () {
            return this.VariableTypesExplicit;
        };
        Language.prototype.setVariableTypesAfterName = function () {
            return this.VariableTypesAfterName;
        };
        Language.prototype.setVariableTypeMarker = function () {
            return this.VariableTypeMarker;
        };
        Language.prototype.setVariableDeclareStart = function () {
            return this.VariableDeclareStart;
        };
        Language.prototype.setBooleanClass = function () {
            return this.BooleanClass;
        };
        Language.prototype.setTrue = function () {
            return this.True;
        };
        Language.prototype.setFalse = function () {
            return this.False;
        };
        Language.prototype.setNumberClass = function () {
            return this.NumberClass;
        };
        Language.prototype.setStringClass = function () {
            return this.StringClass;
        };
        Language.prototype.setStringLength = function () {
            return this.StringLength;
        };
        Language.prototype.setRangedForLoops = function () {
            return this.RangedForLoops;
        };
        Language.prototype.setArrayClass = function () {
            return this.ArrayClass;
        };
        Language.prototype.setArrayLength = function () {
            return this.ArrayLength;
        };
        Language.prototype.setFunctionDefine = function () {
            return this.FunctionDefine;
        };
        Language.prototype.setFunctionDefineRight = function () {
            return this.FunctionDefineRight;
        };
        Language.prototype.setFunctionDefineEnd = function () {
            return this.FunctionDefineEnd;
        };
        Language.prototype.setFunctionReturnsExplicit = function () {
            return this.FunctionReturnsExplicit;
        };
        Language.prototype.setDictionaryClass = function () {
            return this.DictionaryClass;
        };
        Language.prototype.setClassConstructorName = function () {
            return this.ClassConstructorName;
        };
        Language.prototype.setClassEnder = function () {
            return this.ClassEnder;
        };
        Language.prototype.setClassFunctionsTakeThis = function () {
            return this.ClassFunctionsTakeThis;
        };
        Language.prototype.setClassFunctionsStart = function () {
            return this.ClassFunctionsStart;
        };
        Language.prototype.setClassFunctionsThis = function () {
            return this.ClassFunctionsThis;
        };
        Language.prototype.setClassMemberVariableDefault = function () {
            return this.ClassMemberVariableDefault;
        };
        Language.prototype.setClassNewer = function () {
            return this.ClassNewer;
        };
        Language.prototype.setClassPrivacy = function () {
            return this.ClassPrivacy;
        };
        Language.prototype.setClassStartLeft = function () {
            return this.ClassStartLeft;
        };
        Language.prototype.setClassStartRight = function () {
            return this.ClassStartRight;
        };
        Language.prototype.setClassThis = function () {
            return this.ClassThis;
        };
        Language.prototype.setClassThisAccess = function () {
            return this.ClassThisAccess;
        };
        Language.prototype.setFileEndLine = function () {
            return this.FileEndLine;
        };
        Language.prototype.setFileStartLeft = function () {
            return this.FileStartLeft;
        };
        Language.prototype.setFileStartRight = function () {
            return this.FileStartRight;
        };
        Language.prototype.setMainEndLine = function () {
            return this.MainEndLine;
        };
        Language.prototype.setMainStartLine = function () {
            return this.MainStartLine;
        };
        Language.prototype.AliasOrDefault = function (aliases, key) {
            return aliases.hasOwnProperty(key) ? aliases[key] : key;
        };
        Language.prototype.getTypeAlias = function (key) {
            return this.AliasOrDefault(this.TypeAliases, key);
        };
        Language.prototype.getOperationAlias = function (key) {
            return this.AliasOrDefault(this.OperationAliases, key);
        };
        Language.prototype.getValueAlias = function (key) {
            return this.AliasOrDefault(this.ValueAliases, key);
        };
        Language.prototype.addTypeAlias = function (key, alias) {
            this.TypeAliases[alias] = key;
            return this;
        };
        Language.prototype.addOperationAlias = function (key, alias) {
            this.OperationAliases[alias] = key;
            return this;
        };
        Language.prototype.addValueAlias = function (key, alias) {
            this.ValueAliases[alias] = key;
            return this;
        };
        Language.prototype.inheritTypeAliases = function (language) {
            for (var i in language.TypeAliases) {
                this.addTypeAlias(language.TypeAliases[i], i);
            }
            return this;
        };
        Language.prototype.inheritOperationAliases = function (language) {
            for (var i in language.OperationAliases) {
                this.addOperationAlias(language.OperationAliases[i], i);
            }
            return this;
        };
        Language.prototype.inheritValueAliases = function (language) {
            for (var i in language.ValueAliases) {
                this.addValueAlias(language.ValueAliases[i], i);
            }
            return this;
        };
        Language.prototype.print = function (functionName, functionArgs, isInline) {
            if (!this.printers.hasOwnProperty(functionName)) {
                return ["Function not found: " + functionName, 0];
            }
            return this.printers[functionName](functionArgs, isInline);
        };
        /* Printers
        */
        Language.prototype.ClassConstructorEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string name[, string argumentName, string argumentType, ...]
        Language.prototype.ClassConstructorStart = function (functionArgs, isInline) {
            var output = this.getClassConstructorName(), variableDeclarationArguments = [], i;
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
        };
        Language.prototype.ClassEnd = function (functionArgs, isInline) {
            return [this.getClassEnder(), -1];
        };
        // string variable, string function, [, string argumentName, string argumentType, ... ]
        Language.prototype.ClassMemberFunctionCall = function (functionArgs, isInline) {
            var output = functionArgs[0] + "." + functionArgs[1] + "(", i;
            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length - 1; i += 1) {
                    output + functionArgs[i] + ", ";
                }
                output += arguments[i];
            }
            return [output, 0];
        };
        Language.prototype.ClassMemberFunctionEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string class, string visibility, string name, string return, [, string argumentName, string argumentType...]
        Language.prototype.ClassMemberFunctionStart = function (functionArgs, isInline) {
            var output = this.getClassFunctionsStart(), variableDeclarationArguments = [], i;
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
        };
        // string name, string type
        Language.prototype.ClassMemberVariableDeclare = function (functionArgs, isInline) {
            return ["NOPE LOL", 0];
        };
        // string name
        Language.prototype.ClassMemberVariableGet = function (functionArgs, isInline) {
            return [this.getClassThis() + this.getClassThisAccess() + functionArgs[0], 0];
        };
        // string name, string value
        Language.prototype.ClassMemberVariableSet = function (functionArgs, isInline) {
            var output = this.getClassThis() + this.getClassThisAccess();
            output += functionArgs[0] + " " + this.getOperationAlias("equals") + " " + functionArgs[1];
            output += this.getSemiColon();
            return [output, 0];
        };
        // string name
        Language.prototype.ClassStart = function (functionArgs, isInline) {
            return [this.getClassStartLeft() + functionArgs[0] + this.getClassStartRight(), 1];
        };
        // string name[, string argumentName, string argumentType, ...]
        Language.prototype.ClassNew = function (functionArgs, isInline) {
            var output = this.getClassNewer() + arguments[0] + "(", i;
            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length; i += 1) {
                    output += functionArgs[i] + ", ";
                }
                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }
            output += ")";
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.CommentBlock = function (functionArgs, isInline) {
            var output = this.getCommentorBlockStart() + "\n", i;
            for (i = 0; i < functionArgs.length; i += 1) {
                output += functionArgs[i] + "\n";
            }
            output += this.getCommentorBlockEnd();
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.CommentLine = function (functionArgs, isInline) {
            var output = this.getCommentorInline() + " ", i;
            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + " ";
            }
            output += functionArgs[i];
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.CommentInline = function (functionArgs, isInline) {
            var result = this.CommentLine(functionArgs, isInline);
            result[1] = this.INT_MIN;
            return result;
        };
        // string left, string comparison, string right
        Language.prototype.Comparison = function (functionArgs, isInline) {
            return [functionArgs[0] + " " + this.getOperationAlias(arguments[1]) + " " + functionArgs[2], 0];
        };
        Language.prototype.FileEnd = function (functionArgs, isInline) {
            var output = this.getFileEndLine();
            return [output, output.length === 0 ? this.INT_MIN : -1];
        };
        // string name
        Language.prototype.FileStart = function (functionArgs, isInline) {
            var left = this.getFileStartLeft(), right = this.getFileStartRight();
            if (left.length === 0 && right.length === 0) {
                return ["", this.INT_MIN];
            }
            return [left + functionArgs[0] + right, 1];
        };
        Language.prototype.ForEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string i, string type, string initial, string comparison, string boundary, string direction, string change
        // e.x. i int 0 lessthan 7 increaseby 1
        Language.prototype.ForNumbersStart = function (functionArgs, isInline) {
            var output = "for" + this.getConditionStartLeft(), generalArgs, i = functionArgs[0], typeName = this.getTypeAlias(functionArgs[1]), initial = functionArgs[2], comparison = functionArgs[3], boundary = functionArgs[4], direction = functionArgs[5], change = functionArgs[6];
            if (this.getRangedForLoops()) {
                generalArgs = [i, typeName];
                output += this.VariableDeclare(generalArgs, false)[0];
                output += " in range(";
                output += initial + ", " + boundary;
                if (direction === "increaseby") {
                    if (change !== "1") {
                        output += ", " + change;
                    }
                }
                else if (direction === "decreaseby") {
                    output += ", -" + change;
                }
                output += ")";
            }
            else {
                generalArgs = [i, typeName, initial];
                output += this.VariableDeclare(generalArgs, true)[0] + this.getSemiColon();
                generalArgs = [i, comparison, boundary];
                output += " " + this.Comparison(generalArgs, true)[0] + this.getSemiColon();
                generalArgs = [i, direction, change];
                output += " " + this.Operation(generalArgs, true)[0];
            }
            output += this.getConditionStartRight();
            return [output, 1];
        };
        // string name
        Language.prototype.FunctionCall = function (functionArgs, isInline) {
            var output = functionArgs[0] + "(", i;
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
        };
        Language.prototype.FunctionEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string name, stirng return[, string argumentName, string argumentType, ...]
        Language.prototype.FunctionStart = function (functionArgs, isInline) {
            var output = "", variableDeclarationArguments, i;
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
        };
        // string value
        Language.prototype.FunctionReturn = function (functionArgs, isInline) {
            return ["return " + functionArgs[0] + this.getSemiColon(), 0];
        };
        // string left, string operator, string right
        Language.prototype.IfConditionStart = function (functionArgs, isInline) {
            var output = "if" + this.getConditionStartLeft();
            output += functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]) + " ";
            output += functionArgs[2] + this.getConditionStartRight();
            return [output, 1];
        };
        Language.prototype.IfEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string variable
        Language.prototype.IfVariableStart = function (functionArgs, isInline) {
            var output = "if" + this.getConditionStartLeft();
            output += functionArgs[0] + this.getConditionStartRight();
            return [output, 1];
        };
        Language.prototype.MainEnd = function (functionArgs, isInline) {
            return [this.getMainEndLine(), this.getMainStartLine().length === 0 ? 0 : -1];
        };
        Language.prototype.MainStart = function (functionArgs, isInline) {
            var output = this.getMainStartLine();
            return [output, output.length === 0 ? 0 : 1];
        };
        // string i, string direction, string difference
        Language.prototype.Operation = function (functionArgs, isInline) {
            var output = functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]);
            output += " " + this.getValueAlias(functionArgs[2]);
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.PrintLine = function (functionArgs, isInline) {
            var output = this.getPrintFunction() + "(", i;
            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }
            output += functionArgs[i];
            output += ")";
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        // string name, string type[, string value]
        Language.prototype.VariableDeclare = function (functionArgs, isInline) {
            var variableDeclared = this.VariableDeclarePartial(functionArgs, isInline);
            variableDeclared[0] = this.getVariableDeclareStart() + variableDeclared[0];
            return variableDeclared;
        };
        // string name, string type[, string value]
        Language.prototype.VariableDeclarePartial = function (functionArgs, isInline) {
            var output;
            if (this.getVariableTypesExplicit()) {
                if (this.getVariableTypesAfterName()) {
                    output += functionArgs[0] + this.getVariableTypeMarker() + this.getTypeAlias(arguments[1]);
                }
                else {
                    output += this.getTypeAlias(arguments[1]) + " " + functionArgs[0];
                }
            }
            else {
                output += functionArgs[0];
            }
            if (functionArgs.length >= 3) {
                output += " " + this.getOperationAlias("equals") + " " + this.getValueAlias(functionArgs[2]);
            }
            return [output, 0];
        };
        // string left, string operator, string right
        Language.prototype.WhileConditionStart = function (functionArgs, isInline) {
            var output = "while" + this.getConditionStartLeft() + functionArgs[0] + " ";
            output += this.getOperationAlias(functionArgs[1]) + " ";
            output += functionArgs[2] + this.getConditionStartRight();
            return [output, 1];
        };
        Language.prototype.WhileEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string variable
        Language.prototype.WhileVariableStart = function (functionArgs, isInline) {
            var output = "while" + this.getConditionStartLeft();
            output += this.getOperationAlias(functionArgs[0]) + this.getConditionStartRight();
            return [output, 1];
        };
        return Language;
    })();
    GLS.Language = Language;
})(GLS || (GLS = {}));
