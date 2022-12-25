function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    length = choices.length;
    choicePos = Math.floor(Math.random()*length);
    return choices[choicePos];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper.";
    } else if (playerSelection === computerSelection){
        return "Tie"
    }
}

function game(){
    let input = prompt("Enter your choice");
    const playerSelection = input;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
    }


game();