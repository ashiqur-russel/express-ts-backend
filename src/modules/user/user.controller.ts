import { Router, Request, Response } from 'express';
import { UserService } from './user.service';

const router = Router();
const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser();
    res.status(200).json({ users, message: 'Success!' });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.status(200).json({ user: user });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
export default router;
