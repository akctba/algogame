function Prime()
{
    var i,flag=0,number;
    number = Number(document.getElementById("q2-input").value);
    name = document.getElementById("q1-input").value;
    if(number < 2) 
        flag = 1; //is not prime
    else
    for(i=2; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            flag = 1;
            break;
        }
    }
    
    if(flag == 0)
    {
        document.getElementById("output2").innerHTML = name + ", " + number + " is Prime number";
        addScore(10);
    }
    else
    {
        looseLife();
        document.getElementById("output2").innerHTML = name + ", " + number + " is not Prime number";
    }
}