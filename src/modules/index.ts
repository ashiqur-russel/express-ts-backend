import { Application } from 'express';
import authRoutes from './auth/auth.routes';
import userRoutes from './user/user.routes';
import studentRoutes from './student/student.route';
import studentsRoutes from './students/students.route'; // testing purpose

export const registerRoutes = (app: Application) => {
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
  app.use('/students', studentRoutes);
  app.use('/student', studentsRoutes); // testing purpose
};
