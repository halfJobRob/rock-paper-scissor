console.log("Let's Play ROCK PAPER SCISSOR");

let randomNumber = Math.random();

let computerChoice = getComputerChoice();
let humanChoice;

let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    if (randomNumber < 0.33) {
    return 'rock';
    } else if (randomNumber > 0.33 & randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissor';
    }
}


function getHumanChoice() {
    humanChoice = prompt("Choose rock, paper or scissor", "type rock, paper or scissor here");
}


function playRound() {

    getHumanChoice();
    console.log(humanChoice);

    getComputerChoice();
    console.log(computerChoice);


    if (computerChoice === humanChoice) {
        alert('DRAW');
    
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) { 
        alert('Human WINS') & (humanScore = humanScore +1);


    } else {
        alert('Computer WINS') & (computerScore = computerScore +1);
        
    }
}


function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();