/**
 * Board model
 * @module boards/boards
 */

const uuid = require('uuid');
const Column = require('./column.model');

/**
 * Class representing a board
 * @typedef {Object} Board
 * @property {string} id - Board id from uuid.v4()
 * @property {string} title - Board title
 * @property {Column[]} columns - Board columns array
 */

class Board {
  /**
   * Class representing a board
   * @param {Object} Board
   * @param {string} Board.id - Board id from uuid.v4()
   * @param {string} Board.title - Board title
   * @param {Column[]} Board.columns - Board columns array
   */
  constructor({
    id = uuid(),
    title = 'board title',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.column = columns;
  }
}

module.exports = Board;
