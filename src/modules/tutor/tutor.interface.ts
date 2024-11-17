import { IUser } from '../user/user.interface';
import mongoose from 'mongoose';

export interface ITutor extends IUser {
  userId: mongoose.Types.ObjectId;
  department: string;
}
