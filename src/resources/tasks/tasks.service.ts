import * as tasksRepo from './tasks.memory.repository';
import { ITask } from './tasks.model';

const getAll = (boardId:string) => tasksRepo.getAllTasks(boardId);

const getTask = (boardId:string, taskId:string) => tasksRepo.getTask(boardId, taskId);

const createTask = (boardId:string, task:ITask) => tasksRepo.createTask(boardId, task);

const updateTask = (
  boardId:string,
  taskId:string,
  data:ITask,
) => tasksRepo.updateTask(boardId, taskId, data);

const deleteTask = (id:string) => tasksRepo.deleteTask(id);

const unassignUserTask = (userId:string) => tasksRepo.unassignUserTask(userId);

const deleteTasksFromBoard = (boardId:string) => tasksRepo.deleteBoardTasks(boardId);

export {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
  deleteTasksFromBoard,
};
