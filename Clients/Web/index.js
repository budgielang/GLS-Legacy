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
        if (typeof localStorage !== "undefined") {
            return localStorage;
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

        try {
            original = source.value;
            resultTexter.innerText = converter.parseCommands(language, original.split("\n"));
            localStorage.setItem("original", original);
            Prism.highlightAll();
        } catch (error) {
            console.log(error.toString());
        }
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

    (function Main() {
        window.onresize = resizeAreas;
        resizeAreas();

        checkLanguageDefault();
        setLanguage();

        source.onchange = source.onkeydown = source.onmousedown = convertSourceToResult;

        source.value = localStorage.getItem("original") || "";
        if (source.value) {
            convertSourceToResult();
        }

        document.getElementById("selecter").onclick = selectText;

        languageSelect.onchange = setLanguage;

        setInterval(convertSourceToResult, 77);
    })();
};