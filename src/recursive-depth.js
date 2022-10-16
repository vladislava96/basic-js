const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

let count = 1;
class DepthCalculator {
  calculateDepth(arr) {
    for (let elem of arr) {
      if (elem instanceof Array) {
        count += this.calculateDepth(elem)
      } else {
        continue
      }
    }
    return count
  }
}

let m = new DepthCalculator;
m.calculateDepth([1, 2, 3, [1, 3, [3, 5]]])

module.exports = {
  DepthCalculator
};
