function getName(){
    var name = document.getElementById("q1-input").value;
    document.getElementById("output1").innerHTML = "<p>"+ "Hello " +  name + ", nice work! Let's start!" + "</p>";
    addScore(10);
}

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