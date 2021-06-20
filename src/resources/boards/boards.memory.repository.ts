import { v4 as uuid } from 'uuid';
import { Board, IBoard } from './boards.model';

import db from '../db';

const { boards } = db;

const getAllBoards = async () => boards;

const getBoard = async (id: string): Promise<Board|undefined> => boards
  .find((item) => item.id === id);

const createBoard = async ({ title, columns }:IBoard): Promise<Board> => {
  const columnsData = columns?.map((item) => ({
    ...item,
    id: uuid(),
  }));
  const boardData = {
    id: uuid(),
    title,
    columns: columnsData,
  };
  boards.push(boardData);
  return boardData;
};

const updateBoard = async (
  id: string,
  data: IBoard,
): Promise<Board|undefined> => {
  const newBoard = { ...data, id };
  const boardIndex = boards.findIndex((item) => item.id === id);
  if (boardIndex !== -1) {
    boards[boardIndex] = newBoard;
    return newBoard;
  }
  return undefined;
};

const deleteBoard = async (id:string):Promise<number|undefined> => {
  const boardIndex = boards.findIndex((item) => item.id === id);
  if (boardIndex !== -1) {
    boards.splice(boardIndex, 1);
    return boardIndex;
  }
  return undefined;
};

export {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
