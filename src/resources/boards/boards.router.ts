import { Request, Response, Router } from 'express';
import * as boardsService from './boards.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.getAll();
  res.status(boards ? 200 : 404).json(boards || []);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const board = await boardsService.getBoard(req.params['boardId'] || '');
  res.status(board ? 200 : 404).json(board || { message: 'not found' });
});

router.route('/').post(async (req: Request, res: Response) => {
  const board = await boardsService.createBoard(req.body);
  res.status(board ? 201 : 404).json(board || {});
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const data = req.body;
  const { boardId } = req.params;
  const board = await boardsService.updateBoard(boardId || '', data);
  res.status(board ? 200 : 404).json(board || { message: 'not found' });
});
router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (id) {
    await boardsService.deleteBoard(id);
    return res.status(200).json({ message: 'success' });
  }
  return res.status(404).json({ message: 'not found' });
});

export default router;
