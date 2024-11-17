import { Application } from 'express';
import authRoutes from './auth/auth.routes';
import userRoutes from './user/user.routes';

export const registerRoutes = (app: Application) => {
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
};
