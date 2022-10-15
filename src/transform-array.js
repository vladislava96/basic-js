const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  let newArr = []
  for (let index = 0; index < arr.length; index ++) {
    switch (arr[index]) {
      case '--discard-prev':
        if ('--discard-next' !== arr[index - 2]) {
          newArr.pop()
        }
        break

      case '--double-prev':
        if (
          '--discard-next' !== arr[index - 2] &&
          undefined !== arr[index - 1]
        ) {
          newArr.push(arr[index - 1])
        }
        break

      case '--double-next':
        ++index;
        if (undefined !== arr[index]) {
          newArr.push(arr[index])
          newArr.push(arr[index])
        }
        break

      case '--discard-next':
        ++index
        break

      default:
        newArr.push(arr[index])
    }
  }

  return newArr
}

module.exports = {
  transform
}
