
$(document).ready(function(){

var wins = 0;
var losses = 0;
var currentTotal = 0;
var redRandom = 0;
var blueRandom = 0;
var yellowRandom = 0;
var greenRandom = 0;

var randomNumber = Math.floor(Math.random() * 120) + 19;
$("#randomNumber").text(randomNumber);
    
function setCrystals(){
    redRandom = Math.floor(Math.random() * 12) + 1;
    console.log(redRandom);
    blueRandom = Math.floor(Math.random() * 12) + 1;
    console.log(blueRandom);
    yellowRandom = Math.floor(Math.random() * 12) + 1;
    console.log(yellowRandom);
    greenRandom = Math.floor(Math.random() * 12) + 1;
    console.log(greenRandom);
}

setCrystals();

function playGame(currentTotal){
    var num1 = $("#randomNumber").text();
    var num2 = currentTotal;
    if(parseInt(num1) < parseInt(num2)){
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("Loser!");
        reset();
    }
    if(parseInt(num1) === parseInt(num2)){
        wins++;
        $("#wins").text("Wins: " + wins);
        alert("Winner!");
        reset();
    }
}
function reset(){
    currentTotal = 0;
    $("#currentTotal").text(currentTotal);
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#randomNumber").text(randomNumber);
    setCrystals();
}
$("#redCrystal").on("click", function(){
        currentTotal = currentTotal + redRandom;
        $("#currentTotal").text(currentTotal);
        playGame(currentTotal);
    })
$("#blueCrystal").on("click", function(){
        currentTotal = currentTotal + blueRandom;
        $("#currentTotal").text(currentTotal);
        playGame(currentTotal);
    })
$("#yellowCrystal").on("click", function(){
        currentTotal = currentTotal + yellowRandom;
        $("#currentTotal").text(currentTotal);
        playGame(currentTotal);
    })
$("#greenCrystal").on("click", function(){
        currentTotal = currentTotal + greenRandom;
        $("#currentTotal").text(currentTotal);
        playGame(currentTotal);
    })
});
 