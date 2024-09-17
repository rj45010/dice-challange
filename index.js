//Player 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImageSource1 = "images/dice" + randomNumber1 + ".jpg"; //images/dice1.jpg - images/dice6.jpg

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

//Refresh page
document.querySelector("button").addEventListener("click", function (){
  window.location.reload();
});