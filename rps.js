 let humanScore = 0;
 let computerScore = 0;

// Complete & Correct
const getComputerChoice = function () {
const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    // Check for 0
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    // randomNumber will be 2 here
    return "scissor";
  }
};
// end getComputerChoice

// Write function getHumanChoice
// Use Prompt
// Test function using console.log or alert
const getHumanChoice = function () {
  let inputValue = prompt("pick rock, paper or scissor").toLowerCase();
    if (inputValue !== "rock" && inputValue !== "paper" && inputValue !== "scissor") {
    return getHumanChoice();
  } else {
    return inputValue;
  }
};
// end getHumanChoice

let round = 1; //keep track of rounds

function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
              alert("Draw");
            } else if ((humanChoice === "rock" && computerChoice === "scissor") || 
                   (humanChoice === "paper" && computerChoice === "rock") || 
                   (humanChoice === "scissor" && computerChoice === "paper")) {
              humanScore++;
              alert("You Win " + humanChoice + " beats " + computerChoice);
            } else {
              computerScore++;
              alert("You Lose " + computerChoice + " beats " + humanChoice);
            }
            alert(`Round ${round}: Human Score: ${humanScore}, Computer Score: ${computerScore}`); //track scores
          }

// Create a function playGame
// Move playRound and scores inside playGame
// Play 5 rounds
const playGame = function() {
  
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice(); // Get choice INSIDE the loop
    const computerSelection = getComputerChoice(); // Get choice INSIDE the loop

        playRound(humanSelection, computerSelection);
        round++; //increment round count
}
  
  if (humanScore >= 5) {
        alert("You WIN!!!");
    } else {
        alert("You LOSE... LOOSER!!!");
    }

};

playGame();
