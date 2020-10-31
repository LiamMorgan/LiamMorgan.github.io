GenerateColour = function () {
    var randomColor = ('#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')).toUpperCase();
    var text = document.getElementById("infoBoxText");
    document.body.style.backgroundColor = randomColor;

    text.style.color = randomColor;
    text.innerHTML = randomColor;
}

GenerateColour();