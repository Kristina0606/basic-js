/** @format */

const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];
  const namesLib = {};

  names.forEach((name) => {
    if (namesLib[name] === undefined) {
      namesLib[name] = 0;
    }

    if (arr.includes(name)) {
      namesLib[name]++;
      let newName = `${name}(${namesLib[name]})`;
      while (arr.includes(newName)) {
        namesLib[name]++;
        newName = `${name}(${namesLib[name]})`;
      }

      arr.push(newName);
    } else arr.push(name);
  });

  return arr;
}

module.exports = {
  renameFiles,
};
