/**
 * Board memory repository
 * @module boards/repository
 */

const uuid = require('uuid');
const { db } = require('../db');

const { boards } = db;

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
 * get all boards
 * @async
 * @function getAllBoards
 * @returns {Promise<Board[]>} return array of all boards
 */

const getAllBoards = async () => boards;

/**
 * get one board by id
 * @async
 * @function getBoard
 * @param {string} id - board id
 * @returns {Promise<Board>} return one board object by id
 */

const getBoard = async (id) => boards.find((item) => item.id === id);

/**
 * create one board
 * @async
 * @function createBoard
 * @param {Board} board board object
 * @param {string} board.title - board title
 * @param {Column[]} board.columns - board Column object
 * @returns {Promise<Board>} return new board object
 */

const createBoard = async ({ title, columns }) => {
  const columnsData = columns.map((item) => ({
    ...item,
    id: uuid.v4(),
  }));
  const boardData = {
    id: uuid.v4(),
    title,
    columns: columnsData || [],
  };
  boards.push(boardData);
  return boardData;
};

/**
 * update one board by id
 * @async
 * @function updateBoard
 * @param {Board} data board obj
 * @param {string} data.title - board title
 * @param {Column[]} data.columns - board Column object
 * @param {string} id - board id
 * @returns {Promise<Board|null>} return board object or null if board doesn't exist
 */

const updateBoard = async (id, data) => {
  const newBoard = { ...data, id };
  const boardIndex = boards.findIndex((item) => item.id === id);
  if (boardIndex !== -1) {
    boards[boardIndex] = newBoard;
    return newBoard;
  }
  return null;
};

/**
 * delete one board by id
 * @async
 * @function deleteBoard
 * @param {string} id - board id
 * @returns {Promise<id|null>} return board delete index or null if board doesn't exist
 */

const deleteBoard = async (id) => {
  const boardIndex = boards.findIndex((item) => item.id === id);
  if (boardIndex !== -1) {
    boards.splice(boardIndex, 1);
    return boardIndex;
  }
  return null;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
