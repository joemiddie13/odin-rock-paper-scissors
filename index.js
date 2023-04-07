function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

const hand = getComputerChoice();
console.log(hand);

function playRound(playerSelection, computerSelection) {
    
}