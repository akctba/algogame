function game3(){
  var output = document.getElementById("calculatorResult");

  var first = parseInt(document.getElementById("firstnumber").value);
  var second =parseInt(document.getElementById("secondnumber").value);
  var operationType = document.getElementById("operation").value;
  var realResult = 0;
  var userResult = parseInt(document.getElementById("q3result").value);

  var answer = document.getElementById("calculatorResult");


  switch (operationType) { 
    case "sum":
      realResult = first + second;
    
      if(realResult != userResult){
        looseLife();
        answer.innerHTML = "Your operation is wrong, the real result is " + realResult + " not " + userResult;
      } else {
        addScore(10);
        answer.innerHTML = "It's Corect";
      }
    break;
    case "minus":
      realResult = first - second;
      
      if(realResult != userResult){
        looseLife();
        answer.innerHTML = "Your operation is wrong, the real result is " + realResult;
      } else {
        addScore(10);
        answer.innerHTML = "It's Corect";
      }
    break;
    case "multiply":
      realResult = first * second;
      
      if(realResult != userResult){
        looseLife();
        answer.innerHTML = "Your operation is wrong, the real result is " + realResult;
      } else {
        addScore(10);
        answer.innerHTML = "It's Corect";
      }
    break;
    case "division":
      realResult = first / second;
      if(realResult != userResult){
        looseLife();
        answer.innerHTML = "Your operation is wrong, the real result is " + realResult;
      } else {
        addScore(10);
        answer.innerHTML = "It's Corect";
      }
    break;
    default:
        answer.innerHTML = "Choose one operation";
        return;
    } 
    

}