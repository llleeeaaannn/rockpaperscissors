// Randomise computerSelection from Rock, Paper and Scissors
function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let computerRandom = Math.floor(Math.random() * computerOptions.length);
  let computerSelection = computerOptions[computerRandom];
  return computerSelection;
}



// Define playerSelection based on button clicked
let buttonOne = document.getElementById(1);
buttonOne.addEventListener('click',
  function () {
    playRound(buttonOne.name)
  }
);

let buttonTwo = document.getElementById(2);
buttonTwo.addEventListener('click',
  function () {
    playRound(buttonTwo.name)
  }
);

let buttonThree = document.getElementById(3);
buttonThree.addEventListener('click',
  function () {
    playRound(buttonThree.name)
  }
);



// Define score and results elements are variables
let results = document.getElementById('results');
let score = document.getElementById('score');




// Function which plays Rock, Paper, Scissors between user (playerSelection) and computer (computerSelection) and outputs result of each round to DOM
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === computer) {
    numberOfDraws++;
    results.innerHTML = `This round is a draw! ${playerSelection} draws with ${computerSelection}`;
    score.innerHTML = `The current score is: You: ${playerScore}, Computer: ${computerScore}. There have been ${numberOfDraws} draws`;
    announceWinner();
  } else if (player === "rock" && computer === "scissors") {
      playerScore++;
      results.innerHTML = `You win this round! ${playerSelection} beats ${computerSelection}`;
      score.innerHTML = `The current score is: You: ${playerScore}, Computer: ${computerScore}. There have been ${numberOfDraws} draws`;
      announceWinner();
  } else if (player === "paper" && computer === "rock") {
      playerScore++;
      results.innerHTML = `You win this round! ${playerSelection} beats ${computerSelection}`;
      score.innerHTML = `The current score is: You: ${playerScore}, Computer: ${computerScore}. There have been ${numberOfDraws} draws`;
      announceWinner();
  } else if (player === "scissors" && computer === "paper") {
      playerScore++;
      results.innerHTML = `You win this round! ${playerSelection} beats ${computerSelection}`;
      score.innerHTML = `The current score is: You: ${playerScore}, Computer: ${computerScore}. There have been ${numberOfDraws} draws`;
      announceWinner();
  } else {
      computerScore++;
      results.innerHTML = `You lost this round! ${playerSelection} loses to ${computerSelection}`;
      score.innerHTML = `The current score is: You: ${playerScore}, Computer: ${computerScore}. There have been ${numberOfDraws} draws`;
      announceWinner();
  }
}



// Set initial values for score keeping for annouceWinner()
let playerScore = 0;
let computerScore = 0;
let numberOfDraws = 0;



//Function to announce the winner of the game once 5 rounds have been played.
function announceWinner() {
  if (computerScore + playerScore + numberOfDraws >= 5) {
    if (numberOfDraws === 1) {
      if (playerScore === computerScore) {
        score.innerHTML = `The Game is over. It's a Draw! Your score was ${playerScore} and the computers score was ${computerScore}. There was ${numberOfDraws} draw.`;
      } else if (playerScore > computerScore) {
        score.innerHTML = `The Game is over. Congratulations, You Win! Your score was ${playerScore} and the computers score was ${computerScore}. There was ${numberOfDraws} draw.`;
      } else {
        score.innerHTML = `The Game is over. Unfortunately You Lost! Your score was ${playerScore} and the computers score was ${computerScore}. There was ${numberOfDraws} draw.`;
      }
    } else {
      if (playerScore === computerScore) {
        score.innerHTML = `The Game is over. It's a Draw! Your score was ${playerScore} and the computers score was ${computerScore}. There were ${numberOfDraws} draws.`;
      } else if (playerScore > computerScore) {
        score.innerHTML = `The Game is over. Congratulations, You Win! Your score was ${playerScore} and the computers score was ${computerScore}. There were ${numberOfDraws} draws.`;
      } else {
        score.innerHTML = `The Game is over. Unfortunately You Lost! Your score was ${playerScore} and the computers score was ${computerScore}. There were ${numberOfDraws} draws.`;
      }
    }
    showButtons();
    let playAgain = document.getElementsByClassName('playAgain');
    playAgain[0].classList.toggle('show');
  }
}



// Function and Event Listener to reveal choice buttons upon starting game
startGame.addEventListener('click', () => showButtons());

function showButtons() {
  let choiceButtons = document.getElementsByClassName('rpsbuttons');
  choiceButtons[0].classList.toggle('show');
  let startGame = document.getElementById('startGame');
  startGame.classList.add('hide');
}



// Button to play thr game again upon game ending
let playAgain = document.getElementsByClassName('playAgain');
playAgain[0].addEventListener('click', () => clearGame());



// Fucntion to clear previous game result and score and to hide 'Play Again' button
function clearGame() {
  playerScore = 0;
  computerScore = 0;
  numberOfDraws = 0;
  score.innerHTML = " ";
  results.innerHTML = " ";
  playAgain[0].classList.toggle('show');
  showButtons();
}

// Function to show what turn it is
