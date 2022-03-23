function computerPlay() {
  var computerOptions = ["Rock", "Paper", "Scissors"];
  var computerRandom = Math.floor(Math.random() * computerOptions.length);
  var computerChoice = computerOptions[computerRandom];
  return computerChoice;
}

var playerScore = 0;
var computerScore = 0;
var numberOfDraws = 0;

function playRound() {
  var playerSelection = window.prompt("Choose rock, paper or scissors:");
  var computerSelection = computerPlay();
  var player = playerSelection.toLowerCase();
  var computer = computerSelection.toLowerCase();
  if (player === "rock" || player === "paper" || player === "scissors") {
    if (player === computer) {
      numberOfDraws++;
      //return(`This round is a draw! ${playerSelection} draws with ${computerSelection}`);
      console.log(`This round is a draw! ${playerSelection} draws with ${computerSelection}`);
    } else if (player === "rock" && computer === "scissors") {
        playerScore++;
        //return(`You win this round! ${playerSelection} beats ${computerSelection}`);
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    } else if (player === "paper" && computer === "rock") {
        playerScore++;
        //return(`You win this round! ${playerSelection} beats ${computerSelection}`);
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    } else if (player === "scissors" && computer === "paper") {
        playerScore++;
        //return(`You win this round! ${playerSelection} beats ${computerSelection}`);
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        //return(`You lost this round! ${playerSelection} loses to ${computerSelection}`);
        console.log(`You lost this round! ${playerSelection} loses to ${computerSelection}`);
    }
  } else {
    alert("Please try again and enter a valid choice");
    console.log("You didnt enter a valid choice this time!");
    playRound();
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (numberOfDraws === 1) {
    if (playerScore === computerScore) {
      console.log(`It's a Draw! Your score was ${playerScore} and the computers score was ${computerScore}. There was ${numberOfDraws} draw.`);
    } else if (playerScore > computerScore) {
      console.log(`Congratulations, You Win! Your score was ${playerScore} and the computers score was ${computerScore}. There was ${numberOfDraws} draw.`);
    } else {
      console.log(`Unfortunately You Lost! Your score was ${playerScore} and the computers score was ${computerScore}. There was ${numberOfDraws} draw.`);
    }
  } else {
    if (playerScore === computerScore) {
      console.log(`It's a Draw! Your score was ${playerScore} and the computers score was ${computerScore}. There were ${numberOfDraws} draws.`);
    } else if (playerScore > computerScore) {
      console.log(`Congratulations, You Win! Your score was ${playerScore} and the computers score was ${computerScore}. There were ${numberOfDraws} draws.`);
    } else {
      console.log(`Unfortunately You Lost! Your score was ${playerScore} and the computers score was ${computerScore}. There were ${numberOfDraws} draws.`);
    }
  }
  playerScore = 0;
  computerScore = 0;
  numberOfDraws = 0;
  return "Thank you for playing!"
}
