/// <reference path='Language.ts' />

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
        
        
        /*
        Core parsing
        */

        public parseCommands(language: Language, commandsRaw: string[]): string {
            if (commandsRaw.length == 0 || (commandsRaw.length == 1 && commandsRaw[0].length == 0)) {
                return "";
            }

            var output: string = "";
            var numTabs: number = 0;
            var lastTabRequest: number = 0;
            var lastLineSkipped: boolean = false;
            var command: any[];
            var i: number;
            var j: number;

            for (i = 0; i < commandsRaw.length; i += 1) {
                command = this.parseCommand(language, commandsRaw[i], false);
                
                // Each command is an even-length [string, int, ...]
                for (j = 0; j < command.length; j += 2) {
                    // Special case: a blank line after an inline command is ignored
                    // This is useful for things like lambda types that aren't in every language
                    if (lastTabRequest == Language.INT_MIN && command.length == 2 && command[0] == "") {
                        lastLineSkipped = true;
                        continue;
                    }

                    if (command[1] == Language.INT_MIN) {
                        if (command[0] != "") {
                            output += " " + command[0];
                        }
                    } else {
                        // Just "\0" changes numTabs without adding a line
                        if (command[j] != "\0" && !lastLineSkipped) {
                            output += "\n";
                        }

                        if (command[j + 1] < 0) {
                            numTabs += command[j + 1];
                            output += this.generateTabs(numTabs);
                            if (command[j] != "\0") {
                                output += command[j];
                            }
                        } else {
                            output += this.generateTabs(numTabs);
                            if (command[j] != "\0") {
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

        public parseCommand(language: Language, commandRaw: string, isInline: boolean): any[] {
            if (this.isStringSpace(commandRaw)) {
                return ["", 0];
            }

            var colonIndex: number = commandRaw.indexOf(":");
            var result: any[];
            var functionArgs: string[];
            var functionName: string;
            var argumentsRaw: string;
            
            // Arguments only exist if there is a colon separating them from the command
            if (colonIndex == -1) {
                functionName = this.trimString(commandRaw);
                functionArgs = [];
            } else {
                functionName = this.trimString(commandRaw.substring(0, colonIndex));
                argumentsRaw = this.trimString(commandRaw.substring(colonIndex + 1));
                functionArgs = this.parseArguments(language, argumentsRaw, isInline);
            }

            return language.print(functionName, functionArgs, isInline);
        }

        public parseArguments(language: Language, argumentsRaw: string, isInline: boolean): string[] {
            // Directly putting '{' in GLSC code is tough see #79
            var commandStarter: string = '{';
            var numArgs: number = 0;
            var argumentsConverted: string[];
            var argument: string;
            var starter: string;
            var end: number;
            var i: number;
            
            // Until native array pushing is supported, this is required...
            for (i = 0; i < argumentsRaw.length; i += 1) {
                starter = argumentsRaw[i];

                if (this.isCharacterSpace(starter)) {
                    continue;
                }

                if (this.SearchEnds.hasOwnProperty(starter)) {
                    end = this.findSearchEnd(argumentsRaw, starter, i);
                    i += 1;
                } else {
                    end = this.findNextSpace(argumentsRaw, i);
                }

                if (end == -1) {
                    end = argumentsRaw.length;
                }

                i = end;
                numArgs += 1;
            }

            argumentsConverted = new Array(numArgs);
            numArgs = 0;

            for (i = 0; i < argumentsRaw.length; i += 1) {
                starter = argumentsRaw[i];

                if (this.isCharacterSpace(starter)) {
                    continue;
                }

                if (this.SearchEnds.hasOwnProperty(starter)) {
                    end = this.findSearchEnd(argumentsRaw, starter, i);
                    i += 1;
                } else {
                    end = this.findNextSpace(argumentsRaw, i);
                }

                if (end == -1) {
                    end = argumentsRaw.length;
                }

                argument = argumentsRaw.substring(i, end);
                i = end;

                if (starter == commandStarter) {
                    argument = this.parseCommand(language, argument, true)[0];
                }

                argumentsConverted[numArgs] = argument;
                numArgs += 1;
            }

            return argumentsConverted;
        }
        
        
        /*
        Private utilities
        */

        private generateTabs(numTabs: number): string {
            var numTabsActual: number = numTabs * 4;
            var output: string = "";
            var i: number;

            for (i = 0; i < numTabsActual; i += 1) {
                output += " ";
            }

            return output;
        }

        private isStringSpace(text: string): boolean {
            var i: number;
            for (i = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return false;
                }
            }

            return true;
        }

        private isCharacterSpace(character: string): boolean {
            return character == ' ' || character == '\r' || character == '\n';
        }

        private findNextSpace(haystack: string, start: number): number {
            var i: number;

            for (i = start + 1; i < haystack.length; i += 1) {
                if (this.isCharacterSpace(haystack[i])) {
                    return i;
                }
            }

            return haystack.length;
        }

        private findSearchEnd(haystack: string, starter: string, start: number): number {
            var ender: string = this.SearchEnds[starter];
            var numStarts: number = 1;
            var current: string;
            var i: number;

            for (i = start + 1; i < haystack.length; i += 1) {
                current = haystack[i];

                if (current == starter) {
                    numStarts += 1;
                } else if (current == ender) {
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
            var i: number;
            for (i = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substring(i);
                }
            }

            return "";
        }

        private trimStringRight(text: string): string {
            var i: number;
            for (i = text.length - 1; i > 0; i += -1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substring(0, i + 1);
                }
            }

            return "";
        }
    }
}