/** @format */

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const alphabet1 = Array.from(s1);
  const alphabet2 = Array.from(s2);
  console.log(alphabet1, alphabet2);
  let count = 0;
  for (let i = 0; i < alphabet1.length; i++) {
    const index = alphabet2.indexOf(alphabet1[i]);
    if (index !== -1) {
      count++;
      alphabet2.splice(index, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
