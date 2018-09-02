var playButton = document.querySelector("button");
var results = document.querySelector(".results");
var bet = document.querySelector("#bet");

playButton.addEventListener("click", function(){
  results.style.display = "none";

  //Check if money was bet | Add Popup Error
  bet.value <= 0 ? console.log("ERROR: Please enter a bet above 0") : playGame();
});

function playGame(){
  var rollCount = 0;
  var highestRollCount = 0;
  var highestMoney = 0;
  var startAmount = bet.value;
  var betAmount = startAmount;

  //Plays the game until money is gone
  while (betAmount > 0){
    var dice = rollDice() + rollDice(); //Rolls 2 dice and adds them together

    if (betAmount > highestMoney){
      highestMoney = betAmount;
      highestRollCount = rollCount;
    }

    rollCount++;
    dice === 7 ? betAmount += 4 : betAmount--;
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
  return Math.floor(Math.random() * 7);
}
