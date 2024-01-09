var randomNumber1 = Math.floor(Math.random()*6) +1;
var player1_dice = "dice"+randomNumber1+".png";
var player1_image = "images/"+player1_dice;
var image_1 = document.querySelector("img")
image_1.setAttribute("src",player1_image);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var player2_dice = "dice"+randomNumber2+".png";
var player2_image = "images/"+player2_dice;
var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src",player2_image);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins !"
}

else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins ! 🚩"
}

else{
    document.querySelector("h1").textContent = "Draw!"
}