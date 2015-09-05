/// <reference path="Language.ts" />

module GLS {
    export class GLSC {
        private Languages: any;
        private SearchEnds: any;

        constructor() {
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
                lastTabRequest: number = 0,
                lastLineSkipped: boolean = false,
                i: number,
                j: number;

            for (i = 0; i < commandsRaw.length; i += 1) {
                command = this.parseCommand(language, commandsRaw[i], false);

                // Each command is an even-length [string, int, ...]
                for (j = 0; j < command.length; j += 2) {
                    // Special case: a blank line after an inline command is ignored
                    // This is useful for things like lambda types that aren't in every language
                    if (lastTabRequest === Language.INT_MIN && command.length === 2 && command[0] === "") {
                        lastLineSkipped = true;
                        continue;
                    }

                    if (command[1] === Language.INT_MIN) {
                        if (command[0] !== "") {
                            output += " " + command[0];
                        }
                    } else {
                        // Just "\0" changes numTabs without adding a line
                        if (command[j] !== "\0" && !lastLineSkipped) {
                            output += "\n";
                        }

                        if (command[j + 1] < 0) {
                            numTabs += command[j + 1];
                            output += this.generateTabs(numTabs);
                            if (command[j] !== "\0") {
                                output += command[j];
                            }
                        } else {
                            output += this.generateTabs(numTabs);
                            if (command[j] !== "\0") {
                                output += command[j];
                            }
                            numTabs += command[j + 1];
                        }
                    }

                    lastTabRequest = command[command.length - 1];
                    lastLineSkipped = false;
                }
            }

            return output;
        }

        public parseCommand(language: Language, commandRaw: string, isInline?: boolean): any[] {
            if (this.isStringSpace(commandRaw)) {
                return ["", 0];
            }

            var colonIndex = commandRaw.indexOf(":"),
                result: any[],
                functionArgs: string[],
                functionName: string,
                argumentsRaw: string,
                colonIndex: number;
            
            // Arguments only exist if there is a colon separating them from the command
            if (colonIndex === -1) {
                functionName = this.trimString(commandRaw);
                functionArgs = [];
            } else {
                functionName = this.trimString(commandRaw.substring(0, colonIndex));
                argumentsRaw = this.trimString(commandRaw.substring(colonIndex + 1));
                functionArgs = this.parseArguments(language, argumentsRaw, isInline);
            }

            return language.print(functionName, functionArgs, isInline);
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
