$(document).ready(function() {
  let playerPoints = 0;
  let computerPoints = 0;
  let roundCounter = 0;

  $(".p-points").text(playerPoints);
  $(".c-points").text(computerPoints);
  $(".r-counter").text(roundCounter);
  $(".result").text("Start the game");

  const arr = ["rock", "scissors", "paper"];

  // Computer selects a random number between 1 and 3.
  function computerSelection() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerChoice = arr[randomNumber - 1];
    console.log("console log " + computerChoice);
    changeCompImage(computerChoice);
    return computerChoice;
  }

  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "rock" && computerSelection == "scissors")
    ) {
      $(".result").text("You win");
      console.log("You win");
      playerPoints++;
      $(".p-points").text(playerPoints);
    } else if (
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "rock" && computerSelection == "paper")
    ) {
      $(".result").text("You lose");
      console.log("You lose");
      computerPoints++;
      $(".c-points").text(computerPoints);
    } else if (playerSelection == computerSelection) {
      $(".result").text("Draw");
      console.log("Draw");
    } else {
      console.log("ERROR! - choose 'rock, 'paper' or 'scissors'");
    }

    if (computerPoints == 5 || playerPoints == 5) {
      $(".result").text("GAME OVER");
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
  }

  function changePlayerImage(choice) {
    $(".player > img")
      .first()
      .attr("src", `/img/${choice}.png`);
    let animationName = "animated wobble";
    let animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $(".player > img")
      .addClass(animationName)
      .one(animationEnd, function() {
        $(this).removeClass(animationName);
      });
  }

  function changeCompImage(choice) {
    $(".computer > img")
      .first()
      .attr("src", `/img/${choice}.png`);
    let animationName = "animated wobble";
    let animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $(".computer > img")
      .addClass(animationName)
      .one(animationEnd, function() {
        $(this).removeClass(animationName);
      });
  }

  function game() {
    console.log(playerPoints);
    console.log(computerPoints);

    let animationName = "animated pulse";
    let animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $(this)
      .addClass(animationName)
      .one(animationEnd, function() {
        $(this).removeClass(animationName);
      });
    let alt = $(this).attr("alt");
    playRound(alt, computerSelection());
    changePlayerImage(alt);
    roundCounter++;
    $(".r-counter").text(roundCounter);
  }

  $(".footer > img").click(game);

  $();
});
