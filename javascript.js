


function game(){}
    for (i=0, i<totalRoundNum,i++){
        playRound

    }
function playRound(){
    const playerSelection = toTitleCase(prompt("Rock Paper or Scissors?"));
    const computerSelection = computerPlay();
    let gameOutcome=playerSelection+computerSelection
    if (gameOutcome=="RockPaper"){console.log("You Lose! " + computerSelection + " beats " + playerSelection); 
    return computerwin}

    else if (gameOutcome=="RockScissors"){console.log("You Win! " + computerSelection + " beats " + playerSelection);
    return playerwin}

    else if(gameOutcome=="RockRock"){console.log("It's A tie you both picked " +computerSelection);
    return tie}

    else if(gameOutcome=="PaperPaper"){console.log("It's A tie you both picked " +computerSelection);
    return tie}

    else if(gameOutcome=="PaperScissors"){console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    return computerwin}

    else if(gameOutcome=="PaperRock"){console.log("You Win! " + computerSelection + " beats " + playerSelection);
    return playerwin}

    else if(gameOutcome=="ScissorsPaper"){console.log("You Win! " + computerSelection + " beats " + playerSelection);
    return playerwin}

    else if(gameOutcome=="ScissorsScissors"){console.log("It's A tie you both picked " +computerSelection);
    return tie}

    else if(gameOutcome=="ScissorsRock"){console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    return computerwin}

    else (console.log("Something went wrong! Pay no atention to the man behind the curtain"))
}

function computerPlay(){
    let computerNum=randomNumber1to3();
    if(computerNum==1){
        return1="Rock"
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
