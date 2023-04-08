function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }

// const hand = getComputerChoice();
// console.log(hand);

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection === computerSelection) {
//         return "Tie! Both players chose " + playerSelection + ".";
//     } else if (playerSelection == "rock" && computerSelection == "paper") {
//         return "You lose! " + "Computer chose " + computerSelection + "!";
//     } else if (playerSelection == "rock" && computerSelection == "scissors") {
//         return "You win! The computer chose " + computerSelection + ".";
//     } else if (playerSelection == "paper" && computerSelection == "rock") {
//         return "You win! The computer chose " + computerSelection + ".";
//     } else if (playerSelection == "paper" && computerSelection == "scissors") {
//         return "You lose! The computer chose " + computerSelection + ".";
//     } else if (playerSelection == "scissors" && computerSelection == "rock") {
//         return "You lose! The computer chose " + computerSelection + ".";
//     } else if (playerSelection == "scissors" && computerSelection == "paper") {
//         return "You win! The computer chose " + computerSelection + ".";
//     }
// }

// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


const compChoice = getComputerChoice()

function playRound(playerSelection, compChoice) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === compChoice) {
        return "You draw!";
    } else if (playerSelection == "rock" && compChoice == "scissors") {
        return "You win!";
    } else if (playerSelection == "paper" && compChoice == "rock") {
        return "You win!";
    } else if (playerSelection == "scissors" && compChoice == "paper") {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (var i = 0; i < 5; i++) {
        playerSelection = prompt("Make your choice: rock, paper, or scissors?");
        computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection);
        console.log("Round " + (i + 1) + ": You chose " + playerSelection + computerSelection + ", result: " + result);
        if (result === "You win!") {
            playerWins++;
        } else if (result === "You lose!") {
            computerWins++;
        }
    }
    console.log("Final score: You " + playerWins + ", computer " + computerWins);
    if (playerWins > computerWins) {
        console.log("You win the game!");
    } else if (playerWins < computerWins) {
        console.log("You lose the game.");
    } else {
        console.log("The game is a draw.");
    }
}