//Rock, paper and scissors game with UI 5 rounds. The Odin Project.


const buttons = document.querySelectorAll('button');
const playersHand = document.querySelector('.playerChoice');
const computersHand = document.querySelector('.compuChoice');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.compuScore');
const winner = document.querySelector('.winner');
const gameScore = document.querySelector('.gameStatus');

let playerCount = 0;
const pC = ++playerCount;
let computerCount = 0;
const cC = ++computerCount;
announceWinner();
let playerSelection;

buttons.forEach((button) => 
button.addEventListener('click', () => {

    playerSelection = button.textContent;
    playersHand.textContent = `Player Choice: ${playerSelection} `;
    computersHand.textContent = `Computers Choice: ${getComputerChoice()} `;
    playerScore.textContent = `Player Score = ${playerCount}`;
    computerScore.textContent = `Computer Score = ${computerCount}`;
    winner.textContent = `Announce Winner: ${announceWinner()}`;
    gameScore.textContent = `${playRound()}`;
    
    //playRound();
        
}));

    
    
function getComputerChoice() {
    
    const choices = ['Rock', 'Paper', 'Scissors'];
    
    let random = Math.floor(Math.random() * 3);
    let computersChoice = choices.at(random);
    
    return computersChoice;
    
};


function playRound(){
    
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === `Paper`) {
        ++computerCount;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Rock" && computerSelection === `Scissors`) {
        ++playerCount;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Scissors`) {
        ++computerCount;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Rock`) {
        ++playerCount;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Rock`) {
        ++computerCount;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Paper`) {
        ++playerCount;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    }  else if (playerSelection != 'Rock' || playerSelection != "Paper" || playerSelection != "Scissors") {
        return `Your choice is outside the scope of this game. Please choose Rock, Paper or Scissors`;
    }
    
    
};

function announceWinner (){
    
    if (playerCount === 5 && computerCount < playerCount){
        return `Congratulations! You Win! ${playerCount} to ${computerCount}.`;
    } else if (computerCount === 5 &&  computerCount > playerCount){
        return `Computer wins. ${computerCount} to ${playerCount}. Better luck next time.`;
    } 
};


