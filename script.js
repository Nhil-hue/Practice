
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let random = Math.random();

    if (random < 0.33){
        return "rock";
    }
    else if (random < 0.66){
        return "paper";
    } else {
        return "scissor";
    }
}


function getHumanChoice() {
    let answer = prompt("Rock, Paper, Scissor?");
    
        return answer;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if( humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You Win! Rock beats Scissor!")
        humanScore++;
    } else if( humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock!")
        humanScore++;
    }else if( humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You Win! Scissor beats Paper!")
        humanScore++;
    }else if( humanChoice === computerChoice){
        console.log("Tie!")
    } else {
        console.log("You Lose! Computer Win!")
        computerScore++;
    }     
}




function playGame() {

   

    for (let i = 0; i < 5; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
    }
  if (humanScore > computerScore){
        console.log("Human Win!");
    }else if( humanScore === computerScore){
        console.log("Tie!");
    }else {
        console.log("Computer Wins!")
    }
}
playGame();