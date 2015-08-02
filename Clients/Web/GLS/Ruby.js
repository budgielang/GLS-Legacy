var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.Ruby = new GLS.Language().setName("Ruby").setExtension("rb").setPrintFunction("puts").setSemiColon("").setClassConstructorName("def initialize").setClassFunctionsStart("def ").setClassFunctionsTakeThis(false).setClassFunctionsThis("").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(false).setClassEnder("\0").setClassPrivacy(false).setClassStartLeft("Class ").setClassStartRight("").setClassThis("@").setClassThisAccess("").setCommentorBlockStart("=begin").setCommentorBlockEnd("=end").setCommentorInline("#").setConditionStartLeft(" ").setConditionStartRight("").setConditionContinueLeft(" ").setConditionContinueRight("").setConditionEnd("end").setFileEndLine("").setFileStartLeft("").setFileStartRight("").setFunctionDefine("def ").setFunctionDefineRight("").setFunctionDefineEnd("end").setMainEndLine("end").setMainStartLine("if __FILE__ == $PROGRAM_NAME").setToString("").setRangedForLoops(true).setFunctionReturnsExplicit(false).setVariableTypesExplicit(false).setVariableDeclareStart("").addValueAlias("False", "false").addValueAlias("True", "true");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
