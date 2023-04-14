function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }
  
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
      computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      console.log(
        "Round " + (i + 1) + ": You chose " + playerSelection + ", computer chose " + computerSelection + ", result: " + result);
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

// Challenging myself to re-learn and code this line by line

// function getComputerChoice
//  options are rock, paper, scissors
//  computer needs to randomly make a choice between the three options
//  display the choice in the console

// function getComputerChoice() {
//   const options = ["rock", "paper", "scissors"]
//   const randomChoice = Math.floor(Math.random() * options.length);
//   return options[randomChoice];
// }

// Write a function that plays a single round of rock, paper scissors
// function takes two parameters (playerSelection, computerSelection)
// whatever the user inputs needs to be case-INSENSITIVE
// if playerSelection === computerSelection then return a "draw!"
// if playerSelection is "rock" and computer selects "scissors", then return "win!"
// if player selects "paper" and computer selects "rock", then return "win!"
// if player selects "scissors" and computer selects "paper", then return "win!"
// if those combinations don't happen then the player has to lose!
// return a string that declares a winner

// function playRound(playerSelection, computerSelection) {
//   playerSelection = playerSelection.toLowerCase();        //.toLowerCase() is a JavaScript method on ensuring the comparison choices are NOT case-sensitive
//   if (playerSelection === computerSelection) {
//     return "Tie!";
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     return "Win!";
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return "Win!";
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     return "Win!";
//   } else {
//     return "You lose!";
//   }
// }

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