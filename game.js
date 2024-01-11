// Game constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const TIE = "tie";
let winCount = {player: 0, computer: 0};

const options = document.querySelectorAll('.options > button');


let userScore = document.querySelector('#user-score');
let computerScore = document.querySelector('#computer-score');
userScore.textContent = winCount.player;
computerScore.textContent = winCount.computer;

options.forEach(btn => {
    btn.addEventListener('click', event => {
        let result = playRound(event.target.alt, getComputerChoice());
        updateWinCount(winCount, result);  
    });
});

function getComputerChoice() {
    let options = [ROCK, PAPER, SCISSORS];
    let choice = Math.floor( Math.random() * options.length );
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    let lastRound = document.querySelector('.last-round');
    lastRound.removeChild(lastRound.firstChild);
    let display = displayLastRound(playerSelection, computerSelection);
    lastRound.appendChild(display);
    if (playerSelection === computerSelection) {
        return TIE;
    }
    if (playerSelection === ROCK) {
        if( computerSelection === PAPER ) {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerSelection === PAPER) {
        if ( computerSelection === SCISSORS ) {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerSelection === SCISSORS) {
        if ( computerSelection === ROCK ) {
            return "computer";
        } else {
            return "player";
        }
    }
}

function displayLastRound(playerChoice, computerChoice) {
    let lastChoices = document.createElement('p');
    lastChoices.textContent = `Player: ${playerChoice}, Computer: ${computerChoice}`;
    return lastChoices;
}

let updateWinCount = (winCount, result) => {
    if (winCount != TIE) {
        winCount[result]++;
    }
    userScore.textContent = winCount.player;
    computerScore.textContent = winCount.computer;
}
