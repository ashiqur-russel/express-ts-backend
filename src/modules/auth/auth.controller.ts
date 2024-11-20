import { Router, Request, Response } from 'express';
import { AuthService } from './auth.service';

const router = Router();
const authService = new AuthService();

export const getAuthMessage = async (req: Request, res: Response) => {
  try {
    const message = await authService.getAuthMessage();
    res.status(200).json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  try {
    const token = await authService.login(email, password);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const registerNewUser = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const userData = await authService.register(user);
    res.status(201).json({
      message: 'User registered successfully',
      user: userData,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export default router;
