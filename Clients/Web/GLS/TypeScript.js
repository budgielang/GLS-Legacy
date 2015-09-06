var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.TypeScript = new GLS.Language().setName("TypeScript").setExtension("ts").setPrintFunction("console.log").setSemiColon(";").setArrayClass("Array").setArrayLength(".length").setBreak("break").setCastStarter("<").setCastEnder(">").setClassConstructorName("constructor").setClassEnder("}").setClassExtends("extends").setClassFunctionsTakeThis(false).setClassFunctionsStart("").setClassMemberFunctionGetBind(true).setClassMemberFunctionGetStart("").setClassMemberFunctionGetEnd(".bind").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(true).setClassMemberVariableStarter("").setClassNewer("new ").setClassParentName("super").setClassPublicAlias("export ").setClassPrivacy(true).setClassStaticLabel("static ").setClassStartLeft("class ").setClassStartRight(" {").setClassTemplates(true).setClassTemplatesBetween(", ").setClassThis("this").setClassThisAccess(".").setCommentorBlockStart("/*").setCommentorBlockEnd("*/").setCommentorInline("//").setConditionStartLeft(" (").setConditionStartRight(") {").setConditionContinueLeft("} ").setConditionContinueRight(" {").setConditionEnd("}").setContinue("continue").setDictionaryClass("any").setDictionaryInitializeEnder("}").setDictionaryInitializeKeyComma(",").setDictionaryInitializeStarter("{").setDictionaryKeyCheckAsFunction(true).setDictionaryKeyChecker("hasOwnProperty").setDictionaryKeyLeft("").setDictionaryKeyMiddle(": ").setDictionaryKeyRight("").setElif("} else if").setElse("} else").setExceptionCatch("} catch (").setExceptionClass("Error").setExceptionErrorPrefix(" ").setExceptionFinally("} finally").setExceptionThrow("throw").setExceptionTry("try").setFileEndLine("}").setFileStartLeft("module ").setFileStartRight(" {").setForEachInner(" in ").setForEachKeysGet("").setForEachPairsGet("").setForEachStarter("for (").setFunctionDefine("function ").setFunctionDefineRight(" {").setFunctionDefineEnd("}").setFunctionReturnsExplicit(true).setFunctionTypeMarker(": ").setFunctionTypeAfterName(true).setIf("if").setIncludeDictionaryType("").setIncludeEnder("' />").setIncludeFileExtension(true).setIncludeStarter("/// <reference path='").setLambdaDeclareEnder("").setLambdaDeclareMiddle(") => ").setLambdaDeclareStarter("(").setLambdaTypeDeclarationAsInterface(true).setLambdaTypeDeclarationEnd(["}"]).setLambdaTypeDeclarationMiddle(["", ";"]).setLambdaTypeDeclarationRequired(true).setLambdaTypeDeclarationStart(["interface ", " {"]).setMainEndLine("}").setMainStartLine("export function Main(): void {").setToString("").setUndefined("undefined").setRangedForLoops(false).setVariableTypesExplicit(true).setVariableTypesAfterName(true).setVariableTypeMarker(": ").setVariableDeclareStart("var ").addTypeAliases({
            "int": "number",
            "double": "number",
            "float": "number",
            "bool": "boolean",
            "mixed": "any",
            "character": "string"
        }).addNativeFunctionAliases("array", {
            "length": {
                "alias": "length",
                "placement": "member",
                "usage": "variable"
            }
        }).addNativeFunctionAliases("string", {
            "length": {
                "alias": "length",
                "placement": "member",
                "usage": "variable"
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
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
