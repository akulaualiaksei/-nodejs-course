import { v4 as uuid } from 'uuid';

interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string|null;
  boardId: string;
  columnId: string;
}

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string|null;

  boardId: string;

  columnId: string;

  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = 'userId',
    boardId = 'boardsId',
    columnId = 'columnId',
  }: ITask) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export {
  Task,
  ITask,
};
