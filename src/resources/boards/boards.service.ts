import * as boardsRepo from './boards.memory.repository';
import { IBoard } from './boards.model';
import * as tasksService from '../tasks/tasks.service';

const getAll = () => boardsRepo.getAllBoards();

const getBoard = (id: string) => boardsRepo.getBoard(id);

const createBoard = (board:IBoard) => boardsRepo.createBoard(board);

const updateBoard = (id:string, data:IBoard) => boardsRepo.updateBoard(id, data);

const deleteBoard = (id:string) => {
  tasksService.deleteTasksFromBoard(id);
  return boardsRepo.deleteBoard(id);
};

export {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
