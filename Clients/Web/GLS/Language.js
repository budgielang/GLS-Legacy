var GLS;
(function (GLS) {
    var Language = (function () {
        function Language() {
            this.Printers = {
                "array initialize": this.ArrayInitialize.bind(this),
                "array initialize sized": this.ArrayInitializeSized.bind(this),
                "array get item": this.ArrayGetItem.bind(this),
                "catch": this.Catch.bind(this),
                "class constructor end": this.ClassConstructorEnd.bind(this),
                "class constructor inherited call": this.ClassConstructorInheritedCall.bind(this),
                "class constructor inherited start": this.ClassConstructorInheritedStart.bind(this),
                "class constructor start": this.ClassConstructorStart.bind(this),
                "class end": this.ClassEnd.bind(this),
                "class member function call": this.ClassMemberFunctionCall.bind(this),
                "class member function end": this.ClassMemberFunctionEnd.bind(this),
                "class member function get": this.ClassMemberFunctionGet.bind(this),
                "class member function start": this.ClassMemberFunctionStart.bind(this),
                "class member variable declare": this.ClassMemberVariableDeclare.bind(this),
                "class member variable get": this.ClassMemberVariableGet.bind(this),
                "class member variable set": this.ClassMemberVariableSet.bind(this),
                "class member variable set incomplete": this.ClassMemberVariableSetIncomplete.bind(this),
                "class static function call": this.ClassStaticFunctionCall.bind(this),
                "class static function end": this.ClassStaticFunctionEnd.bind(this),
                "class static function get": this.ClassStaticFunctionGet.bind(this),
                "class static function start": this.ClassStaticFunctionStart.bind(this),
                "class static variable declare": this.ClassStaticVariableDeclare.bind(this),
                "class static variable get": this.ClassStaticVariableGet.bind(this),
                "class static variable set": this.ClassStaticVariableSet.bind(this),
                "class new": this.ClassNew.bind(this),
                "class start": this.ClassStart.bind(this),
                "comment block": this.CommentBlock.bind(this),
                "comment line": this.CommentLine.bind(this),
                "comment inline": this.CommentInline.bind(this),
                "comparison": this.Comparison.bind(this),
                "concatenate": this.Concatenate.bind(this),
                "dictionary key check": this.DictionaryKeyCheck.bind(this),
                "dictionary key get": this.DictionaryKeyGet.bind(this),
                "dictionary key set": this.DictionaryKeySet.bind(this),
                "dictionary initialize": this.DictionaryInitialize.bind(this),
                "dictionary initialize end": this.DictionaryInitializeEnd.bind(this),
                "dictionary initialize key": this.DictionaryInitializeKey.bind(this),
                "dictionary initialize start": this.DictionaryInitializeStart.bind(this),
                "dictionary type": this.DictionaryType.bind(this),
                "elif start": this.ElifStart.bind(this),
                "else start": this.ElseStart.bind(this),
                "file end": this.FileEnd.bind(this),
                "file start": this.FileStart.bind(this),
                "finally": this.Finally.bind(this),
                "for each keys start": this.ForEachKeysStart.bind(this),
                "for each pairs start": this.ForEachPairsStart.bind(this),
                "for end": this.ForEnd.bind(this),
                "for numbers start": this.ForNumbersStart.bind(this),
                "function call": this.FunctionCall.bind(this),
                "function call partial end": this.FunctionCallPartialEnd.bind(this),
                "function call partial start": this.FunctionCallPartialStart.bind(this),
                "function end": this.FunctionEnd.bind(this),
                "function start": this.FunctionStart.bind(this),
                "if end": this.IfEnd.bind(this),
                "if start": this.IfStart.bind(this),
                "include": this.Include.bind(this),
                "include dictionary": this.IncludeDictionary.bind(this),
                "lambda declare inline": this.LambdaDeclareInline.bind(this),
                "lambda type declare": this.LambdaTypeDeclare.bind(this),
                "loop break": this.LoopBreak.bind(this),
                "loop continue": this.LoopContinue.bind(this),
                "main end": this.MainEnd.bind(this),
                "main start": this.MainStart.bind(this),
                "native call": this.NativeCall.bind(this),
                "not": this.Not.bind(this),
                "operation": this.Operation.bind(this),
                "parenthesis": this.Parenthesis.bind(this),
                "print line": this.PrintLine.bind(this),
                "return": this.Return.bind(this),
                "this": this.This.bind(this),
                "throw": this.Throw.bind(this),
                "try end": this.TryEnd.bind(this),
                "try start": this.TryStart.bind(this),
                "type": this.Type.bind(this),
                "value": this.Value.bind(this),
                "variable declare": this.VariableDeclare.bind(this),
                "variable declare incomplete": this.VariableDeclareIncomplete.bind(this),
                "variable declare partial": this.VariableDeclarePartial.bind(this),
                "while end": this.WhileEnd.bind(this),
                "while start": this.WhileStart.bind(this)
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
                "greaterthanequal": ">=",
                "equalto": "==",
                "notequalto": "!=",
                "and": "&&",
                "or": "||",
                "mod": "%"
            };
            this.TypeAliases = {};
            this.ValueAliases = {};
            this.NativeFunctionAliases = {
                "array": {},
                "dictionary": {},
                "string": {}
            };
        }
        /*
        Gets
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
        Language.prototype.getUndefined = function () {
            return this.Undefined;
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
        Language.prototype.getBreak = function () {
            return this.Break;
        };
        Language.prototype.getContinue = function () {
            return this.Continue;
        };
        Language.prototype.getForEachAsMethod = function () {
            return this.ForEachAsMethod;
        };
        Language.prototype.getForEachInner = function () {
            return this.ForEachInner;
        };
        Language.prototype.getForEachKeysAsStatic = function () {
            return this.ForEachKeysAsStatic;
        };
        Language.prototype.getForEachKeysGet = function () {
            return this.ForEachKeysGet;
        };
        Language.prototype.getForEachPairsGet = function () {
            return this.ForEachPairsGet;
        };
        Language.prototype.getForEachPairsPairClass = function () {
            return this.ForEachPairsPairClass;
        };
        Language.prototype.getForEachPairsAsPair = function () {
            return this.ForEachPairsAsPair;
        };
        Language.prototype.getForEachPairsRetrieveKey = function () {
            return this.ForEachPairsRetrieveKey;
        };
        Language.prototype.getForEachPairsRetrieveValue = function () {
            return this.ForEachPairsRetrieveValue;
        };
        Language.prototype.getForEachStarter = function () {
            return this.ForEachStarter;
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
        Language.prototype.getArrayInitializationAsNewMultiplied = function () {
            return this.ArrayInitializationAsNewMultiplied;
        };
        Language.prototype.getArrayInitializationAsNewStatic = function () {
            return this.ArrayInitializationAsNewStatic;
        };
        Language.prototype.getArrayInitializationAsNewTyped = function () {
            return this.ArrayInitializationAsNewTyped;
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
        Language.prototype.getDictionaryClass = function () {
            return this.DictionaryClass;
        };
        Language.prototype.getDictionaryInitializationAsNew = function () {
            return this.DictionaryInitializationAsNew;
        };
        Language.prototype.getDictionaryInitializeStarter = function () {
            return this.DictionaryInitializeStarter;
        };
        Language.prototype.getDictionaryInitializeEnder = function () {
            return this.DictionaryInitializeEnder;
        };
        Language.prototype.getDictionaryInitializeKeyComma = function () {
            return this.DictionaryInitializeKeyComma;
        };
        Language.prototype.getDictionaryInitializeKeyWithSemicolon = function () {
            return this.DictionaryInitializeKeyWithSemicolon;
        };
        Language.prototype.getDictionaryKeyCheckAsFunction = function () {
            return this.DictionaryKeyCheckAsFunction;
        };
        Language.prototype.getDictionaryKeyChecker = function () {
            return this.DictionaryKeyChecker;
        };
        Language.prototype.getDictionaryKeyLeft = function () {
            return this.DictionaryKeyLeft;
        };
        Language.prototype.getDictionaryKeyMiddle = function () {
            return this.DictionaryKeyMiddle;
        };
        Language.prototype.getDictionaryKeyRight = function () {
            return this.DictionaryKeyRight;
        };
        Language.prototype.getExceptionCatch = function () {
            return this.ExceptionCatch;
        };
        Language.prototype.getExceptionClass = function () {
            return this.ExceptionClass;
        };
        Language.prototype.getExceptionErrorPrefix = function () {
            return this.ExceptionErrorPrefix;
        };
        Language.prototype.getExceptionFinally = function () {
            return this.ExceptionFinally;
        };
        Language.prototype.getExceptionThrow = function () {
            return this.ExceptionThrow;
        };
        Language.prototype.getExceptionTry = function () {
            return this.ExceptionTry;
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
        Language.prototype.getFunctionTypeAfterName = function () {
            return this.FunctionTypeAfterName;
        };
        Language.prototype.getFunctionTypeMarker = function () {
            return this.FunctionTypeMarker;
        };
        Language.prototype.getLambdaDeclareEnder = function () {
            return this.LambdaDeclareEnder;
        };
        Language.prototype.getLambdaDeclareMiddle = function () {
            return this.LambdaDeclareMiddle;
        };
        Language.prototype.getLambdaDeclareStarter = function () {
            return this.LambdaDeclareStarter;
        };
        Language.prototype.getLambdaTypeDeclarationAsInterface = function () {
            return this.LambdaTypeDeclarationAsInterface;
        };
        Language.prototype.getLambdaTypeDeclarationRequired = function () {
            return this.LambdaTypeDeclarationRequired;
        };
        Language.prototype.getLambdaTypeDeclarationEnd = function () {
            return this.LambdaTypeDeclarationEnd;
        };
        Language.prototype.getLambdaTypeDeclarationMiddle = function () {
            return this.LambdaTypeDeclarationMiddle;
        };
        Language.prototype.getLambdaTypeDeclarationStart = function () {
            return this.LambdaTypeDeclarationStart;
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
        Language.prototype.getClassMemberFunctionGetBind = function () {
            return this.ClassMemberFunctionGetBind;
        };
        Language.prototype.getClassMemberFunctionGetEnd = function () {
            return this.ClassMemberFunctionGetEnd;
        };
        Language.prototype.getClassMemberFunctionGetStart = function () {
            return this.ClassMemberFunctionGetStart;
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
        Language.prototype.getClassPublicAlias = function () {
            return this.ClassPublicAlias;
        };
        Language.prototype.getClassStaticLabel = function () {
            return this.ClassStaticLabel;
        };
        Language.prototype.getClassStaticFunctionDecorator = function () {
            return this.ClassStaticFunctionDecorator;
        };
        Language.prototype.getClassStaticFunctionRequiresDecorator = function () {
            return this.ClassStaticFunctionRequiresDecorator;
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
        Language.prototype.getIncludeDictionaryType = function () {
            return this.IncludeDictionaryType;
        };
        Language.prototype.getIncludeEnder = function () {
            return this.IncludeEnder;
        };
        Language.prototype.getIncludeFileExtension = function () {
            return this.IncludeFileExtension;
        };
        Language.prototype.getIncludeStarter = function () {
            return this.IncludeStarter;
        };
        Language.prototype.getMainEndLine = function () {
            return this.MainEndLine;
        };
        Language.prototype.getMainStartLine = function () {
            return this.MainStartLine;
        };
        /*
        Sets
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
        Language.prototype.setUndefined = function (value) {
            this.Undefined = value;
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
        Language.prototype.setBreak = function (value) {
            this.Break = value;
            return this;
        };
        Language.prototype.setContinue = function (value) {
            this.Continue = value;
            return this;
        };
        Language.prototype.setForEachAsMethod = function (value) {
            this.ForEachAsMethod = value;
            return this;
        };
        Language.prototype.setForEachInner = function (value) {
            this.ForEachInner = value;
            return this;
        };
        Language.prototype.setForEachKeysAsStatic = function (value) {
            this.ForEachKeysAsStatic = value;
            return this;
        };
        Language.prototype.setForEachKeysGet = function (value) {
            this.ForEachKeysGet = value;
            return this;
        };
        Language.prototype.setForEachPairsGet = function (value) {
            this.ForEachPairsGet = value;
            return this;
        };
        Language.prototype.setForEachPairsPairClass = function (value) {
            this.ForEachPairsPairClass = value;
            return this;
        };
        Language.prototype.setForEachPairsAsPair = function (value) {
            this.ForEachPairsAsPair = value;
            return this;
        };
        Language.prototype.setForEachPairsRetrieveKey = function (value) {
            this.ForEachPairsRetrieveKey = value;
            return this;
        };
        Language.prototype.setForEachPairsRetrieveValue = function (value) {
            this.ForEachPairsRetrieveValue = value;
            return this;
        };
        Language.prototype.setForEachStarter = function (value) {
            this.ForEachStarter = value;
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
        Language.prototype.setArrayInitializationAsNew = function (value) {
            this.ArrayInitializationAsNew = value;
            return this;
        };
        Language.prototype.setArrayInitializationAsNewMultiplied = function (value) {
            this.ArrayInitializationAsNewMultiplied = value;
            return this;
        };
        Language.prototype.setArrayInitializationAsNewTyped = function (value) {
            this.ArrayInitializationAsNewTyped = value;
            return this;
        };
        Language.prototype.setArrayInitializationAsNewStatic = function (value) {
            this.ArrayInitializationAsNewStatic = value;
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
        Language.prototype.setExceptionCatch = function (value) {
            this.ExceptionCatch = value;
            return this;
        };
        Language.prototype.setExceptionClass = function (value) {
            this.ExceptionClass = value;
            return this;
        };
        Language.prototype.setExceptionErrorPrefix = function (value) {
            this.ExceptionErrorPrefix = value;
            return this;
        };
        Language.prototype.setExceptionFinally = function (value) {
            this.ExceptionFinally = value;
            return this;
        };
        Language.prototype.setExceptionThrow = function (value) {
            this.ExceptionThrow = value;
            return this;
        };
        Language.prototype.setExceptionTry = function (value) {
            this.ExceptionTry = value;
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
        Language.prototype.setLambdaDeclareEnder = function (value) {
            this.LambdaDeclareEnder = value;
            return this;
        };
        Language.prototype.setLambdaDeclareMiddle = function (value) {
            this.LambdaDeclareMiddle = value;
            return this;
        };
        Language.prototype.setLambdaDeclareStarter = function (value) {
            this.LambdaDeclareStarter = value;
            return this;
        };
        Language.prototype.setLambdaTypeDeclarationAsInterface = function (value) {
            this.LambdaTypeDeclarationAsInterface = value;
            return this;
        };
        Language.prototype.setLambdaTypeDeclarationRequired = function (value) {
            this.LambdaTypeDeclarationRequired = value;
            return this;
        };
        Language.prototype.setLambdaTypeDeclarationEnd = function (value) {
            this.LambdaTypeDeclarationEnd = value;
            return this;
        };
        Language.prototype.setLambdaTypeDeclarationMiddle = function (value) {
            this.LambdaTypeDeclarationMiddle = value;
            return this;
        };
        Language.prototype.setLambdaTypeDeclarationStart = function (value) {
            this.LambdaTypeDeclarationStart = value;
            return this;
        };
        Language.prototype.setDictionaryClass = function (value) {
            this.DictionaryClass = value;
            return this;
        };
        Language.prototype.setDictionaryKeyCheckAsFunction = function (value) {
            this.DictionaryKeyCheckAsFunction = value;
            return this;
        };
        Language.prototype.setDictionaryKeyChecker = function (value) {
            this.DictionaryKeyChecker = value;
            return this;
        };
        Language.prototype.setDictionaryKeyLeft = function (value) {
            this.DictionaryKeyLeft = value;
            return this;
        };
        Language.prototype.setDictionaryKeyMiddle = function (value) {
            this.DictionaryKeyMiddle = value;
            return this;
        };
        Language.prototype.setDictionaryKeyRight = function (value) {
            this.DictionaryKeyRight = value;
            return this;
        };
        Language.prototype.setDictionaryInitializationAsNew = function (value) {
            this.DictionaryInitializationAsNew = value;
            return this;
        };
        Language.prototype.setDictionaryInitializeStarter = function (value) {
            this.DictionaryInitializeStarter = value;
            return this;
        };
        Language.prototype.setDictionaryInitializeEnder = function (value) {
            this.DictionaryInitializeEnder = value;
            return this;
        };
        Language.prototype.setDictionaryInitializeKeyComma = function (value) {
            this.DictionaryInitializeKeyComma = value;
            return this;
        };
        Language.prototype.setDictionaryInitializeKeyWithSemicolon = function (value) {
            this.DictionaryInitializeKeyWithSemicolon = value;
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
        Language.prototype.setClassMemberFunctionGetBind = function (value) {
            this.ClassMemberFunctionGetBind = value;
            return this;
        };
        Language.prototype.setClassMemberFunctionGetEnd = function (value) {
            this.ClassMemberFunctionGetEnd = value;
            return this;
        };
        Language.prototype.setClassMemberFunctionGetStart = function (value) {
            this.ClassMemberFunctionGetStart = value;
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
        Language.prototype.setClassPublicAlias = function (value) {
            this.ClassPublicAlias = value;
            return this;
        };
        Language.prototype.setClassStaticLabel = function (value) {
            this.ClassStaticLabel = value;
            return this;
        };
        Language.prototype.setClassStaticFunctionDecorator = function (value) {
            this.ClassStaticFunctionDecorator = value;
            return this;
        };
        Language.prototype.setClassStaticFunctionRequiresDecorator = function (value) {
            this.ClassStaticFunctionRequiresDecorator = value;
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
        Language.prototype.setIncludeDictionaryType = function (value) {
            this.IncludeDictionaryType = value;
            return this;
        };
        Language.prototype.setIncludeEnder = function (value) {
            this.IncludeEnder = value;
            return this;
        };
        Language.prototype.setIncludeFileExtension = function (value) {
            this.IncludeFileExtension = value;
            return this;
        };
        Language.prototype.setIncludeStarter = function (value) {
            this.IncludeStarter = value;
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
        /*
        Array & Template parsing
        */
        Language.prototype.parseType = function (text) {
            if (this.typeContainsArray(text)) {
                return this.parseTypeWithArray(text);
            }
            if (this.typeContainsTemplate(text)) {
                return this.parseTypeWithTemplate(text);
            }
            return this.getTypeAlias(text);
        };
        Language.prototype.typeContainsArray = function (text) {
            return text.indexOf("[") != -1;
        };
        Language.prototype.typeContainsTemplate = function (text) {
            return text.indexOf("<") != -1;
        };
        Language.prototype.parseTypeWithArray = function (text) {
            var bracketIndex = text.indexOf("[");
            var name = text.substring(0, bracketIndex);
            var remainder = text.substring(bracketIndex);
            return this.parseType(name) + remainder;
        };
        Language.prototype.parseTypeWithTemplate = function (text) {
            if (text.indexOf('>') == -1) {
                return text;
            }
            var ltIndex = text.indexOf("<");
            var output = text.substring(0, ltIndex);
            if (!this.getClassTemplates()) {
                return output;
            }
            var typeStart = ltIndex;
            var typeEnd;
            var typeCheck;
            while (typeStart < text.length) {
                for (typeEnd = typeStart; typeEnd < text.length; typeEnd += 1) {
                    typeCheck = text[typeEnd];
                    if (typeCheck == ',' || typeCheck == '<' || typeCheck == '>' || typeCheck == ' ') {
                        break;
                    }
                }
                if (typeEnd == text.length) {
                    break;
                }
                if (typeStart == typeEnd) {
                    output += typeCheck;
                    typeStart += 1;
                    continue;
                }
                output += this.parseType(text.substring(typeStart, typeEnd));
                output += typeCheck;
                typeStart = typeEnd + 1;
            }
            return output;
        };
        /*
        Miscellaneous
        */
        Language.prototype.getAliasOrDefault = function (aliases, key) {
            if (aliases.hasOwnProperty(key)) {
                return aliases[key];
            }
            else {
                return key;
            }
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
            this.TypeAliases[key] = alias;
            return this;
        };
        Language.prototype.addTypeAliases = function (aliases) {
            var key;
            var alias;
            for (key in aliases) {
                alias = aliases[key];
                this.addTypeAlias(key, aliases[key]);
            }
            return this;
        };
        Language.prototype.addOperationAlias = function (key, alias) {
            this.OperationAliases[key] = alias;
            return this;
        };
        Language.prototype.addOperationAliases = function (aliases) {
            var key;
            var alias;
            for (key in aliases) {
                alias = aliases[key];
                this.addOperationAlias(key, aliases[key]);
            }
            return this;
        };
        Language.prototype.addValueAlias = function (key, alias) {
            this.ValueAliases[key] = alias;
            return this;
        };
        Language.prototype.addValueAliases = function (aliases) {
            var key;
            var alias;
            for (key in aliases) {
                alias = aliases[key];
                this.addValueAlias(key, aliases[key]);
            }
            return this;
        };
        Language.prototype.getNativeFunctionAlias = function (className, memberName) {
            return this.NativeFunctionAliases[className][memberName];
        };
        Language.prototype.addNativeFunctionAlias = function (className, memberName, aliasInfo) {
            this.NativeFunctionAliases[className][memberName] = aliasInfo;
            return this;
        };
        Language.prototype.addNativeFunctionAliases = function (className, aliasInfos) {
            var key;
            var aliasInfo;
            for (key in aliasInfos) {
                aliasInfo = aliasInfos[key];
                this.addNativeFunctionAlias(className, key, aliasInfo);
            }
            return this;
        };
        Language.prototype.print = function (functionName, functionArgs, isInline) {
            if (!this.Printers.hasOwnProperty(functionName)) {
                throw new Error("Function not found: " + functionName);
            }
            return this.Printers[functionName](functionArgs, isInline);
        };
        /*
        Printers
        */
        // string type[, string key, ...]
        Language.prototype.ArrayInitialize = function (functionArgs, isInline) {
            this.requireArgumentsLength("ArrayInitialize", functionArgs, 1);
            var arrayType = this.parseType(functionArgs[0]);
            var output;
            var i;
            if (this.getArrayInitializationAsNewTyped()) {
                output = "new " + arrayType + "[] { ";
            }
            else {
                output = "[";
            }
            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length - 1; i += 1) {
                    output += functionArgs[i] + ", ";
                }
                output += functionArgs[i];
            }
            if (this.getArrayInitializationAsNewTyped()) {
                output += " }";
            }
            else {
                output += "]";
            }
            return [output, 0];
        };
        // string type, string size
        Language.prototype.ArrayInitializeSized = function (functionArgs, isInline) {
            this.requireArgumentsLength("ArrayInitialize", functionArgs, 2);
            var arrayType = this.parseType(functionArgs[0]);
            var arraySize = functionArgs[1];
            var output;
            if (this.getArrayInitializationAsNewMultiplied()) {
                output = "[" + this.getUndefined() + "]";
                return this.Operation([output, "times", arraySize], isInline);
            }
            if (this.getArrayInitializationAsNewStatic()) {
                output = this.getArrayClass() + ".new";
            }
            else {
                output = "new ";
            }
            if (this.getArrayInitializationAsNewTyped()) {
                output += arrayType + "[" + arraySize + "]";
            }
            else {
                if (!this.getArrayInitializationAsNewStatic()) {
                    output += this.getArrayClass();
                }
                output += "(" + arraySize + ")";
            }
            return [output, 0];
        };
        // string name, string index
        Language.prototype.ArrayGetItem = function (functionArgs, isInline) {
            this.requireArgumentsLength("ArrayGetItem", functionArgs, 1);
            var name = functionArgs[0];
            var output = name + "[";
            var index = functionArgs[1];
            if (index[0] != "-" || this.getArrayNegativeIndices()) {
                output += index;
            }
            else {
                index = index.substring(1);
                output += this.Operation([this.NativeCall(["array", "length", name], true)[0], "minus", "1"], true)[0];
            }
            output += "]";
            return [output, 0];
        };
        // [string name]
        Language.prototype.Catch = function (functionArgs, isInline) {
            var output = this.getExceptionCatch() + this.getExceptionClass();
            if (functionArgs.length > 0) {
                output += this.getExceptionErrorPrefix() + functionArgs[0];
            }
            output += this.getConditionStartRight();
            return ["\0", -1, output, 1];
        };
        Language.prototype.ClassConstructorEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string super, [string argumentName, string argumentType, ...]
        Language.prototype.ClassConstructorInheritedCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassConstructorInheritedCall", functionArgs, 1);
            var parentName = this.getClassParentName();
            var callingArgsLength = functionArgs.length;
            var loopStart = 0;
            var callingArgs;
            var callingResult;
            var i;
            // Blank parentName indicates the super's class name should be used
            if (parentName.length == 0) {
                parentName = this.parseType(functionArgs[0]);
            }
            // Taking a reference to `this` as a paremeter increases the number of parameters
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
            if (functionArgs.length == 1) {
                return this.ClassConstructorStart(functionArgs, isInline);
            }
            var generalCall;
            var callingArgs;
            var output;
            var i;
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
                output[0] += functionArgs[1] + this.getFunctionDefineRight();
                for (i = 1; i < generalCall.length; i += 1) {
                    output[i] = generalCall[i];
                }
            }
            else {
                // In-function usage, like in Python, comes within the function
                output = new Array(generalCall.length + 2);
                output[output.length - 1] = 0;
                output[output.length - 2] = functionArgs[1];
                output[generalCall.length - 1] = generalCall[generalCall.length - 1];
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
            var output = this.getClassConstructorName();
            var variableDeclarationArgs = [];
            var i;
            if (this.getClassConstructorLoose()) {
                output = this.getClassFunctionsStart() + output;
            }
            if (output.length == 0) {
                output = functionArgs[0];
            }
            output += "(";
            // Languages like Python take a "self" or "this" equivalent first
            if (this.getClassFunctionsTakeThis()) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }
                for (i = 1; i < functionArgs.length; i += 2) {
                    variableDeclarationArgs[0] = functionArgs[i];
                    variableDeclarationArgs[1] = functionArgs[i];
                    output += this.VariableDeclarePartial(variableDeclarationArgs, true)[0] + ", ";
                }
                // The last argument does not have the last ", " at the end
                output = output.substring(0, output.length - 2);
            }
            output += ")" + this.getFunctionDefineRight();
            return [output, 1];
        };
        Language.prototype.ClassEnd = function (functionArgs, isInline) {
            return [this.getClassEnder(), -1];
        };
        // string variable, string function[, string argumentName, ...]
        Language.prototype.ClassMemberFunctionCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberFunctionCall", functionArgs, 2);
            var output = functionArgs[0] + "." + functionArgs[1] + "(";
            var i;
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
        // string variable, string function
        Language.prototype.ClassMemberFunctionGet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberFunctionStart", functionArgs, 2);
            var output = "";
            output += this.getClassMemberFunctionGetStart() + functionArgs[0];
            output += "." + functionArgs[1] + this.getClassMemberFunctionGetEnd();
            if (this.getClassMemberFunctionGetBind()) {
                output += "(" + functionArgs[0] + ")";
            }
            return [output, 0];
        };
        // string class, string visibility, string name, string return[, string argumentName, string argumentType, ...]
        Language.prototype.ClassMemberFunctionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberFunctionStart", functionArgs, 4);
            var output = this.getClassFunctionsStart();
            var variableDeclarationArgs = [];
            var i;
            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output += this.parseType(functionArgs[3]) + " ";
            }
            if (this.getClassPrivacy()) {
                output = functionArgs[1] + " " + output;
            }
            output += functionArgs[2] + "(";
            if (this.getClassFunctionsTakeThis()) {
                variableDeclarationArgs[0] = this.getClassFunctionsThis();
                variableDeclarationArgs[1] = functionArgs[0];
                output += this.VariableDeclarePartial(variableDeclarationArgs, true)[0];
            }
            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 4) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }
                for (i = 4; i < functionArgs.length; i += 2) {
                    variableDeclarationArgs[0] = functionArgs[i];
                    variableDeclarationArgs[1] = functionArgs[i + 1];
                    output += this.VariableDeclarePartial(variableDeclarationArgs, true)[0] + ", ";
                }
                // The last argument does not have the last ", " at the end
                output = output.substring(0, output.length - 2);
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
            var variableType = this.parseType(functionArgs[2]);
            var variableDeclarationArgs;
            var variableDeclared;
            if (this.getClassMemberVariableDefault() != "") {
                variableDeclarationArgs = [functionArgs[0], variableType, this.getClassMemberVariableDefault()];
            }
            else {
                variableDeclarationArgs = [functionArgs[0], variableType];
            }
            variableDeclared = this.VariableDeclarePartial(variableDeclarationArgs, isInline);
            variableDeclared[1] = 0;
            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }
            if (this.getClassMemberVariablePrivacy()) {
                variableDeclared[0] = functionArgs[1] + " " + variableDeclared[0];
            }
            variableDeclared[0] = this.getClassMemberVariableStarter() + variableDeclared[0];
            return variableDeclared;
        };
        // string name, string variable
        Language.prototype.ClassMemberVariableGet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberVariableGet", functionArgs, 2);
            return [functionArgs[0] + this.getClassThisAccess() + functionArgs[1], 0];
        };
        // string variable, string name, string value
        Language.prototype.ClassMemberVariableSet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberVariableSet", functionArgs, 3);
            var output = this.ClassMemberVariableSetIncomplete(functionArgs, isInline);
            output[0] += this.getSemiColon();
            output[1] = 0;
            return output;
        };
        // string name, string variable, string value
        Language.prototype.ClassMemberVariableSetIncomplete = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassMemberVariableSetIncomplete", functionArgs, 3);
            var output = functionArgs[0] + this.getClassThisAccess();
            output += functionArgs[1] + " " + this.getOperationAlias("equals") + " " + functionArgs[2];
            return [output, 1];
        };
        // string class, string function[, string argumentName, ...]
        Language.prototype.ClassStaticFunctionCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStaticFunctionCall", functionArgs, 2);
            var output = functionArgs[0] + "." + functionArgs[1] + "(";
            var i;
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
        Language.prototype.ClassStaticFunctionEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string class, string function
        Language.prototype.ClassStaticFunctionGet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStaticFunctionGet", functionArgs, 2);
            var output = "";
            output += this.getClassMemberFunctionGetStart() + functionArgs[0];
            output += "." + functionArgs[1] + this.getClassMemberFunctionGetEnd();
            if (this.getClassMemberFunctionGetBind()) {
                output += "(" + functionArgs[0] + ")";
            }
            return [output, 0];
        };
        // string class, string visibility, string name, string return[, string argumentName, string argumentType, ...]
        Language.prototype.ClassStaticFunctionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStaticFunctionStart", functionArgs, 4);
            var output = this.getClassFunctionsStart();
            var variableDeclarationArgs = [];
            var i;
            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output += this.parseType(functionArgs[3]) + " ";
            }
            output = this.getClassStaticLabel() + output;
            if (this.getClassPrivacy()) {
                output = functionArgs[1] + " " + output;
            }
            output += functionArgs[2] + "(";
            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 4) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }
                for (i = 4; i < functionArgs.length; i += 2) {
                    variableDeclarationArgs[0] = functionArgs[i];
                    variableDeclarationArgs[1] = functionArgs[i + 1];
                    output += this.VariableDeclarePartial(variableDeclarationArgs, true)[0] + ", ";
                }
                // The last argument does not have the last ", " at the end
                output = output.substring(0, output.length - 2);
            }
            output += ")";
            if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                output += this.getFunctionTypeMarker() + this.parseType(functionArgs[3]);
            }
            if (this.getClassStaticFunctionRequiresDecorator()) {
                return [this.getClassStaticFunctionDecorator(), 0, output, 1];
            }
            else {
                return [output, 1];
            }
        };
        // string class, string visibility, string type[, string value]
        Language.prototype.ClassStaticVariableDeclare = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStaticVariableDeclare", functionArgs, 3);
            var variableType = this.parseType(functionArgs[2]);
            var variableDeclarationArgs;
            var variableDeclared;
            if (functionArgs.length > 3) {
                variableDeclarationArgs = [functionArgs[0], variableType, functionArgs[3]];
            }
            else if (this.getClassMemberVariableDefault() != "") {
                variableDeclarationArgs = [functionArgs[0], variableType, this.getClassMemberVariableDefault()];
            }
            else {
                variableDeclarationArgs = [functionArgs[0], variableType];
            }
            variableDeclared = this.VariableDeclarePartial(variableDeclarationArgs, isInline);
            variableDeclared[0] = this.getClassStaticLabel() + variableDeclared[0];
            variableDeclared[1] = 0;
            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }
            if (this.getClassMemberVariablePrivacy()) {
                variableDeclared[0] = functionArgs[1] + " " + variableDeclared[0];
            }
            variableDeclared[0] = this.getClassMemberVariableStarter() + variableDeclared[0];
            return variableDeclared;
        };
        // string class, string name
        Language.prototype.ClassStaticVariableGet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStaticVariableGet", functionArgs, 2);
            return [functionArgs[0] + "." + functionArgs[1], 0];
        };
        // string class, string name, string value
        Language.prototype.ClassStaticVariableSet = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStaticVariableSet", functionArgs, 3);
            var output = functionArgs[0] + "." + functionArgs[1] + " ";
            output += this.getOperationAlias("equals") + " " + functionArgs[2];
            output += this.getSemiColon();
            return [output, 0];
        };
        // string name[, string parentClass]
        Language.prototype.ClassStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);
            var output = this.getClassStartLeft();
            output += this.parseType(functionArgs[0]);
            if (functionArgs.length > 1) {
                if (this.getClassExtendsAsFunction()) {
                    output += "(" + this.parseType(functionArgs[1]) + ")";
                }
                else {
                    output += " " + this.getClassExtends() + " " + this.parseType(functionArgs[1]) + " ";
                }
            }
            output += this.getClassStartRight();
            if (this.getClassPrivacy()) {
                output = this.getClassPublicAlias() + output;
            }
            return [output, 1];
        };
        // string class[, string argumentName, string argumentType, ...]
        Language.prototype.ClassNew = function (functionArgs, isInline) {
            this.requireArgumentsLength("ClassNew", functionArgs, 1);
            var output;
            var i;
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
                output = output.substring(0, output.length - 2);
            }
            output += ")";
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.CommentBlock = function (functionArgs, isInline) {
            var output = new Array((functionArgs.length + 2) * 2);
            var i;
            output[0] = this.getCommentorBlockStart();
            output[1] = 0;
            for (i = 0; i < functionArgs.length; i += 1) {
                output[i * 1 + 2] = functionArgs[i];
                output[i * 2 + 3] = 0;
            }
            output[i * 2 + 2] = this.getCommentorBlockEnd();
            output[i * 2 + 3] = 0;
            return output;
        };
        // [string message, ...]
        Language.prototype.CommentLine = function (functionArgs, isInline) {
            var output = this.getCommentorInline() + " ";
            var i;
            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + " ";
            }
            output += functionArgs[i];
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.CommentInline = function (functionArgs, isInline) {
            var result = this.CommentLine(functionArgs, isInline);
            result[1] = Language.INT_MIN;
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
                output = this.toString() + "(" + functionArgs[0] + ")";
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
        // string name, string key
        Language.prototype.DictionaryKeyCheck = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryKeyCheck", functionArgs, 2);
            var output;
            if (this.getDictionaryKeyCheckAsFunction()) {
                output = functionArgs[0] + "." + this.getDictionaryKeyChecker() + "(" + functionArgs[1] + ")";
            }
            else {
                output = functionArgs[1] + this.getDictionaryKeyChecker() + functionArgs[0];
            }
            return [output, 0];
        };
        // string name, string key
        Language.prototype.DictionaryKeyGet = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryKeyGet", functionArgs, 2);
            return [functionArgs[0] + "[" + functionArgs[1] + "]", 0];
        };
        // string name, string key, string value
        Language.prototype.DictionaryKeySet = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryKeySet", functionArgs, 3);
            var output = functionArgs[0] + "[" + functionArgs[1] + "] = " + functionArgs[2];
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        // string key, string value
        Language.prototype.DictionaryInitialize = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryInitialize", functionArgs, 2);
            var dictionaryType = this.DictionaryType(functionArgs, true)[0];
            var output;
            if (this.getDictionaryInitializationAsNew()) {
                output = "new " + dictionaryType + "()";
            }
            else {
                output = "{}";
            }
            return [output, 0];
        };
        Language.prototype.DictionaryInitializeEnd = function (functionArgs, isInline) {
            var output = this.getDictionaryInitializeEnder();
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, -1];
        };
        // string key, string value[, string comma]
        Language.prototype.DictionaryInitializeKey = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryInitializeKey", functionArgs, 2);
            var output = this.getDictionaryKeyLeft();
            output += functionArgs[0];
            output += this.getDictionaryKeyMiddle();
            output += functionArgs[1];
            output += this.getDictionaryKeyRight();
            if (functionArgs.length > 2 || this.getDictionaryInitializeKeyWithSemicolon()) {
                output += this.getDictionaryInitializeKeyComma();
            }
            return [output, 0];
        };
        // string keyType, string valueType
        Language.prototype.DictionaryInitializeStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryInitializeStart", functionArgs, 2);
            var dictionaryType;
            var output;
            if (this.getDictionaryInitializationAsNew()) {
                dictionaryType = this.DictionaryType(functionArgs, true)[0];
            }
            else {
                dictionaryType = "";
            }
            if (this.getDictionaryInitializationAsNew()) {
                output = "new ";
            }
            else {
                output = "";
            }
            output += dictionaryType;
            output += this.getDictionaryInitializeStarter();
            return [output, 0];
        };
        // string keyType[, ...], string valueType
        Language.prototype.DictionaryType = function (functionArgs, isInline) {
            this.requireArgumentsLength("DictionaryType", functionArgs, 2);
            if (!this.getVariableTypesExplicit()) {
                return ["", 0];
            }
            if (!this.getDictionaryInitializationAsNew()) {
                return [this.getDictionaryClass(), 0];
            }
            var output = this.getDictionaryClass();
            var numKeys = functionArgs.length - 1;
            var i;
            output += "<" + this.parseType(functionArgs[0]);
            output += this.getClassTemplatesBetween();
            for (i = 1; i < numKeys; i += 1) {
                output += this.getDictionaryClass() + "<";
                output += this.parseType(functionArgs[i]);
                output += this.getClassTemplatesBetween();
            }
            output += this.parseType(functionArgs[i]);
            for (i = 0; i < numKeys; i += 1) {
                output += ">";
            }
            return [output, 0];
        };
        // string value
        Language.prototype.ElifStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ElifStart", functionArgs, 1);
            var output = this.getElif() + this.getConditionStartLeft();
            output += functionArgs[0] + this.getConditionStartRight();
            return ["\0", -1, output, 1];
        };
        Language.prototype.ElseStart = function (functionArgs, isInline) {
            return ["\0", -1, this.getElse() + this.getConditionContinueRight(), 1];
        };
        Language.prototype.FileEnd = function (functionArgs, isInline) {
            var output = this.getFileEndLine();
            if (output.length == 0) {
                return [output, Language.INT_MIN];
            }
            return [output, -1];
        };
        // name
        Language.prototype.FileStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("FileStart", functionArgs, 1);
            var left = this.getFileStartLeft();
            var right = this.getFileStartRight();
            if (left.length == 0 && right.length == 0) {
                return ["", Language.INT_MIN];
            }
            return [left + functionArgs[0] + right, 1];
        };
        Language.prototype.Finally = function (functionArgs, isInline) {
            var output = this.getExceptionFinally();
            output += this.getConditionContinueRight();
            return ["\0", -1, output, 1];
        };
        // string keyName, string keyType, string container
        // E.x. for each keys start : i string names
        Language.prototype.ForEachKeysStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ForEachKeysStart", functionArgs, 3);
            var variableDeclareArgs = [functionArgs[0], functionArgs[1]];
            var output;
            if (this.getForEachAsMethod()) {
                output = functionArgs[2];
                output += this.getForEachStarter();
                output += this.VariableDeclarePartial(variableDeclareArgs, true)[0];
                output += this.getForEachInner();
            }
            else {
                output = this.getForEachStarter();
                output += this.VariableDeclarePartial(variableDeclareArgs, true)[0];
                output += this.getForEachInner();
                if (this.getForEachKeysAsStatic()) {
                    output += this.getForEachKeysGet() + "(" + functionArgs[2] + ")";
                }
                else {
                    output += functionArgs[2] + this.getForEachKeysGet();
                }
                output += this.getConditionStartRight();
            }
            return [output, 1];
        };
        // Assume keyName and valueName exist, while pairName is created some languages won't use pairName
        // Ex. for each pairs start : pair name string count int names
        // string pairName, string keyName, string keyType, string valueName, string valueType, string container
        Language.prototype.ForEachPairsStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ForEachPairsStart", functionArgs, 6);
            var pairName = functionArgs[0];
            var keyName = functionArgs[1];
            var keyType = functionArgs[2];
            var valueName = functionArgs[3];
            var valueType = functionArgs[4];
            var container = functionArgs[5];
            var variableDeclareArgs;
            var line;
            var output;
            if (this.getForEachAsMethod()) {
                // container.each do |keyName, valueName|
                output = new Array(4);
                variableDeclareArgs = new Array(2);
                // container.each do |
                line = container;
                line += this.getForEachStarter();
                //                     keyName
                variableDeclareArgs[0] = keyName;
                variableDeclareArgs[1] = keyType;
                line += this.VariableDeclarePartial(variableDeclareArgs, true)[0];
                //                            , valueName|
                variableDeclareArgs[0] = valueName;
                variableDeclareArgs[1] = valueType;
                line += ", " + this.VariableDeclarePartial(variableDeclareArgs, true)[0];
                line += this.getForEachInner();
                output = [line, 1];
            }
            else if (this.getForEachPairsAsPair()) {
                // foreach KeyValuePair<string, int> pairName in container 
                //     keyName = pairName.Key;
                //     valueName = pairName.Value;
                output = new Array(6);
                // forEach KeyValuePair<string, int> pairName
                line = this.getForEachStarter();
                variableDeclareArgs = new Array(2);
                variableDeclareArgs[0] = pairName;
                variableDeclareArgs[1] = this.getForEachPairsPairClass() + "<" + keyType + ", " + valueType + ">";
                line += this.VariableDeclarePartial(variableDeclareArgs, true)[0];
                // (                                            in container) {
                line += this.getForEachInner();
                line += container;
                line += this.getConditionStartRight();
                output[0] = line;
                output[1] = 1;
                // keyName = pairName.Key
                variableDeclareArgs = new Array(3);
                variableDeclareArgs[0] = keyName;
                variableDeclareArgs[1] = "equals";
                variableDeclareArgs[2] = pairName + this.getForEachPairsRetrieveKey();
                line = this.Operation(variableDeclareArgs, false)[0];
                output[2] = line;
                output[3] = 0;
                // valueName = pairName.Value
                variableDeclareArgs = new Array(3);
                variableDeclareArgs[0] = valueName;
                variableDeclareArgs[1] = "equals";
                variableDeclareArgs[2] = pairName + this.getForEachPairsRetrieveValue();
                line = this.Operation(variableDeclareArgs, false)[0];
                output[4] = line;
                output[5] = 0;
            }
            else {
                // for keyName in container 
                // valueName = container[keyName]
                output = new Array(4);
                // for keyName in container 
                line = this.getForEachStarter();
                line += keyName;
                line += this.getForEachInner();
                line += container;
                line += this.getConditionStartRight();
                output[0] = line;
                output[1] = 1;
                // valueName = container[keyName]
                variableDeclareArgs = new Array(3);
                variableDeclareArgs[0] = valueName;
                variableDeclareArgs[1] = "equals";
                variableDeclareArgs[2] = container + "[" + keyName + "]";
                line = this.Operation(variableDeclareArgs, false)[0];
                output[2] = line;
                output[3] = 0;
            }
            return output;
        };
        Language.prototype.ForEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string i, string initial, string comparison, string boundary[, string change]
        // e.x. i int 0 lessthan 7
        Language.prototype.ForNumbersStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("ForNumbersStart", functionArgs, 4);
            var output = "for" + this.getConditionStartLeft();
            var i = functionArgs[0];
            var initial = functionArgs[1];
            var comparison = functionArgs[2];
            var boundary = functionArgs[3];
            var direction = "increaseby";
            var change;
            var generalArgs;
            if (functionArgs.length > 4) {
                change = functionArgs[4];
            }
            else {
                change = "1";
            }
            if (this.getRangedForLoops()) {
                output += i;
                output += this.getRangedForLoopsStart();
                output += initial + this.getRangedForLoopsMiddle() + change;
                if (change != "1") {
                    output += this.getRangedForLoopsMiddle() + change;
                }
                output += this.getRangedForLoopsEnd();
            }
            else {
                generalArgs = [i, "equals", initial];
                output += this.Operation(generalArgs, true)[0] + this.getSemiColon() + " ";
                generalArgs = [i, comparison, boundary];
                output += this.Comparison(generalArgs, true)[0] + this.getSemiColon() + " ";
                generalArgs = [i, direction, change];
                output += this.Operation(generalArgs, true)[0];
            }
            output += this.getConditionStartRight();
            return [output, 1];
        };
        // string name[, string parameter, ...]
        Language.prototype.FunctionCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("FunctionCall", functionArgs, 1);
            var output = functionArgs[0] + "(";
            var i;
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
        Language.prototype.FunctionCallPartialEnd = function (functionArgs, isInline) {
            var output = ")";
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, -1];
        };
        // string name
        Language.prototype.FunctionCallPartialStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("FunctionCallPartialStart", functionArgs, 1);
            return [functionArgs[0] + "(", 1];
        };
        Language.prototype.FunctionEnd = function (functionArgs, isInline) {
            return [this.getFunctionDefineEnd(), -1];
        };
        // string name, string return[, string argumentName, string argumentType, ...]
        Language.prototype.FunctionStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("FunctionStart", functionArgs, 2);
            var output = "";
            var variableDeclarationArgs = [];
            var i;
            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output += this.parseType(functionArgs[1]) + " ";
            }
            output += this.getFunctionDefine() + functionArgs[0] + "(";
            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length; i += 2) {
                    variableDeclarationArgs[0] = functionArgs[i];
                    variableDeclarationArgs[1] = functionArgs[i + 1];
                    output += this.VariableDeclarePartial(variableDeclarationArgs, true)[0] + ", ";
                }
                // The last argument does not have the last ", " at the end
                output = output.substring(0, output.length - 2);
            }
            output += ")";
            if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                output += this.getFunctionTypeMarker() + this.parseType(functionArgs[1]);
            }
            output += this.getFunctionDefineRight();
            return [output, 1];
        };
        Language.prototype.IfEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string value
        Language.prototype.IfStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("IfStart", functionArgs, 1);
            var output = this.getIf() + this.getConditionStartLeft();
            output += functionArgs[0] + this.getConditionStartRight();
            return [output, 1];
        };
        // string file
        Language.prototype.Include = function (functionArgs, isInline) {
            this.requireArgumentsLength("Include", functionArgs, 1);
            var output = this.getIncludeStarter();
            output += functionArgs[0];
            if (this.getIncludeFileExtension()) {
                output += "." + this.getExtension();
            }
            output += this.getIncludeEnder();
            return [output, 0];
        };
        Language.prototype.IncludeDictionary = function (functionArgs, isInline) {
            var dictionaryType = this.getIncludeDictionaryType();
            if (dictionaryType.length == 0) {
                return ["", Language.INT_MIN];
            }
            return this.Include([dictionaryType], isInline);
        };
        // [, string param, ...], statement
        Language.prototype.LambdaDeclareInline = function (functionArgs, isInline) {
            this.requireArgumentsLength("LambdaDeclareInline", functionArgs, 3);
            var output = this.getLambdaDeclareStarter();
            var i;
            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }
            output = output.substring(0, output.length - 2);
            output += this.getLambdaDeclareMiddle();
            output += functionArgs[functionArgs.length - 1] + this.getLambdaDeclareEnder();
            return [output, 0];
        };
        // string visibility, string name, string return type[, string paramName, string paramType, ...]
        Language.prototype.LambdaTypeDeclare = function (functionArgs, isInline) {
            this.requireArgumentsLength("LambdaTypeDeclare", functionArgs, 3);
            if (!this.getLambdaTypeDeclarationRequired()) {
                return ["", Language.INT_MIN];
            }
            var start = this.getLambdaTypeDeclarationStart();
            var middle = this.getLambdaTypeDeclarationMiddle();
            var end = this.getLambdaTypeDeclarationEnd();
            var variableDeclarationArgs = new Array(2);
            var line = "";
            var i;
            if (this.getLambdaTypeDeclarationAsInterface()) {
                var output = new Array(6);
                // public interface TestInterface 
                line = this.getClassPublicAlias();
                line += start[0];
                line += functionArgs[0];
                line += start[1];
                output[0] = line;
                output[1] = 1;
                // a: string, b: int : boolean;
                line = middle[0] + "(";
                if (functionArgs.length > 2) {
                    for (i = 2; i < functionArgs.length; i += 2) {
                        variableDeclarationArgs[0] = functionArgs[i];
                        variableDeclarationArgs[1] = functionArgs[i + 1];
                        line += this.VariableDeclarePartial(variableDeclarationArgs, true)[0] + ", ";
                    }
                    // The last argument does not have the last ", " at the end
                    line = line.substring(0, line.length - 2);
                }
                line += ")";
                if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                    line += this.getFunctionTypeMarker() + this.parseType(functionArgs[1]);
                }
                line += middle[1];
                output[2] = line;
                output[3] = 0;
                // }
                output[4] = end[0];
                output[5] = -1;
                return output;
            }
            else {
                line += start[0] + this.getClassPublicAlias() + start[1];
                line += " " + this.parseType(functionArgs[1]);
                line += " " + functionArgs[0];
                if (functionArgs.length > 2) {
                    line += middle[0];
                    for (i = 2; i < functionArgs.length; i += 2) {
                        variableDeclarationArgs[0] = functionArgs[i];
                        variableDeclarationArgs[1] = functionArgs[i + 1];
                        line += this.VariableDeclarePartial(variableDeclarationArgs, true)[0] + ", ";
                    }
                    // The last argument does not have the last ", " at the end
                    line = line.substring(0, line.length - 2);
                    line += middle[1];
                }
                line = end[0] + line + end[1];
                return [line, 0];
            }
        };
        Language.prototype.LoopBreak = function (functionArgs, isInline) {
            return [this.getBreak() + this.getSemiColon(), 0];
        };
        Language.prototype.LoopContinue = function (functionArgs, isInline) {
            return [this.getContinue() + this.getSemiColon(), 0];
        };
        Language.prototype.MainEnd = function (functionArgs, isInline) {
            var start = this.getMainStartLine();
            if (start.length == 0) {
                return [this.getMainEndLine(), 0];
            }
            return [this.getMainEndLine(), -1];
        };
        Language.prototype.MainStart = function (functionArgs, isInline) {
            var output = this.getMainStartLine();
            if (output.length == 0) {
                return [output, 0];
            }
            return [output, 1];
        };
        // string class, string function, string instance[, string parameter, ...]
        Language.prototype.NativeCall = function (functionArgs, isInline) {
            this.requireArgumentsLength("NativeFunction", functionArgs, 3);
            var className = this.getTypeAlias(functionArgs[0]);
            var aliasInfo = this.getNativeFunctionAlias(functionArgs[0], functionArgs[1]);
            var placement = aliasInfo["placement"];
            var usage = aliasInfo["usage"];
            var caller;
            var numArgs;
            var start;
            var output;
            var i;
            if (placement == "member") {
                caller = functionArgs[2] + "." + aliasInfo["alias"];
                numArgs = functionArgs.length - 3;
                start = 2;
            }
            else if (placement == "array") {
                caller = functionArgs[2];
                numArgs = functionArgs.length - 3;
                start = 2;
            }
            else if (placement == "static") {
                caller = aliasInfo["alias"];
                numArgs = functionArgs.length - 2;
                start = 1;
            }
            if (usage == "function") {
                var functionCallArgs = new Array(numArgs);
                var i;
                functionCallArgs[0] = caller;
                for (i = 1; i < functionArgs.length - start; i += 1) {
                    functionCallArgs[i] = functionArgs[i + start];
                }
                output = this.FunctionCall(functionCallArgs, isInline)[0];
            }
            else if (usage == "variable") {
                output = caller;
            }
            else if (usage == "array") {
                output = caller + "[";
                // Default to just the separator if there are no arguments
                if (functionArgs.length - 1 == start) {
                    output += aliasInfo["separator"];
                }
                else {
                    for (i = 1; i < functionArgs.length - start; i += 1) {
                        output += functionArgs[i + start] + aliasInfo["separator"];
                    }
                    // Remove the last separator if more than one argument is added
                    if (functionArgs.length - start > 2) {
                        output = output.substring(0, output.length - aliasInfo["separator"].length);
                    }
                }
                output += "]";
            }
            return [output, 0];
        };
        // string value
        Language.prototype.Not = function (functionArgs, isInline) {
            this.requireArgumentsLength("Operation", functionArgs, 1);
            return ["!" + functionArgs[0], 0];
        };
        // string left, string operator, string right[, string operator, string right, ...]
        Language.prototype.Operation = function (functionArgs, isInline) {
            this.requireArgumentsLength("Operation", functionArgs, 3);
            var output = functionArgs[0] + " ";
            var i;
            for (i = 1; i < functionArgs.length; i += 2) {
                output += this.getOperationAlias(functionArgs[i]) + " ";
                output += this.getValueAlias(functionArgs[i + 1]) + " ";
            }
            output = output.substring(0, output.length - 1);
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        // string inside[, ...]
        Language.prototype.Parenthesis = function (functionArgs, isInline) {
            this.requireArgumentsLength("Parenthesis", functionArgs, 1);
            var output = "(";
            var i;
            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }
            output += functionArgs[i];
            output += ")";
            return [output, 0];
        };
        // [string message, ...]
        Language.prototype.PrintLine = function (functionArgs, isInline) {
            var output = this.getPrintFunction() + "(";
            var i;
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
        // string value
        Language.prototype.Return = function (functionArgs, isInline) {
            this.requireArgumentsLength("FunctionReturn", functionArgs, 1);
            return ["return " + functionArgs[0] + this.getSemiColon(), 0];
        };
        Language.prototype.This = function (functionArgs, isInline) {
            return [this.getClassThis(), 0];
        };
        // [string message]
        Language.prototype.Throw = function (functionArgs, isInline) {
            var output = this.getExceptionThrow() + " ";
            if (functionArgs.length > 0) {
                output += this.ClassNew([this.getExceptionClass(), functionArgs[0]], true)[0];
            }
            else {
                output += this.ClassNew([this.getExceptionClass()], true)[0];
            }
            if (!isInline) {
                output += this.getSemiColon();
            }
            return [output, 0];
        };
        Language.prototype.TryStart = function (functionArgs, isInline) {
            return [this.getExceptionTry() + this.getConditionContinueRight(), 1];
        };
        Language.prototype.TryEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string type
        Language.prototype.Type = function (functionArgs, isInline) {
            this.requireArgumentsLength("Type", functionArgs, 1);
            return [this.getTypeAlias(functionArgs[0]), 0];
        };
        // string value
        Language.prototype.Value = function (functionArgs, isInline) {
            this.requireArgumentsLength("VariableDeclare", functionArgs, 1);
            return [this.getValueAlias(functionArgs[0]), 0];
        };
        // string name, string type[, string value]
        // Ex. var x: number;
        // Ex. var x: number = 7;
        Language.prototype.VariableDeclare = function (functionArgs, isInline) {
            this.requireArgumentsLength("VariableDeclare", functionArgs, 2);
            var output = this.VariableDeclareIncomplete(functionArgs, isInline);
            if (!isInline) {
                output[0] = output[0] + this.getSemiColon();
            }
            output[1] = 0;
            return output;
        };
        // string name, string type[, string value]
        // Ex. var x: number
        // Ex. var x: number = 7
        Language.prototype.VariableDeclareIncomplete = function (functionArgs, isInline) {
            this.requireArgumentsLength("VariableDeclareIncomplete", functionArgs, 2);
            var variableType = this.parseType(functionArgs[1]);
            var variableDeclarationArgs;
            var variableDeclared;
            if (functionArgs.length == 2) {
                variableDeclarationArgs = [functionArgs[0], variableType];
            }
            else {
                variableDeclarationArgs = [functionArgs[0], variableType, functionArgs[2]];
            }
            variableDeclared = this.VariableDeclarePartial(functionArgs, isInline);
            variableDeclared[0] = this.getVariableDeclareStart() + variableDeclared[0];
            variableDeclared[1] = 1;
            return variableDeclared;
        };
        // string name, string type[, string value]
        // Ex. x: number
        // Ex. x: number = 7
        Language.prototype.VariableDeclarePartial = function (functionArgs, isInline) {
            this.requireArgumentsLength("VariableDeclarePartial", functionArgs, 2);
            var variableType = this.parseType(functionArgs[1]);
            var output = "";
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
            return [output, 1];
        };
        Language.prototype.WhileEnd = function (functionArgs, isInline) {
            return [this.getConditionEnd(), -1];
        };
        // string value
        Language.prototype.WhileStart = function (functionArgs, isInline) {
            this.requireArgumentsLength("WhileVariableStart", functionArgs, 1);
            var output = "while" + this.getConditionStartLeft();
            output += this.getOperationAlias(functionArgs[0]) + this.getConditionStartRight();
            return [output, 1];
        };
        /*
        Utilities
        */
        Language.prototype.requireArgumentsLength = function (functionName, functionArgs, amount) {
            if (functionArgs.length < amount) {
                throw new Error("Not enough arguments given to " + functionName + ". Required: " + amount + ".");
            }
        };
        // Extra
        Language.INT_MIN = 9001;
        return Language;
    })();
    GLS.Language = Language;
})(GLS || (GLS = {}));
