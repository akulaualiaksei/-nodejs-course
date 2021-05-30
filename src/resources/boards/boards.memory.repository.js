const uuid = require('uuid');
const { db } = require('../db');

const { boards } = db;

const getAllBoards = async () => boards;

const getBoard = async (id) => boards.find(item => item.id === id);

const createBoard = async ({ title, columns }) => {
  const columnsData = columns.map(
    item => ({
      ...item,
      id: uuid.v4()
    })
  );
  const boardData = {
    id: uuid.v4(),
    title,
    columns: columnsData || []
  }
  boards.push(boardData);
  return boardData;
}

const updateBoard = async (id, data) => {
  const newBoard = {...data, id};
  const boardIndex = boards.findIndex(item => item.id === id);
  if (boardIndex !== -1) {
    boards[boardIndex] = newBoard;
    return newBoard;
  }
  return null;
}

const deleteBoard = async (id) => {
  const boardIndex = boards.findIndex(item => item.id === id);
  if (boardIndex !== -1) {
    boards.splice(boardIndex, 1);
    return boardIndex;
  }
  return null;
}

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
}
