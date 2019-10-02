function addScore(x) {
    if (x == 0) {
        return;
    }
    var scoreElement = document.getElementById("score");
    var score = parseInt(scoreElement.innerHTML);
    score += x;
    var pad = "00000";

    scoreElement.innerHTML = (pad+score).slice(-pad.length);;
}