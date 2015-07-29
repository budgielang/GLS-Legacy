document.onreadystatechange = function () {
    if (event.target.readyState !== "complete") {
        return;
    }

    var source = document.getElementById("source"),
        resultContainer = document.getElementById("resultContainer"),
        resultTexter = document.getElementById("resultTexter"),
        converter = new GLS.GLSC(),
        original = "",
        language;

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
        try {
            if (source.value === original) {
                return;
            }

            original = source.value;
            resultTexter.innerText = converter.parseCommands(language, original.split("\n"));
            localStorage.setItem("original", original);
            Prism.highlightAll();
        } catch (error) {
            console.log(error.toString());
        }
    }

    function setLanguage(languageName) {
        language = GLS.Languages[languageName];
        resultContainer.className = "container language-" + languageName.toLowerCase();
        resultTexter.className = "container language-" + languageName.toLowerCase();
        Prism.highlightAll();
    }

    (function Main() {
        window.onresize = resizeAreas;
        resizeAreas();

        setLanguage("CSharp");

        source.onchange = source.onkeydown = source.onmousedown = convertSourceToResult;

        source.value = localStorage.getItem("original");
        if (source.value) {
            convertSourceToResult();
        }

        setInterval(convertSourceToResult, 77);
    })();
};