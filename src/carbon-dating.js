const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  console.log("---- Source data:", sampleActivity);

  console.log("---- Calculated age:", null);

}

// Test scripts
// npm run test > "./logs/git_log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"
// npm run test ./test/count-cats.test.js  > "./logs/git_log_count_cats_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"

dateSample();

module.exports = {
  dateSample
};
