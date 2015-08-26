module GLS.Languages {
    export var Ruby: Language = new GLS.Language()
        .setName("Ruby")
        .setExtension("rb")
        .setPrintFunction("puts")
        .setSemiColon("")
        .setArrayClass("Array")
        .setArrayLength(".length")
        .setArrayInitializationAsNewStatic(true)
        .setArrayNegativeIndices(true)
        .setClassConstructorAsStatic(true)
        .setClassParentName("super")
        .setClassConstructorName("initialize")
        .setClassConstructorLoose(true)
        .setClassEnder("end")
        .setClassExtends("<")
        .setClassFunctionsStart("def ")
        .setClassFunctionsTakeThis(false)
        .setClassFunctionsThis("")
        .setClassMemberFunctionGetStart("")
        .setClassMemberFunctionGetEnd("")
        .setClassMemberVariableDefault("")
        .setClassMemberVariablePrivacy(false)
        .setClassMemberVariableStarter("@")
        .setClassNewer("new")
        .setClassPrivacy(false)
        .setClassStaticLabel("")
        .setClassStartLeft("class ")
        .setClassStartRight("")
        .setClassThis("@")
        .setClassThisAccess("")
        .setCommentorBlockStart("=begin")
        .setCommentorBlockEnd("=end")
        .setCommentorInline("#")
        .setConditionStartLeft(" ")
        .setConditionStartRight("")
        .setConditionContinueLeft(" ")
        .setConditionContinueRight("")
        .setConditionEnd("end")
        .setDictionaryInitializeEnder("}")
        .setDictionaryInitializeKeyComma(",")
        .setDictionaryInitializeStarter(" {")
        .setDictionaryKeyCheckAsFunction(true)
        .setDictionaryKeyChecker("has_key?")
        .setDictionaryKeyLeft("")
        .setDictionaryKeyMiddle(": ")
        .setDictionaryKeyRight("")
        .setElif("elsif")
        .setElse("else")
        .setFileEndLine("")
        .setFileStartLeft("")
        .setFileStartRight("")
        .setFunctionDefine("def ")
        .setFunctionDefineRight("")
        .setFunctionDefineEnd("end")
        .setIf("if")
        .setLambdaDeclareEnder(" }")
        .setLambdaDeclareMiddle("| { ")
        .setLambdaDeclareStarter("lambda do |")
        .setLambdaTypeDeclarationAsInterface(true)
        .setLambdaTypeDeclarationEnd(["}"])
        .setLambdaTypeDeclarationMiddle(["", ";"])
        .setLambdaTypeDeclarationRequired(true)
        .setLambdaTypeDeclarationStart([" interface ", " {"])
        .setMainEndLine("end")
        .setMainStartLine("if __FILE__ == $PROGRAM_NAME")
        .setToString(".to_s")
        .setUndefined("nil")
        .setRangedForLoops(true)
        .setRangedForLoopsStart(" in ")
        .setRangedForLoopsMiddle("..")
        .setRangedForLoopsEnd("")
        .setFunctionReturnsExplicit(false)
        .setVariableTypesExplicit(false)
        .setVariableDeclareStart("")
        .addNativeFunctionAliases("array",
        {
            "length": {
                "alias": "length",
                "placement": "member",
                "usage": "variable"
            }
        })
        .addNativeFunctionAliases("string",
        {
            "length": {
                "alias": "length",
                "placement": "member",
                "usage": "variable"
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