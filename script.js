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

// // function to get the human choice
// function getHumanChoice() {
//     let human = window.prompt(`Let's play! Rock Paper Scissors?: `).toLowerCase()
//     return(human)
// }

// Declare human score and computer score outside the function scopes to make them global variables
let humanScore = 0;
let computerScore = 0;
let gameOver  = false;

function playRound(computerChoice, humanChoice){
    // Display both player and computer's choice
    let resultText = `Computer's choice:  ${computerChoice} \n Your choice: ${humanChoice} \n`;

        // logic for a single round
    if (computerChoice === humanChoice) {
        resultText += '\n Tie!'
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        resultText += '\n You win! Paper beats rock!'
        humanScore++
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        resultText += '\n You lose! Rock beats scissors!'
        computerScore++
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        resultText += '\n You lose! Paper beats rock!'
        computerScore++
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        resultText += '\n You win! Scissors beats paper!'
        humanScore++
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        resultText += '\n You win! Rock beats scissors!'
        humanScore++
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        resultText += '\n You lose! Scissors beats paper!'
        computerScore++
    } else {
        resultText += '\n Invalid input!'
    }
    // Update score display
    let scores = `You:  ${humanScore} Computer: ${computerScore}`;
    results.innerText = resultText +  '\n' + scores;

    if (humanScore >= 5) {
        results.innerText += '\n You won the game!';
        gameOver = true;
        return;
    } else if(computerScore >= 5) {
        results.innerText += `\n  Computer won the game!`;
        gameOver = true;
        return;
    }

    // Stores new human and computer score after one round
    // return humanScore, computerScore;

}


// function to play entire game (specific number of rounds)
function playGame() {
    // initialize rounds to zero before game is played
    // let round = 0;

    // // while loop to repeat game for 5 rounds
    // while (round < 5) {
    //     let computerChoice = getComputerChoice();
    //     let humanChoice = getHumanChoice();
    //     playRound(computerChoice, humanChoice);
    //     round++
    // }
    // console.log(`Game over! You: ${humanScore}points, Computer:${computerScore}points.`)


    while (humanScore < 5  && computerScore < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
}


let rockBtn = document.createElement('button');
let paperBtn = document.createElement('button');
let scissorsBtn = document.createElement('button'); 

// Name the buttons
rockBtn.innerText = 'Rock';
paperBtn.innerText = 'Paper';
scissorsBtn.innerText = 'Scissors';

rockBtn.addEventListener('click', function() {
    if (gameOver) return;
    let computerChoice = getComputerChoice();
    let humanChoice = 'rock';
    playRound(computerChoice, humanChoice);
});
paperBtn.addEventListener('click', function() {
    if (gameOver) return;
    let computerChoice = getComputerChoice();
    let humanChoice = 'paper';
    playRound(computerChoice, humanChoice);
});
scissorsBtn.addEventListener('click', function() {
    if (gameOver) return;
    let computerChoice = getComputerChoice();
    let humanChoice = 'scissors';
    playRound(computerChoice, humanChoice);
});

// div to display results
let results = document.createElement('div');


document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(results);


// call the play game function to begin the game
playGame();