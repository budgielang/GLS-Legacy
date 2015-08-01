var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.Java = new GLS.Language().setName("Java").setExtension("java").setPrintFunction("System.out.println").setSemiColon(";").setClassConstructorName("").setClassEnder("};").setClassFunctionsTakeThis(false).setClassFunctionsStart("").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(true).setClassNewer("new ").setClassPrivacy(true).setClassStartLeft("class ").setClassStartRight(" {").setClassThis("this").setClassThisAccess(".").setCommentorBlockStart("/*").setCommentorBlockEnd("*/").setCommentorInline("//").setConditionStartLeft(" (").setConditionStartRight(") {").setConditionContinueLeft("} ").setConditionContinueRight(" {").setConditionEnd("}").setFileEndLine("}").setFileStartLeft("public class ").setFileStartRight(" {").setFunctionDefine("").setFunctionDefineRight(" {").setFunctionDefineEnd("}").setFunctionReturnsExplicit(true).setFunctionTypeAfterName(false).setMainEndLine("}").setMainStartLine("public static void main() {").setToString("String.valueOf").setToStringAsFunction(true).setRangedForLoops(false).setVariableDeclareStart("").setVariableTypesExplicit(true).setVariableTypesAfterName(false).addTypeAlias("int", "number").addTypeAlias("String", "string");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
