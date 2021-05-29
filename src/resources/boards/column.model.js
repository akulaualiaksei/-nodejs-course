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
  /**
   * create a Column
   * @param {Object} Column
   * @param {string} Column.id - Column id from uuid.v4()
   * @param {string} Column.title - Column title
   * @param {number} Column.order - Column order
   */
  constructor({ id = uuid(), title = 'title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
