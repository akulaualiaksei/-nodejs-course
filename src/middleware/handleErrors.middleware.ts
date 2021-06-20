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
  logError(`handleErrorsMiddleware message:${error.message}`, error);
  res.status(500).json({ message: 'Internal server error' });
};

export default handleErrorsMiddleware;
