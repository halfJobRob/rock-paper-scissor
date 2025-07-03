<<<<<<< HEAD
let humanScore = 0;
let computerScore = 0;
let round = 0; //keep track of rounds

// ComputerChoice
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
=======
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
>>>>>>> 0180ae88e214cc24dc12d44456339294b8637222

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

<<<<<<< HEAD
// HumanChoice
const buttons = document.querySelectorAll("button");
const choicesDiv = document.querySelector(".choices"); //select or target choices

//create a new h2 element for human and comp
const dispHmnChoice = document.createElement("h2");
const dispCpuChoice = document.createElement("h2");

//set text for choices
dispHmnChoice.textContent = "Human: ???";
dispCpuChoice.textContent = "Computer: ???";

//append display choices to choices
choicesDiv.appendChild(dispHmnChoice);
choicesDiv.appendChild(dispCpuChoice);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice(); // compChoice function must be here to be called by event listener

    playRound(humanChoice, computerChoice);

    //target scores
    const dispHmnScore = document.querySelector(".human-score h2");
    const dispCpuScore = document.querySelector(".computer-score h2");
    //target round
    const dispRound = document.querySelector(".round h2");

    // update text content of the EXISTING choice elements
    dispHmnChoice.textContent = "Human: " + humanChoice;
    dispCpuChoice.textContent = "Computer: " + computerChoice;
    
    // update text content
    dispHmnScore.textContent = "You: " + humanScore;
    dispCpuScore.textContent = "Machine: " + computerScore;
    dispRound.textContent = "Round: " + round;

    if (humanScore >= 5 || computerScore >= 5) {
      endGame();
    }

  });
})

function endGame() {
    if (humanScore >= 5) {
     // parentNode.removeChild(child);
      alert("You Win!");
    } else {
     // parentNode.removeChild(child);
      alert("You Lose!");
    }
}

function playRound(humanSelection, computerSelection) {

           if (humanSelection === computerSelection) {
           } else if ((humanSelection === "rock" && computerSelection === "scissor") || 
                  (humanSelection === "paper" && computerSelection === "rock") || 
                  (humanSelection === "scissor" && computerSelection === "paper")) {
             humanScore++;
           } else {
             computerScore++;
           }
           console.log(humanSelection);
           console.log(computerSelection);
           round++;
         }

// !logic complete

// Create a function playGame
// Move playRound and scores inside playGame
// Play 5 rounds
=======
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
>>>>>>> 0180ae88e214cc24dc12d44456339294b8637222
