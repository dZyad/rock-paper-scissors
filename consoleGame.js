// Game constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const TIE = "tie";
const WRONG_VALUE = "Wrong value";

/** 
 *Generates randomly the computer choice in Rock Paper scissors game
 * return {string}
 */
function getComputerChoice() {
    let options = [ROCK, PAPER, SCISSORS];
    let choice = Math.floor( Math.random() * options.length );
    return options[choice];
}

/**
 * Ask User to make a choice of Rock paper or Scissors
 * @returns string
 */
function getPlayerChoice() {
    return prompt("What are you going to choose? Rock, Paper or Scissors?").toLowerCase();
}

/**
 * Allows Users to play a round of rock paper scissors
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns 
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie, let's replay this round");
        return TIE;
    }
    if (playerSelection === ROCK) {
        if( computerSelection === PAPER ) {
            console.log("You Lose! Paper beats Rock");
            return "computer";
        } else {
            console.log("You Win! Rock beats Scissors");
            return "player";
        }
    } else if (playerSelection === PAPER) {
        if ( computerSelection === SCISSORS ) {
            console.log("You Lose! Scissors beats Paper");
            return "computer";
        } else {
            console.log("You Win! Paper beats Rock");
            return "player";
        }
    } else if (playerSelection === SCISSORS) {
        if ( computerSelection === ROCK ) {
            console.log("You Lose! Rock beats Scissors");
            return "computer";
        } else {
            console.log("You Win! Scissors beats Paper");
            return "player";
        }
    } else {
        console.log("Please enter a valid value.")
        return WRONG_VALUE;
    }
}

/**
 * Let user to play a Best of five game
 */
function game() {
    let isGameInProgress = true;
    let winCount = {player: 0, computer: 0}

    while(isGameInProgress) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result != TIE || result != WRONG_VALUE) {
            winCount[result] ++;
        }
        if (winCount.player === 3) {
            isGameInProgress = false;
            console.log("Congrats! You've won!");
        } else if ( winCount.computer === 3 ) {
            isGameInProgress = false;
            console.log("You've lost this time! Try again!");
        }
    }
    console.log(`Final result is Player: ${winCount.player} - Computer: ${winCount.computer}`);
}
