/// <reference path='Language.ts' />
var GLS;
(function (GLS) {
    var GLSC = (function () {
        function GLSC() {
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
        GLSC.prototype.parseCommands = function (language, commandsRaw) {
            if (commandsRaw.length == 0 || (commandsRaw.length == 1 && commandsRaw[0].length == 0)) {
                return "";
            }
            var output = "";
            var numTabs = 0;
            var lastTabRequest = 0;
            var lastLineSkipped = false;
            var command;
            var i;
            var j;
            for (i = 0; i < commandsRaw.length; i += 1) {
                command = this.parseCommand(language, commandsRaw[i], false);
                for (j = 0; j < command.length; j += 2) {
                    // Special case: a blank line after an inline command is ignored
                    // This is useful for things like lambda types that aren't in every language
                    if (lastTabRequest == GLS.Language.INT_MIN && command.length == 2 && command[0] == "") {
                        lastLineSkipped = true;
                        continue;
                    }
                    if (command[1] == GLS.Language.INT_MIN) {
                        if (command[0] != "") {
                            output += " " + command[0];
                        }
                    }
                    else {
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
                        }
                        else {
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
        };
        GLSC.prototype.parseCommand = function (language, commandRaw, isInline) {
            if (this.isStringSpace(commandRaw)) {
                return ["", 0];
            }
            var colonIndex = commandRaw.indexOf(":");
            var result;
            var functionArgs;
            var functionName;
            var argumentsRaw;
            // Arguments only exist if there is a colon separating them from the command
            if (colonIndex == -1) {
                functionName = this.trimString(commandRaw);
                functionArgs = [];
            }
            else {
                functionName = this.trimString(commandRaw.substring(0, colonIndex));
                argumentsRaw = this.trimString(commandRaw.substring(colonIndex + 1));
                functionArgs = this.parseArguments(language, argumentsRaw, isInline);
            }
            return language.print(functionName, functionArgs, isInline);
        };
        GLSC.prototype.parseArguments = function (language, argumentsRaw, isInline) {
            // Directly putting '{' in GLSC code is tough see #79
            var commandStarter = '{';
            var numArgs = 0;
            var argumentsConverted;
            var argument;
            var starter;
            var end;
            var i;
            for (i = 0; i < argumentsRaw.length; i += 1) {
                starter = argumentsRaw[i];
                if (this.isCharacterSpace(starter)) {
                    continue;
                }
                if (this.SearchEnds.hasOwnProperty(starter)) {
                    end = this.findSearchEnd(argumentsRaw, starter, i);
                    i += 1;
                }
                else {
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
                }
                else {
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
        };
        /*
        Private utilities
        */
        GLSC.prototype.generateTabs = function (numTabs) {
            var numTabsActual = numTabs * 4;
            var output = "";
            var i;
            for (i = 0; i < numTabsActual; i += 1) {
                output += " ";
            }
            return output;
        };
        GLSC.prototype.isStringSpace = function (text) {
            var i;
            for (i = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return false;
                }
            }
            return true;
        };
        GLSC.prototype.isCharacterSpace = function (character) {
            return character == ' ' || character == '\r' || character == '\n';
        };
        GLSC.prototype.findNextSpace = function (haystack, start) {
            var i;
            for (i = start + 1; i < haystack.length; i += 1) {
                if (this.isCharacterSpace(haystack[i])) {
                    return i;
                }
            }
            return haystack.length;
        };
        GLSC.prototype.findSearchEnd = function (haystack, starter, start) {
            var ender = this.SearchEnds[starter];
            var numStarts = 1;
            var current;
            var i;
            for (i = start + 1; i < haystack.length; i += 1) {
                current = haystack[i];
                if (current == starter) {
                    numStarts += 1;
                }
                else if (current == ender) {
                    numStarts -= 1;
                    if (numStarts < 1) {
                        return i;
                    }
                }
            }
            return -1;
        };
        GLSC.prototype.trimString = function (text) {
            return this.trimStringLeft(this.trimStringRight(text));
        };
        GLSC.prototype.trimStringLeft = function (text) {
            var i;
            for (i = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substring(i);
                }
            }
            return "";
        };
        GLSC.prototype.trimStringRight = function (text) {
            var i;
            for (i = text.length - 1; i > 0; i += -1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substring(0, i + 1);
                }
            }
            return "";
        };
        return GLSC;
    })();
    GLS.GLSC = GLSC;
})(GLS || (GLS = {}));
