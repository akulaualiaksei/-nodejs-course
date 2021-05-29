import * as boardRepo from './boards.memory.repository';
import { IBoard } from './boards.model';

const taskService = require('../tasks/tasks.service');

const getAll = () => boardRepo.getAllBoards();

const getBoard = (id: string) => boardRepo.getBoard(id);

const createBoard = (board:IBoard) => boardRepo.createBoard(board);

const updateBoard = (id:string, data:IBoard) => boardRepo.updateBoard(id, data);

const deleteBoard = (id:string) => {
  taskService.deleteTasksFromBoard(id);
  return boardRepo.deleteBoard(id);
};

export = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
