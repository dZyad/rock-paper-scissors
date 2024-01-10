// Game constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const TIE = "tie";
let winCount = {player: 0, computer: 0}

let userScore = document.querySelector('#user-score');
let computerScore = document.querySelector('#computer-score');
userScore.textContent = winCount.player;
computerScore.textContent = winCount.computer;

document.addEventListener("click", function(event) {
    let result = playRound(event.target.id, getComputerChoice());
    updateWinCount(winCount, result);
})

function getComputerChoice() {
    let options = [ROCK, PAPER, SCISSORS];
    let choice = Math.floor( Math.random() * options.length );
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    let lastRound = document.querySelector('.last-round');
    if (playerSelection === computerSelection) {
        lastRound.textContent = "It's a tie, let's replay this round";
        return TIE;
    }
    if (playerSelection === ROCK) {
        if( computerSelection === PAPER ) {
            lastRound.textContent = "You Lose! Paper beats Rock";
            return "computer";
        } else {
            lastRound.textContent = "You Win! Rock beats Scissors";
            return "player";
        }
    } else if (playerSelection === PAPER) {
        if ( computerSelection === SCISSORS ) {
            lastRound.textContent = "You Lose! Scissors beats Paper";
            return "computer";
        } else {
            lastRound.textContent = "You Win! Paper beats Rock";
            return "player";
        }
    } else if (playerSelection === SCISSORS) {
        if ( computerSelection === ROCK ) {
            lastRound.textContent = "You Lose! Rock beats Scissors";
            return "computer";
        } else {
            lastRound.textContent = "You Win! Scissors beats Paper";
            return "player";
        }
    }
}

let updateWinCount = (winCount, result) => {
    if (winCount != TIE) {
        winCount[result]++;
    }
    userScore.textContent = winCount.player;
    computerScore.textContent = winCount.computer;
}
