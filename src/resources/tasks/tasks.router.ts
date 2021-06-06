import { Request, Response, Router } from 'express';
import * as tasksService from './tasks.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req:Request, res:Response) => {
  const { boardId } = req.params;
  if (boardId) {
    const tasks = await tasksService.getAll(boardId);
    return res.status(200).json(tasks);
  }
  return res.status(404).json({ message: 'not found' });
});

router.route('/:taskId').get(async (req:Request, res:Response) => {
  const { boardId, taskId } = req.params;
  if (boardId !== undefined && taskId !== undefined) {
    const task = await tasksService.getTask(boardId, taskId);
    return res.status(task ? 200 : 404).json(task || { message: 'not found' });
  }
  return res.status(404).json({ message: 'not found' });
});

router.route('/').post(async (req:Request, res:Response) => {
  const { boardId } = req.params;
  if (boardId) {
    const task = await tasksService.createTask(boardId, req.body);
    res.status(task ? 201 : 404).json(task);
  }
});

router.route('/:taskId').put(async (req:Request, res:Response) => {
  const data = req.body;
  const { boardId, taskId } = req.params;
  if (boardId !== undefined && taskId !== undefined) {
    const task = await tasksService.updateTask(boardId, taskId, data);
    return res.status(task ? 200 : 404).json(task || { message: 'not found' });
  }
  return res.status(404).json({ message: 'not found' });
});
router.route('/:taskId').delete(async (req:Request, res:Response) => {
  const { taskId } = req.params;
  if (taskId) {
    const task = await tasksService.deleteTask(taskId);
    return res.status(200).json({ message: `success, delete ${task}` });
  }
  return res.status(404).json({ message: 'not found' });
});

export default router;
