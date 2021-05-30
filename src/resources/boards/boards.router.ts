import { Request, Response, Router } from 'express';
import * as boardService from './boards.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardService.getAll();
  res.status(boards ? 200 : 404).json(boards || []);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const board = await boardService.getBoard(req.params['boardId'] || '');
  res.status(board ? 200 : 404).json(board || { message: 'not found' });
});

router.route('/').post(async (req: Request, res: Response) => {
  const board = await boardService.createBoard(req.body);
  res.status(board ? 201 : 404).json(board || {});
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const data = req.body;
  const { boardId } = req.params;
  const board = await boardService.updateBoard(boardId || '', data);
  res.status(board ? 200 : 404).json(board || { message: 'not found' });
});
router.route('/:id').delete(async (req: Request, res: Response) => {
  const board = await boardService.deleteBoard(req.params['id'] || '');
  res.status(board ? 200 : 404).json(board ? { message: 'success' } : { message: 'not found' });
});

export default router;
