/**
 * Task service
 * @module tasks/service
 */

const taskRepo = require('./tasks.memory.repository');

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
 * call the repository method to get all tasks from board by boardId
 * @async
 * @function getAll
 * @param {string} boardId selected BoardId
 * @returns {Promise<Task[]>} return array of all tasks from selected board
 */

const getAll = (boardId) => taskRepo.getAllTasks(boardId);

/**
 * call the repository method to get one task by taskId and boardId
 * @async
 * @function getTask
 * @param {string} boardId - board id
 * @param {string} taskId - task id
 * @returns {Promise<Task>} return one task object by boardId and taskId
 */

const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);

/**
 * call the repository method to create one task on board
 * @async
 * @function createTask
 * @param {string} boardId boardId for a new task
 * @param {Task} task task data for a new task
 * @returns {Promise<Task>} return new task object
 */

const createTask = (boardId, task) => taskRepo.createTask(boardId, task);

/**
 * call the repository method to update one task on board by boardId and taskId
 * @async
 * @function updateTask
 * @param {string} boardId boardId for updating the task
 * @param {string}  taskId taskId for updating the task
 * @param {Task} data data for updating the task
 * @returns {Promise<Task|null>} return update task object or null if task doesn't exist
 */

const updateTask = (boardId, taskId, data) =>
  taskRepo.updateTask(boardId, taskId, data);

/**
 * call the repository method to delete one task by id
 * @async
 * @function deleteBoard
 * @param {string} id - task id for delete
 * @returns {Promise<id|null>} return task delete index or null if task doesn't exist
 */

const deleteTask = (id) => taskRepo.deleteTask(id);

/**
 * call the repository method to unassign user from task by UserId
 * @async
 * @function unassignUserTask
 * @param {string} userId - user id for unassign
 * @returns {void}
 */

const unassignUserTask = (userId) => taskRepo.unassignUserTask(userId);

/**
 * call the repository method to delete board tasks by boardId
 * @async
 * @function deleteBoardTasks
 * @param {string} boardId - board id for delete
 * @returns {Task[]} tasks after deleting
 */

const deleteTasksFromBoard = (boardId) => taskRepo.deleteBoardTasks(boardId);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
  deleteTasksFromBoard,
};
