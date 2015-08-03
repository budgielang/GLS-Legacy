module GLS {
    export class Language {
        private printers: any;
        private OperationAliases: any;
        private TypeAliases: any;
        private ValueAliases: any;
        private INT_MIN: number;

        // General information
        private Name: string;
        private Extension: string;
        private PrintFunction: string;
        private SemiColon: string;

        // Comments
        private CommentorBlockStart: string;
        private CommentorBlockEnd: string;
        private CommentorInline: string;

        // Conditionals
        private ConditionStartLeft: string;
        private ConditionStartRight: string;
        private ConditionContinueLeft: string;
        private ConditionContinueRight: string;
        private ConditionEnd: string;
        private Elif: string;
        private Else: string;
        private If: string;

        // Operators
        private And: string;
        private GreaterThan: string;
        private GreaterThanOrEqual: string;
        private LessThan: string;
        private LessThanOrEqual: string;
        private Or: string;

        // Variables
        private VariableTypesExplicit: boolean;
        private VariableTypesAfterName: boolean;
        private VariableTypeMarker: string;
        private VariableDeclareStart: string;

        // Booleans
        private BooleanClass: string;
        private True: string;
        private False: string;

        // Numbers
        private NumberClass: string;

        // Strings
        private StringClass: string;
        private StringLength: string;
        private ToString: string;
        private ToStringAsFunction: boolean;

        // Loops
        private RangedForLoops: boolean;
        private RangedForLoopsStart: string;
        private RangedForLoopsMiddle: string;
        private RangedForLoopsEnd: string;

        // Arrays
        private ArrayClass: string;
        private ArrayInitializationAsNew: boolean;
        private ArrayLength: string;
        private ArrayLengthAsFunction: boolean;
        private ArrayNegativeIndices: boolean;

        // Functions
        private FunctionDefine: string;
        private FunctionDefineRight: string;
        private FunctionDefineEnd: string;
        private FunctionReturnsExplicit: boolean;
        private FunctionTypeAfterName: boolean;
        private FunctionTypeMarker: string;

        // Dictionaries
        private DictionaryClass: string;
        private DictionaryNewLeft: string;
        private DictionaryNewRight: string;
        private DictionaryTypeLeft: string;
        private DictionaryTypeRight: string;

        // Classes
        private ClassConstructorAsStatic: boolean;
        private ClassParentName: string;
        private ClassConstructorInheritedShorthand: boolean;
        private ClassConstructorName: string;
        private ClassConstructorLoose: boolean;
        private ClassEnder: string;
        private ClassExtends: string;
        private ClassExtendsAsFunction: boolean;
        private ClassFunctionsTakeThis: boolean;
        private ClassFunctionsStart: string;
        private ClassFunctionsThis: string;
        private ClassMemberVariableDefault: string;
        private ClassMemberVariablePrivacy: boolean;
        private ClassMemberVariableStarter: string;
        private ClassNewer: string;
        private ClassPrivacy: boolean;
        private ClassStartLeft: string;
        private ClassStartRight: string;
        private ClassTemplates: boolean;
        private ClassTemplatesBetween: string;
        private ClassThis: string;
        private ClassThisAccess: string;

        // File
        private FileEndLine: string;
        private FileStartLeft: string;
        private FileStartRight: string;

        // Main
        private MainEndLine: string;
        private MainStartLine: string;

        constructor() {
            this.printers = {
                "array initialize": this.ArrayInitialize.bind(this),
                "array get item": this.ArrayGetItem.bind(this),
                "array get length": this.ArrayGetLength.bind(this),
                "class constructor end": this.ClassConstructorEnd.bind(this),
                "class constructor inherited call": this.ClassConstructorInheritedCall.bind(this),
                "class constructor inherited start": this.ClassConstructorInheritedStart.bind(this),
                "class constructor start": this.ClassConstructorStart.bind(this),
                "class end": this.ClassEnd.bind(this),
                "class member function call": this.ClassMemberFunctionCall.bind(this),
                "class member function end": this.ClassMemberFunctionEnd.bind(this),
                "class member function start": this.ClassMemberFunctionStart.bind(this),
                "class member variable declare": this.ClassMemberVariableDeclare.bind(this),
                "class member variable get": this.ClassMemberVariableGet.bind(this),
                "class member variable set": this.ClassMemberVariableSet.bind(this),
                "class new": this.ClassNew.bind(this),
                "class start": this.ClassStart.bind(this),
                "comment block": this.CommentBlock.bind(this),
                "comment line": this.CommentLine.bind(this),
                "comment inline": this.CommentInline.bind(this),
                "comparison": this.Comparison.bind(this),
                "concatenate": this.Concatenate.bind(this),
                "file end": this.FileEnd.bind(this),
                "file start": this.FileStart.bind(this),
                "for end": this.ForEnd.bind(this),
                "for numbers start": this.ForNumbersStart.bind(this),
                "function call": this.FunctionCall.bind(this),
                "function end": this.FunctionEnd.bind(this),
                "function start": this.FunctionStart.bind(this),
                "function return": this.FunctionReturn.bind(this),
                "if condition start": this.IfConditionStart.bind(this),
                "if end": this.IfEnd.bind(this),
                "if variable start": this.IfVariableStart.bind(this),
                "main end": this.MainEnd.bind(this),
                "main start": this.MainStart.bind(this),
                "operation": this.Operation.bind(this),
                "parenthesis": this.Parenthesis.bind(this),
                "print line": this.PrintLine.bind(this),
                "variable declare": this.VariableDeclare.bind(this),
                "variable declare partial": this.VariableDeclarePartial.bind(this),
                "while condition start": this.WhileConditionStart.bind(this),
                "while end": this.WhileEnd.bind(this),
                "while variable start": this.WhileVariableStart.bind(this)
            };

            this.OperationAliases = {
                "equals": "=",
                "plus": "+",
                "minus": "-",
                "times": "*",
                "divide": "/",
                "increaseby": "+=",
                "decreaseby": "-=",
                "multiplyby": "*=",
                "divideby": "/=",
                "lessthan": "<",
                "greaterthan": ">",
                "lessthanequal": "<=",
                "greaterthanequal": ">="
            };

            this.TypeAliases = {};

            this.ValueAliases = {};

            this.INT_MIN = -9001;
        }


        /* Gets
        */

        public getName(): string {
            return this.Name;
        }

        public getExtension(): string {
            return this.Extension;
        }

        public getPrintFunction(): string {
            return this.PrintFunction;
        }

        public getSemiColon(): string {
            return this.SemiColon;
        }

        public getCommentorBlockStart(): string {
            return this.CommentorBlockStart;
        }

        public getCommentorBlockEnd(): string {
            return this.CommentorBlockEnd;
        }

        public getCommentorInline(): string {
            return this.CommentorInline;
        }

        public getConditionStartLeft(): string {
            return this.ConditionStartLeft;
        }

        public getConditionStartRight(): string {
            return this.ConditionStartRight;
        }

        public getConditionContinueLeft(): string {
            return this.ConditionContinueLeft;
        }

        public getConditionContinueRight(): string {
            return this.ConditionContinueRight;
        }

        public getConditionEnd(): string {
            return this.ConditionEnd;
        }

        public getElif(): string {
            return this.Elif;
        }

        public getElse(): string {
            return this.Else;
        }

        public getIf(): string {
            return this.If;
        }

        public getAnd(): string {
            return this.And;
        }

        public getGreaterThan(): string {
            return this.GreaterThan;
        }

        public getGreaterThanOrEqual(): string {
            return this.GreaterThanOrEqual;
        }

        public getLessThan(): string {
            return this.LessThan;
        }

        public getLessThanOrEqual(): string {
            return this.LessThanOrEqual;
        }

        public getOr(): string {
            return this.Or;
        }

        public getVariableTypesExplicit(): boolean {
            return this.VariableTypesExplicit;
        }

        public getVariableTypesAfterName(): boolean {
            return this.VariableTypesAfterName;
        }

        public getVariableTypeMarker(): string {
            return this.VariableTypeMarker;
        }

        public getVariableDeclareStart(): string {
            return this.VariableDeclareStart;
        }

        public getBooleanClass(): string {
            return this.BooleanClass;
        }

        public getTrue(): string {
            return this.True;
        }

        public getFalse(): string {
            return this.False;
        }

        public getNumberClass(): string {
            return this.NumberClass;
        }

        public getStringClass(): string {
            return this.StringClass;
        }

        public getStringLength(): string {
            return this.StringLength;
        }

        public getToString(): string {
            return this.ToString;
        }

        public getToStringAsFunction(): boolean {
            return this.ToStringAsFunction;
        }

        public getRangedForLoops(): boolean {
            return this.RangedForLoops;
        }

        public getRangedForLoopsStart(): string {
            return this.RangedForLoopsStart;
        }

        public getRangedForLoopsMiddle(): string {
            return this.RangedForLoopsMiddle;
        }

        public getRangedForLoopsEnd(): string {
            return this.RangedForLoopsEnd;
        }

        public getArrayClass(): string {
            return this.ArrayClass;
        }

        public getArrayInitializationAsNew(): boolean {
            return this.ArrayInitializationAsNew;
        }

        public getArrayLength(): string {
            return this.ArrayLength;
        }

        public getArrayLengthAsFunction(): boolean {
            return this.ArrayLengthAsFunction;
        }

        public getArrayNegativeIndices(): boolean {
            return this.ArrayNegativeIndices;
        }

        public getFunctionDefine(): string {
            return this.FunctionDefine;
        }

        public getFunctionDefineRight(): string {
            return this.FunctionDefineRight;
        }

        public getFunctionDefineEnd(): string {
            return this.FunctionDefineEnd;
        }

        public getFunctionReturnsExplicit(): boolean {
            return this.FunctionReturnsExplicit;
        }

        public getFunctionTypeMarker(): string {
            return this.FunctionTypeMarker;
        }

        public getFunctionTypeAfterName(): boolean {
            return this.FunctionTypeAfterName;
        }

        public getDictionaryClass(): string {
            return this.DictionaryClass;
        }

        public getClassConstructorAsStatic(): boolean {
            return this.ClassConstructorAsStatic;
        }

        public getClassConstructorInheritedShorthand(): boolean {
            return this.ClassConstructorInheritedShorthand;
        }

        public getClassConstructorName(): string {
            return this.ClassConstructorName;
        }

        public getClassConstructorLoose(): boolean {
            return this.ClassConstructorLoose;
        }

        public getClassEnder(): string {
            return this.ClassEnder;
        }

        public getClassExtends(): string {
            return this.ClassExtends;
        }

        public getClassExtendsAsFunction(): boolean {
            return this.ClassExtendsAsFunction;
        }

        public getClassFunctionsTakeThis(): boolean {
            return this.ClassFunctionsTakeThis;
        }

        public getClassFunctionsStart(): string {
            return this.ClassFunctionsStart;
        }

        public getClassFunctionsThis(): string {
            return this.ClassFunctionsThis;
        }

        public getClassMemberVariableDefault(): string {
            return this.ClassMemberVariableDefault;
        }

        public getClassMemberVariablePrivacy(): boolean {
            return this.ClassMemberVariablePrivacy;
        }

        public getClassMemberVariableStarter(): string {
            return this.ClassMemberVariableStarter;
        }

        public getClassNewer(): string {
            return this.ClassNewer;
        }

        public getClassParentName(): string {
            return this.ClassParentName;
        }

        public getClassPrivacy(): boolean {
            return this.ClassPrivacy;
        }

        public getClassStartLeft(): string {
            return this.ClassStartLeft;
        }

        public getClassStartRight(): string {
            return this.ClassStartRight;
        }

        public getClassTemplates(): boolean {
            return this.ClassTemplates;
        }

        public getClassTemplatesBetween(): string {
            return this.ClassTemplatesBetween;
        }

        public getClassThis(): string {
            return this.ClassThis;
        }

        public getClassThisAccess(): string {
            return this.ClassThisAccess;
        }

        public getFileEndLine(): string {
            return this.FileEndLine;
        }

        public getFileStartLeft(): string {
            return this.FileStartLeft;
        }

        public getFileStartRight(): string {
            return this.FileStartRight;
        }

        public getMainEndLine(): string {
            return this.MainEndLine;
        }

        public getMainStartLine(): string {
            return this.MainStartLine;
        }


        /* Sets
        */

        public setName(value: string): Language {
            this.Name = value;
            return this;
        }

        public setExtension(value: string): Language {
            this.Extension = value;
            return this;
        }

        public setPrintFunction(value: string): Language {
            this.PrintFunction = value;
            return this;
        }

        public setSemiColon(value: string): Language {
            this.SemiColon = value;
            return this;
        }

        public setCommentorBlockStart(value: string): Language {
            this.CommentorBlockStart = value;
            return this;
        }

        public setCommentorBlockEnd(value: string): Language {
            this.CommentorBlockEnd = value;
            return this;
        }

        public setCommentorInline(value: string): Language {
            this.CommentorInline = value;
            return this;
        }

        public setConditionStartLeft(value: string): Language {
            this.ConditionStartLeft = value;
            return this;
        }

        public setConditionStartRight(value: string): Language {
            this.ConditionStartRight = value;
            return this;
        }

        public setConditionContinueLeft(value: string): Language {
            this.ConditionContinueLeft = value;
            return this;
        }

        public setConditionContinueRight(value: string): Language {
            this.ConditionContinueRight = value;
            return this;
        }

        public setConditionEnd(value: string): Language {
            this.ConditionEnd = value;
            return this;
        }

        public setElif(value: string): Language {
            this.Elif = value;
            return this;
        }

        public setElse(value: string): Language {
            this.Else = value;
            return this;
        }

        public setIf(value: string): Language {
            this.If = value;
            return this;
        }

        public setAnd(value: string): Language {
            this.And = value;
            return this;
        }

        public setGreaterThan(value: string): Language {
            this.GreaterThan = value;
            return this;
        }

        public setGreaterThanOrEqual(value: string): Language {
            this.GreaterThanOrEqual = value;
            return this;
        }

        public setLessThan(value: string): Language {
            this.LessThan = value;
            return this;
        }

        public setLessThanOrEqual(value: string): Language {
            this.LessThanOrEqual = value;
            return this;
        }

        public setOr(value: string): Language {
            this.Or = value;
            return this;
        }

        public setVariableTypesExplicit(value: boolean): Language {
            this.VariableTypesExplicit = value;
            return this;
        }

        public setVariableTypesAfterName(value: boolean): Language {
            this.VariableTypesAfterName = value;
            return this;
        }

        public setVariableTypeMarker(value: string): Language {
            this.VariableTypeMarker = value;
            return this;
        }

        public setVariableDeclareStart(value: string): Language {
            this.VariableDeclareStart = value;
            return this;
        }

        public setBooleanClass(value: string): Language {
            this.BooleanClass = value;
            return this;
        }

        public setTrue(value: string): Language {
            this.True = value;
            return this;
        }

        public setFalse(value: string): Language {
            this.False = value;
            return this;
        }

        public setNumberClass(value: string): Language {
            this.NumberClass = value;
            return this;
        }

        public setStringClass(value: string): Language {
            this.StringClass = value;
            return this;
        }

        public setStringLength(value: string): Language {
            this.StringLength = value;
            return this;
        }

        public setRangedForLoops(value: boolean): Language {
            this.RangedForLoops = value;
            return this;
        }

        public setRangedForLoopsStart(value: string): Language {
            this.RangedForLoopsStart = value;
            return this;
        }

        public setRangedForLoopsMiddle(value: string): Language {
            this.RangedForLoopsMiddle = value;
            return this;
        }

        public setRangedForLoopsEnd(value: string): Language {
            this.RangedForLoopsEnd = value;
            return this;
        }

        public setToString(value: string): Language {
            this.ToString = value;
            return this;
        }

        public setToStringAsFunction(value: boolean): Language {
            this.ToStringAsFunction = value;
            return this;
        }

        public setArrayClass(value: string): Language {
            this.ArrayClass = value;
            return this;
        }

        public setArrayLength(value: string): Language {
            this.ArrayLength = value;
            return this;
        }

        public setArrayLengthAsFunction(value: boolean): Language {
            this.ArrayLengthAsFunction = value;
            return this;
        }

        public setArrayNegativeIndices(value: boolean): Language {
            this.ArrayNegativeIndices = value;
            return this;
        }

        public setFunctionDefine(value: string): Language {
            this.FunctionDefine = value;
            return this;
        }

        public setFunctionDefineRight(value: string): Language {
            this.FunctionDefineRight = value;
            return this;
        }

        public setFunctionDefineEnd(value: string): Language {
            this.FunctionDefineEnd = value;
            return this;
        }

        public setFunctionReturnsExplicit(value: boolean): Language {
            this.FunctionReturnsExplicit = value;
            return this;
        }

        public setFunctionTypeAfterName(value: boolean): Language {
            this.FunctionTypeAfterName = value;
            return this;
        }

        public setFunctionTypeMarker(value: string): Language {
            this.FunctionTypeMarker = value;
            return this;
        }

        public setDictionaryClass(value: string): Language {
            this.DictionaryClass = value;
            return this;
        }

        public setClassConstructorAsStatic(value: boolean): Language {
            this.ClassConstructorAsStatic = value;
            return this;
        }

        public setClassConstructorInheritedShorthand(value: boolean): Language {
            this.ClassConstructorInheritedShorthand = value;
            return this;
        }

        public setClassConstructorName(value: string): Language {
            this.ClassConstructorName = value;
            return this;
        }

        public setClassConstructorLoose(value: boolean): Language {
            this.ClassConstructorLoose = value;
            return this;
        }

        public setClassEnder(value: string): Language {
            this.ClassEnder = value;
            return this;
        }

        public setClassExtends(value: string): Language {
            this.ClassExtends = value;
            return this;
        }

        public setClassExtendsAsFunction(value: boolean): Language {
            this.ClassExtendsAsFunction = value;
            return this;
        }

        public setClassFunctionsTakeThis(value: boolean): Language {
            this.ClassFunctionsTakeThis = value;
            return this;
        }

        public setClassFunctionsStart(value: string): Language {
            this.ClassFunctionsStart = value;
            return this;
        }

        public setClassFunctionsThis(value: string): Language {
            this.ClassFunctionsThis = value;
            return this;
        }

        public setClassMemberVariableDefault(value: string): Language {
            this.ClassMemberVariableDefault = value;
            return this;
        }

        public setClassMemberVariablePrivacy(value: boolean): Language {
            this.ClassMemberVariablePrivacy = value;
            return this;
        }

        public setClassMemberVariableStarter(value: string): Language {
            this.ClassMemberVariableStarter = value;
            return this;
        }

        public setClassNewer(value: string): Language {
            this.ClassNewer = value;
            return this;
        }

        public setClassParentName(value: string): Language {
            this.ClassParentName = value;
            return this;
        }

        public setClassPrivacy(value: boolean): Language {
            this.ClassPrivacy = value;
            return this;
        }

        public setClassStartLeft(value: string): Language {
            this.ClassStartLeft = value;
            return this;
        }

        public setClassStartRight(value: string): Language {
            this.ClassStartRight = value;
            return this;
        }

        public setClassTemplates(value: boolean): Language {
            this.ClassTemplates = value;
            return this;
        }

        public setClassTemplatesBetween(value: string): Language {
            this.ClassTemplatesBetween = value;
            return this;
        }

        public setClassThis(value: string): Language {
            this.ClassThis = value;
            return this;
        }

        public setClassThisAccess(value: string): Language {
            this.ClassThisAccess = value;
            return this;
        }

        public setFileEndLine(value: string): Language {
            this.FileEndLine = value;
            return this;
        }

        public setFileStartLeft(value: string): Language {
            this.FileStartLeft = value;
            return this;
        }

        public setFileStartRight(value: string): Language {
            this.FileStartRight = value;
            return this;
        }

        public setMainEndLine(value: string): Language {
            this.MainEndLine = value;
            return this;
        }

        public setMainStartLine(value: string): Language {
            this.MainStartLine = value;
            return this;
        }


        /* Array & Template parsing
        */

        public parseType(text: string): string {
            if (this.typeontainsArray(text)) {
                return this.parseTypeWithArray(text);
            }

            if (this.typeContainsTemplate(text)) {
                return this.parseTypeWithTemplate(text);
            }

            return this.getTypeAlias(text);
        }

        public typeontainsArray(text: string): boolean {
            return name.indexOf("[") !== -1;
        }

        public typeContainsTemplate(text: string): boolean {
            return text.indexOf("<") !== -1;
        }

        public parseTypeWithArray(text: string): string {
            var bracketIndex: number = text.indexOf("["),
                name: string = text.substring(0, bracketIndex),
                remainder: string = text.substring(bracketIndex);

            return this.getTypeAlias(name) + remainder;
        }

        public parseTypeWithTemplate(text: string): string {
            var ltIndex: number = text.indexOf("<"),
                output: string = text.substring(0, ltIndex),
                i: number = ltIndex + 1,
                spaceNext: number;

            if (!this.getClassTemplates()) {
                return output;
            }

            output += "<";

            while (i < text.length) {
                spaceNext = text.indexOf(" ", i);
                if (spaceNext === -1) {
                    break;
                }

                output += this.parseType(text.substring(i, spaceNext)) + this.getClassTemplatesBetween();
                i = spaceNext + 1;
            }

            output += this.parseType(text.substring(i, text.length - 1));
            output += ">";

            return output;
        }
        
        
        /* Miscellaneous
        */

        public getAliasOrDefault(aliases: any, key: string): string {
            return aliases.hasOwnProperty(key) ? aliases[key] : key;
        }

        public getTypeAlias(key: string): string {
            return this.getAliasOrDefault(this.TypeAliases, key);
        }

        public getOperationAlias(key: string): string {
            return this.getAliasOrDefault(this.OperationAliases, key);
        }

        public getValueAlias(key: string): string {
            return this.getAliasOrDefault(this.ValueAliases, key);
        }

        public addTypeAlias(key: string, alias: string): Language {
            this.TypeAliases[alias] = key;
            return this;
        }

        public addOperationAlias(key: string, alias: string): Language {
            this.OperationAliases[alias] = key;
            return this;
        }

        public addValueAlias(key: string, alias: string): Language {
            this.ValueAliases[alias] = key;
            return this;
        }

        public print(functionName: string, functionArgs: string[], isInline?: boolean): any[] {
            if (!this.printers.hasOwnProperty(functionName)) {
                throw new Error("Function not found: " + functionName);
            }

            return this.printers[functionName](functionArgs, isInline);
        }


        /* Printers
        */

        // string name, string key
        public ArrayInitialize(functionArgs: string[], isInline?: boolean): any[] {
            return ["sup", 0];
        }

        public ArrayGetItem(functionArgs: string[], isInline?: boolean): any[] {
            return ["sup", 0];
        }

        public ArrayGetLength(functionArgs: string[], isInline?: boolean): any[] {
            return ["sup", 0];
        }

        public ArrayLookup(functionArgs: string[], isInline?: boolean): any[] {
            return ["sup", 0];
        }

        public ClassConstructorEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string super, [string argumentName, string argumentType, ...]
        public ClassConstructorInheritedCall(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassConstructorInheritedCall", functionArgs, 1);

            var parentName: string = this.getClassParentName(),
                callingArgsLength: number = functionArgs.length,
                loopStart: number = 0,
                callingArgs: string[],
                callingResult: any[],
                i: number;

            // Blank parentName indicates the super's class name should be used
            if (parentName.length === 0) {
                parentName = this.parseType(functionArgs[0]);
            }

            // Taking a reference to this as a parameter increased the number of them
            if (this.getClassFunctionsTakeThis()) {
                callingArgsLength += 1;
                loopStart += 1;
            }

            callingArgs = new Array<string>(callingArgsLength);
            callingArgs[0] = parentName;

            if (this.getClassExtendsAsFunction()) {
                callingArgs[0] += "." + this.getClassConstructorName();
            }

            if (this.getClassFunctionsTakeThis()) {
                callingArgs[1] = this.getClassThis();
            }

            for (i = loopStart; i < functionArgs.length; i += 1) {
                callingArgs[i + 1] = functionArgs[i];
            }

            return this.FunctionCall(callingArgs, isInline);
        }

        // string name[, string superCall[, string argumentName, string argumentType, ...]]
        public ClassConstructorInheritedStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassConstructorInheritedStart", functionArgs, 1);

            if (functionArgs.length === 1) {
                return this.ClassConstructorStart(functionArgs, isInline);
            }

            var generalCall: any[],
                callingArgs: string[],
                output: any[],
                i: number;

            // Populate the arguments that will be passed to the actual method
            if (functionArgs.length > 2) {
                callingArgs = new Array<string>(functionArgs.length - 1);

                for (i = 2; i < functionArgs.length; i += 1) {
                    callingArgs[i - 1] = functionArgs[i];
                }

                callingArgs[0] = functionArgs[0];
            } else {
                callingArgs = [functionArgs[0]];
            }

            generalCall = this.ClassConstructorStart(callingArgs, isInline);

            if (this.getClassConstructorInheritedShorthand()) {
                // "Shorthand" usage, like in C#, comes before FunctionDefineRight
                output = new Array(generalCall.length);
                output[0] = generalCall[0].substring(0, generalCall[0].length - this.getFunctionDefineRight().length);
                output[0] += " : " + functionArgs[1] + this.getFunctionDefineRight();

                for (i = 1; i < generalCall.length; i += 1) {
                    output[i] = generalCall[i];
                }
            } else {
                // In-function usage, like in Python, comes within the function
                output = new Array(generalCall.length + 2);
                output[output.length - 1] = 0;
                output[generalCall.length - 1] = generalCall[generalCall.length - 1];

                output[output.length - 2] = functionArgs[1];

                if (!isInline) {
                    output[output.length - 2] += this.getSemiColon();
                }

                for (i = 0; i < generalCall.length - 1; i += 1) {
                    output[i] = generalCall[i];
                }
            }

            return output;
        }

        // string name[, string argumentName, string argumentType, ...]
        public ClassConstructorStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassConstructorStart", functionArgs, 1);

            var output: string = this.getClassConstructorName(),
                variableDeclarationArguments: string[] = [],
                i: number;

            if (this.getClassConstructorLoose()) {
                output = this.getClassFunctionsStart() + output;
            }

            if (output.length === 0) {
                output = functionArgs[0];
            }

            output += "(";

            // Languages like Python take a "self" or "this" equivalent first
            if (this.getClassFunctionsTakeThis()) {
                variableDeclarationArguments[0] = this.getClassFunctionsThis();
                variableDeclarationArguments[1] = functionArgs[0];

                output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0];
            }

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 1) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }

                for (i = 1; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")" + this.getFunctionDefineRight();
            return [output, 1];
        }

        public ClassEnd(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getClassEnder();

            return [this.getClassEnder(), -1];
        }

        // string variable, string function, [, string argumentName, string argumentType, ... ]
        public ClassMemberFunctionCall(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberFunctionCall", functionArgs, 2);

            var output: string = functionArgs[0] + "." + functionArgs[1] + "(",
                i: number;

            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length - 1; i += 1) {
                    output += functionArgs[i] + ", ";
                }
                output += functionArgs[i];
            }

            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        public ClassMemberFunctionEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string class, string visibility, string name, string return, [, string argumentName, string argumentType...]
        public ClassMemberFunctionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberFunctionStart", functionArgs, 4);

            var output: string = this.getClassFunctionsStart(),
                variableDeclarationArguments: string[] = [],
                i: number;

            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output = this.parseType(functionArgs[3]) + " ";
            }

            if (this.getClassPrivacy()) {
                output = functionArgs[1] + " " + output;
            }

            output += functionArgs[2] + "(";

            if (this.getClassFunctionsTakeThis()) {
                variableDeclarationArguments[0] = this.getClassFunctionsThis();
                variableDeclarationArguments[1] = functionArgs[0];

                output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0];
            }

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 4) {
                if (this.getClassFunctionsTakeThis()) {
                    output += ", ";
                }

                for (i = 4; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";

            if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                output += this.getFunctionTypeMarker() + this.parseType(functionArgs[3]);
            }

            output += this.getFunctionDefineRight();
            return [output, 1];
        }

        // string name, string visibility, string type
        public ClassMemberVariableDeclare(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberVariableDeclare", functionArgs, 3);

            var variableType = this.parseType(functionArgs[2]),
                variableDeclarationArgs: string[],
                variableDeclared: any[];

            if (this.getClassMemberVariableDefault() !== "") {
                variableDeclarationArgs = [functionArgs[0], variableType, this.getClassMemberVariableDefault()];
            } else {
                variableDeclarationArgs = [functionArgs[0], variableType];
            }

            variableDeclared = this.VariableDeclarePartial(variableDeclarationArgs, isInline);

            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }

            if (this.getClassMemberVariablePrivacy()) {
                variableDeclared[0] = functionArgs[1] + " " + variableDeclared[0];
            }

            if (this.getClassMemberVariableStarter() !== "") {
                variableDeclared[0] = this.getClassMemberVariableStarter() + variableDeclared[0];
            }

            return variableDeclared;
        }

        // string name
        public ClassMemberVariableGet(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassMemberVariableGet", functionArgs, 1);

            return [this.getClassThis() + this.getClassThisAccess() + functionArgs[0], 0];
        }

        // string name, string value
        public ClassMemberVariableSet(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClasMemberVariableSet", functionArgs, 2);

            var output: string = this.getClassThis() + this.getClassThisAccess();

            output += functionArgs[0] + " " + this.getOperationAlias("equals") + " " + functionArgs[1];
            output += this.getSemiColon();

            return [output, 0];
        }

        // string name[, string visibility[, string parentClass]]
        public ClassStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);

            var output: string = this.getClassStartLeft();
            output += this.parseType(functionArgs[0]);

            if (functionArgs.length > 2) {
                if (this.getClassExtendsAsFunction()) {
                    output += "(" + this.parseType(functionArgs[2]) + ")";
                } else {
                    output += " " + this.getClassExtends() + " " + this.parseType(functionArgs[2]) + " ";
                }
            }

            output += this.getClassStartRight();

            if (this.getClassPrivacy() && functionArgs.length > 1) {
                output = functionArgs[1] + " " + output;
            }

            return [output, 1];
        }

        // string class[, string argumentName, string argumentType, ...]
        public ClassNew(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassNew", functionArgs, 1);

            var output: string,
                i: number;

            if (this.getClassConstructorAsStatic()) {
                output = this.parseType(functionArgs[0]) + "." + this.getClassNewer() + "(";
            } else {
                output = this.getClassNewer() + this.parseType(functionArgs[0]) + "(";
            }

            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length; i += 1) {
                    output += functionArgs[i] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        // [string message, ...]
        public CommentBlock(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassStart", functionArgs, 1);

            var output: string = this.getCommentorBlockStart() + "\n",
                i: number;

            for (i = 0; i < functionArgs.length; i += 1) {
                output += functionArgs[i] + "\n";
            }

            output += this.getCommentorBlockEnd();

            return [output, 0];
        }

        // [string message, ...]
        public CommentLine(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getCommentorInline() + " ",
                i: number;

            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + " ";
            }

            output += functionArgs[i];
            return [output, 0];
        }

        // [string message, ...]
        public CommentInline(functionArgs: string[], isInline?: boolean): any[] {
            var result: any[] = this.CommentLine(functionArgs, isInline);

            result[1] = this.INT_MIN;

            return result;
        }

        // string left, string comparison, string right
        public Comparison(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("Comparison", functionArgs, 3);

            return [functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]) + " " + functionArgs[2], 0];
        }

        // string left, string right
        public Concatenate(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("Comparison", functionArgs, 2);

            var output: string;

            if (this.getToStringAsFunction()) {
                output = this.getToString() + "(" + functionArgs[0] + ")";
                output += " " + this.getOperationAlias("plus") + " ";
                output += this.getToString() + "(" + functionArgs[1] + ")";
            } else {
                output = functionArgs[0] + this.getToString();
                output += " " + this.getOperationAlias("plus") + " ";
                output += functionArgs[1] + this.getToString();
            }

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        public FileEnd(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getFileEndLine();
            return [output, output.length === 0 ? this.INT_MIN : -1];
        }

        // string name
        public FileStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FileStart", functionArgs, 1);

            var left: string = this.getFileStartLeft(),
                right: string = this.getFileStartRight();

            if (left.length === 0 && right.length === 0) {
                return ["", this.INT_MIN];
            }

            return [left + functionArgs[0] + right, 1];
        }

        public ForEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getConditionEnd(), -1];
        }

        // string i, string type, string initial, string comparison, string boundary
        // e.x. i int 0 lessthan 7
        public ForNumbersStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("ClassStart", functionArgs, 7);

            var output: string = "for" + this.getConditionStartLeft(),
                generalArgs: any[],
                i: string = functionArgs[0],
                typeName = this.parseType(functionArgs[1]),
                initial: string = functionArgs[2],
                comparison: string = functionArgs[3],
                boundary: string = functionArgs[4],
                direction: string = "increaseby",
                change: string = "1"

            if (this.getRangedForLoops()) {
                generalArgs = [i, typeName];
                output += this.VariableDeclare(generalArgs, false)[0];

                output += this.getRangedForLoopsStart();
                output += initial + this.getRangedForLoopsMiddle() + boundary;
                output += this.getRangedForLoopsEnd();
            } else {
                generalArgs = [i, typeName, initial];
                output += this.VariableDeclare(generalArgs, true)[0] + this.getSemiColon();

                generalArgs = [i, comparison, boundary];
                output += " " + this.Comparison(generalArgs, true)[0] + this.getSemiColon();

                generalArgs = [i, direction, change];
                output += " " + this.Operation(generalArgs, true)[0];
            }

            output += this.getConditionStartRight();

            return [output, 1];
        }

        // string name
        public FunctionCall(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FunctionCall", functionArgs, 1);

            var output: string = functionArgs[0] + "(",
                i: number;

            if (functionArgs.length > 1) {
                for (i = 1; i < functionArgs.length - 1; i += 1) {
                    output += functionArgs[i] + ", ";
                }
                output += functionArgs[i];
            }

            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        public FunctionEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getFunctionDefineEnd(), -1];
        }

        // string name, string return[, string argumentName, string argumentType, ...]
        public FunctionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FunctionStart", functionArgs, 2);

            var output: string = "",
                variableDeclarationArguments: string[] = [],
                i: number;

            if (this.getFunctionReturnsExplicit() && !this.getFunctionTypeAfterName()) {
                output += this.parseType(functionArgs[1]) + " ";
            }

            output += this.getFunctionDefine() + functionArgs[0] + "(";

            // All arguments are added using VariableDeclarePartial
            if (functionArgs.length > 2) {
                for (i = 2; i < functionArgs.length; i += 2) {
                    variableDeclarationArguments[0] = functionArgs[i];
                    variableDeclarationArguments[1] = functionArgs[i + 1];

                    output += this.VariableDeclarePartial(variableDeclarationArguments, true)[0] + ", ";
                }

                // The last argument does not have the last ", " at the end
                output = output.substr(0, output.length - 2);
            }

            output += ")";

            if (this.getFunctionReturnsExplicit() && this.getFunctionTypeAfterName()) {
                output += this.getFunctionTypeMarker() + this.parseType(functionArgs[1]);
            }

            output += this.getFunctionDefineRight();
            return [output, 1];
        }

        // string value
        public FunctionReturn(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("FunctionReturn", functionArgs, 1);

            return ["return " + functionArgs[0] + this.getSemiColon(), 0];
        }

        // string left, string operator, string right
        public IfConditionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("IfConditionStart", functionArgs, 3);

            var output: string = "if" + this.getConditionStartLeft();

            output += functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]) + " ";
            output += functionArgs[2] + this.getConditionStartRight();

            return [output, 1];
        }

        public IfEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getConditionEnd(), -1];
        }

        // string variable
        public IfVariableStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("IfVariable", functionArgs, 1);

            var output: string = "if" + this.getConditionStartLeft();

            output += functionArgs[0] + this.getConditionStartRight();

            return [output, 1];
        }

        public MainEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getMainEndLine(), this.getMainStartLine().length === 0 ? 0 : -1];
        }

        public MainStart(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getMainStartLine();

            return [output, output.length === 0 ? 0 : 1];
        }

        // string i, string direction, string difference
        public Operation(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("Operation", functionArgs, 3);

            var output: string = functionArgs[0] + " " + this.getOperationAlias(functionArgs[1]);

            output += " " + this.getValueAlias(functionArgs[2]);

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        // [string anything, ...]
        public Parenthesis(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = "(",
                i: number;

            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }

            output += functionArgs[i];
            output += ")";

            return [output, 0];
        }

        // [string message, ...]
        public PrintLine(functionArgs: string[], isInline?: boolean): any[] {
            var output: string = this.getPrintFunction() + "(",
                i: number;

            for (i = 0; i < functionArgs.length - 1; i += 1) {
                output += functionArgs[i] + ", ";
            }

            output += functionArgs[i];
            output += ")";

            if (!isInline) {
                output += this.getSemiColon();
            }

            return [output, 0];
        }

        // string name, string type[, string value]
        public VariableDeclare(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("VariableDeclare", functionArgs, 2);

            var variableType: string = this.parseType(functionArgs[1]),
                variableDeclarationArguments: string[],
                variableDeclared: any[];

            if (functionArgs.length == 2) {
                variableDeclarationArguments = [functionArgs[0], variableType];
            } else {
                variableDeclarationArguments = [functionArgs[0], variableType, functionArgs[2]];
            }

            variableDeclared = this.VariableDeclarePartial(functionArgs, isInline);
            variableDeclared[0] = this.getVariableDeclareStart() + variableDeclared[0];

            if (!isInline) {
                variableDeclared[0] = variableDeclared[0] + this.getSemiColon();
            }

            return variableDeclared;
        }

        // string name, string type[, string value]
        public VariableDeclarePartial(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("VariableDeclarePartial", functionArgs, 2);

            var output: string = "",
                variableType: string = this.parseType(functionArgs[1]);

            if (this.getVariableTypesExplicit()) {
                if (this.getVariableTypesAfterName()) {
                    output += functionArgs[0] + this.getVariableTypeMarker() + this.parseType(functionArgs[1]);
                } else {
                    output += this.parseType(variableType) + " " + functionArgs[0];
                }
            } else {
                output += functionArgs[0];
            }

            if (functionArgs.length > 2) {
                output += " " + this.getOperationAlias("equals") + " " + this.getValueAlias(functionArgs[2]);
            }

            return [output, 0];
        }

        // string left, string operator, string right
        public WhileConditionStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("WhileConditionStart", functionArgs, 3);

            var output: string = "while" + this.getConditionStartLeft() + functionArgs[0] + " ";

            output += this.getOperationAlias(functionArgs[1]) + " ";
            output += functionArgs[2] + this.getConditionStartRight();

            return [output, 1];
        }

        public WhileEnd(functionArgs: string[], isInline?: boolean): any[] {
            return [this.getConditionEnd(), -1];
        }

        // string variable
        public WhileVariableStart(functionArgs: string[], isInline?: boolean): any[] {
            this.requireArgumentsLength("WhileVariableStart", functionArgs, 1);

            var output: string = "while" + this.getConditionStartLeft();

            output += this.getOperationAlias(functionArgs[0]) + this.getConditionStartRight();

            return [output, 1];
        }


        /* Utilities
        */

        private requireArgumentsLength(functionName: string, functionArgs: string[], amount: number) {
            if (functionArgs.length < amount) {
                throw new Error("Not enough arguments given to " + functionName + " (required: " + amount + ").");
            }
        }
    }
}
