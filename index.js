// function getComputerChoice() {
//     const options = ["rock", "paper", "scissors"];
//     const randomChoice = Math.floor(Math.random() * options.length);
//     return options[randomChoice];
//   }
  
//   function playRound(playerSelection, compChoice) {
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection === compChoice) {
//       return "You draw!";
//     } else if (playerSelection == "rock" && compChoice == "scissors") {
//       return "You win!";
//     } else if (playerSelection == "paper" && compChoice == "rock") {
//       return "You win!";
//     } else if (playerSelection == "scissors" && compChoice == "paper") {
//       return "You win!";
//     } else {
//       return "You lose!";
//     }
//   }
  
//   function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     for (var i = 0; i < 5; i++) {
//       playerSelection = prompt("Make your choice: rock, paper, or scissors?");
//       computerSelection = getComputerChoice();
//       let result = playRound(playerSelection, computerSelection);
//       console.log(
//         "Round " + (i + 1) + ": You chose " + playerSelection + ", computer chose " + computerSelection + ", result: " + result);
//       if (result === "You win!") {
//         playerWins++;
//       } else if (result === "You lose!") {
//         computerWins++;
//       }
//     }
//     console.log("Final score: You " + playerWins + ", computer " + computerWins);
//     if (playerWins > computerWins) {
//       console.log("You win the game!");
//     } else if (playerWins < computerWins) {
//       console.log("You lose the game.");
//     } else {
//       console.log("The game is a draw.");
//     }
//   }

// Challenging myself to re-learn and code this line by line

// function getComputerChoice
//  options are rock, paper, scissors
//  computer needs to randomly make a choice between the three options
//  display the choice in the console

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"]
}