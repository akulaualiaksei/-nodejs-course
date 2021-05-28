/**
 * Column model
 * @module boards/column
 */

const uuid = require('uuid');

/**
 * Class representing a column
 * @typedef {Object} Column
 * @property {string} id - Column id from uuid.v4()
 * @property {string} title - Column title
 * @property {number} order - Column order
 */
class Column {
  constructor({ id = uuid(), title = 'title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
