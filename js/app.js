$(document).ready(function() {
  let playerPoints = 0;
  let computerPoints = 0;
  let roundCounter = 0;

  $(".p-points").text(playerPoints);
  $(".c-points").text(computerPoints);
  $(".r-counter").text(roundCounter);
  $(".result").text("Start the game");

  const arr = ["rock", "scissors", "paper"];

  function showGameScreen() {
    $(".play")
      .removeClass("play")
      .addClass("flash-fast");
    const first = setTimeout(() => {
      $(".play").addClass("none");
      $("#main").fadeIn("slow");
      $("#main").removeClass("none");
      clearInterval(first);
    }, 1000);
  }

  function computerSelection() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerChoice = arr[randomNumber - 1];
    changeCompImage(computerChoice);
    return computerChoice;
  }

  function disableScreenFor(milisec) {
    $(".footer > img").css("pointer-events", "none");
    setTimeout(function() {
      $(".footer > img").css("pointer-events", "auto");
    }, milisec);
  }

  function countdown(sec) {
    let i = sec;

    const count = setInterval(() => {
      i--;
      if (i >= 1) {
        const result = $(".result").text(i);
        return result;
      } else {
        const again = $(".result").text("Play Again");
        clearInterval(count);
        return again;
      }
    }, 1000);
  }

  function playAgain() {
    $(".result")
      .text(countdown(4))
      .addClass("play");
  }

  function resetCounters() {
    playerPoints = 0;
    computerPoints = 0;
    $(".p-points").text(playerPoints);
    $(".c-points").text(computerPoints);
    roundCounter = 0;
    $(".r-counter").text(roundCounter);
  }

  function playRound(playerSelection, computerSelection) {
    $(".result").removeClass("play");
    roundCounter++;
    $(".r-counter").text(roundCounter);

    if (
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "rock" && computerSelection == "scissors")
    ) {
      $(".result").text("You win");
      playerPoints++;
      $(".p-points").text(playerPoints);
    } else if (
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "rock" && computerSelection == "paper")
    ) {
      $(".result").text("You lose");
      computerPoints++;
      $(".c-points").text(computerPoints);
    } else if (playerSelection == computerSelection) {
      $(".result").text("Draw");
    }

    if (computerPoints == 5 || playerPoints == 5) {
      //RESETING COUNTERS
      $(".result").text("GAME OVER");
      resetCounters();
      disableScreenFor(5000);
      playAgain();
      // showResultScreen();
    }
  }

  function changePlayerImage(choice) {
    $(".player > img")
      .first()
      .attr("src", `./img/${choice}.png`);
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
      .attr("src", `./img/${choice}.png`);
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
    let animationName = "animated bounceIn";
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
  }
  $(".play")
    .text("Play")
    .click(showGameScreen);
  $(".footer > img").click(game);
});
