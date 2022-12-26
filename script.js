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

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log(`${playRound(button.id, getComputerChoice())}`);
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
        })
    });
}