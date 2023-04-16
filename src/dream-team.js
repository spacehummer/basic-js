const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  console.log("---- Source data:", members);

  if (!Array.isArray(members)) {
    return false;
  }

  const tempArr = [];

  members.forEach((element) => {
    if (typeof element === "string") {
      tempArr.push(element.trim()[0].toUpperCase());
    }
  });

  const initialsStr = tempArr.sort().join('');

  console.log("---- Initialis :", initialsStr);
  return initialsStr;

}

// Test scripts
// npm run test > "./logs/git_log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"
// npm run test ./test/dream-team.test.js  > "./logs/git_log_dream-team_-_$(date +%Y-%m-%d_-_%k_%M_%S).log"

module.exports = {
  createDreamTeam
};
