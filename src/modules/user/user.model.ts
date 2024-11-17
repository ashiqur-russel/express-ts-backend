import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  role?: string;
  isRegisterd?: boolean;
  password: string;
  createdAt?: Date;
}

export interface IPublicUser {
  _id?: string;
  username?: string;
  email?: string;
  createdAt?: Date;
}

const UserSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: false, default: 'testUser' },
  isRegisterd: { type: Boolean, required: true, default: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>('User', UserSchema);
