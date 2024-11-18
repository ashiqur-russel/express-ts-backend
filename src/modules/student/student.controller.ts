import { Router, Request, Response } from 'express';
import { StudentService } from './student.service';

const router = Router();
const userService = new StudentService();

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllStudent();
    res.status(200).json({ users });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export default router;
