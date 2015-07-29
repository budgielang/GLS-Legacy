var GLS;
(function (GLS) {
    var GLSC = (function () {
        function GLSC() {
            this.INT_MIN = -9001;
            this.Languages = {};
            this.SearchEnds = {
                " ": " ",
                "{": "}",
                "(": ")"
            };
        }
        GLSC.prototype.parseCommands = function (language, commandsRaw) {
            if (commandsRaw.length === 0 || (commandsRaw.length === 1 && commandsRaw[0].length === 0)) {
                return "";
            }
            var output = "", command, numTabs = 0, i;
            // The first line will never start with a newline, or be initially tabbed
            command = this.parseCommand(language, commandsRaw[0], false);
            output += command[0];
            numTabs += command[1];
            for (i = 1; i < commandsRaw.length; i += 1) {
                command = this.parseCommand(language, commandsRaw[i], false);
                if (command[1] === this.INT_MIN) {
                    output += " " + command[0];
                }
                else if (command[1] < 0) {
                    numTabs += command[1];
                    output += "\n" + this.generateTabs(numTabs) + command[0];
                }
                else {
                    output += "\n" + this.generateTabs(numTabs) + command[0];
                    numTabs += command[1];
                }
            }
            return output;
        };
        GLSC.prototype.parseCommand = function (language, commandRaw, isInline) {
            var output = ["", 0];
            if (this.isStringSpace(commandRaw)) {
                return output;
            }
            var result, arguments, functionName, argumentsRaw, colonIndex;
            colonIndex = commandRaw.indexOf(":");
            if (colonIndex !== -1) {
                functionName = this.trimString(commandRaw.substring(0, colonIndex));
                argumentsRaw = this.trimString(commandRaw.substring(colonIndex + 1));
                arguments = this.parseArguments(language, argumentsRaw, isInline);
            }
            else {
                functionName = this.trimString(commandRaw);
            }
            output = language.print(functionName, arguments, isInline);
            return output;
        };
        GLSC.prototype.parseArguments = function (language, argumentsRaw, isInline) {
            var argumentsConverted = [], argument, starter, end, i;
            for (i = 0; i < argumentsRaw.length; i += 1) {
                starter = argumentsRaw[i];
                if (this.isCharacterSpace(starter)) {
                    continue;
                }
                if (starter == '{' || starter == '(') {
                    end = this.findSearchEnd(argumentsRaw, starter, i);
                    i += 1;
                }
                else {
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
        };
        /* Private utilities
        */
        GLSC.prototype.generateTabs = function (numTabs) {
            var numTabsActual = numTabs * 4, output = " ", i;
            for (i = 0; i < numTabsActual; i += 1) {
                output += " ";
            }
            return output;
        };
        GLSC.prototype.isStringSpace = function (text) {
            for (var i = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return false;
                }
            }
            return true;
        };
        GLSC.prototype.isCharacterSpace = function (character) {
            return character === ' ' || character === '\r' || character === '\n';
        };
        GLSC.prototype.findNextSpace = function (haystack, start) {
            for (var i = start + 1; i < haystack.length; i += 1) {
                if (this.isCharacterSpace(haystack[i])) {
                    return i;
                }
            }
            return haystack.length;
        };
        GLSC.prototype.findSearchEnd = function (haystack, starter, start) {
            var numStarts = 1, ender = this.SearchEnds[starter], current, i;
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
        };
        GLSC.prototype.trimString = function (text) {
            return this.trimStringLeft(this.trimStringRight(text));
        };
        GLSC.prototype.trimStringLeft = function (text) {
            for (var i = 0; i < text.length; i += 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substr(i);
                }
            }
            return "";
        };
        GLSC.prototype.trimStringRight = function (text) {
            for (var i = text.length - 1; i >= 0; i -= 1) {
                if (!this.isCharacterSpace(text[i])) {
                    return text.substr(0, i + 1);
                }
            }
            return "";
        };
        return GLSC;
    })();
    GLS.GLSC = GLSC;
})(GLS || (GLS = {}));
