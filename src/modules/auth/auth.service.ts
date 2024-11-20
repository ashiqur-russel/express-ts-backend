import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../user/user.model';
import config from '../../config';
import { Student } from '../student/student.model';
import { Tutor } from '../tutor/tutor.model';
import { IUser } from '../user/user.interface';
import { IStudent } from '../student/student.interface';
import { ITutor } from '../tutor/tutor.interface';

export class AuthService {
  async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      config.jwt_secret_key || 'secret',
      { expiresIn: '1h' },
    );

    return token;
  }

  async register(userData: IStudent | ITutor): Promise<IUser | undefined> {
    const { email, username, role, password } = userData;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new Error(
        existingUser.email === email
          ? 'Email is already registered'
          : 'Username is already taken',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      ...userData,
      password: hashedPassword,
    });

    await user.save();

    if (role === 'student') {
      const newStudent = new Student({
        userId: user._id,
      });
      return await newStudent.save();
    } else if (role === 'tutor') {
      const newTutor = new Tutor({
        userId: user._id,
      });
      return await newTutor.save();
    }
  }

  async getAuthMessage(): Promise<string> {
    return 'Auth route check';
  }
}
