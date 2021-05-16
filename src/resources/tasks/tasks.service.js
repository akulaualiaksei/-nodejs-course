const taskRepo = require('./tasks.memory.repository');

const getAll = (boardId) => taskRepo.getAllTasks(boardId);

const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);

const createTask = (boardId, task) => taskRepo.createTask(boardId, task);

const updateTask = (boardId, taskId, data) => taskRepo.updateTask(boardId, taskId, data);

const deleteTask = (id) => taskRepo.deleteTask(id);

const unassignUserTask = (userId) => taskRepo.unassignUserTask(userId);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
}
