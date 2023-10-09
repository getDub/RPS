//Rock, paper and scissors game with UI 5 rounds. The Odin Project.


const buttons = document.querySelectorAll('button');
const playersHand = document.querySelector('.playerChoice');
const computersHand = document.querySelector('.compuChoice');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.compuScore');
const winner = document.querySelector('.winner');
const gameScore = document.querySelector('.gameStatus');

let playerCount = 0;
//const pC = ++playerCount;
let computerCount = 0;
//const cC = ++computerCount;

let playerSelection;

buttons.forEach((button) => 
button.addEventListener('click', () => {
    
    playerSelection = button.textContent;
    playersHand.textContent = `Player Choice: ${playerSelection} `;
    //computersHand.textContent = `Computers Choice: ${computerSelection} `;
    //playerScore.textContent = `Player Score = ${playerCount}`;
    //computerScore.textContent = `Computer Score = ${computerCount}`;
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
    computersHand.textContent = `Computers Choice: ${computerSelection} `;

    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === `Paper`) {
        ++computerCount;
        playerScore.textContent = `Player Score = ${playerCount}`;
        computerScore.textContent = `Computer Score = ${computerCount}`;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === `Scissors`) {
        ++playerCount;
        playerScore.textContent = `Player Score = ${playerCount}`;
        computerScore.textContent = `Computer Score = ${computerCount}`;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Scissors`) {
        ++computerCount;
        playerScore.textContent = `Player Score = ${playerCount}`;
        computerScore.textContent = `Computer Score = ${computerCount}`;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Rock`) {
        ++playerCount;
        playerScore.textContent = `Player Score = ${playerCount}`;
        computerScore.textContent = `Computer Score = ${computerCount}`;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Rock`) {
        ++computerCount;
        playerScore.textContent = `Player Score = ${playerCount}`;
        computerScore.textContent = `Computer Score = ${computerCount}`;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Paper`) {
        ++playerCount;
        playerScore.textContent = `Player Score = ${playerCount}`;
        computerScore.textContent = `Computer Score = ${computerCount}`;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}.`;
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


