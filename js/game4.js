var ball = "<section class='stage'><figure class='ball'><span class='number' data-number='$$'>&nbsp;</span></figure></section>";

function lotto() {

    var drawed = draw();
    var wrap = document.getElementById("wrap");
    var lottoMsg = document.getElementById("lottoMsg");
    lottoMsg.innerHTML = "";
    let result = "";
    var choosed = [];

    choosed.push(parseInt(document.getElementById("n1").value));
    choosed.push(parseInt(document.getElementById("n2").value));
    choosed.push(parseInt(document.getElementById("n3").value));

    for(n of drawed) {
        result += ball.replace("$$", n);
    }


    var msg = "";
    msg += "<div class='lottoresult'>";
    msg += checkTicket(drawed, choosed);
    msg += "</div>";

    wrap.innerHTML = result;
    lottoMsg.innerHTML = msg;

}

function draw() {
    let drawed = [];

    while(drawed.length < 3) {
        let x = Math.floor(Math.random()*10);
        if (!drawed.includes(x))
            drawed.push(x);
    }
    return drawed;
}

function checkTicket(drawed, choosed) {
    let totalPrize = true;
    for (let i=0; i<drawed.length; i++) {
        totalPrize = totalPrize && (drawed[i] == choosed[i]);
    }
    if (totalPrize) {
        addScore(10000);
        return "All the numbers are correct(even the order): <span class='q4-text-D'>$10,000</span> prize";
    }

    let correct = 0;
    for(n of drawed) {
        if(choosed.includes(n))
            correct++;
    }
    if (correct == 3) {
        addScore(3000);
        return "all the numbers are correct, but not order: <span class='q4-text-D'>$3,000</span> prize";
    }
    if (correct == 2) {
        addScore(1000);
        return "two numbers are correct(even the order): <span class='q4-text-D'>$1,000</span> prize";
    }
    return "No prize";
}
