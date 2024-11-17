import { Request, Response, NextFunction } from 'express';

export const Logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[Route] Accessing ${req.method} ${req.url}`);
  next();
};
