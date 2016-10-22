'use strict';

/**
 * Calculates the score for a bowling game.  Contains no validation and always assumes the game passed
 * will be valid.
 */
class Bowling {
  constructor(gameScores) {
    this.gameScores = gameScores;
    this.score = 0;
    this.roll = 1;
  }

  /**
   * Get the final calculated score for the game.
   * @returns {number}
   */
  finalScore() {
    this._calculateScore(this.gameScores, 0);
    return this.score;
  }

  /**
   * Recursively calculate the current score based on the current roll.
   * @param gameScores
   * @param index
   * @private
   */
  _calculateScore(gameScores, index) {
    switch (gameScores[index]) {
      case 'X':
        //strike will always add 10 to the score
        this.score += 10;
        //we need to add the next 2 rolls score
        if (this.roll + 1 < gameScores.length) {
          // lets pass the index of the roll the spare needs to be calculated from in case it is a spare
          this.score += this._convertScore(gameScores[index + 1], index);
        }
        //don't add the next two rolls if it is the 10th frame
        if (this.roll + 2 < gameScores.length && this.roll !== gameScores.length - 3) {
          this.score += this._convertScore(gameScores[index + 2], index + 1);
        }
        break;
      // we need to complete the current frame (make 10) and then add the next rolls score
      case '/':
        if (index < gameScores.length) {
          this.score += 10 - (this._convertScore(gameScores[index - 1]));
          if (this.roll + 1 !== gameScores.length) {
            this.score += this._convertScore(gameScores[index + 1]);
          }
        }
        break;
      // don't care about misses
      case '-':
        break;
      default:
        this.score += this._convertScore(gameScores[index]);
        break;
    }

    // continue as long as the game isn't over!
    if (this.roll !== gameScores.length) {
      this.roll += 1;
      this._calculateScore(gameScores, index + 1);
    }
  }

  /**
   * Utility method to transform the score from bowling notation to a static value.
   * @param score
   * @param spareIndex (optional)
   * @returns {*}
   * @private
   */
  _convertScore(score, spareIndex) {
    switch (score) {
      case 'X':
        return 10;
        break;
      case '/':
        return 10 - this._convertScore(this.gameScores[spareIndex]);
        break;
      case '-':
        return 0;
        break;
      default:
        return parseInt(score);
        break;
    }
  }
}

module.exports = {
  bowling: Bowling
};