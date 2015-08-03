var GLS;
(function (GLS) {
    var Language = (function () {
        function Language() {
            this.printers = {
                "array initialize": this.ArrayInitialize.bind(this),
                "array get item": this.ArrayGetItem.bind(this),
                "array get length": this.ArrayGetLength.bind(this),
                "class constructor end": this.ClassConstructorEnd.bind(this),
                "class constructor inherited call": this.ClassConstructorInheritedCall.bind(this),
                "class constructor inherited start": this.ClassConstructorInheritedStart.bind(this),
                "class constructor start": this.ClassConstructorStart.bind(this),
                "class end": this.ClassEnd.bind(this),
                "class member function call": this.ClassMemberFunctionCall.bind(this),
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
                "concatenate": this.Concatenate.bind(this),
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
                "parenthesis": this.Parenthesis.bind(this),
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
                "divide": "/",
                "increaseby": "+=",
                "decreaseby": "-=",
                "multiplyby": "*=",
                "divideby": "/=",
                "lessthan": "<",
                "greaterthan": ">",
                "lessthanequal": "<=",
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
        Language.prototype.getToString = function () {
            return this.ToString;
        };
        Language.prototype.getToStringAsFunction = function () {
            return this.ToStringAsFunction;
        };
        Language.prototype.getRangedForLoops = function () {
            return this.RangedForLoops;
        };
        Language.prototype.getRangedForLoopsStart = function () {
            return this.RangedForLoopsStart;
        };
        Language.prototype.getRangedForLoopsMiddle = function () {
            return this.RangedForLoopsMiddle;
        };
        Language.prototype.getRangedForLoopsEnd = function () {
            return this.RangedForLoopsEnd;
        };
        Language.prototype.getArrayClass = function () {
            return this.ArrayClass;
        };
        Language.prototype.getArrayInitializationAsNew = function () {
            return this.ArrayInitializationAsNew;
        };
        Language.prototype.getArrayLength = function () {
            return this.ArrayLength;
        };
        Language.prototype.getArrayLengthAsFunction = function () {
            return this.ArrayLengthAsFunction;
        };
        Language.prototype.getArrayNegativeIndices = function () {
            return this.ArrayNegativeIndices;
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
        Language.prototype.getFunctionTypeMarker = function () {
            return this.FunctionTypeMarker;
        };
        Language.prototype.getFunctionTypeAfterName = function () {
            return this.FunctionTypeAfterName;
        };
        Language.prototype.getDictionaryClass = function () {
            return this.DictionaryClass;
        };
        Language.prototype.getClassConstructorAsStatic = function () {
            return this.ClassConstructorAsStatic;
        };
        Language.prototype.getClassConstructorInheritedShorthand = function () {
            return this.ClassConstructorInheritedShorthand;
        };
        Language.prototype.getClassConstructorName = function () {
            return this.ClassConstructorName;
        };
        Language.prototype.getClassConstructorLoose = function () {
            return this.ClassConstructorLoose;
        };
        Language.prototype.getClassEnder = function () {
            return this.ClassEnder;
        };
        Language.prototype.getClassExtends = function () {
            return this.ClassExtends;
        };
        Language.prototype.getClassExtendsAsFunction = function () {
            return this.ClassExtendsAsFunction;
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
        Language.prototype.getClassMemberVariablePrivacy = function () {
            return this.ClassMemberVariablePrivacy;
        };
        Language.prototype.getClassMemberVariableStarter = function () {
            return this.ClassMemberVariableStarter;
        };
        Language.prototype.getClassNewer = function () {
            return this.ClassNewer;
        };
        Language.prototype.getClassParentName = function () {
            return this.ClassParentName;
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
        Language.prototype.getClassTemplates = function () {
            return this.ClassTemplates;
        };
        Language.prototype.getClassTemplatesBetween = function () {
            return this.ClassTemplatesBetween;
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
        Language.prototype.setName = function (value) {
            this.Name = value;
            return this;
        };
        Language.prototype.setExtension = function (value) {
            this.Extension = value;
            return this;
        };
        Language.prototype.setPrintFunction = function (value) {
            this.PrintFunction = value;
            return this;
        };
        Language.prototype.setSemiColon = function (value) {
            this.SemiColon = value;
            return this;
        };
        Language.prototype.setCommentorBlockStart = function (value) {
            this.CommentorBlockStart = value;
            return this;
        };
        Language.prototype.setCommentorBlockEnd = function (value) {
            this.CommentorBlockEnd = value;
            return this;
        };
        Language.prototype.setCommentorInline = function (value) {
            this.CommentorInline = value;
            return this;
        };
        Language.prototype.setConditionStartLeft = function (value) {
            this.ConditionStartLeft = value;
            return this;
        };
        Language.prototype.setConditionStartRight = function (value) {
            this.ConditionStartRight = value;
            return this;
        };
        Language.prototype.setConditionContinueLeft = function (value) {
            this.ConditionContinueLeft = value;
            return this;
        };
        Language.prototype.setConditionContinueRight = function (value) {
            this.ConditionContinueRight = value;
            return this;
        };
        Language.prototype.setConditionEnd = function (value) {
            this.ConditionEnd = value;
            return this;
        };
        Language.prototype.setElif = function (value) {
            this.Elif = value;
            return this;
        };
        Language.prototype.setElse = function (value) {
            this.Else = value;
            return this;
        };
        Language.prototype.setIf = function (value) {
            this.If = value;
            return this;
        };
        Language.prototype.setAnd = function (value) {
            this.And = value;
            return this;
        };
        Language.prototype.setGreaterThan = function (value) {
            this.GreaterThan = value;
            return this;
        };
        Language.prototype.setGreaterThanOrEqual = function (value) {
            this.GreaterThanOrEqual = value;
            return this;
        };
        Language.prototype.setLessThan = function (value) {
            this.LessThan = value;
            return this;
        };
        Language.prototype.setLessThanOrEqual = function (value) {
            this.LessThanOrEqual = value;
            return this;
        };
        Language.prototype.setOr = function (value) {
            this.Or = value;
            return this;
        };
        Language.prototype.setVariableTypesExplicit = function (value) {
            this.VariableTypesExplicit = value;
            return this;
        };
        Language.prototype.setVariableTypesAfterName = function (value) {
            this.VariableTypesAfterName = value;
            return this;
        };
        Language.prototype.setVariableTypeMarker = function (value) {
            this.VariableTypeMarker = value;
            return this;
        };
        Language.prototype.setVariableDeclareStart = function (value) {
            this.VariableDeclareStart = value;
            return this;
        };
        Language.prototype.setBooleanClass = function (value) {
            this.BooleanClass = value;
            return this;
        };
        Language.prototype.setTrue = function (value) {
            this.True = value;
            return this;
        };
        Language.prototype.setFalse = function (value) {
            this.False = value;
            return this;
        };
        Language.prototype.setNumberClass = function (value) {
            this.NumberClass = value;
            return this;
        };
        Language.prototype.setStringClass = function (value) {
            this.StringClass = value;
            return this;
        };
        Language.prototype.setStringLength = function (value) {
            this.StringLength = value;
            return this;
        };
        Language.prototype.setRangedForLoops = function (value) {
            this.RangedForLoops = value;
            return this;
        };
        Language.prototype.setRangedForLoopsStart = function (value) {
            this.RangedForLoopsStart = value;
            return this;
        };
        Language.prototype.setRangedForLoopsMiddle = function (value) {
            this.RangedForLoopsMiddle = value;
            return this;
        };
        Language.prototype.setRangedForLoopsEnd = function (value) {
            this.RangedForLoopsEnd = value;
            return this;
        };
        Language.prototype.setToString = function (value) {
            this.ToString = value;
            return this;
        };
        Language.prototype.setToStringAsFunction = function (value) {
            this.ToStringAsFunction = value;
            return this;
        };
        Language.prototype.setArrayClass = function (value) {
            this.ArrayClass = value;
            return this;
        };
        Language.prototype.setArrayLength = function (value) {
            this.ArrayLength = value;
            return this;
        };
        Language.prototype.setArrayLengthAsFunction = function (value) {
            this.ArrayLengthAsFunction = value;
            return this;
        };
        Language.prototype.setArrayNegativeIndices = function (value) {
            this.ArrayNegativeIndices = value;
            return this;
        };
        Language.prototype.setFunctionDefine = function (value) {
            this.FunctionDefine = value;
            return this;
        };
        Language.prototype.setFunctionDefineRight = function (value) {
            this.FunctionDefineRight = value;
            return this;
        };
        Language.prototype.setFunctionDefineEnd = function (value) {
            this.FunctionDefineEnd = value;
            return this;
        };
        Language.prototype.setFunctionReturnsExplicit = function (value) {
            this.FunctionReturnsExplicit = value;
            return this;
        };
        Language.prototype.setFunctionTypeAfterName = function (value) {
            this.FunctionTypeAfterName = value;
            return this;
        };
        Language.prototype.setFunctionTypeMarker = function (value) {
            this.FunctionTypeMarker = value;
            return this;
        };
        Language.prototype.setDictionaryClass = function (value) {
            this.DictionaryClass = value;
            return this;
        };
        Language.prototype.setClassConstructorAsStatic = function (value) {
            this.ClassConstructorAsStatic = value;
            return this;
        };
        Language.prototype.setClassConstructorInheritedShorthand = function (value) {
            this.ClassConstructorInheritedShorthand = value;
            return this;
        };
        Language.prototype.setClassConstructorName = function (value) {
            this.ClassConstructorName = value;
            return this;
        };
        Language.prototype.setClassConstructorLoose = function (value) {
            this.ClassConstructorLoose = value;
            return this;
        };
        Language.prototype.setClassEnder = function (value) {
            this.ClassEnder = value;
            return this;
        };
        Language.prototype.setClassExtends = function (value) {
            this.ClassExtends = value;
            return this;
        };
        Language.prototype.setClassExtendsAsFunction = function (value) {
            this.ClassExtendsAsFunction = value;
            return this;
        };
        Language.prototype.setClassFunctionsTakeThis = function (value) {
            this.ClassFunctionsTakeThis = value;
            return this;
        };
        Language.prototype.setClassFunctionsStart = function (value) {
            this.ClassFunctionsStart = value;
            return this;
        };
        Language.prototype.setClassFunctionsThis = function (value) {
            this.ClassFunctionsThis = value;
            return this;
        };
        Language.prototype.setClassMemberVariableDefault = function (value) {
            this.ClassMemberVariableDefault = value;
            return this;
        };
        Language.prototype.setClassMemberVariablePrivacy = function (value) {
            this.ClassMemberVariablePrivacy = value;
            return this;
        };
        Language.prototype.setClassMemberVariableStarter = function (value) {
            this.ClassMemberVariableStarter = value;
            return this;
        };
        Language.prototype.setClassNewer = function (value) {
            this.ClassNewer = value;
            return this;
        };
        Language.prototype.setClassParentName = function (value) {
            this.ClassParentName = value;
            return this;
        };
        Language.prototype.setClassPrivacy = function (value) {
            this.ClassPrivacy = value;
            return this;
        };
        Language.prototype.setClassStartLeft = function (value) {
            this.ClassStartLeft = value;
            return this;
        };
        Language.prototype.setClassStartRight = function (value) {
            this.ClassStartRight = value;
            return this;
        };
        Language.prototype.setClassTemplates = function (value) {
            this.ClassTemplates = value;
            return this;
        };
        Language.prototype.setClassTemplatesBetween = function (value) {
            this.ClassTemplatesBetween = value;
            return this;
        };
        Language.prototype.setClassThis = function (value) {
            this.ClassThis = value;
            return this;
        };
        Language.prototype.setClassThisAccess = function (value) {
            this.ClassThisAccess = value;
            return this;
        };
        Language.prototype.setFileEndLine = function (value) {
            this.FileEndLine = value;
            return this;
        };
        Language.prototype.setFileStartLeft = function (value) {
            this.FileStartLeft = value;
            return this;
        };
        Language.prototype.setFileStartRight = function (value) {
            this.FileStartRight = value;
            return this;
        };
        Language.prototype.setMainEndLine = function (value) {
            this.MainEndLine = value;
            return this;
        };
        Language.prototype.setMainStartLine = function (value) {
            this.MainStartLine = value;
            return this;
        };
        /* Array & Template parsing
        */
        Language.prototype.parseType = function (text) {
            if (this.typeontainsArray(text)) {
                return this.parseTypeWithArray(text);
            }
            if (this.typeContainsTemplate(text)) {
                return this.parseTypeWithTemplate(text);
            }
            return this.getTypeAlias(text);
        };
        Language.prototype.typeontainsArray = function (text) {
            return name.indexOf("[") !== -1;
        };
        Language.prototype.typeContainsTemplate = function (text) {
            return text.indexOf("<") !== -1;
        };
        Language.prototype.parseTypeWithArray = function (text) {
            var bracketIndex = text.indexOf("["), name = text.substring(0, bracketIndex), remainder = text.substring(bracketIndex);
            return this.getTypeAlias(name) + remainder;
        };
        Language.prototype.parseTypeWithTemplate = function (text) {
            var ltIndex = text.indexOf("<"), output = text.substring(0, ltIndex), i = ltIndex + 1, spaceNext;
            if (!this.getClassTemplates()) {
                return output;
            }
            output += "<";
            while (i < text.length) {
                spaceNext = text.indexOf(" ", i);
                if (spaceNext === -1) {
                    break;
                }
                output += this.parseType(text.substring(i, spaceNext)) + this.getClassTemplatesBetween();
                i = spaceNext + 1;
            }
            output += this.parseType(text.substring(i, text.length - 1));
            output += ">";
            return output;
        };
        /* Miscellaneous
        */
        Language.prototype.getAliasOrDefault = function (aliases, key) {
            return aliases.hasOwnProperty(key) ? aliases[key] : key;
        };
        Language.prototype.getTypeAlias = function (key) {
            return this.getAliasOrDefault(this.TypeAliases, key);
        };
        Language.prototype.getOperationAlias = function (key) {
            return this.getAliasOrDefault(this.OperationAliases, key);
        };
        Language.prototype.getValueAlias = function (key) {
            return this.getAliasOrDefault(this.ValueAliases, key);
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
        Language.prototype.print = function (functionName, functionArgs, isInline) {
            if (!this.printers.hasOwnProperty(functionName)) {
                throw new Error("Function not found: " + functionName);
            }
            return this.printers[functionName](functionArgs, isInline);
        };
        /* Printers
        */
        // string name, string key
        Language.prototype.ArrayInitialize = function (functionArgs, isInline) {
            this.requireArgumentsLength("ArrayInitialize", functionArgs, 1);
            return ["sup", 0];
        };
        // string name, string index
        Language.prototype.ArrayGetItem = function (functionArgs, isInline) {
            this.requireArgumentsLength("ArrayGetItem", functionArgs, 1);
            var name = functionArgs[0], output = name + "[", index = functionArgs[1];
            if (index[0] !== "-" || this.getArrayNegativeIndices()) {
                output += index;
            }
            else {
                index = index.substring(1);
                output += this.Operation([this.ArrayGetLength([name], true)[0], "minus", "1"], true)[0];
            }
            output += "]";
            return [output, 0];
        };
        // string name
        Language.prototype.ArrayGetLength = function (functionArgs, isInline) {
            this.requireArgumentsLength("ArrayGetLength", functionArgs, 1);
            return ["sup", 0];
        };
        Language.prototype.ClassConstructorEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string super, [string argumentName, string argumentType, ...]
        Language.prototype.ClassConstructorInheritedCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassConstructorInheritedCall", functionArgs, 1);
            var parentName = this.getClassParentName(), callingArgsLength = functionArgs.length, loopStart = 0, callingArgs, callingResult, i;
            // Blank parentName indicates the super's class name should be used
            if (parentName.length === 0) {
                parentName = this.parseType(functionArgs[0]);
            }
            // Taking a reference to this as a parameter increased the number of them
            if (this.getClassFunctionsTakeThis()) {
                callingArgsLength += 1;
                loopStart += 1;
            }
            callingArgs = new Array(callingArgsLength);
            callingArgs[0] = parentName;
            if (this.getClassExtendsAsFunction()) {
                callingArgs[0] += "." + this.getClassConstructorName();
            }
            if (this.getClassFunctionsTakeThis()) {
                callingArgs[1] = this.getClassThis();
            }
            for (i = loopStart; i < functionArgs.length; i += 1) {
                callingArgs[i + 1] = functionArgs[i];
            }
            return this.FunctionCall(callingArgs, isInline);
        };
        // string name[, string superCall[, string argumentName, string argumentType, ...]]
        Language.prototype.ClassConstructorInheritedStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassConstructorInheritedStart", functionArgs, 1);
            if (functionArgs.length === 1) {
                return this.ClassConstructorStart(functionArgs, isInline);
            }
            var generalCall, callingArgs, output, i;
            // Populate the arguments that will be passed to the actual method
            if (functionArgs.length > 2) {
                callingArgs = new Array(functionArgs.length - 1);
                for (i = 2; i < functionArgs.length; i += 1) {
                    callingArgs[i - 1] = functionArgs[i];
                }
                callingArgs[0] = functionArgs[0];
            }
            else {
                callingArgs = [functionArgs[0]];
            }
            generalCall = this.ClassConstructorStart(callingArgs, isInline);
            if (this.getClassConstructorInheritedShorthand()) {
                // "Shorthand" usage, like in C#, comes before FunctionDefineRight
                output = new Array(generalCall.length);
                output[0] = generalCall[0].substring(0, generalCall[0].length - this.getFunctionDefineRight().length);
                output[0] += " : " + functionArgs[1] + this.getFunctionDefineRight();
                for (i = 1; i < generalCall.length; i += 1) {
                    output[i] = generalCall[i];
                }
            }
            else {
                // In-function usage, like in Python, comes within the function
                output = new Array(generalCall.length + 2);
                output[output.length - 1] = 0;
                output[generalCall.length - 1] = generalCall[generalCall.length - 1];
                output[output.length - 2] = functionArgs[1];
                if (!isInline) {
                    output[output.length - 2] += this.getSemiColon();
                }
                for (i = 0; i < generalCall.length - 1; i += 1) {
                    output[i] = generalCall[i];
                }
            }
            return output;
        };
        // string name[, string argumentName, string argumentType, ...]
        Language.prototype.ClassConstructorStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassConstructorStart", functionArgs, 1);
            var output = this.getClassConstructorName(), variableDeclarationArguments = [], i;
            if (this.getClassConstructorLoose()) {
                output = this.getClassFunctionsStart() + output;
            }
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
        };
        Language.prototype.ClassEnd = function (functionArgs, isInline) {
            var output = this.getClassEnder();
            return [this.getClassEnder(), -1];
        };
        // string variable, string function, [, string argumentName, string argumentType, ... ]
        Language.prototype.ClassMemberFunctionCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberFunctionCall", functionArgs, 2);
            var output = functionArgs[0] + "." + functionArgs[1] + "(", i;
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
        };
        Language.prototype.ClassMemberFunctionEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string class, string visibility, string name, string return, [, string argumentName, string argumentType...]
        Language.prototype.ClassMemberFunctionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberFunctionStart", functionArgs, 4);
            var output = this.getClassFunctionsStart(), variableDeclarationArguments = [], i;
            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output = this.parseType(functionArgs[3]) + " ";
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
                output += this.getFunctionTypeMarker() + this.parseType(functionArgs[3]);
            }
            output += this.getFunctionDefineRight();
            return [output, 1];
        };
        // string name, string visibility, string type
        Language.prototype.ClassMemberVariableDeclare = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberVariableDeclare", functionArgs, 3);
            var variableType = this.parseType(functionArgs[2]), variableDeclarationArgs, variableDeclared;
            if (this.getClassMemberVariableDefault() !== "") {
                variableDeclarationArgs = [functionArgs[0], variableType, this.getClassMemberVariableDefault()];
            }
            else {
                variableDeclarationArgs = [functionArgs[0], variableType];
            }
            variableDeclared = this.VariableDeclarePartial(variableDeclarationArgs, isInline);
            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }
            if (this.getClassMemberVariablePrivacy()) {
                variableDeclared[0] = functionArgs[1] + " " + variableDeclared[0];
            }
            if (this.getClassMemberVariableStarter() !== "") {
                variableDeclared[0] = this.getClassMemberVariableStarter() + variableDeclared[0];
            }
            return variableDeclared;
        };
        // string name
        Language.prototype.ClassMemberVariableGet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberVariableGet", functionArgs, 1);
            return [this.getClassThis() + this.getClassThisAccess() + functionArgs[0], 0];
        };
        // string name, string value
        Language.prototype.ClassMemberVariableSet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClasMemberVariableSet", functionArgs, 2);
            var output = this.getClassThis() + this.getClassThisAccess();
            output += functionArgs[0] + " " + this.getOperationAlias("equals") + " " + functionArgs[1];
            output += this.getSemiColon();
            return [output, 0];
        };
        // string name[, string visibility[, string parentClass]]
        Language.prototype.ClassStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);
            var output = this.getClassStartLeft();
            output += this.parseType(functionArgs[0]);
            if (functionArgs.length > 2) {
                if (this.getClassExtendsAsFunction()) {
                    output += "(" + this.parseType(functionArgs[2]) + ")";
                }
                else {
                    output += " " + this.getClassExtends() + " " + this.parseType(functionArgs[2]) + " ";
                }
            }
            output += this.getClassStartRight();
            if (this.getClassPrivacy() && functionArgs.length > 1) {
                output = functionArgs[1] + " " + output;
            }
            return [output, 1];
        };
        // string class[, string argumentName, string argumentType, ...]
        Language.prototype.ClassNew = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassNew", functionArgs, 1);
            var output, i;
            if (this.getClassConstructorAsStatic()) {
                output = this.parseType(functionArgs[0]) + "." + this.getClassNewer() + "(";
            }
            else {
                output = this.getClassNewer() + this.parseType(functionArgs[0]) + "(";
            }
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
        };
        // [string message, ...]
        Language.prototype.CommentBlock = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);
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
            this.requireArgumentsLength("Comparison", functionArgs, 3);
            return [functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]) + " " + functionArgs[2], 0];
        };
        // string left, string right
        Language.prototype.Concatenate = function (functionArgs, isInline) {
            this.requireArgumentsLength("Comparison", functionArgs, 2);
            var output;
            if (this.getToStringAsFunction()) {
                output = this.getToString() + "(" + functionArgs[0] + ")";
                output += " " + this.getOperationAlias("plus") + " ";
                output += this.getToString() + "(" + functionArgs[1] + ")";
            }
            else {
                output = functionArgs[0] + this.getToString();
                output += " " + this.getOperationAlias("plus") + " ";
                output += functionArgs[1] + this.getToString();
            }
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        Language.prototype.FileEnd = function (functionArgs, isInline) {
            var output = this.getFileEndLine();
            return [output, output.length === 0 ? this.INT_MIN : -1];
        };
        // string name
        Language.prototype.FileStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("FileStart", functionArgs, 1);
            var left = this.getFileStartLeft(), right = this.getFileStartRight();
            if (left.length === 0 && right.length === 0) {
                return ["", this.INT_MIN];
            }
            return [left + functionArgs[0] + right, 1];
        };
        Language.prototype.ForEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string i, string type, string initial, string comparison, string boundary
        // e.x. i int 0 lessthan 7
        Language.prototype.ForNumbersStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStart", functionArgs, 7);
            var output = "for" + this.getConditionStartLeft(), generalArgs, i = functionArgs[0], typeName = this.parseType(functionArgs[1]), initial = functionArgs[2], comparison = functionArgs[3], boundary = functionArgs[4], direction = "increaseby", change = "1";
            if (this.getRangedForLoops()) {
                generalArgs = [i, typeName];
                output += this.VariableDeclare(generalArgs, false)[0];
                output += this.getRangedForLoopsStart();
                output += initial + this.getRangedForLoopsMiddle() + boundary;
                output += this.getRangedForLoopsEnd();
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
            this.requireArgumentsLength("FunctionCall", functionArgs, 1);
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
        // string name, string return[, string argumentName, string argumentType, ...]
        Language.prototype.FunctionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("FunctionStart", functionArgs, 2);
            var output = "", variableDeclarationArguments = [], i;
            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output += this.parseType(functionArgs[1]) + " ";
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
                output += this.getFunctionTypeMarker() + this.parseType(functionArgs[1]);
            }
            output += this.getFunctionDefineRight();
            return [output, 1];
        };
        // string value
        Language.prototype.FunctionReturn = function (functionArgs, isInline) {
            this.requireArgumentsLength("FunctionReturn", functionArgs, 1);
            return ["return " + functionArgs[0] + this.getSemiColon(), 0];
        };
        // string left, string operator, string right
        Language.prototype.IfConditionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("IfConditionStart", functionArgs, 3);
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
            this.requireArgumentsLength("IfVariable", functionArgs, 1);
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
            this.requireArgumentsLength("Operation", functionArgs, 3);
            var output = functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]);
            output += " " + this.getValueAlias(functionArgs[2]);
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        // [string anything, ...]
        Language.prototype.Parenthesis = function (functionArgs, isInline) {
            var output = "(", i;
            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }
            output += functionArgs[i];
            output += ")";
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
            this.requireArgumentsLength("VariableDeclare", functionArgs, 2);
            var variableType = this.parseType(functionArgs[1]), variableDeclarationArguments, variableDeclared;
            if (functionArgs.length == 2) {
                variableDeclarationArguments = [functionArgs[0], variableType];
            }
            else {
                variableDeclarationArguments = [functionArgs[0], variableType, functionArgs[2]];
            }
            variableDeclared = this.VariableDeclarePartial(functionArgs, isInline);
            variableDeclared[0] = this.getVariableDeclareStart() + variableDeclared[0];
            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }
            return variableDeclared;
        };
        // string name, string type[, string value]
        Language.prototype.VariableDeclarePartial = function (functionArgs, isInline) {
            this.requireArgumentsLength("VariableDeclarePartial", functionArgs, 2);
            var output = "", variableType = this.parseType(functionArgs[1]);
            if (this.getVariableTypesExplicit()) {
                if (this.getVariableTypesAfterName()) {
                    output += functionArgs[0] + this.getVariableTypeMarker() + this.parseType(functionArgs[1]);
                }
                else {
                    output += this.parseType(variableType) + " " + functionArgs[0];
                }
            }
            else {
                output += functionArgs[0];
            }
            if (functionArgs.length > 2) {
                output += " " + this.getOperationAlias("equals") + " " + this.getValueAlias(functionArgs[2]);
            }
            return [output, 0];
        };
        // string left, string operator, string right
        Language.prototype.WhileConditionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("WhileConditionStart", functionArgs, 3);
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
            this.requireArgumentsLength("WhileVariableStart", functionArgs, 1);
            var output = "while" + this.getConditionStartLeft();
            output += this.getOperationAlias(functionArgs[0]) + this.getConditionStartRight();
            return [output, 1];
        };
        /* Utilities
        */
        Language.prototype.requireArgumentsLength = function (functionName, functionArgs, amount) {
            if (functionArgs.length < amount) {
                throw new Error("Not enough arguments given to " + functionName + " (required: " + amount + ").");
            }
        };
        return Language;
    })();
    GLS.Language = Language;
})(GLS || (GLS = {}));
