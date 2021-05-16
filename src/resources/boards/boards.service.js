const boardRepo = require('./boards.memory.repository');
const taskService = require('../tasks/tasks.service');

const getAll = () => boardRepo.getAllBoards();

const getBoard = (id) => boardRepo.getBoard(id);

const createBoard = (board) => boardRepo.createBoard(board);

const updateBoard = (id, data) => boardRepo.updateBoard(id, data);

const deleteBoard = (id) => {
  taskService.deleteTasksFromBoard(id);
  return boardRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
