import express, { Request, Response, NextFunction } from 'express';
import { AppError } from './errors/AppError';
import 'express-async-errors';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, _: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  console.log(err);
  return response.status(500).json({
    message: 'Internal server Error',
  });
});

export default app;
