function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    length = choices.length;
    choicePos = Math.floor(Math.random() * length);
    return choices[choicePos];
}

function playRound(playerInput, computerInput) {

    if ((playerScore < 5 && computerScore < 5)) {

        if (playerInput === "rock" && computerInput === "paper") {
            computerScore += 1;
            round.textContent = `Round #${roundNo}: You Lose! Paper beats Rock.`;
        } else if (playerInput === "paper" && computerInput === "scissors") {
            computerScore += 1;
            round.textContent = `Round #${roundNo}: You Lose! Scissors beats Paper.`;
        } else if (playerInput === "scissors" && computerInput === "rock") {
            computerScore += 1;
            round.textContent = `Round #${roundNo}: You Lose! Rock beats Scissors.`;
        } else if (playerInput === "rock" && computerInput === "scissors") {
            playerScore += 1;
            round.textContent = `Round #${roundNo}: You Win! Rock beats Scissors.`;
        } else if (playerInput === "paper" && computerInput === "rock") {
            playerScore += 1;
            round.textContent = `Round #${roundNo}: You Win! Paper beats Rock.`;
        } else if (playerInput === "scissors" && computerInput === "paper") {
            playerScore += 1;
            round.textContent = `Round #${roundNo}: You Win! Scissors beats Paper.`;
        } else if (playerInput === computerInput) {
            round.textContent = `Round #${roundNo}: Tie`;
        }

        playerChoiceDiv.textContent = `Player Choice: ${playerInput}`;
        computerChoiceDiv.textContent = `Computer Choice: ${computerInput}`;

        playerScoreDiv.textContent = `Player Score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

        results.appendChild(round);
        roundNo += 1;
        
    } else {
        if (playerScore > computerScore) {
            round.textContent = 'Game Over, You Win!';
        } else if (computerScore > playerScore) {
            round.textContent = 'Game Over, You Lose!';
        } else {
            round.textContent = 'Game Tied.'
        }

        container.appendChild(playAgain);
    }
}

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let roundNo = 1;

const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

const playerChoiceDiv = document.querySelector('#player-choice');
const computerChoiceDiv = document.querySelector('#computer-choice');

const results = document.querySelector('.results');
const round = document.createElement('div');

const container = document.querySelector('.container');
const playAgain = document.createElement('button');
playAgain.textContent = "Play Again?";
playAgain.addEventListener('click', function(){
    window.location.reload();
});

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});

    // if (playerScore <= 5 && computerScore <= 5) {
    //     computerInput = getComputerChoice();
    //     round.textContent = `Round #${roundNo} ${playRound(playerSelection, computerSelection)}`;
    //     results.appendChild(round);
    //     roundNo += 1;

    //     playerChoiceDiv.textContent = `Player Choice : ${playerSelection}`;
    //     computerChoiceDiv.textContent = `Computer Choice: ${computerSelection}`;

    //     playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    //     computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    // } else {
    //     if (playerScore > computerScore) {
    //         round.textContent = 'Game Over, You Win!';
    //     } else if (computerScore > playerScore) {
    //         round.textContent = 'Game Over, You Lose!';
    //     } else {
    //         round.textContent = 'Game Tied.'
    //     }
    // }
