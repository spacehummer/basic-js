const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disksNumber number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  function hanoiMovesRecursive(disksCount) {

    if (disksCount === 0) return 0;

    return 2 * hanoiMovesRecursive(disksCount - 1) + 1;
  }

  const turnsInfoObj = {
    turns: null,
    seconds: null,
  };

  console.log("---- Source data:", disksNumber,',', turnsSpeed);

  turnsInfoObj.turns = hanoiMovesRecursive(disksNumber);
  turnsInfoObj.seconds = Math.floor(turnsInfoObj.turns / turnsSpeed * 60 * 60);

  console.log("---- Turns info object:", turnsInfoObj);

  return turnsInfoObj;

}

// Test scripts
// npm run test > "./logs/log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"
// npm run test ./test/hanoi-tower.test.js  > "./logs/log_hanoi_tower_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"

calculateHanoi(5, 4074);

module.exports = {
  calculateHanoi
};
