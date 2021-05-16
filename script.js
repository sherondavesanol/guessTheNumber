'use strict';

// Assigning Variables
let again = document.querySelector(".again");
let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let bodyStyle = document.querySelector('body').style;
let numberStyle = document.querySelector('.number').style;
let randomNumber = Math.floor(Math.random() * 20) + 1;

let scoreValue = 20;
let highscoreValue = 0;

// Program
check.addEventListener('click', checkClick);
again.addEventListener('click', againClick);
guess.addEventListener('keyup', guessEnter);

function guessEnter (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        check.click();
        }
    }

// Check button click
function checkClick () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) { // No input number
        message.textContent = '⛔️ No number!';
    }

    else if (guess === randomNumber) { // Correct guess
        message.textContent = '🎉 Correct Number!';
        number.textContent = randomNumber;

        bodyStyle.backgroundColor = '#60b347';
        numberStyle.width = '30rem';

        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            highscore.textContent = scoreValue;
        }
    }

    else if (guess !== randomNumber) { // Guess value is lower than the correct value
        if (scoreValue > 1) { // If score is not zero
            message.textContent = (guess > randomNumber ? '📈 Too high!' : '📉 Too low!')
            scoreValue--; 
            score.textContent = scoreValue;
        }
        else { // If score reaches zero
            message.textContent = '💥 You lost the game!';
            scoreValue= 0;
            score.textContent = scoreValue;
          }
    }
}


// Again button click
function againClick () {
    // Set to starting score and different random number
    scoreValue = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;

    // Set to default display
    score.textContent = scoreValue;
    number.textContent = '?';
    message.textContent = 'Start guessing...';
    guess.value = '';
    bodyStyle.backgroundColor = '#222';
    numberStyle.width = '15rem';
};