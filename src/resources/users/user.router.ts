import { Request, Response, Router } from 'express';
import { User } from './user.model';
import * as usersService from './user.service';

const router = Router();

router.route('/').get(async (_req:Request, res:Response) => {
  const users = await usersService.getAll();
  res.status(users ? 200 : 404).json(users ? users.map(User.toResponse) : []);
});

router.route('/:id').get(async (req:Request, res:Response) => {
  // const { id } = req.params;
  const user = await usersService.getUser(req.params['id'] || '');

  res.status(user ? 200 : 404).json(user ? User.toResponse(user) : { message: 'not found' });
});

router.route('/').post(async (req:Request, res:Response) => {
  const user = await usersService.createUser(req.body);
  res.status(user ? 201 : 404).json(user ? User.toResponse(user) : { message: 'not found' });
});

router.route('/:id').put(async (req:Request, res:Response) => {
  const data = req.body;
  const { id } = req.params;

  const user = await usersService.updateUser(id || '', data);

  res.status(user ? 200 : 404).json(user ? User.toResponse(user) : { message: 'not found' });
});

router.route('/:id').delete(async (req:Request, res:Response) => {
  const user = await usersService.deleteUser(req.params['id'] || '');

  res.status(user ? 200 : 404).json(user ? { message: 'success' } : { message: 'not found' });
});

export default router;
