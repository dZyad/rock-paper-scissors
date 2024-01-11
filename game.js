// Game constants
const WIN_CONDITION = 5;
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
    let lastRound = document.querySelector('.last-round-display');
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
    let lastChoices = document.createElement('div');
    let userLastChoice = document.createElement('img');
    let computerLastChoice = document.createElement('img');

    lastChoices.className = "last-round";
    userLastChoice.src = `images/${playerChoice}.svg`;
    computerLastChoice.src = `images/${computerChoice}.svg`;
    userLastChoice.className = "last-choice-image";
    computerLastChoice.className = "last-choice-image"
    lastChoices.appendChild(userLastChoice);
    lastChoices.appendChild(computerLastChoice);
    return lastChoices;
}

let updateWinCount = (winCount, result) => {
    if (winCount != TIE) {
        winCount[result]++;
    }
    userScore.textContent = winCount.player;
    computerScore.textContent = winCount.computer;
    if (checkWinner()) {
        stopGame();
    };
}

const checkWinner = () => {
    return winCount.player == WIN_CONDITION || winCount.computer == WIN_CONDITION;
}

const stopGame = () => {
    const main = document.querySelector('main')
    let endGameScreen = document.createElement('div');
    endGameScreen.id = "end-game"
    let endGameMessage = document.createElement('p');
    let restartGameButton = document.createElement('button');
    restartGameButton.textContent = "Restart Game";
    restartGameButton.className = "restart-button";
    toggleGameVisibility();
    restartGameButton.addEventListener('click', restartGame)
    endGameMessage.textContent = winnerMessage();
    endGameScreen.appendChild(endGameMessage);
    endGameScreen.appendChild(restartGameButton);
    main.appendChild(endGameScreen);
}

const toggleGameVisibility = () => {
    options.forEach(btn => {
        btn.style.visibility = btn.style.visibility != "hidden" ? "hidden" : "visible";
    });
}

const winnerMessage = () => {
    return winCount.player == WIN_CONDITION
    ? `Congrats You've won ${winCount.player} - ${winCount.computer}`
    : `You've lost ${winCount.computer} - ${winCount.player}`;
}

let restartGame = () => {
    const main = document.querySelector('main');
    const endGameScreen = document.querySelector('#end-game');
    winCount.player = 0;
    winCount.computer = 0;
    userScore.textContent = winCount.player;
    computerScore.textContent = winCount.computer;
    toggleGameVisibility();
    main.removeChild(endGameScreen);
}