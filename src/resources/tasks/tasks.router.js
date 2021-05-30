const router = require('express').Router({ mergeParams: true });
const taskService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.boardId);

  res.status(tasks ? 200 : 404).json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params;

  const task = await taskService.getTask(boardId, taskId);

  res.status(task ? 200 : 404).json(task)
});

router.route('/').post(async (req, res) => {
  const task = await taskService.createTask(req.params.boardId, req.body);
  res.status(task ? 201 : 404).json(task)
});

router.route('/:taskId').put(async (req, res) => {
  const data = req.body;
  const { boardId, taskId } = req.params;
  const task = await taskService.updateTask(boardId, taskId, data);
  res.status(task ? 200 : 404).json(task)
});
router.route('/:taskId').delete(async (req, res) => {
  const task = await taskService.deleteTask(req.params.taskId);
  res.status(task !== null ? 200 : 404).json({})
});

module.exports = router;
