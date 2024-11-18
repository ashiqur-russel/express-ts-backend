import { IUser } from '../user/user.interface';
import mongoose from 'mongoose';

export type GuardianInfo = {
  fatherName: string;
  motherName: string;
  contactNo: string;
};

export interface IStudent extends IUser {
  userId: mongoose.Types.ObjectId;
  guardianInfo: GuardianInfo;
}
