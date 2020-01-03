

var wins = 0;
var losses = 0;
var currentTotal = 0;



window.onload = function(){
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#randomNumber").text(randomNumber);
};
    var redRandom = Math.floor(Math.random() * 12) + 1;
    console.log(redRandom);
    var blueRandom = Math.floor(Math.random() * 12) + 1;
    console.log(blueRandom);
    var yellowRandom = Math.floor(Math.random() * 12) + 1;
    console.log(yellowRandom);
    var greenRandom = Math.floor(Math.random() * 12) + 1;
    console.log(greenRandom);

    function playGame(currentTotal){
        var num1 = $("#randomNumber").text();
        var num2 = currentTotal;
        if(num1 < num2){
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You lose!");
            reset();
        }else if(num1 === num2){
            wins++;
            $("#wins").tex1t("Wins: " + wins);
            alert("You win")
            
            reset();
    
        }
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
    function reset(){
        currentTotal = 0;
        var randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomNumber").text(randomNumber);
    }
    
    

 