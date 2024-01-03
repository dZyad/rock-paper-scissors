// Game constants
const ROCK = "rock";
const PAPER = "paper"
const SCISSORS = "scissors"

/** 
 *Generates randomly the computer choice in Rock Paper scissors game
 * return {string}
 */
function getComputerChoice() {
    let options = [ROCK, PAPER, SCISSORS];
    let choice = Math.floor( Math.random() * options.length );
    return options[choice];
}