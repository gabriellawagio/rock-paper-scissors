// function to get the computer's choice
function getComputerChoice(){
    let comp = Math.floor(Math.random()* 3);
    // if statement to rename the computers choice from numbers to rock paper or scissors
    if (comp === 0) {
        return('rock')
    } else if (comp === 1) {
        return('paper')
    } else {
        return('scissors')
    }
}

// function to get the human choice
function getHumanChoice() {
    let human = window.prompt(`Let's play! Rock Paper Scissors?: `).toLowerCase()
    return(human)
}

// Declare human score and computer score outside the function scopes to make them global variables
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    // Display both player and computer's choice
    console.log(`Computer's choice: ${computerChoice}`);
    console.log(`Human's choice: ${humanChoice}`);

        // logic for a single round
    if (computerChoice === humanChoice) {
        console.log('Tie!')
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        console.log('You win! Paper beats rock!')
        humanScore++
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('You lose! Rock beats scissors!')
        computerScore++
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('You lose! Paper beats rock!')
        computerScore++
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        console.log('You win! Scissors beats paper!')
        humanScore++
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log('You win! Rock beats scissors!')
        humanScore++
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('You lose! Scissors beats paper!')
        computerScore++
    } else {
        console.log('Invalid input!')
    }

    // Stores new human and computer score after one round
    return humanScore, computerScore;

}


// function to play entire game (specific number of rounds)
function playGame() {
    // initialize rounds to zero before game is played
    let round = 0;

    // while loop to repeat game for 5 rounds
    while (round < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        round++
    }
    console.log(`Game over! You: ${humanScore}points, Computer:${computerScore}points.`)
}

// call the play game function to begin the game
playGame();