var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.Python = new GLS.Language().setName("Python").setExtension("py").setPrintFunction("print").setSemiColon("").setClassConstructorName("def __init__").setClassFunctionsStart("def ").setClassFunctionsTakeThis(true).setClassFunctionsThis("self").setClassMemberVariableDefault("None").setClassMemberVariablePrivacy(false).setClassEnder("\0").setClassPrivacy(false).setClassStartLeft("class ").setClassStartRight(":").setClassThis("self").setClassThisAccess(".").setCommentorBlockStart("\"\"\"").setCommentorBlockEnd("\"\"\"").setCommentorInline("#").setConditionStartLeft(" ").setConditionStartRight(":").setConditionContinueLeft(" ").setConditionContinueRight(":").setConditionEnd("\0").setFileEndLine("").setFileStartLeft("").setFileStartRight("").setFunctionDefine("def ").setFunctionDefineRight(":").setFunctionDefineEnd("\0").setMainEndLine("\0").setMainStartLine("if __name__ == '__main__':").setRangedForLoops(true).setFunctionReturnsExplicit(false).setVariableTypesExplicit(false).setVariableDeclareStart("").addValueAlias("False", "false").addValueAlias("True", "true");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
