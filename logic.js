let playerScore, computerScore;

function getComputerChoice() {
    let num = Math.floor(3 * Math.random());
    if (num == 0) {
        return 'rock';
    }
    else if (num == 1) {
        return 'paper';
    }
    return 'scissors';
}

function handleClick(event) {
    const clickedButton = event.target;
    const playerSelection = clickedButton.innerText;
    playRound(playerSelection);
}

function initialize() {
    playerScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    const result = document.querySelector('#result');
    result.innerText = "";
}

function updateScoreDisplay() {
    console.log("updateScoreDisplay called.");
    const playerScoreDisplay = document.querySelector('#score-player');
    playerScoreDisplay.innerText = playerScore;
    const computerScoreDisplay = document.querySelector('#score-computer');
    computerScoreDisplay.innerText = computerScore;
}

function playRound(playerSelection) {
    console.log("playRound called.")
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    const result = document.querySelector('#result');

    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    result.innerText = "Tie!  Rock ties Rock.";
                    break;
                case 'paper':
                    result.innerText = "You lose!  Paper beats Rock.";
                    computerScore += 1;
                    updateScoreDisplay();
                    break;
                case 'scissors':
                    result.innerText = "You win!  Rock beats Scissors.";
                    playerScore += 1;
                    updateScoreDisplay();
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    result.innerText = "You win!  Paper beats Rock.";
                    playerScore += 1;
                    updateScoreDisplay();
                    break;
                case 'paper':
                    result.innerText = "Tie!  Paper ties Paper.";
                    break;
                case 'scissors':
                    result.innerText = "You lose!  Scissors beats Paper.";
                    computerScore += 1;
                    updateScoreDisplay();
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    result.innerText = "You lose!  Rock beats Scissors.";
                    computerScore += 1;
                    updateScoreDisplay();
                    break;
                case 'paper':
                    result.innerText = "You win!  Scissors beats Paper.";
                    playerScore += 1;
                    updateScoreDisplay();
                    break;
                case 'scissors':
                    result.innerText = "Tie!  Scissors ties Scissors.";
                    break;
            }
            break;
    }

    // End game, reinitialize
    if (playerScore >= 5) {
        alert('Player has won the game!  Restarting.');
        initialize();
    } else if (computerScore >= 5) {
        alert('Computer has won the game!  Restarting.');
        initialize();
    }
}

function game() {
    initialize();
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', handleClick));
}

game();