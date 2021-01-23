let playerWin=0,
    computerWin=0,
    tieGame=0
    totalRoundNum=5
game()

function game(){
    for (i=0; i<totalRoundNum;i++){
        const playerSelection = toTitleCase(prompt("Rock Paper or Scissors? Round " + (1+i)));
        const computerSelection = computerPlay();
        let result=playRound(playerSelection,computerSelection)
        
        if (result=="playerwin"){
            playerWin=++playerWin 
        }
        else if(result=="computerwin"){
            computerWin=++computerWin 
        }
        else if(result=="tie"){
            tieGame=++tieGame 
        }
        else{}
    }
    if(playerWin>computerWin){
        console.log("Congratulations you win! " + playerWin + " win(s) " + computerWin + " loss(es) and " + tieGame +" tie(s). Let's see if you can keep it up!");
    }
    if(playerWin<computerWin){
        console.log("Sorry you lose " + playerWin + " win(s) " + computerWin + " loss(es) and " + tieGame + " tie(s). Better luck next time");
    }
    else if(playerWin==computerWin){
        console.log("It's a tie " + playerWin + " win(s) " + computerWin + " loss(es) and " + tieGame + " tie(s) why not play again?" );
    }
    else{}
}
function playRound(playerSelection,computerSelection){
    
    const resultArray=["PaperRock","ScissorsPaper","RockScissors","PaperScissors","ScissorsRock","RockPaper","PaperPaper","ScissorsScissors","RockRock"]
    const gameOutcome=playerSelection+computerSelection
    let i=resultArray.indexOf(gameOutcome);
    if(i<3){console.log("You Win! " + playerSelection + " beats " + computerSelection); return "playerwin"}
    else if(i<6&&i>2){console.log("You Lose! " + computerSelection + " beats " + playerSelection); return "computerwin"}
    else if(i>5){console.log("It's A tie you both picked " +computerSelection); return "tie"} 
    }
    

function computerPlay(){
    let compChoiceArray=["Rock","Paper","Scissors"]
    return compChoiceArray[randomNumber(3)]
}
function randomNumber(x){
    return Math.floor(Math.random()*x)
}
function toTitleCase(x){
    x=x.toLowerCase()
    x=x.charAt(0).toUpperCase() +  x.slice(1)
    return x
}
