//Computer choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
getComputerChoice();

//Human choice
function getHumanChoice() {
    const choice = prompt('Enter your choice (rock, paper, scissors):');
    return choice.toLowerCase();
}
getHumanChoice();

//declare score variables
let humanScore = 0;
let computerScore = 0;

//declare PlayRound function

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playGame() {
    const NumberOfRounds = 5;
    for (let i = 0; i < NumberOfRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        return `Congratulations! You won the game with a score of ${humanScore} to $ {computerScore}.`;
    }
    else {
        return `Sorry, you lost the game with a score of ${humanScore} to ${computerScore}.`;
    }

}
console.log(playGame());