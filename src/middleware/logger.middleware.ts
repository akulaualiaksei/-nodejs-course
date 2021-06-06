import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import { logDebug } from './winston.middleware';

const logger = (
  req:Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    method, url, query, body,
  } = req;
  next();
  finished(res, () => {
    const { statusCode } = res;
    // log(`method:${method} url:${url} StatusCode:${statusCode}
    // query:${JSON.stringify(query)} Body:${JSON.stringify(body)}`, {
    logDebug(`${method} ${url} ${statusCode} ${JSON.stringify(query)} ${JSON.stringify(body)}`, {
      method,
      url,
      statusCode,
      query: JSON.stringify(query),
      body: JSON.stringify(body),
    });
  // console.log(`${method} ${url} ${statusCode} ${JSON.stringify(query)} ${JSON.stringify(body)}
  // res:${JSON.stringify(res)} req: ${JSON.stringify(req)}`);
  });
};

export default logger;
