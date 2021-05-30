import { v4 as uuid } from 'uuid';
import { User, IUser } from './user.model';

import db from '../db';

const { users } = db;

const getAll = async () => users;

const getUser = async (id:string):Promise<User|undefined> => users.find((item) => item.id === id);

const createUser = async ({ name, login, password }:IUser):Promise<User> => {
  const id = uuid();

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
    password,
  };
};

const updateUser = async (id:string, data:IUser):Promise<User|undefined> => {
  const newUser = { ...data, id };
  const userIndex = users.findIndex((item) => item.id === id);
  if (userIndex !== -1) {
    users[userIndex] = newUser;
    return newUser;
  }
  return undefined;
};

const deleteUser = async (id:string):Promise<number|undefined> => {
  const userIndex = users.findIndex((item) => item.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return userIndex;
  }
  return undefined;
};

export {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
