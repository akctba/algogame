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

function looseLife() {
    //loosing "lives" when make wrong answer.
    let parent = document.getElementById("lives-flex");
    let child = document.getElementById("lives-item");
    if (child != null) {
        parent.removeChild(child);
    } 
    child = document.getElementById("lives-item");
    if (child == null) {
        //game over
        parent.innerHTML = "<p class='lives-gameover blinking'>GAME OVER!!!</p>";
    }
}