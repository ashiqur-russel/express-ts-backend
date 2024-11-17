import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.interface';

export interface IUserDocument extends IUser, Document {}

const UserSchema: Schema<IUserDocument> = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'tutor', 'admin'], required: true },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  address: { type: String },
});

export const User = mongoose.model<IUserDocument>('User', UserSchema);
