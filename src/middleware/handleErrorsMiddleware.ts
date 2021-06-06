/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { logError } from './winston.middleware';

const handleErrorsMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  logError(error.message, error);
  res.status(500).json({ message: 'Internal server error' });
};

export default handleErrorsMiddleware;
