//Rock Paper Scissors

let options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

//Computer Choice - Randomize
function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    return options[random].toLowerCase();
}

//Play Round - Compare
function playRound(playerChoice, computerChoice){

    computerChoice = computerPlay();
    //console.log(computerChoice);
    playerChoice = (prompt('Rock, Paper, or Scissors?')).toLowerCase();
    if (computerChoice === playerChoice){
        console.log("It's a tie!");
    }
    else if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')){
        console.log("You're the winner!");
        playerScore += 1;
    } else {
        console.log("You suck. You lost");
        computerScore += 1;
    }
}

// 5 Round Game
function game(){
    for (i = 0; i < 5; i++){
        playRound();
    }
    console.log(`You won ${playerScore} rounds, and lost ${computerScore} rounds.`);

}


game();
