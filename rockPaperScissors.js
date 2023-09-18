

//function game() {



    
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
//console.log(getPlayerChoice);



//A function for computerSelection choosing rock, paper or scissors randomly.

function getComputerChoice() {
    
    const choices = ['Rock', 'Paper', 'Scissors'];
    
    let random = Math.floor(Math.random() * 3);
   let computersChoice = choices.at(random);
   console.log(computersChoice);
    return computersChoice
    
    
};

getComputerChoice
//console.log(getComputerChoice());

//A function that take playerSelection, computerSelection and evaluates against each other
//then declares a winner of the round.


function playRound(/*playerSelection, computerSelection*/){
    
    
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()


    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === `Paper`) {
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === `Scissors`) {
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === `Scissors`) {
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === `Rock`) {
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}`;
    } else if (playerSelection === "Scissors" && computerSelection === `Rock`) {
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}`;
    } else if (playerSelection === "Scissors" && computerSelection === `Paper`) {
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}`;
    }  else if (playerSelection != 'Rock' || playerSelection != "Paper" || playerSelection != "Scissors") {
        return `Your choise is outside the scope of this game. Please choose Rock, Paper or Scissors`;
    }

};

//playRound()
console.log(playRound());

//console.log(playRound());


//}

//game()
