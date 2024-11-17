import { Request, Response, NextFunction } from 'express';

export const RoleGuard = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res
        .status(403)
        .json({ message: 'Access denied: User not authenticated.' });
      return;
    }

    if (!allowedRoles.includes(req.user.role as string)) {
      res.status(403).json({
        message: `Access restricted.`,
      });
      return;
    }

    next();
  };
};
