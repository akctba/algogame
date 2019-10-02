function Prime()
{
    var i,flag=0,number;
    number = Number(document.getElementById("q2-input").value);
    name = document.getElementById("q1-input").value;
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
        let parent = document.getElementById("lives-flex");//loosing "lives" when make wrong answer.
        let child = document.getElementById("lives-item");
        parent.removeChild(child);
        document.getElementById("output2").innerHTML = name + ", " + number + " is not Prime number";
    }
}