var playButton = document.querySelector("button");
var results = document.querySelector(".results");
var bet = document.querySelector("#bet");
var error = document.querySelector(".error");

playButton.addEventListener("click", function(){
  results.style.display = "none";

  if (playButton.textContent === "Play Again?"){
    playButton.textContent = "Play";
  }

  //Check if money was bet & displays error if bet less than 0
  bet.value <= 0 ? error.style.display = "initial" : playGame();
});

function playGame(){
  var rollCount = 0;
  var highestRollCount = 0;
  var highestMoney = 0;
  var startAmount = bet.value;
  var betAmount = startAmount;

  //Hides the error message
  error.style.display = "none";

  // console.log("BETAMOUNT: " + betAmount);

  //Plays the game until money is gone
  while (betAmount > 0){
    var dice = rollDice() + rollDice(); //Rolls 2 dice and adds them together

    if (betAmount > highestMoney){
      highestMoney = betAmount;
      highestRollCount = rollCount;
    }

    rollCount++;
    dice === 7 ? betAmount = Number(betAmount) + 4 : betAmount--;
    // console.log(rollCount + ": " + dice + "|BET: " + betAmount);
  }

  //Displays Results
  document.querySelector("#startBet").textContent = "$" + startAmount;
  document.querySelector("#rollNum").textContent = rollCount;
  document.querySelector("#highest").textContent = "$" + highestMoney;
  document.querySelector("#highestRollNum").textContent = highestRollCount;
  results.style.display = "initial";
  playButton.textContent = "Play Again?";
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
