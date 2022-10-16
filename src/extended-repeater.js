const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strArray = [];
  let additionArray = [];

  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    strArray.push(String(str))
  }

  if (options.addition || options.addition === false || options.addition === null) {
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      additionArray.push(String(options.addition))
    }

    let additionStr = additionArray.join(options.additionSeparator);
    let newStrArray = strArray.map((str) => str += additionStr)

    return newStrArray.join(options.separator)
  } else {
    return strArray.join(options.separator)
  }
}

// repeater('la', { repeatTimes: 3 })

module.exports = {
  repeater
};
