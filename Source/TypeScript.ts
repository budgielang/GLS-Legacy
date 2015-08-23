module GLS.Languages {
    export var TypeScript: Language = new GLS.Language()
        .setName("TypeScript")
        .setExtension("ts")
        .setPrintFunction("console.log")
        .setSemiColon(";")
        .setArrayClass("Array")
        .setArrayLength(".length")
        .setClassConstructorName("constructor")
        .setClassEnder("}")
        .setClassExtends("extends")
        .setClassFunctionsTakeThis(false)
        .setClassFunctionsStart("")
        .setClassMemberFunctionGetBind(true)
        .setClassMemberFunctionGetStart("")
        .setClassMemberFunctionGetEnd(".bind")
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
        .setDictionaryClass("any")
        .setDictionaryInitializeEnder("}")
        .setDictionaryInitializeKeyComma(",")
        .setDictionaryInitializeStarter("{")
        .setDictionaryKeyCheckAsFunction(true)
        .setDictionaryKeyChecker("hasOwnProperty")
        .setDictionaryKeyLeft("")
        .setDictionaryKeyMiddle(": ")
        .setDictionaryKeyRight("")
        .setFileEndLine("}")
        .setFileStartLeft("module ")
        .setFileStartRight(" {")
        .setFunctionDefine("function ")
        .setFunctionDefineRight(" {")
        .setFunctionDefineEnd("}")
        .setFunctionReturnsExplicit(true)
        .setFunctionTypeMarker(": ")
        .setFunctionTypeAfterName(true)
        .setLambdaDeclareEnder("")
        .setLambdaDeclareMiddle(") => ")
        .setLambdaDeclareStarter("(")
        .setLambdaTypeDeclarationAsInterface(true)
        .setLambdaTypeDeclarationEnd(["}"])
        .setLambdaTypeDeclarationMiddle(["", ";"])
        .setLambdaTypeDeclarationRequired(true)
        .setLambdaTypeDeclarationStart([" interface ", " {"])
        .setMainEndLine("}")
        .setMainStartLine("export function Main(): void {")
        .setToString("")
        .setUndefined("undefined")
        .setRangedForLoops(false)
        .setVariableTypesExplicit(true)
        .setVariableTypesAfterName(true)
        .setVariableTypeMarker(": ")
        .setVariableDeclareStart("var ")
        .addTypeAlias("number", "int")
        .addTypeAlias("number", "double")
        .addTypeAlias("number", "float")
        .addTypeAlias("boolean", "bool")
        .addTypeAlias("Array", "array")
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
                "alias": "indexOf",
                "placement": "member",
                "usage": "function"
            }
        });
}
