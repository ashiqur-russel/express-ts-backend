import { Application } from "express";
import authRoutes from "./auth/auth.routes";

export const registerRoutes = (app: Application) => {
  app.use("/auth", authRoutes);
};
