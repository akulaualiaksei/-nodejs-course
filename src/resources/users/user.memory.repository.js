const uuid = require('uuid');
const { db } = require('../db');

const { users } = db;

const getAll = async() => users;

const getUser = async(id) => users.find(item => item.id === id);

const createUser = async({name, login, password}) => {
  const id = uuid.v4();

  users.push({
    id,
    name,
    login,
    password
  });

  return {
    id,
    name,
    login
  };
};

const updateUser = async (id, data) => {
  const newUser = {...data, id};
  const userIndex = users.findIndex(item => item.id === id);
  if (userIndex !== -1) {
    users[userIndex] = newUser;
    return newUser;
  }
  return null;
}

const deleteUser = async (id) => {
  const userIndex = users.findIndex(item => item.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return userIndex;
  }
  return null;
}

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
