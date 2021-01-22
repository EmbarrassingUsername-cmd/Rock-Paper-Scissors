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
        console.log("Congratulations you win! " + playerWin + " win(s) " + computerWin + "loss(es) and " + tieGame +" tie(s). Let's see if you can keep it up!");
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
    let gameOutcome=playerSelection+computerSelection
    if (gameOutcome=="RockPaper"){console.log("You Lose! " + computerSelection + " beats " + playerSelection); 
    return "computerwin"}

    else if (gameOutcome=="RockScissors"){console.log("You Win! " + playerSelection + " beats " + computerSelection);
    return "playerwin"}

    else if(gameOutcome=="RockRock"){console.log("It's A tie you both picked " +computerSelection);
    return "tie"}

    else if(gameOutcome=="PaperPaper"){console.log("It's A tie you both picked " +computerSelection);
    return "tie"}

    else if(gameOutcome=="PaperScissors"){console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    return "computerwin"}

    else if(gameOutcome=="PaperRock"){console.log("You Win! " + playerSelection + " beats " + computerSelection);
    return "playerwin"}

    else if(gameOutcome=="ScissorsPaper"){console.log("You Win! " + playerSelection + " beats " + computerSelection);
    return "playerwin"}

    else if(gameOutcome=="ScissorsScissors"){console.log("It's A tie you both picked " +computerSelection);
    return "tie"}

    else if(gameOutcome=="ScissorsRock"){console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    return "computerwin"}

    else (console.log("Something went wrong! Pay no atention to the man behind the curtain"))
}

function computerPlay(){
    let computerNum=randomNumber1to3();
    if(computerNum==1){
        return "Rock"
    }  
    else if(computerNum==2){
        return "Paper"
    }
    else{
        return "Scissors"
   
}
}
function randomNumber1to3(){
    return Math.floor(Math.random()*3+1)
}
function toTitleCase(x){
    x=x.toLowerCase()
    x=x.charAt(0).toUpperCase() +  x.slice(1)
    return x
}
