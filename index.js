var randomNumber = Math.floor(Math.random()*6)+1;
var randomImageSource = "images/dice" + randomNumber + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);

if(randomNumber > randomNumber2){
    document.querySelector("h2").innerHTML = "✌ Player 1 Wins!";
}

else if(randomNumber2 > randomNumber){
    document.querySelector("h2").innerHTML = "✌ Player 2 Wins!";
}

else{
    document.querySelector("h2").innerHTML = "Draw, please refresh again :/";
}