import { Board } from './boards/boards.model';

const db : {
  users: [];
  boards: Board[];
  tasks: [];
} = {
  users: [],
  boards: [],
  tasks: [],
};

export default db;
