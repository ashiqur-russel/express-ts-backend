import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.send("Login successful");
};

export const register = (req: Request, res: Response) => {
  res.send("Registration successful");
};

export const all = (req: Request, res: Response) => {
  res.send("server is up");
};
