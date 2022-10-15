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
  
  let monthData = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }
  if (date === undefined) {
    console.log('Unable to determine the time of year!')
  } else if (date instanceof Date) {
    let monthIndex = date.getMonth();
    for (let month in monthData) {
      if(monthData[month].includes(monthIndex)) {
        console.log(month)
      }
    }
  } else {
    console.log('Invalid date!')
  }
}

getSeason(20192701)

module.exports = {
  getSeason
};
