import { v4 as uuid } from 'uuid';
import { Task, ITask } from './tasks.model';

import db from '../db';

const { tasks } = db;

const getAllTasks = async (boardId:string):Promise<Task[]> => tasks
  .filter((item) => item.boardId === boardId);

const getTask = async (boardId:string, taskId:string):Promise<Task|undefined> => tasks
  .find((item) => item.id === taskId && item.boardId === boardId);

const createTask = async (boardId:string, data:ITask):Promise<Task> => {
  const newTask = {
    ...data,
    boardId,
    id: uuid(),
  };
  tasks.push(newTask);
  return newTask;
};

const updateTask = async (
  boardId:string,
  taskId:string,
  data:ITask,
): Promise<Task|undefined> => {
  const newTask = { ...data, taskId };
  const taskIndex = tasks.findIndex(
    (item) => item.id === taskId && item.boardId === boardId,
  );
  if (taskIndex !== -1) {
    tasks[taskIndex] = newTask;
    return newTask;
  }
  return undefined;
};

const deleteTask = async (taskId:string):Promise<number|undefined> => {
  const taskIndex = tasks.findIndex((item) => item.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return taskIndex;
  }
  return undefined;
};

const unassignUserTask = async (userId:string):Promise<void> => {
  tasks.forEach((item, index) => {
    if (item.userId === userId) tasks[index]!.userId = null;
  });
};

const deleteBoardTasks = async (boardId:string):Promise<Task[]> => {
  for (let index = tasks.length - 1; index >= 0; index -= 1) {
    if (tasks[index]!.boardId === boardId) {
      tasks.splice(index, 1);
    }
  }
  return tasks;
};

export {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
  deleteBoardTasks,
};
