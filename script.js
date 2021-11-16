const buttons = document.querySelectorAll('button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreDisplay = document.getElementById('playerScore');
const computerDisplay = document.getElementById('computerScore');
const previousRound = document.getElementById('previousRound');
const rematchButton = document.getElementById('rematch');


//Computer Choice - Randomize
function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    return options[random].toLowerCase();
}


//Play Round - Compare, Add Scores, and Display Result
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){

    computerChoice = computerPlay();
    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);
    if (computerChoice === playerChoice){
        previousRound.textContent = "It's a tie!";
    }
    else if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')){
        previousRound.textContent = "Nice one!";
        playerScore += 1;
        scoreDisplay.textContent = 'Your Score: ' + playerScore;
    } else {
        previousRound.textContent = "You suck...";
        computerScore += 1;
        computerDisplay.textContent = 'Opponent: ' + computerScore;
    }
    if ((playerScore === 5) || (computerScore === 5)){
        checkScore(playerScore, computerScore);
    }

}

// Score checker / Disable buttons / Enable Rematch button
function checkScore(playerScore, computerScore){
    if (playerScore === 5) {
        previousRound.textContent = "You've won the match!";
    } else if (computerScore === 5) {
        previousRound.textContent = "GOD YOU'RE SO STUPID!!!";
    } 
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
    rematchButton.hidden = false;
    rematchButton.disabled = false;

}

rematchButton.addEventListener('click', rematch);

function rematch(){
    playerScore = computerScore = 0;
    scoreDisplay.textContent = 'Your Score: ' + playerScore;
    computerDisplay.textContent = 'Opponent: ' + computerScore;
    previousRound.textContent = "Choose wisely...";
    rematchButton.hidden = true;
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = false;
    };
};

// Listen for click and trigger playRound(players choice)
buttons.forEach(button => button.addEventListener('click', () => {
    if (button.id === 'rock') {
        playRound('rock');
    } else if (button.id === 'paper'){
        playRound('paper');
    } else if (button.id === 'scissors'){
        playRound('scissors');
    }
}));