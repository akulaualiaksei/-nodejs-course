import * as usersRepo from './users.memory.repository';
import * as tasksService from '../tasks/tasks.service';
import { IUser } from './users.model';

const getAll = () => usersRepo.getAll();

const getUser = (id:string) => usersRepo.getUser(id);

const createUser = (user:IUser) => usersRepo.createUser(user);

const updateUser = (id:string, data:IUser) => usersRepo.updateUser(id, data);

const deleteUser = (id:string) => {
  tasksService.unassignUserTask(id);
  return usersRepo.deleteUser(id);
};

export {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
