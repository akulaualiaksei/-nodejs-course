/**
 * Class representing a column
 * @typedef {Object} Column
 * @property {string} id - Column id from uuid.v4()
 * @property {string} title - Column title
 * @property {number} order - Column order
 */
/**
 * Class representing a board
 * @typedef {Object} Board
 * @property {string} id Board id from uuid.v4()
 * @property {string} title Board title
 * @property {Column[]} columns Board array of Column object
 */

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

/**
 * Class representing a user
 * @typedef {Object} User
 * @property {string} id - User id from uuid.v4()
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User password
 */

/**
 * db object
 * @typedef {Object} db
 * @property {Board[]} boards
 * @property {Task[]} tasks
 * @property {User[]} users
 */

/**
 * @type {db}
 */

const db = {
  users: [],
  boards: [],
  tasks: [],
};

module.exports = {
  db,
};
