//business logic
var roll;
var roundTotal=0;
var gameTotal=0;

function rollDice() {
roll = Math.floor((Math.random()*6) +1)
// console.log(roll);
};

function roundScore(){
  roundTotal += roll;
  console.log("roll " + roll + "roundTotal " + roundTotal);
  return roundTotal;

};

function gameScore(){
  gameTotal +=roundTotal;
  console.log(gameTotal);
  return gameTotal;

};



/*
function Roll(number){
  this.number = number;
}
function Round (){

}


Roll.prototype.Points function (points){
  return Math.random+=points
}
*/



//user logic
$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    rollDice();
    roundScore();
    gameScore();
    $("#currentRoll").text(roll);
    $("#rollScore").text(roundTotal);
    $("#gameScore").text(gameTotal);
  })
})
