import { Request, Response, NextFunction } from "express";

export const RoleGuard = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;

    if (!user) {
      res
        .status(403)
        .json({ message: "Access denied: User not authenticated." });
      return;
    }

    if (!allowedRoles.includes(user.userType)) {
      res.status(403).json({
        message: `Access restricted.`,
      });
      return;
    }

    next();
  };
};
