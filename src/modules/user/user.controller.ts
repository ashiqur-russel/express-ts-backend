import { Router, Request, Response } from "express";
import { UserService } from "./user.service";

const router = Router();
const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser();
    res.status(200).json({ users });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export default router;
