// DOM variables

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissor = document.getElementById('scissors');
    let lizard = document.getElementById('lizard');
    let spock = document.getElementById('spock');
    const rpslsOptions = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock'];

    let result = document.getElementById('result');

    let userScore = 0;
    let computerScore = 0;
    
})

// random choice for computer function

function createComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 5);
    return rpslsOptions[randomChoice];
}

// run game function

function runGame(userChoice) {
    let computerChoice = createComputerChoice();
    displayResult(userChoice, computerChoice);
}

/**
 * score variables, will be called in function
 * to be able to update score result
 */

let updateScore = () => {
    let userScoreDisplay = document.getElementById('user-score');
    userScoreDisplay.innerHTML = userScore;
    let computerScoreDisplay = document.getElementById('computer-score');
    computerScoreDisplay.innerHTML = computerScore;
}

// results to be displayed and to update score

function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie!! 😬";
        userScore++;
        computerScore++;
        updateScore();
    } else if (userChoice === scissors && computerChoice === paper) {
        result.innerHTML = 'Scissor cuts paper, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === paper && computerChoice === rock) {
        result.innerHTML = 'Paper covers rock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === rock && computerChoice === lizard) {
        result.innerHTML = 'Rock crushes lizard, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === lizard && computerChoice === spock) {
        result.innerHTML = 'Lizard poisons Spock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === spock && computerChoice === scissors) {
        result.innerHTML = 'Spock smashes scissors, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === scissors && computerChoice === lizard) {
        result.innerHTML = 'Scissors decapitates lizard, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === lizard && computerChoice === paper) {
        result.innerHTML = 'Lizard eats paper, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === paper && computerChoice === spock) {
        result.innerHTML = 'Paper disproves Spock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === spock && computerChoice === rock) {
        result.innerHTML = 'Spock vaporizes rock, you win!! ⭐';
        userScore++;
        updateScore();
    } else if (userChoice === rock && computerChoice === scissors) {
        result.innerHTML = 'Rock crushes scissors, you win!! ⭐'
        userScore++;
        updateScore();
    } else if (userChoice === paper && computerChoice === scissors) {
        result.innerHTML = 'Oh no! Scissors cuts paper, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === rock && computerChoice === paper) {
        result.innerHTML = 'Oh no! Paper covers rock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === lizard && computerChoice === rock) {
        result.innerHTML = 'Oh no! Rock crushes lizard, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === spock && computerChoice === lizard) {
        result.innerHTML = 'Oh no! Lizard poisons Spock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === scissors && computerChoice === spock) {
        result.innerHTML = 'Oh no! Spock smashes scissors, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === lizard && computerChoice === scissors) {
        result.innerHTML = 'Oh no! Scissors decapitates lizard, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === paper && computerChoice === lizard) {
        result.innerHTML = 'Oh no! Lizard eats paper, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === spock && computerChoice === paper) {
        result.innerHTML = 'Oh no! Paper disproves Spock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else if (userChoice === rock && computerChoice === spock) {
        result.innerHTML = 'Oh no! Spock vaporizes rock, you lose.. 😕'; 
        computerScore++;
        updateScore();
    } else (userChoice === scissors && computerChoice === rock) {
        result.innerHTML = 'Oh no! Rock crushes scissors, you lose.. 😕'; 
        computerScore++;
        updateScore();
    }
}