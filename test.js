"use strict";

const assert = require('assert');
const Bowling = require('./bowling').bowling;

function createErrorMessage(e) {
  console.error('Error: %s  \n Expected: %s \n Actual %s',
    e.message, JSON.stringify(e.expected), JSON.stringify(e.actual));
}

try {
    let perfectGame = ['X','X','X','X','X','X','X','X','X','X','X','X'];
    let game = new Bowling(perfectGame);

    assert.equal(game, 300, 'Perfect game not calculated properly');

} catch(e) {
  createErrorMessage(e);
}

try {
    let nineMissGame = ['9','-','9','-','9','-','9','-','9','-','9','-','9','-','9','-','9','-','9','-'];
    let game = new Bowling(nineMissGame);

    assert.equal(game, 90, 'Nine-miss game not calculated properly');

} catch(e) {
  createErrorMessage(e);
}

try {
  let fiveSpareGame = ['5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5'];
  let game = new Bowling(fiveSpareGame);

  assert.equal(game, 150, 'Five-spare game not calculated properly');
} catch(e) {
  createErrorMessage(e);
}

try {
  let testGame = ['X','7','/','9','-','X','-','8','8','/','-','6','X','X','X','8','1'];
  let game = new Bowling(testGame);

  assert.equal(game, 167, 'Score not calculated correctly');
} catch(e) {
  createErrorMessage(e);
}

