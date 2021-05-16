const uuid = require('uuid');
const { db } = require('../db');

const { tasks } = db;

const getAllTasks = async (boardId) => 
  // console.log('board id', boardId);
  // console.log('all db', db);
   tasks.filter(item => item.boardId === boardId)
;

const getTask = async (boardId, taskId) => 
  // console.log('from get task', boardId, taskId);
  // console.log('from get task', tasks);

   tasks.find(
  item => item.id === taskId && item.boardId === boardId
)


const createTask = async (boardId, data) => {
  const newTask = {
    id: uuid.v4(),
    ...data,
    boardId,
  };
  tasks.push(newTask);
  console.log('new task' , newTask)
  return newTask;
}

const updateTask = async (boardId, taskId, data) => {
  const newTask = {...data, taskId };
  const taskIndex = tasks.findIndex(item => item.id === taskId && item.boardId === boardId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = newTask;
    return newTask;
  }
  return null;
}

const deleteTask = async (taskId) => {
  const taskIndex = tasks.findIndex(item => item.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return taskIndex;
  }
  return null;
}

const unassignUserTask = async (userId) => {
  tasks.forEach((item, index) => {
    if (item.userId === userId) tasks[index] = null;
    // console.log('item', item)
  });
  // console.log('new task', tasks);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask
}
