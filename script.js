let humanScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");

let roundDisplay = document.getElementById("round");
let statusDisplay = document.getElementById("status");
let scoreDisplay = document.getElementById("score");
let computerChoiceDisplay = document.getElementById("computerChoice");

rock.addEventListener("click",() => playRound ("rock"));
scissor.addEventListener("click", () => playRound ("scissor"));
paper.addEventListener("click", () => playRound ("paper"));

let round = 1;

function game(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        statusDisplay.textContent = "Draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock"))
        {
            humanScore++;
            statusDisplay.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore ++;
            statusDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
} 
const choices = ["rock", "paper", "scissor"];


function playRound(humanChoice) {
      
     if (humanScore >= 5 || computerScore >= 5) return
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    game(humanChoice, computerChoice);
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    scoreDisplay.textContent = `Player: ${humanScore} | Computer ${computerScore}`;
    roundDisplay.textContent = `Round: ${round++}`;

    if (humanScore === 5) {
        statusDisplay.textContent = "Congratulation, you won!";
    } else if (computerScore === 5) {
        statusDisplay.textContent = "You lost, the computer won!";
    }
    
}
