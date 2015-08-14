document.onreadystatechange = function (event) {
    if (event.target.readyState !== "complete") {
        return;
    }

    var localStorage = shivLocalStorage(),
        source = document.getElementById("source"),
        resultContainer = document.getElementById("resultContainer"),
        resultTexter = document.getElementById("resultTexter"),
        languageSelect = document.getElementById("languageSelectElement"),
        converter = new GLS.GLSC(),
        original = "",
        language;

    function shivLocalStorage() {
        if (typeof window.localStorage !== "undefined") {
            return window.localStorage;
        }

        var shiv = {
            "getItem": function (key) {
                return shiv[key];
            },
            "setItem": function (key, value) {
                shiv[key] = value;
            }
        };

        return shiv;
    }

    function resizeAreas() {
        if (document.body.clientWidth < 819) {
            resizeAreasPortrait();
        } else {
            resizeAreasLandscape();
        }
    }

    function resizeAreasLandscape() {
        setSizes(document.body.clientWidth / 2 - 56 + "px", "");
    }

    function resizeAreasPortrait() {
        setSizes("", document.body.clientHeight / 2 - 28 + "px");
    }

    function setSizes(width, height) {
        source.style.width = resultContainer.style.width = width;
        source.style.height = resultContainer.style.height = height;
    }

    function convertSourceToResult() {
        if (source.value === original) {
            return;
        }

        //try {
            original = source.value;
            resultTexter.innerText = converter.parseCommands(language, original.split("\n"));
            localStorage.setItem("original", original);
            Prism.highlightAll();
        //} catch (error) {
        //    // Logging errors is spammy, so it's not done...
        //    console.log(error.toString());
        //}
    }

    function checkLanguageDefault() {
        var value = localStorage.getItem("language"),
            i;

        if (value) {
            for (i = 0; i < languageSelect.options.length; i += 1) {
                if (languageSelect.options[i].value === value) {
                    languageSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    function setLanguage() {
        var languageName = languageSelect.value.replace("#", "Sharp");

        language = GLS.Languages[languageName];
        resultContainer.className = "container language-" + languageName.toLowerCase();
        resultTexter.className = "container language-" + languageName.toLowerCase();

        original = "";
        convertSourceToResult();
        localStorage.setItem("language", languageName);

        Prism.highlightAll();
    }

    function selectText() {
        var range;

        if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(resultTexter);
            range.select();
        } else if (window.getSelection) {
            range = document.createRange();
            range.selectNode(resultTexter);
            window.getSelection().empty();
            window.getSelection().addRange(range);
        }
    }

    (function Main(sampleCode) {
        window.onresize = resizeAreas;
        resizeAreas();

        checkLanguageDefault();
        setLanguage();

        source.onchange = source.onkeydown = source.onmousedown = convertSourceToResult;

        source.value = localStorage.getItem("original") || "";
        if (source.value) {
            convertSourceToResult();
        }

        document.getElementById("sampler").onclick = function () {
            source.value = sampleCode;
        }
        document.getElementById("selecter").onclick = selectText;

        languageSelect.onchange = setLanguage;

        setInterval(convertSourceToResult, 77);
    })([
        "comment block : (Basic GLS Syntax) (Version 0.2.0)",
        "",
        "comment line : Skip to { main start } for basic usage...",
        "",
        "file start : SampleFile",
        "    comment line : (Function Definitions)",
        "    ",
        "    function start : sayHello void",
        "        print line : (\"Hello world!\")",
        "    function end",
        "    ",
        "    function start : combineAsStrings string a string b string",
        "        function return : { concatenate : a b }",
        "    function end",
        "    ",
        "    ",
        "    comment line : (Class Declarations)",
        "    ",
        "    class start : Point",
        "        class member variable declare : x public int",
        "        class member variable declare : y public int",
        "        ",
        "        class constructor start : Point x int y int",
        "            class member variable set : x x",
        "            class member variable set : y y",
        "        class constructor end ",
        "        ",
        "        class member function start : Point public setX void x int",
        "            class member variable set : x x",
        "        class member function end",
        "        ",
        "        class member function start : Point public setY void y int",
        "            class member variable set : y y",
        "        class member function end",
        "        ",
        "        class member function start : Point public getX int",
        "            function return : { class member variable get : x}",
        "        class member function end",
        "        ",
        "        class member function start : Point public getY int",
        "            function return : { class member variable get : y}",
        "        class member function end",
        "        ",
        "        class member function start : Point public getManhattanTotal int",
        "            function return : { operation : { class member variable get : x } plus { class member variable get : y } }",
        "        class member function end",
        "    class end",
        "    ",
        "    class start : PointLabeled<T> public Point",
        "        class member variable declare : label public T",
        "        ",
        "        class constructor inherited start : PointLabeled { class constructor inherited call : Point x y } x int y int label T",
        "            class member variable set : label label",
        "        class constructor end",
        "        ",
        "        class member function start : Point public setLabel void label T",
        "            class member variable set : label label",
        "        class member function end",
        "        ",
        "        class member function start : Point public getLabel T",
        "            function return : { class member variable get : label }",
        "        class member function end",
        "    class end",
        "    ",
        "    comment line : Main",
        "    main start",
        "        comment line : (Basic Usage)",
        "        print line : (\"Hello world!\")",
        "        comment inline : (basic printing here)",
        "        ",
        "        comment line : Basic Variables",
        "        variable declare : a string (\"Hello world!\")",
        "        variable declare : b int 7",
        "        variable declare : c double 11.7",
        "        variable declare : d boolean true",
        "        ",
        "        comment line : Operations",
        "        variable declare : e int { operation : 1 plus 2 } ",
        "        variable declare : f boolean { comparison : b lessthan c }",
        "        ",
        "        comment line : (If Statements)",
        "        if variable start : { not : { value : true } }",
        "            print line : (\"Hi!\")",
        "        if end",
        "        if variable start : d",
        "            print line : (\"d is true!\")",
        "        if end",
        "        if condition start : c lessthan 14",
        "            print line : (\"c is less than 14!\")",
        "        if end",
        "        ",
        "        comment line : (While Loops)",
        "        while variable start : d",
        "            print line : { concatenate : (\"d is \") d }",
        "            operation : d equals false",
        "        while end",
        "        while condition start : c greaterthan 3",
        "            print line : { concatenate : (\"c is \") c }",
        "            operation : c decreaseby 1",
        "        while end",
        "        ",
        "        comment line : (For Loops)",
        "        for numbers start : i int 0 lessthan 7 increaseby 1",
        "            print line : { concatenate : (\"i plus one is \") { parenthesis : { operation : i plus 1 } } }",
        "        for end",
        "        ",
        "        comment line : Dictionaries",
        "        variable declare : g { dictionary type : string int } { dictionary initialize : string int }",
        "        variable declare : h boolean { dictionary key check : g \"sup\" }",
        "        comment inline : { value : false }",
        "        variable declare : i {dictionary type : string int } { dictionary initialize start : string boolean }",
        "            dictionary initialize key : \"foo\" 7",
        "            dictionary initialize key : \"bar\" 14",
        "            dictionary initialize key : \"baz\" 21",
        "        dictionary initialize end",
        "        ",
        "        comment line : (Calling Functions)",
        "        function call : sayHello",
        "        function call : combineAsStrings \"hello\" \"world\"",
        "        function call : combineAsStrings { operation : \"hello\" plus (\" \") } \"world\"",
        "        function call : combineAsStrings { function call : combineAsStrings \"hello\" \"world\" } \"world\"",
        "        ",
        "        comment line : (Class Usage)",
        "        variable declare : g Point { class new : Point 3 7 }",
        "        class member function call : g setX 4",
        "        print line : { class member function call : g getManhattanTotal }",
        "        ",
        "        comment line : (Templated Class Usage)",
        "        variable declare : h PointLabeled<string> { class new : PointLabeled<string> 0 0 \"origin\" }",
        "    main end",
        "file end",
        "",
        "comment line : (fin)"
    ].join("\r\n"))
};
