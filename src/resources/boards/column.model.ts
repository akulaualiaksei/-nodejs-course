import { v4 as uuid } from 'uuid';

interface IColumn {
  id: string;
  title: string;
  order: number;
}

class Column {
  id: string;

  title: string;

  order: number;

  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
  }: IColumn) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export {
  Column,
  IColumn,
};
