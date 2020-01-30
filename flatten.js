/**
 * flatten.js
 * @function
 *
 * Flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4]
 *
 * example usage:
 *
 * flatten([[1,2,[3]],4]) // [1, 2, 3 , 4]
 *
 * @param {Array} input
 * @returns {Array} output
 *
 * Author: Victor Williams
 */

function flatten (input) {
  // Check to see that input is an array


  if (Array.isArray(input)) {

  // if it is an array then flatten it
  //it's easier to have this done recursively
    return input.reduce(
      function makeFlat (acquire, worth) {
        if (Array.isArray(worth)) {
          // Recusion recusion
          return acquire.concat(worth.reduce(makeFlat, []))
        } else {
          // .this is the result array getting appended if it does not work
          return acquire.concat(worth)
        }
      }
      , []
    )
  } else {
    throw new TypeError('The argument has to be an array')
  }
}
module.exports = exports.default = flatten
