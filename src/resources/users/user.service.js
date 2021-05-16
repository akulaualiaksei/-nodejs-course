const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/tasks.service');

const getAll = () => usersRepo.getAll();

const getUser = (id) => usersRepo.getUser(id);

const createUser = (user) => usersRepo.createUser(user);

const updateUser = (id, data) => usersRepo.updateUser(id, data);

const deleteUser = (id) => {
  // const userIndex = usersRepo.deleteUser(id);
  tasksService.unassignUserTask(id);
  // return userIndex;
  return usersRepo.deleteUser(id);
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
