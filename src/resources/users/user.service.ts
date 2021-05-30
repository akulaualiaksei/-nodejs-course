import * as usersRepo from './user.memory.repository';
// import tasksService from '../tasks/tasks.service';
import { IUser } from './user.model';

const tasksService = require('../tasks/tasks.service');

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
