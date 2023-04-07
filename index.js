function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }

// const hand = getComputerChoice();
// console.log(hand);

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie! Both players chose " + playerSelection + ".";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! " + "Computer chose " + computerSelection + "!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! The computer chose " + computerSelection + ".";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! The computer chose " + computerSelection + ".";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! The computer chose " + computerSelection + ".";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! The computer chose " + computerSelection + ".";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! The computer chose " + computerSelection + ".";
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));