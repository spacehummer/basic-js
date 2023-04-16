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

  let t = null;

  console.log("---- Source data:", sampleActivity);
  console.log("---- Rounded data:", Math.ceil(Number(sampleActivity)));

  if (
    typeof (Number(sampleActivity)) !== "number"
    || Number(sampleActivity) <= 0
    || Number(sampleActivity) >= 15
    || typeof sampleActivity !== "string"
    || isNaN(Number(sampleActivity))
  ) {
    console.log("---- Source data is in wrong type!");
    return false;
  }

  t = Math.ceil((Math.log(MODERN_ACTIVITY/(Number(sampleActivity)))*HALF_LIFE_PERIOD)/Math.log(2));

  console.log("---- Calculated age:", t);
  return t;

}

// Test scripts
// npm run test > "./logs/git_log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"
// npm run test ./test/carbon-dating.test.js  > "./logs/git_log_carbon-dating_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"

dateSample("ACTIVITY OVER 9000");

module.exports = {
  dateSample
};
