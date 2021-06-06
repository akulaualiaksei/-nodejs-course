import { createLogger, transports, format } from 'winston';

const winstonLogger = createLogger({
  level: 'debug',
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.cli(),
      ),
    }),
    new transports.File({
      filename: 'logs/all.log',
      format: format.json(),
    }),
    new transports.File({
      filename: 'logs/errors.log',
      level: 'error',
      format: format.json(),
    }),
  ],
});

export const logDebug = (message: string, messageObj: object): void => {
  winstonLogger.debug(message, messageObj);
};

export const logError = (message: string, messageObj: object): void => {
  winstonLogger.error(message, messageObj);
};
