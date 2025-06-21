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
