module GLS.Languages {
    export var Java: Language = new GLS.Language()
        .setName("Java")
        .setExtension("java")
        .setPrintFunction("System.out.println")
        .setSemiColon(";")
        .setClassConstructorName("")
        .setClassEnder("};")
        .setClassFunctionsTakeThis(false)
        .setClassFunctionsStart("")
        .setClassMemberVariableDefault("")
        .setClassMemberVariablePrivacy(true)
        .setClassMemberVariableStarter("")
        .setClassNewer("new ")
        .setClassPrivacy(true)
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
        .setFileEndLine("}")
        .setFileStartLeft("public class ")
        .setFileStartRight(" {")
        .setFunctionDefine("")
        .setFunctionDefineRight(" {")
        .setFunctionDefineEnd("}")
        .setFunctionReturnsExplicit(true)
        .setFunctionTypeAfterName(false)
        .setMainEndLine("}")
        .setMainStartLine("public void main() {")
        .setToString("String.valueOf")
        .setToStringAsFunction(true)
        .setRangedForLoops(false)
        .setVariableDeclareStart("")
        .setVariableTypesExplicit(true)
        .setVariableTypesAfterName(false)
        .addTypeAlias("int", "number")
        .addTypeAlias("String", "string")
}