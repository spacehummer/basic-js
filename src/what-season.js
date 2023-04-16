const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  const seasonsArr = ['winter', 'spring', 'summer', 'autumn'];

  console.log("**** Source data:", date);

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  try {
    console.log("---- getTime() test:", date.getTime());
  } catch(e) {
    throw new Error("Invalid date!");
  }


  // if (typeof date.getMonth !== 'function') {
  //   console.log("---- Invalid date!");
  //   throw new Error("Invalid date!");
  //   // return "Invalid date!";
  // }

  const season = seasonsArr[Math.floor((((date.getMonth() + 1) / 12) * 4)) % 4];

  console.log("---- Month :", date.getMonth());
  console.log("---- Season :", season);

  return season;

}

// Test scripts
// npm run test > "./logs/log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"
// npm run test ./test/what-season.test.js  > "./logs/log_what_season_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"

// getSeason(null);

module.exports = {
  getSeason
};
