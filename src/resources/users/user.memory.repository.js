/**
 * User memory repository
 * @module users/repository
 */

const uuid = require('uuid');
const { db } = require('../db');

const { users } = db;

/**
 * Class representing a user
 * @typedef {Object} User
 * @property {string} id - User id from uuid.v4()
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User password
 */

/**
 * get all users
 * @async
 * @function getAll
 * @returns {Promise<User[]>} return array of all users
 */

const getAll = async () => users;

/**
 * get one user by id
 * @async
 * @function getUser
 * @param {string} id - user id
 * @returns {Promise<User>} return one user object by id
 */

const getUser = async (id) => users.find((item) => item.id === id);

/**
 * create new one user
 * @async
 * @function createUser
 * @param {User} user user object
 * @param {string} user.name - user name
 * @param {string} user.login - user login
 * @param {string} user.password - user password
 * @returns {Promise<User>} return new user object without password
 */

const createUser = async ({ name, login, password }) => {
  const id = uuid.v4();

  users.push({
    id,
    name,
    login,
    password,
  });

  return {
    id,
    name,
    login,
  };
};

/**
 * update one user by id
 * @async
 * @function updateUser
 * @param {User} data new user data for update
 * @param {string} id - userId for update
 * @returns {Promise<User>} return updated user object without password or null if user doesn't exist
 */

const updateUser = async (id, data) => {
  const newUser = { ...data, id };
  const userIndex = users.findIndex((item) => item.id === id);
  if (userIndex !== -1) {
    users[userIndex] = newUser;
    return newUser;
  }
  return null;
};

/**
 * delete one user by id
 * @async
 * @function deleteUser
 * @param {string} id - user id for delete
 * @returns {Promise<id|null>} return user delete index or null if board doesn't exist
 */

const deleteUser = async (id) => {
  const userIndex = users.findIndex((item) => item.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return userIndex;
  }
  return null;
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
