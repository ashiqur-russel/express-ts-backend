import jwt from 'jsonwebtoken';
import { User } from '../user/user.model';
import bcrypt from 'bcryptjs';
import config from '../../config';

export class AuthService {
  async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      config.jwt_secret_key || 'secret',
      { expiresIn: '1h' },
    );

    return token;
  }

  async register(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    const existingUser = await User.findOne({ email });
    const existingUserWithUsername = await User.findOne({ username });

    if (existingUser?.email === email) {
      throw new Error('Email is already registered.');
    }

    if (existingUserWithUsername?.username === username) {
      throw new Error('Username is already taken.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
  }

  async getAuthMessage() {
    return 'Auth route check';
  }
}
