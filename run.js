const Bowling = require('./bowling').bowling;

/**
 * Command line interface to run the game by passing a score.
 * Expects one argument with the contents of the entire game.
 */


let gameScores = process.argv[2];

let game = new Bowling(gameScores.toString().split(""));
console.info('Final bowling score is: ' + game.finalScore());

process.exit();