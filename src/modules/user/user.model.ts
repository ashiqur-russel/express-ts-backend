import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.interface';

export interface IUserDocument extends IUser, Document {}

const AddressSchema: Schema = new Schema({
  presentAddress: { type: String, default: null },
  permanentAddress: { type: String, default: null },
  locationArea: { type: String, default: null },
});

const UserSchema: Schema<IUserDocument> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['student', 'tutor', 'admin'],
    required: true,
  },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    default: null,
    required: false,
  },
  address: { type: AddressSchema, default: null, required: false },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
});

export const User = mongoose.model<IUserDocument>('User', UserSchema);
