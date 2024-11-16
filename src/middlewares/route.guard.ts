import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser, User } from "../modules/user/user.model";

interface JwtPayload {
  id: string;
  userType: string;
}

export const RouteGurad = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as JwtPayload;

    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    (req as any).user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export const RoleGuard = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;

    if (!user) {
      res
        .status(403)
        .json({ message: "Access denied: User not authenticated" });
      return;
    }

    if (!allowedRoles.includes(user.userType)) {
      res.status(403).json({
        message: `Access restricted to roles: ${allowedRoles.join(", ")}`,
      });
      return;
    }

    next();
  };
};
