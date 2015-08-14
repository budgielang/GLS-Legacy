var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.Ruby = new GLS.Language().setName("Ruby").setExtension("rb").setPrintFunction("puts").setSemiColon("").setArrayClass("Array").setArrayLength(".length").setArrayInitializationAsNewStatic(true).setArrayNegativeIndices(true).setClassConstructorAsStatic(true).setClassParentName("super").setClassConstructorName("initialize").setClassConstructorLoose(true).setClassEnder("end").setClassExtends("<").setClassFunctionsStart("def ").setClassFunctionsTakeThis(false).setClassFunctionsThis("").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(false).setClassMemberVariableStarter("@").setClassNewer("new").setClassPrivacy(false).setClassStartLeft("class ").setClassStartRight("").setClassThis("@").setClassThisAccess("").setCommentorBlockStart("=begin").setCommentorBlockEnd("=end").setCommentorInline("#").setConditionStartLeft(" ").setConditionStartRight("").setConditionContinueLeft(" ").setConditionContinueRight("").setConditionEnd("end").setDictionaryInitializateEnder("}").setDictionaryInitializateStarter("{").setDictionaryKeyCheckAsFunction(true).setDictionaryKeyChecker("has_key?").setDictionaryKeyLeft("").setDictionaryKeyMiddle(": ").setDictionaryKeyRight("").setFileEndLine("").setFileStartLeft("").setFileStartRight("").setFunctionDefine("def ").setFunctionDefineRight("").setFunctionDefineEnd("end").setMainEndLine("end").setMainStartLine("if __FILE__ == $PROGRAM_NAME").setToString(".to_s").setUndefined("nil").setRangedForLoops(true).setRangedForLoopsStart(" in ").setRangedForLoopsMiddle("..").setRangedForLoopsEnd("").setFunctionReturnsExplicit(false).setVariableTypesExplicit(false).setVariableDeclareStart("");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
