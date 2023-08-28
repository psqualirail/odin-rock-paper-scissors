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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return console.log("Tie!  Rock ties Rock.");
                case 'paper':
                    return console.log("You lose!  Paper beats Rock.");
                case 'scissors':
                    return console.log("You win!  Rock beats Scissors.");
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return console.log("You win!  Paper beats Rock.");
                case 'paper':
                    return console.log("Tie!  Paper ties Paper.");
                case 'scissors':
                    return console.log("You lose!  Scissors beats Paper.");
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return console.log("You lose!  Rock beats Scissors.");
                case 'paper':
                    return console.log("You win!  Scissors beats Paper.");
                case 'scissors':
                    return console.log("Tie!  Scissors ties Scissors.");
            }
        default:
            return "Invalid selection";
    }
}

function game() {
    let computerSelection, playerSelection;
    for (let i=0; i<6; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt('Enter your move: rock, paper, or scissors.');
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()