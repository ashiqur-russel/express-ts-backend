import { Router, Request, Response } from "express";
import { AuthService } from "./auth.service";

const router = Router();
const authService = new AuthService();

router.get("", async (req: Request, res: Response) => {
  try {
    const message = await authService.getAuth();
    res.status(200).json({ message });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    res.status(200).json({ message: "Login successful", token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await authService.register(username, email, password);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
