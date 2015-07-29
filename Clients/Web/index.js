document.onreadystatechange = function () {
    if (event.target.readyState !== "complete") {
        return;
    }

    var source = document.getElementById("source"),
        result = document.getElementById("result"),
        converter = new GLS.GLSC(),
        language = GLS.Languages.TypeScript;

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
        console.log("Setting to", width, height);

        source.style.width = result.style.width = width;
        source.style.height = result.style.height = height;
    }

    function convertSourceToResult() {
        try {
            result.value = converter.parseCommands(language, source.value.split("\n"));
        } catch (error) {
            console.log(error.toString());
        }
    }

    window.onresize = resizeAreas;
    resizeAreas();

    source.onchange = source.onkeydown = source.onmousedown = convertSourceToResult;
};