/**
 * Task model
 * @module tasks/tasks
 */

const uuid = require('uuid');

/**
 * Class representing a task
 * @typedef {Object} Task
 * @property {string} id - Task id from uuid.v4()
 * @property {string} title - Task title
 * @property {number} order - Task order
 * @property {string} description - Task description
 * @property {string} userId - userId of the User assigned to the task
 * @property {string} boardId - boardId of the Board that the task belongs to
 * @property {string} columnId - columnId of the Column that the task belongs to
 */

class Task {
  /**
   * create a Task
   * @param {Object} Task
   * @param {string} Task.id - Task id from uuid.v4()
   * @param {string} Task.title - Task title
   * @param {number} Task.order - Task order
   * @param {string} Task.description - Task description
   * @param {string} Task.userId - userId of the User assigned to the task
   * @param {string} Task.boardId - boardId of the Board that the task belongs to
   * @param {string} Task.columnId - columnId of the Column that the task belongs to
   */
  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = 'userId',
    boardId = 'boardsId',
    columnId = 'columnId',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
