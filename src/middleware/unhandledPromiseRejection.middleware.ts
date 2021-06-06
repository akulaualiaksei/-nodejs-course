import { logError } from './winston.middleware';

const unhandledPromiseRejection = (error:Error) => {
  // console.error(`Unhandled rejection detected: ${error.message}`);
  logError(error.message, error);
};

export default unhandledPromiseRejection;
