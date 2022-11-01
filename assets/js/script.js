// DOM variables

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissor = document.getElementById('scissor');
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