import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import usersRouter from './resources/users/users.router';
import boardsRouter from './resources/boards/boards.router';
import tasksRouter from './resources/tasks/tasks.router';
import logger from './middleware/logger.middleware';
import unhandledPromiseRejection from './middleware/unhandledPromiseRejection.middleware';
import uncaughtException from './middleware/uncaughtException.middleware';
import handleErrorsMiddleware from './middleware/handleErrors.middleware';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(logger);
app.use(handleErrorsMiddleware);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks', tasksRouter);

process.on('unhandledRejection', unhandledPromiseRejection);
process.on('uncaughtException', uncaughtException);
// Promise.reject(Error('Oops!'));
// throw Error('as');

export default app;
