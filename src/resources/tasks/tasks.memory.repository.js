/**
 * Task memory repository
 * @module tasks/repository
 */

const uuid = require('uuid');
const { db } = require('../db');

// const { tasks } = db;
const tasks = [];

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
 * get all tasks from board by boardId
 * @async
 * @function getAllTasks
 * @param {string} boardId selected BoardId
 * @returns {Promise<Task[]>} return array of all tasks from selected board
 */

const getAllTasks = async (boardId) =>
  tasks.filter((item) => item.boardId === boardId);

/**
 * get one task by taskId and boardId
 * @async
 * @function getTask
 * @param {string} boardId - board id
 * @param {string} taskId - task id
 * @returns {Promise<Task>} return one task object by boardId and taskId
 */

const getTask = async (boardId, taskId) =>
  tasks.find((item) => item.id === taskId && item.boardId === boardId);

/**
 * create one task on board
 * @async
 * @function createTask
 * @param {string} boardId boardId for a new task
 * @param {Task} data data for a new task
 * @returns {Promise<Task>} return new task object
 */

const createTask = async (boardId, data) => {
  const newTask = {
    id: uuid.v4(),
    ...data,
    boardId,
  };
  tasks.push(newTask);
  return newTask;
};

/**
 * update one task on board by boardId and taskId
 * @async
 * @function updateTask
 * @param {string} boardId boardId for updating the task
 * @param {string}  taskId taskId for updating the task
 * @param {Task} data data for updating the task
 * @returns {Promise<Task|null>} return update task object or null if task doesn't exist
 */

const updateTask = async (boardId, taskId, data) => {
  const newTask = { ...data, taskId };
  const taskIndex = tasks.findIndex(
    (item) => item.id === taskId && item.boardId === boardId
  );
  if (taskIndex !== -1) {
    tasks[taskIndex] = newTask;
    return newTask;
  }
  return null;
};

/**
 * delete one task by id
 * @async
 * @function deleteBoard
 * @param {string} taskId - task id for delete
 * @returns {Promise<id|null>} return task delete index or null if task doesn't exist
 */

const deleteTask = async (taskId) => {
  const taskIndex = tasks.findIndex((item) => item.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return taskIndex;
  }
  return null;
};

/**
 * unassign user from task by UserId
 * @async
 * @function unassignUserTask
 * @param {string} userId - user id for unassign
 * @returns {void}
 */

const unassignUserTask = async (userId) => {
  tasks.forEach((item, index) => {
    if (item.userId === userId) tasks[index].userId = null;
  });
};

/**
 * delete board tasks by boardId
 * @async
 * @function deleteBoardTasks
 * @param {string} boardId - board id for delete
 * @returns {Task[]} tasks after deleting
 */

const deleteBoardTasks = async (boardId) => {
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].boardId === boardId) {
      tasks.splice(i, 1);
    }
  }
  return tasks;
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
  deleteBoardTasks,
};
