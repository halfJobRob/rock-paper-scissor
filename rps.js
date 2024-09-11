console.log("Let's Play ROCK PAPER SCISSOR");

let randomNumber = Math.random();

const r = "rock";
const p = "paper";
const s = "scissor";

let humanAnswer;

let computerChoice = getComputerChoice();

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    if (randomNumber < 0.33) {
    return r;
    } else if (randomNumber > 0.33 & randomNumber < 0.66) {
        return p;
    } else {
        return s;
    }
}

getComputerChoice();
getHumanChoice();

function getHumanChoice() {
    humanAnswer = prompt("Choose rock, paper or scissor", "type rock, paper or scissor here");
}

console.log(humanAnswer);
let humanChoice = humanAnswer;

console.log(computerChoice);


function playRound(humanChoice, computerChoice) {

    if ((humanChoice === 'rock' && computerChoice === 'scissor') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissor' && computerChoice === 'paper')) {
        alert('Human WINS');
    
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissor') || (humanChoice === 'scissor' && computerChoice === 'rock')) {
        alert('Computer WINS');

    } else {
        alert('DRAW');
    }

}

playRound();