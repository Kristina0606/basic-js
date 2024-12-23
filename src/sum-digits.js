/** @format */

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function rec(n) {
    if (n < 10) {
      return n;
    }
    let sum = 0;
    const newArr = Array.from(String(n));
    for (let i = 0; i < newArr.length; i++) {
      sum += Number(newArr[i]);
    }
    return rec(sum);
  }
  return rec(n);
}

module.exports = {
  getSumOfDigits,
};
