/// <reference path="Language.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.Python = new GLS.Language().setName("Python").setExtension("py").setPrintFunction("print").setSemiColon("").setArrayClass("Array").setArrayInitializationAsNewMultiplied(true).setArrayLength("len").setArrayLengthAsFunction(true).setArrayNegativeIndices(true).setBreak("break").setClassConstructorName("__init__").setClassConstructorLoose(true).setClassEnder("\0").setClassExtendsAsFunction(true).setClassFunctionsStart("def ").setClassFunctionsTakeThis(true).setClassFunctionsThis("self").setClassMemberFunctionGetStart("").setClassMemberFunctionGetEnd("").setClassMemberFunctionGetEnd("").setClassMemberFunctionGetStart("").setClassMemberVariableDefault("None").setClassMemberVariablePrivacy(false).setClassMemberVariableStarter("").setClassNewer("").setClassParentName("").setClassPrivacy(false).setClassStaticFunctionDecorator("@staticmethod").setClassStaticFunctionRequiresDecorator(true).setClassStaticLabel("").setClassStartLeft("class ").setClassStartRight(":").setClassThis("self").setClassThisAccess(".").setCommentorBlockStart("\"\"\"").setCommentorBlockEnd("\"\"\"").setCommentorInline("#").setConditionStartLeft(" ").setConditionStartRight(":").setConditionContinueLeft(" ").setConditionContinueRight(":").setConditionEnd("\0").setContinue("continue").setDictionaryInitializeEnder("}").setDictionaryInitializeKeyComma(",").setDictionaryInitializeStarter(" {").setDictionaryKeyChecker(" in ").setDictionaryKeyLeft("").setDictionaryKeyMiddle(": ").setDictionaryKeyRight("").setElif("elif").setElse("else").setFileEndLine("").setFileStartLeft("").setFileStartRight("").setForEachInner(" in ").setForEachPairsGet("").setForEachStarter("for ").setFunctionDefine("def ").setFunctionDefineRight(":").setFunctionDefineEnd("\0").setIf("if").setLambdaDeclareEnder("").setLambdaDeclareMiddle(": ").setLambdaDeclareStarter("lambda ").setMainEndLine("\0").setMainStartLine("if __name__ == '__main__':").setToString("str").setToStringAsFunction(true).setUndefined("None").setRangedForLoops(true).setRangedForLoopsStart(" in range(").setRangedForLoopsMiddle(", ").setRangedForLoopsEnd(")").setFunctionReturnsExplicit(false).setVariableTypesExplicit(false).setVariableDeclareStart("").addOperationAlias("and", "and").addOperationAlias("or", "or").addValueAlias("False", "false").addValueAlias("True", "true").addNativeFunctionAliases("array", {
            "length": {
                "alias": "len",
                "placement": "static",
                "usage": "function"
            }
        }).addNativeFunctionAliases("string", {
            "length": {
                "alias": "len",
                "placement": "static",
                "usage": "function"
            },
            "find": {
                "alias": "index",
                "placement": "member",
                "usage": "function"
            },
            "substring": {
                "alias": "",
                "placement": "array",
                "usage": "array",
                "separator": ":"
            }
        });
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
