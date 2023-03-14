var x1 = 0;
var countwin = 0;
var countloose = 0;
var counttied = 0;
function hit() {
  var x = Math.floor(Math.random() * 12 + 1);
  x1 = x1 + x;
  var dice = "dice" + x + ".png";
  var image = document.createElement("img");
  image.src = dice;
  image.id = "pop";
  document.getElementById("player1cards").appendChild(image);
  var audio = new Audio("swish.mp3");
  audio.play();
}
var x2 = 0;
function stand() {
  for (let k = 2; k < 4; k++) {
    random();
  }
  if (x1 <= 21 && x2 <= 21) {
    if (x1 > x2) {
      document.getElementById("display").innerHTML = "You Win";
      countwin++;
      var audio2 = new Audio("cash.mp3");
      audio2.play();
    }
    if (x2 > x1) {
      document.getElementById("display").innerHTML = "You Loose";
      countloose++;
      var audio3 = new Audio("aww.mp3");
      audio3.play();
    }
  } else if (x1 == x2) {
    document.getElementById("display").innerHTML = "Round Tied";
    counttied++;
  } else if (x1 > 21) {
    alert("Value Reachers or surpasses the optimal limit");
    deal();
    countloose++;
  } else if (x2 > 21) {
    alert("The CPU player has surpassed the optimal limit");
    deal();
    countwin++;
  }
  document.getElementById("score1").innerHTML = countwin;
  document.getElementById("score2").innerHTML = countloose;
}
function random() {
  var f = Math.floor(Math.random() * 8 + 1);
  x2 = x2 + f;
  var dice1 = "dice" + f + ".png";
  var photo = document.createElement("img");
  photo.src = dice1;
  photo.id = "po";
  document.getElementById("player2cards").appendChild(photo);
  var audio1 = new Audio("swish.mp3");
  audio1.play();
}
function deal() {
  document.getElementById("player1cards").innerHTML = "";
  document.getElementById("player2cards").innerHTML = "";
  document.getElementById("display").innerHTML = "Let's Go Again";
}
