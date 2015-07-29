module GLS {
    export class GLSC {
        private Languages: any;
        private SearchEnds: any;
        private INT_MIN: number;

        constructor() {
            this.INT_MIN = -9001;
            this.Languages = {};
            this.SearchEnds = {
                " ": " ",
                "{": "}",
                "(": ")"
            };
        }

        public parseCommands(language: Language, commandsRaw: string[]): string {
            if (commandsRaw.length === 0 || (commandsRaw.length === 1 && commandsRaw[0].length === 0)) {
                return "";
            }

            var output: string = "",
                command: any[],
                numTabs: number = 0,
                i: number;

            // The first line will never start with a newline, or be initially tabbed
            command = this.parseCommand(language, commandsRaw[0], false);
            output += command[0];
            numTabs += command[1];

            // The rest of the commands all might have different tabbings
            for (i = 1; i < commandsRaw.length; i += 1) {
                command = this.parseCommand(language, commandsRaw[i], false);

                if (command[1] === this.INT_MIN) {
                    output += " " + command[0];
                } else if (command[1] < 0) {
                    numTabs += command[1];
                    output += "\n" + this.generateTabs(numTabs) + command[0];
                } else {
                    output += "\n" + this.generateTabs(numTabs) + command[0];
                    numTabs += command[1];
                }
            }

            return output;
        }

        public parseCommand(language: Language, commandRaw: string, isInline?: boolean): any[] {
            var output: any[] = ["", 0];

            if (this.isStringSpace(commandRaw)) {
                return output;
            }

            var result: any[],
                functionArgs: string[],
                functionName: string,
                argumentsRaw: string,
                colonIndex: number;

            colonIndex = commandRaw.indexOf(":");

            if (colonIndex !== -1) {
                functionName = this.trimString(commandRaw.substring(0, colonIndex));
                argumentsRaw = this.trimString(commandRaw.substring(colonIndex + 1));
                functionArgs = this.parseArguments(language, argumentsRaw, isInline);
            } else {
                functionName = this.trimString(commandRaw);
                functionArgs = [];
            }

            output = language.print(functionName, functionArgs, isInline);

            return output;
        }

        public parseArguments(language: Language, argumentsRaw: string, isInline?: boolean): string[] {
            var argumentsConverted: string[] = [],
                argument: string,
                starter: string,
                end: number,
                i: number;

            for (i = 0; i < argumentsRaw.length; i += 1) {
                starter = argumentsRaw[i];

                if (this.isCharacterSpace(starter)) {
                    continue;
                }

                if (starter == '{' || starter == '(') {
                    end = this.findSearchEnd(argumentsRaw, starter, i);
                    i += 1;
                } else {
                    end = this.findNextSpace(argumentsRaw, i);
                }

                if (end === -1) {
                    end = argumentsRaw.length;
                }

                argument = argumentsRaw.substr(i, end - i);

                if (starter === '{') {
                    argument = this.parseCommand(language, argument, true)[0];
                }

                argumentsConverted.push(argument);
                i = end;
            }

            return argumentsConverted;
        }


        /* Private utilities
        */

        private generateTabs(numTabs: number): string {
            var numTabsActual: number = numTabs * 4,
                output: string = "",
                i: number;

            for (i = 0; i < numTabsActual; i += 1) {
                output += " ";
            }

            return output;
        }

        private isStringSpace(text: string): boolean {
            for (var i: number = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return false;
                }
            }

            return true;
        }

        private isCharacterSpace(character: string): boolean {
            return character === ' ' || character === '\r' || character === '\n';
        }

        private findNextSpace(haystack: string, start: number): number {
            for (var i: number = start + 1; i < haystack.length; i += 1) {
                if (this.isCharacterSpace(haystack[i])) {
                    return i;
                }
            }

            return haystack.length;
        }

        private findSearchEnd(haystack: string, starter: string, start: number): number {
            var numStarts: number = 1,
                ender: string = this.SearchEnds[starter],
                current: string,
                i: number;

            for (i = start + 1; i < haystack.length; i += 1) {
                current = haystack[i];

                if (current === starter) {
                    numStarts += 1;
                }
                else if (current === ender) {
                    numStarts -= 1;
                    if (numStarts < 1) {
                        return i;
                    }
                }
            }

            return -1;
        }

        private trimString(text: string): string {
            return this.trimStringLeft(this.trimStringRight(text));
        }

        private trimStringLeft(text: string): string {
            for (var i: number = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substr(i);
                }
            }

            return "";
        }

        private trimStringRight(text: string): string {
            for (var i: number = text.length - 1; i >= 0; i -= 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substr(0, i + 1);
                }
            }

            return "";
        }
    }
}