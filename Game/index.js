var games1 = Math.floor(Math.random() * 6) + 1;
var random1 = "images/dice" + games1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", random1);
var games2 = Math.floor(Math.random() * 6) + 1;
var random2 = "images/dice" + games2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", random2);

if (games1 > games2) {
  document.querySelector("h1").innerHTML = "Team 1 is the winner!";
} else if (games1 === games2) {
  document.querySelector("h1").innerHTML = "Its a tie!";
} else {
  document.querySelector("h1").innerHTML = "Team 2 is the winner!";
}
