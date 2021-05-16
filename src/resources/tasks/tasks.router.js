const router = require('express').Router({ mergeParams: true });
const taskService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  // console.log('asd', req.params);
  // console.log('asd', req.params.boardId);
  // console.log('asd', req);
  const tasks = await taskService.getAll(req.params.boardId);

  res.status(tasks ? 200 : 404).json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params;
  // console.log('params', req.params);
  const task = await taskService.getTask(boardId, taskId);
  console.log('from get task ', task ? 200 : 404)
  console.log('from get task ', task)
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
