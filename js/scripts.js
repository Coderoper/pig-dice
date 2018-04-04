//business logic
var roll;
var roundTotal=0;
var gameTotal=0;
var round=1;
function endGame () {
  if (gameTotal >= 100) {
    alert("CONGRATULATIONS!!!!!!!!!!!!!!! you have won the game.");
    gameTotal = 0;
    round = 1;
  }
}
function rollDice() {
roll = Math.floor((Math.random()*6) +1)
};

function roundScore(){
  if(roll==1){
    // $("#player-one-roll").toggle();
    // $("#player-one-hold").toggle();
    // $("#player-two-hold").toggle();
    round+=1;
    return roundTotal=0;
  } else {
    roundTotal += roll;
  }


};

function gameScore(){
  gameTotal +=roundTotal;
  round+=1;
  roll = 0;
  roundTotal = 0;
  return gameTotal;
};


//user logic
$(document).ready(function(){
  $("div#player-one-roll").click(function(event){
    event.preventDefault();
    rollDice();
    roundScore();
    // gameScore();
    $("#currentRoll").text(roll);
    $("#rollScore").text(roundTotal);
    $("#roundNum").text(round);
  });
  $("div#player-one-hold").click(function(event) {
    event.preventDefault();
    gameScore();
    $("#currentRoll").text(roll);
    $("#rollScore").text(roundTotal);
    $("#gameScore").text(gameTotal);
    $("#roundNum").text(round);
    endGame();
    $("#gameScore").text(gameTotal);
    $("#roundNum").text(round);
  })
});
