num1 = Math.ceil(Math.random()*6);
num2 =  Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src", "images/dice" + num1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ num2 + ".png");
var message;
if(num1>num2)
document.querySelector("h1").innerHTML= "<img alt='flag' src= 'images/flag.png'\> Player1 Wins";
else if(num2>num1)
document.querySelector("h1").innerHTML= "Player2 Wins <img alt='flag' src= 'images/flag.png'\>";
else if(num1===num2)
document.querySelector("h1").textContent= "Draw!";
