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

function playRound(playerSelection, getComputerChoice) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === getComputerChoice) {
        return "You draw!";
    } else if (playerSelection == "rock" && getComputerChoice == "scissors") {
        return "You win!";
    } else if (playerSelection == "paper" && getComputerChoice == "rock") {
        return "You win!";
    } else if (playerSelection == "scissors" && getComputerChoice == "paper") {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (var i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your choice: rock, paper, or scissors?");
        let computerSelection = getComputerChoice
        let result = playRound(playerSelection, computerSelection);
        console.log("Round " + (i + 1) + ": You chose " + playerSelection + computerSelection + ", result: " + result);
        if (result === "You win!") {
            playerWins++;
        } else if (result === "You lose!") {
            computerWins++;
        }
    }
}