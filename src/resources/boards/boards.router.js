const router = require('express').Router();
const boardService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(boards ? 200 : 404).json(boards || []);
});

router.route('/:boardId').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.boardId);
  res.status(board ? 200 : 404).json(board || {})
});

router.route('/').post(async (req, res) => {
  const board = await boardService.createBoard(req.body);
  res.status(board ? 201 : 404).json(board || {})
});

router.route('/:boardId').put(async (req, res) => {
  const data = req.body;
  const { boardId } = req.params;
  const board = await boardService.updateBoard(boardId, data);
  res.status(board ? 200 : 404).json(board || {})
});
router.route('/:id').delete(async (req, res) => {
  const board = await boardService.deleteBoard(req.params.id);
  res.status(board !== null ? 200 : 404).json({})
});

module.exports = router;
