const uuid = require('uuid');
const Column = require('./column.model');

class Board {
  constructor({
    id = uuid(),
    title = 'board title',
    columns = [new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.column = columns;
  }
}

module.exports = Board;
