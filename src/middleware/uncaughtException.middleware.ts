import { logError } from './winston.middleware';

const uncaughtException = (error:any): void => {
  // console.error(`captured uncaughtException: ${error.message}`);
  logError(error.message, error);
  // process.exit(1);
};

export default uncaughtException;
