module GLS.Languages {
    export var Python: Language = new GLS.Language()
        .setName("Python")
        .setExtension("py")
        .setPrintFunction("print")
        .setSemiColon("")
        .setArrayClass("Array")
        .setArrayInitializationAsNewMultiplied(true)
        .setArrayLength("len")
        .setArrayLengthAsFunction(true)
        .setArrayNegativeIndices(true)
        .setClassConstructorName("__init__")
        .setClassConstructorLoose(true)
        .setClassEnder("\0")
        .setClassExtendsAsFunction(true)
        .setClassFunctionsStart("def ")
        .setClassFunctionsTakeThis(true)
        .setClassFunctionsThis("self")
        .setClassMemberFunctionGetStart("")
        .setClassMemberFunctionGetEnd("")
        .setClassMemberFunctionGetEnd("")
        .setClassMemberFunctionGetStart("")
        .setClassMemberVariableDefault("None")
        .setClassMemberVariablePrivacy(false)
        .setClassMemberVariableStarter("")
        .setClassNewer("")
        .setClassParentName("")
        .setClassPrivacy(false)
        .setClassStaticFunctionDecorator("@staticmethod")
        .setClassStaticFunctionRequiresDecorator(true)
        .setClassStaticLabel("")
        .setClassStartLeft("class ")
        .setClassStartRight(":")
        .setClassThis("self")
        .setClassThisAccess(".")
        .setCommentorBlockStart("\"\"\"")
        .setCommentorBlockEnd("\"\"\"")
        .setCommentorInline("#")
        .setConditionStartLeft(" ")
        .setConditionStartRight(":")
        .setConditionContinueLeft(" ")
        .setConditionContinueRight(":")
        .setConditionEnd("\0")
        .setDictionaryInitializeEnder("}")
        .setDictionaryInitializeKeyComma(",")
        .setDictionaryInitializeStarter(" {")
        .setDictionaryKeyChecker(" in ")
        .setDictionaryKeyLeft("")
        .setDictionaryKeyMiddle(": ")
        .setDictionaryKeyRight("")
        .setFileEndLine("")
        .setFileStartLeft("")
        .setFileStartRight("")
        .setFunctionDefine("def ")
        .setFunctionDefineRight(":")
        .setFunctionDefineEnd("\0")
        .setLambdaDeclareEnder("")
        .setLambdaDeclareMiddle(": ")
        .setLambdaDeclareStarter("lambda ")
        .setMainEndLine("\0")
        .setMainStartLine("if __name__ == '__main__':")
        .setToString("str")
        .setToStringAsFunction(true)
        .setUndefined("None")
        .setRangedForLoops(true)
        .setRangedForLoopsStart(" in range(")
        .setRangedForLoopsMiddle(", ")
        .setRangedForLoopsEnd(")")
        .setFunctionReturnsExplicit(false)
        .setVariableTypesExplicit(false)
        .setVariableDeclareStart("")
        .addOperationAlias("and", "and")
        .addOperationAlias("or", "or")
        .addValueAlias("False", "false")
        .addValueAlias("True", "true")
        .addNativeFunctionAliases("array",
        {
            "length": {
                "alias": "len",
                "placement": "static",
                "usage": "function"
            }
        })
        .addNativeFunctionAliases("string",
        {
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
                "alias": "substring",
                "placement": "member",
                "usage": "function"
            }
        });
}