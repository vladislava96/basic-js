const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {

  let turns = calculateHanoiSteps(disksNumber);
  let seconds = Math.floor(3600 * turns / turnsSpeed);

  return { turns, seconds };
}

function calculateHanoiSteps(disksNumber) {
  if (disksNumber < 1) {
    return 0;
  }

  return calculateHanoiSteps(disksNumber - 1) * 2 + 1
}

module.exports = {
  calculateHanoi
};
