function addScore(x) {
    var scoreElement = document.getElementById("score");
    var score = parseInt(scoreElement.innerHTML);
    score += x;
    alert("score " + score);
    var pad = "00000";

    scoreElement = (pad+score).slice(-pad.length);;
}