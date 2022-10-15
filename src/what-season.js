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
 const WINTER = 'winter';
 const SPRING = 'spring';
 const SUMMER = 'summer';
 const AUTUMN = 'autumn';
 
 const map = [
   WINTER,
   WINTER,
   SPRING,
   SPRING,
   SPRING,
   SUMMER,
   SUMMER,
   SUMMER,
   AUTUMN,
   AUTUMN,
   AUTUMN,
   WINTER,
 ];
 
 function getSeason(date) {
   if (date === undefined) {
     return 'Unable to determine the time of year!'
   }
 
   if (
     !(date instanceof Date) ||
     date.toString !== Date.prototype.toString
   ) {
     throw new Error('Invalid date!')
   }
 
   return map[date.getMonth()]
 }
 
module.exports = {
  getSeason
};
