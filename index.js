function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }

const hand = getComputerChoice();
console.log(hand);

function playRound(playerSelection, computerSelection) {

}