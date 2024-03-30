const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let randomNumber = parseInt(Math.random() * 100 + 1);
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = userInput.value;
    console.log(guess);
    console.log(randomNumber);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayMessage(`Game Over. Random Number is ${randomNumber}`);
      displayGuess(guess);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulation! Your guess is correct`);
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is TOO LOW`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is TOO HIGH`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', ''); // this disables user input field
  // submit.setAttribute('hidden', ''); // this hides submit button
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
