const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(users ? 200 : 404).json(users? users.map(User.toResponse) : []);
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  // console.log('as', req.params.id);
  // console.log('aыs', user);
  res.status(user ? 200 : 404).json(user ? User.toResponse(user) : {})
});

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.status(user ? 201 : 404).json(user ? User.toResponse(user) : {})
});

router.route('/:id').put(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const user = await usersService.updateUser(id, data);
  // console.log('sdsad',user);
  res.status(user ? 200 : 404).json(user ? User.toResponse(user) : {})
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  console.log('userdelete', user !== null ? 200 : 404);
  res.status(user !== null ? 200 : 404).json({})
});

module.exports = router;
