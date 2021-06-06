import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';

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
    console.log(`${method} ${url} ${statusCode} ${JSON.stringify(query)} ${JSON.stringify(body)} res:${JSON.stringify(res)} req: ${JSON.stringify(req)}`);
  });
};

export default logger;
