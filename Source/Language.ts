module GLSC {
    export class Language {
        private printers: any;
        private OperationAliases: any;
        private TypeAliases: any;
        private ValueAliases: any;

        constructor() {
            this.printers = {
                "class constructor end": this.ClassConstructorEnd.bind(this),
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
                "comment inline": this.CommentInline.bind(this),
                "comment line": this.CommentLine.bind(this),
                "comparison": this.Comparison.bind(this),
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
                "print line": this.PrintLine.bind(this),
                "variable declare": this.VariableDeclare.bind(this),
                "variable declare partial": this.VariableDeclarePartial.bind(this),
                "while condition start": this.WhileConditionStart.bind(this),
                "while end": this.WhileEnd.bind(this),
                "while variable start": this.WhileVariableStart"
            };

            this.OperationAliases = {
                "equals": "=",
                "plus": "+",
                "minus": "-",
                "times": "*",
                "divided": "/",
                "increaseby": "+=",
                "decreaseby": "-=",
                "multiplyby": "*=",
                "divideby": "/=",
                "lessthan": "<",
                "greaterthan": ">",
                "lessthanequal": ">",
                "greaterthanequal": ">="
            };

            this.TypeAliases = {};

            this.ValueAliases = {};
        }

        public AliasOrDefault(aliases: any, key: string): string {
            return aliases.hasOwnProperty(key) ? aliases[key] : key;
        }

        public TypeAlias(key: string): string {
            return this.AliasOrDefault(this.TypeAliases, key);
        }

        public OperationAlias(key: string): string {
            return this.AliasOrDefault(this.OperationAliases, key);
        }

        public ValueAlias(key: string): string {
            return this.AliasOrDefault(this.ValueAliases, key);
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

        public inheritTypeAliases(language: Language): Language {
            for (var i in language.TypeAliases) {
                this.addTypeAlias(language.TypeAliases[i], i);
            }

            return this;
        }

        public inheritOperationAliases(language: Language): Language {
            for (var i in language.OperationAliases) {
                this.addOperationAlias(language.OperationAliases[i], i);
            }

            return this;
        }

        public inheritValueAliases(language: Language): Language {
            for (var i in language.ValueAliases) {
                this.addValueAlias(language.ValueAliases[i], i);
            }

            return this;
        }

        public print(functionName: string, functionArgs: string[], isInline?: boolean): any[] {
            if (!this.printers.hasOwnProperty(functionName)) {
                return ["Function not found: " + functionName, 0];
            }

            return this.printers[functionName](functionArgs, isInline);
        }


        /* Printers
        */

        public ClassConstructorEnd(functionArgs: string[], isInline?: boolean): any[] {
            return undefined;
        }
    }
}
