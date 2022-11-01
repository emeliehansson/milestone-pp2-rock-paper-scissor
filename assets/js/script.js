// DOM variables

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
const rpslsOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let result = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

// random choice for computer function

function createComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 5);
    return rpslsOptions[randomChoice];
}

// game function

function game(player) {
    let computer = createComputerChoice();
    displayResult(player, computer);
    return rpslsOptions[player];
}

/**
 * score variables, will be called in function
 * to be able to update score result
 */

function updateScore() {
    let userScoreDisplay = document.getElementById('user-score');
    userScoreDisplay.innerHTML = userScore;
    let computerScoreDisplay = document.getElementById('computer-score');
    computerScoreDisplay.innerHTML = computerScore;
}

// results to be displayed and to update score

function displayResult(player, computer) {
    if (player === computer) {
        result.innerHTML = "It's a tie!! 😬";
        userScore++;
        computerScore++;
        updateScore();
    } else if (player === 'scissors' && computer === 'paper') {
        result.innerHTML = 'Scissor cuts paper, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'paper' && computer === 'rock') {
        result.innerHTML = 'Paper covers rock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'rock' && computer === 'lizard') {
        result.innerHTML = 'Rock crushes lizard, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'lizard' && computer === 'spock') {
        result.innerHTML = 'Lizard poisons Spock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'spock' && computer === 'scissors') {
        result.innerHTML = 'Spock smashes scissors, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'scissors' && computer === 'lizard') {
        result.innerHTML = 'Scissors decapitates lizard, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'lizard' && computer === 'paper') {
        result.innerHTML = 'Lizard eats paper, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'paper' && computer === 'spock') {
        result.innerHTML = 'Paper disproves Spock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'spock' && computer === 'rock') {
        result.innerHTML = 'Spock vaporizes rock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'rock' && computer === 'scissors') {
        result.innerHTML = 'Rock crushes scissors, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (player === 'paper' && computer === 'scissors') {
        result.innerHTML = 'Oh no! Scissors cuts paper, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'rock' && computer === 'paper') {
        result.innerHTML = 'Oh no! Paper covers rock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'lizard' && computer === 'rock') {
        result.innerHTML = 'Oh no! Rock crushes lizard, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'spock' && computer === 'lizard') {
        result.innerHTML = 'Oh no! Lizard poisons Spock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'scissors' && computer === 'spock') {
        result.innerHTML = 'Oh no! Spock smashes scissors, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'lizard' && computer === 'scissors') {
        result.innerHTML = 'Oh no! Scissors decapitates lizard, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'paper' && computer === 'lizard') {
        result.innerHTML = 'Oh no! Lizard eats paper, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'spock' && computer === 'paper') {
        result.innerHTML = 'Oh no! Paper disproves Spock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'rock' && computer === 'spock') {
        result.innerHTML = 'Oh no! Spock vaporizes rock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (player === 'scissors' && computer === 'rock') {
        result.innerHTML = 'Oh no! Rock crushes scissors, you lose.. 😕'; 
        computerScore++;
        updateScore();
    }

}


// event listeners for the 5 buttons

rock.addEventListener('click', function() {
    game('rock');
});

paper.addEventListener('click', function() {
    game('paper');
});

scissors.addEventListener('click', function() {
    game('scissors');
});

lizard.addEventListener('click', function() {
    game('lizard');
});

spock.addEventListener('click', function() {
    game('spock');
});