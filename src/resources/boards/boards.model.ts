import { v4 as uuid } from 'uuid';

import { Column } from './column.model';

interface IBoard {
  id: string;
  title: string;
  columns: Column[];
}

class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({
    id = uuid(),
    title = 'board title',
    columns = [],
  }: IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export {
  Board,
  IBoard,
};
