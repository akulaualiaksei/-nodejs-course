/**
 * User model
 * @module users/users
 */

const uuid = require('uuid');

/**
 * Class representing a user
 * @typedef {Object} User
 * @property {string} id - User id from uuid.v4()
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User password
 */

class User {
  /**
   * create a User
   * @param {Object} User
   * @param {string} User.id - User id from uuid.v4()
   * @param {string} User.name - User name
   * @param {string} User.login - User login
   * @param {string} User.password - User password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * @method toResponse
   * @param {User} user user instance
   * @returns {{id: string, name: string, login: string}} user instance without password
   * @static
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
