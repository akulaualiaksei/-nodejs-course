const boardRepo = require('./boards.memory.repository');

const getAll = () => boardRepo.getAllBoards();

const getBoard = (id) => boardRepo.getBoard(id);

const createBoard = (user) => boardRepo.createBoard(user);

const updateBoard = (id, data) => boardRepo.updateBoard(id, data);

const deleteBoard = (id) => boardRepo.deleteBoard(id);

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
