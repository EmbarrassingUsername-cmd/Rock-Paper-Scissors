let playerWin=0,
    computerWin=0,
    tieGame=0

const RPS=document.querySelectorAll("button")
RPS.forEach((button)=>{
    button.addEventListener("click",playerSelects)
});
function playerSelects(e){
roundResult(`${e.target.id}`)
}
const playerScore=document.querySelector("#player-score")
const computerScore=document.querySelector("#computer-score")
const resultMessage=document.querySelector("#round-result")
function roundResult(playerSelection){
        const computerSelection = computerPlay();
        let result=playRound(playerSelection,computerSelection)
        if (result=="playerwin"){
            playerWin=++playerWin 
            playerScore.textContent=`${playerWin}`
        }
        else if(result=="computerwin"){
            computerWin=++computerWin 
            computerScore.textContent=`${computerWin}`
        }
        else if(result=="tie"){
            tieGame=++tieGame 
        }
        else{}
}
function playRound(playerSelection,computerSelection){
    const resultArray=["PaperRock","ScissorsPaper","RockScissors","PaperScissors","ScissorsRock","RockPaper","PaperPaper","ScissorsScissors","RockRock"]
    //array ordered such that win tie and loss results are grouped so range of values checked in one if statement  
    const gameOutcome=playerSelection+computerSelection
    let resultArrayIndex=resultArray.indexOf(gameOutcome);
    if(resultArrayIndex<3){resultMessage.textContent=(`You Win! ${playerSelection} beats ${computerSelection}`); return "playerwin"}
    else if(resultArrayIndex<6&&resultArrayIndex>2){resultMessage.textContent=(`You Lose! ${computerSelection} beats ${playerSelection}`); return "computerwin"}
    else if(resultArrayIndex>5){resultMessage.textContent=(`It's a tie, you both picked ${computerSelection}`); return "tie"} 
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
