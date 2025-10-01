const x = "rock";
const y = "scissor";
const z = "paper";

let humanScore = 0;
let computerScore = 0;




function game(humanChoice, computerChoice) {
      
        if (humanChoice === computerChoice) {
        console.log("The result: It's a draw!");
    }

    else if (
        (humanChoice === x && computerChoice === y) ||
        (humanChoice === y && computerChoice === z) ||
        (humanChoice === z && computerChoice === x)) {
            humanScore++;
         console.log(`The result: You won ${humanChoice} beats ${computerChoice}! `);
        }
    else {
        computerScore++;
        console.log(`The result: You lost ${computerChoice} beats ${humanChoice}! `);
    }
    
}

const choices = [x, y, z];
let round = 1;
while (humanScore <5 && computerScore <5) {
    let human = prompt("Rock, Scissor, Paper?" + "").toLowerCase();
    let computer = choices[Math.floor(Math.random() * choices.length)];
    game(human, computer);
    console.log("Computer answer: " + computer);
    console.log("Player score: " + humanScore + " " + "Computer score: " + computerScore);
    console.log("Round: " + round++ );
}

    if (humanScore===5) {
        console.log("You won!");
 }  else {
        console.log("Computer won!")
    
 }