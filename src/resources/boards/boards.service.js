/**
 * Board service
 * @module boards/service
 */

const boardRepo = require('./boards.memory.repository');
const taskService = require('../tasks/tasks.service');

/**
 * Class representing a column
 * @typedef {Object} Column
 * @property {string} id - Column id from uuid.v4()
 * @property {string} title - Column title
 * @property {number} order - Column order
 */
/**
 * @typedef {Object} Board
 * @property {string} id Board id from uuid.v4()
 * @property {string} title Board title
 * @property {Column[]} columns Board array of Column object
 */

/**
 * call the repository method to get all the boards
 * @async
 * @function getAll
 * @returns {Promise<Board[]>} return array of all boards
 */
const getAll = () => boardRepo.getAllBoards();

/**
 * call the repository method to get one board by id
 * @async
 * @function getBoard
 * @param {string} id - board id
 * @returns {Promise<Board>} return one board object by id
 */

const getBoard = (id) => boardRepo.getBoard(id);

/**
 * call the repository method to create one board
 * @async
 * @function createBoard
 * @param {Board} board board object
 * @returns {Promise<Board>} return new board object
 * see: {@link module:boards/repository}
 */
const createBoard = (board) => boardRepo.createBoard(board);

/**
 * call the repository method to update one board
 * @async
 * @function updateBoard
 * @param {Board} data - board obj
 * @param {string} id - board id
 * @returns {Promise<Board|null>} - return board object or null if board doesn't exist
 */

const updateBoard = (id, data) => boardRepo.updateBoard(id, data);

/**
 * call the repository method to delete one board
 * @async
 * @function deleteBoard
 * @param {string} id - board id
 * @returns {Promise<id|null>} return board delete index or null if board doesn't exist
 */

const deleteBoard = (id) => {
  taskService.deleteTasksFromBoard(id);
  return boardRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
