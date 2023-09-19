let computerCount = 0;
let yourCount = 0;

game()
game()
game()
game()
game()


function game() {

    function getPlayerChoice() {
        
    const playerInput = prompt (`Choose either Rock, Paper or Scissors`);
    let pSFormatted = playerInput.toLowerCase();
    let frontLetter = pSFormatted.slice(0,1).toUpperCase();
    let wordLength = pSFormatted.slice(1, );
    let playersChoice = `${frontLetter}${wordLength}`;
    console.log(playersChoice);
    return playersChoice
}

getPlayerChoice



function getComputerChoice() {
    
    const choices = ['Rock', 'Paper', 'Scissors'];
    
    let random = Math.floor(Math.random() * 3);
    let computersChoice = choices.at(random);
    console.log(computersChoice);
    return computersChoice
    
};

getComputerChoice



function playRound(){
    
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()
    
    
    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === `Paper`) {
        computerCount++;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${yourCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Rock" && computerSelection === `Scissors`) {
        yourCount++
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${yourCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Scissors`) {
        computerCount++;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${yourCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Rock`) {
        yourCount++
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${yourCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Rock`) {
        computerCount++;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${yourCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Paper`) {
        yourCount++
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${yourCount} and computer ${computerCount}.`;
    }  else if (playerSelection != 'Rock' || playerSelection != "Paper" || playerSelection != "Scissors") {
        return `Your choise is outside the scope of this game. Please choose Rock, Paper or Scissors`;
    }

};


console.log(playRound());


}

