function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    length = choices.length;
    choicePos = Math.floor(Math.random() * length);
    return choices[choicePos];
}

function playRound(playerInput, computerInput) {
    if (playerInput === "rock" && computerInput === "paper") {
        computerScore += 1;
        return ("You Lose! Paper beats Rock.");
    } else if (playerInput === "paper" && computerInput === "scissors") {
        computerScore += 1;
        return ("You Lose! Scissors beats Paper.");
    } else if (playerInput === "scissors" && computerInput === "rock") {
        computerScore += 1;
        return ("You Lose! Rock beats Scissors");
    } else if (playerInput === "rock" && computerInput === "scissors") {
        playerScore += 1;
        return ("You Win! Rock beats Scissors.");
    } else if (playerInput === "paper" && computerInput === "rock") {
        playerScore += 1;
        return ("You Win! Paper beats Rock.");
    } else if (playerInput === "scissors" && computerInput === "paper") {
        playerScore += 1;
        return ("You Win! Scissors beats Paper.");
    } else if (playerInput === computerInput) {
        return ("Tie");
    }
}

function mainGame() {
    const playerScoreDiv = document.querySelector('#player-score');
    const computerScoreDiv = document.querySelector('#computer-score');

    const playerChoice = document.querySelector('#player-choice');
    const computerChoice = document.querySelector('#computer-choice');

    const results = document.querySelector('.results');
    
    const round = document.createElement('p');
    let roundNo = 1;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (roundNo <= 10) {
                computerInput = getComputerChoice();
                round.textContent = `Round #${roundNo} ${playRound(button.id, computerInput)}`;
                results.appendChild(round);
                roundNo += 1;

                playerChoice.textContent = `Player Choice : ${button.id}`;
                computerChoice.textContent = `Computer Choice: ${computerInput}`;

                playerScoreDiv.textContent = `Player Score: ${playerScore}`;
                computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

            } else {
                if (playerScore > computerScore) {
                    round.textContent = 'Game Over, You Win!';
                } else if (computerScore > playerScore) {
                    round.textContent = 'Game Over, You Lose!';
                } else {
                    round.textContent = 'Game Tied.'
                }
            }
        });
    });
}

function endGame() {
    const container = document.querySelector('.container');
    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again";
    container.appendChild(playAgain);
}

let playerScore = 0;
let computerScore = 0;

mainGame();