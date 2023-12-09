'use strict';

function getNumberToGuess() {
  return Math.trunc(Math.random() * 20 + 1);
}

let numberToGuess = getNumberToGuess();
let score = 20;
let highScore = document.querySelector('.highscore').textContent;
document.querySelector('.number').textContent = numberToGuess;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  let messageText;

  if (!guess && guess !== 0) {
    messageText = 'No number!';
  } else if (guess === numberToGuess) {
    messageText = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > numberToGuess) {
    messageText = 'Too high!';
    score--;
  } else {
    messageText = 'Too low!';
    score--;
  }

  if (score === 0) {
    messageText = 'You lost!';
    document.querySelector('body').style.backgroundColor = '#ff0000';
    document.querySelector('.number').style.width = '30rem';
  }

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = messageText;
});

document.querySelector('.again').addEventListener('click', () => {
  numberToGuess = getNumberToGuess();
  score = 20;
  document.querySelector('.number').textContent = numberToGuess;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
