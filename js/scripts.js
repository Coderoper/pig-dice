//business logic
var roll;
var roundTotal=0;
var gameTotal1=0;
var gameTotal2=0;
var round=1;
function endGame () {
  if (gameTotal2 >= 100) {
    gameTotal1 = 0;
    gameTotal2 = 0;
    round = 1;
    alert("CONGRATULATIONS!!!!!!!!!!!!!!! you have won the game.");

  } else if (gameTotal1 >=100){
    $("#player1 button.roll").toggle();
    $("#player1 button.hold").toggle();
    $("#player2 button.roll").toggle();
    $("#player2 button.hold").toggle();
    gameTotal1 = 0;
    gameTotal2 = 0;
    round = 1;
    alert("CONGRATULATIONS!!!!!!!!!!!!!!! you have won the game.");

  }

}
function rollDice() {
roll = Math.floor((Math.random()*6) +1)
};

function roundScoreP1(){
  if(roll==1){
    $("#player1 button.roll").toggle();
    $("#player1 button.hold").toggle();
    $("#player2 button.roll").toggle();
    $("#player2 button.hold").toggle();
    return roundTotal=0;
  } else {
    roundTotal += roll;
  };
};
  function roundScoreP2(){
    if(roll==1){
      $("#player1 button.roll").toggle();
      $("#player1 button.hold").toggle();
      $("#player2 button.roll").toggle();
      $("#player2 button.hold").toggle();
      round +=1;
      return roundTotal=0;
    } else {
      roundTotal += roll;

    }


};

function gameScoreP1(){
  $("#player1 button.roll").toggle();
  $("#player1 button.hold").toggle();
  $("#player2 button.roll").toggle();
  $("#player2 button.hold").toggle();
  gameTotal1 +=roundTotal;
  // round+=1;
  roll = 0;
  roundTotal = 0;
  return gameTotal1;
};
function gameScoreP2(){
  $("#player1 button.roll").toggle();
  $("#player1 button.hold").toggle();
  $("#player2 button.roll").toggle();
  $("#player2 button.hold").toggle();
  gameTotal2 +=roundTotal;
  round+=1;
  roll = 0;
  roundTotal = 0;
  return gameTotal2;
};


//user logic
$(document).ready(function(){
  $(".roundNum").text(round);
  $("#player1 .roll").click(function(event){
    event.preventDefault();

    rollDice();
    roundScoreP1();
    $("#player1 .currentRoll").text(roll);
    $("#player1 .rollScore").text(roundTotal);
    // $("#player1 .roundNum").text(round);
  });
  $("#player1 .hold").click(function(event) {
    event.preventDefault();
    gameScoreP1();
    $("#player1 .currentRoll").text(roll);
    $("#player1 .rollScore").text(roundTotal);
    $("#player1 .gameScore").text(gameTotal1);
    // $("#player1 .roundNum").text(round);
    endGame();
    $("#player1 .gameScore").text(gameTotal1);
    $("#player2 .gameScore").text(gameTotal2);
    $(".roundNum").text(round);

      // $("#player1 .roundNum").text(round);
      // $("#player2 .roundNum").text(round);
  })
  $("#player2 .roll").click(function(event){
    event.preventDefault();
    rollDice();
    roundScoreP2();
    $("#player2 .currentRoll").text(roll);
    $("#player2 .rollScore").text(roundTotal);
    $(".roundNum").text(round);
    // $("#player2 .roundNum").text(round);
    // $("#player1 .roundNum").text(round);
  });
  $("#player2 .hold").click(function(event) {
    event.preventDefault();
    gameScoreP2();
    $("#player2 .currentRoll").text(roll);
    $("#player2 .rollScore").text(roundTotal);
    $("#player2 .gameScore").text(gameTotal2);
    $(".roundNum").text(round);
    endGame();
    $("#player2 .gameScore").text(gameTotal2);
    $("#player1 .gameScore").text(gameTotal1);
    $(".roundNum").text(round);


    // $("#player2 .roundNum").text(round);
    // $("#player1 .roundNum").text(round);
  });

});
