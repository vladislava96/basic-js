const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chainData: [],
  getLength() {
    return this.chainData.length
  },
  addLink(value) {
    this.chainData.push(value)

    return this
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position > this.chainData.length ||
      position <= 0
    ) {
      this.chainData = [];

      throw new Error('You can\'t remove incorrect link!');
    }

    this.chainData.splice(position - 1, 1)

    return this;
  },
  reverseChain() {
    this.chainData.reverse()

    return this
  },
  finishChain() {
    let chain = this.chainData.map(part => '( ' + part + ' )').join('~~')

    this.chainData = [];

    return chain
  }
};

module.exports = {
  chainMaker
};
