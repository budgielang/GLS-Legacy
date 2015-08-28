module GLS.Languages {
    export var Java: Language = new GLS.Language()
        .setName("Java")
        .setExtension("java")
        .setPrintFunction("System.out.println")
        .setSemiColon(";")
        .setArrayClass("Array")
        .setArrayInitializationAsNewTyped(true)
        .setArrayLength(".length")
        .setBreak("break")
        .setClassConstructorName("")
        .setClassEnder("};")
        .setClassExtends("extends")
        .setClassFunctionsTakeThis(false)
        .setClassFunctionsStart("")
        .setClassMemberFunctionGetStart("")
        .setClassMemberFunctionGetEnd("")
        .setClassMemberVariableDefault("")
        .setClassMemberVariablePrivacy(true)
        .setClassMemberVariableStarter("")
        .setClassNewer("new ")
        .setClassParentName("super")
        .setClassPrivacy(true)
        .setClassStaticLabel("static ")
        .setClassStartLeft("class ")
        .setClassStartRight(" {")
        .setClassTemplates(true)
        .setClassTemplatesBetween(", ")
        .setClassThis("this")
        .setClassThisAccess(".")
        .setCommentorBlockStart("/*")
        .setCommentorBlockEnd("*/")
        .setCommentorInline("//")
        .setConditionStartLeft(" (")
        .setConditionStartRight(") {")
        .setConditionContinueLeft("} ")
        .setConditionContinueRight(" {")
        .setConditionEnd("}")
        .setContinue("continue")
        .setDictionaryInitializeEnder("}}")
        .setDictionaryInitializeKeyComma(";")
        .setDictionaryInitializeKeyWithSemicolon(true)
        .setDictionaryInitializeStarter("() {{")
        .setDictionaryClass("HashMap")
        .setDictionaryInitializationAsNew(true)
        .setDictionaryKeyCheckAsFunction(true)
        .setDictionaryKeyChecker("containsKey")
        .setDictionaryKeyLeft("add(")
        .setDictionaryKeyMiddle(", ")
        .setDictionaryKeyRight(")")
        .setElif("} else if")
        .setElse("} else")
        .setFileEndLine("}")
        .setFileStartLeft("public class ")
        .setFileStartRight(" {")
        .setForEachInner(" in ")
        .setForEachPairsGet("")
        .setForEachPairsPairClass("MapEntry")
        .setForEachPairsAsPair(true)
        .setForEachPairsRetrieveKey(".getKey()")
        .setForEachPairsRetrieveValue(".getValue()")
        .setForEachStarter("for (")
        .setFunctionDefine("")
        .setFunctionDefineRight(" {")
        .setFunctionDefineEnd("}")
        .setFunctionReturnsExplicit(true)
        .setFunctionTypeAfterName(false)
        .setIf("if")
        .setLambdaDeclareEnder("")
        .setLambdaDeclareMiddle(") -> ")
        .setLambdaDeclareStarter("(")
        .setLambdaTypeDeclarationAsInterface(true)
        .setLambdaTypeDeclarationEnd(["}"])
        .setLambdaTypeDeclarationMiddle(["run", ";"])
        .setLambdaTypeDeclarationRequired(true)
        .setLambdaTypeDeclarationStart([" interface ", " {"])
        .setMainEndLine("}")
        .setMainStartLine("public void main() {")
        .setToString("String.valueOf")
        .setToStringAsFunction(true)
        .setUndefined("null")
        .setRangedForLoops(false)
        .setVariableDeclareStart("")
        .setVariableTypesExplicit(true)
        .setVariableTypesAfterName(false)
        .addTypeAlias("int", "number")
        .addTypeAlias("String", "string")
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
                "usage": "function"
            },
            "find": {
                "alias": "indexOf",
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