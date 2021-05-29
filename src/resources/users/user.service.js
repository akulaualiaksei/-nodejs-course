/**
 * User service
 * @module user/service
 */

const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/tasks.service');

/**
 * Class representing a user
 * @typedef {Object} User
 * @property {string} id - User id from uuid.v4()
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} [password] - User password
 */

/**
 * call the repository method to get all the users
 * @async
 * @function getAll
 * @returns {Promise<User[]>} return array of all users without password
 */
const getAll = () => usersRepo.getAll();

/**
 * call the repository method to get user by id
 * @async
 * @function getUser
 * @param {string} id - user id
 * @returns {Promise<User>} return user object by id without password
 */
const getUser = (id) => usersRepo.getUser(id);

/**
 * call the repository method to create user
 * @async
 * @function createUser
 * @param {User} user user object
 * @returns {Promise<User>} return new user object without password
 * see: {@link module:user/repository}
 */

const createUser = (user) => usersRepo.createUser(user);

/**
 * call the repository method to update user by id
 * @async
 * @function updateUser
 * @param {User} data - user obj data for update
 * @param {string} id - user id for update
 * @returns {Promise<User|null>} - return user object without password or null if user doesn't exist
 */

const updateUser = (id, data) => usersRepo.updateUser(id, data);

/**
 * call the repository method to delete one board
 * @async
 * @function deleteUser
 * @param {string} id - user id for delete
 * @returns {Promise<id|null>} return user delete index or null if board doesn't exist
 */

const deleteUser = (id) => {
  tasksService.unassignUserTask(id);
  return usersRepo.deleteUser(id);
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
