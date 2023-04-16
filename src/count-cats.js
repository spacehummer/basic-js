const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  console.log("**** Start counting cats... ****");
  console.log("---- Source data:", matrix);

  let count = 0;

  matrix.forEach((elements) => {
    count = count + elements.reduce((acc, cur) => cur === "^^" ? acc + 1 : acc, 0);
  });

  console.log("---- Cats count:", count);

  return count;

}

// Test scripts
// npm run test > "./logs/git_log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"
// npm run test ./test/count-cats.test.js  > "./logs/git_log_count_cats_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"

// countCats(
//   [
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
//   ]
// );

module.exports = {
  countCats
};
