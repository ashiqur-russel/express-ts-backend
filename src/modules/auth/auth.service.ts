import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../user/user.model';
import config from '../../config';
import { Student } from '../student/student.model';
import { Tutor } from '../tutor/tutor.model';

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

  async register(
    username: string,
    email: string,
    password: string,
    role: string,
    name: object,
  ): Promise<void> {
    if (!username || !email || !password) {
      throw new Error('Username, email, and password are required');
    }

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
      username,
      email,
      password: hashedPassword,
      role,
      name: name,
    });

    await user.save();

    if (role === 'student') {
      const newStudent = new Student({
        userId: user._id,
      });
      await newStudent.save();
    } else if (role === 'tutor') {
      const newTutor = new Tutor({
        userId: user._id,
      });
      await newTutor.save();
    }
  }

  async getAuthMessage(): Promise<string> {
    return 'Auth route check';
  }
}
