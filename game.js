let playerPoints = 0;
let computerPoints = 0;
const arr = ["rock", "scissors", "paper"];

function game() {
  // Ask user for input "rock", "scissors" or "paper"
  playerSelection = () => {
    const selection = prompt("Please select Paper, Scissors or Rock");
    switch (selection.toLowerCase()) {
      case "rock":
        return "rock";
      case "paper":
        return "paper";
      case "scissors":
        return "scissors";
      case "scissors":
        return "scissors";
      default:
        console.log("Please select something");
    }
  };

  // Computer selects a random number between 1 and 3.
  computerSelection = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    return arr[randomNumber - 1];
  };

  playRound = (playerSelection, computerSelection) => {
    if (
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "rock" && computerSelection == "scissors")
    ) {
      console.log("You win");
      playerPoints++;
    } else if (
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "rock" && computerSelection == "paper")
    ) {
      console.log("You lose");
      computerPoints++;
    } else if (playerSelection == computerSelection) {
      console.log("TIE");
    } else {
      console.log("ERROR! - choose 'rock, 'paper' or 'scissors'");
    }

    if (computerPoints == 4 || playerPoints == 4) {
      console.log("Last round");
    } else {
      console.log(
        "Your selection: " +
          playerSelection +
          " Computer selection: " +
          computerSelection +
          " Your points: " +
          playerPoints +
          " Computer points: " +
          computerPoints
      );
    }
  };

  while (computerPoints !== 5 && playerPoints !== 5) {
    playRound(playerSelection(), computerSelection());
  }
}
