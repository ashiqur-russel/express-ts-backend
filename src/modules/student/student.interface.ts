import { IUser } from '../user/user.interface';
import mongoose from 'mongoose';

export interface IGuardianInfo {
  fatherName: string;
  motherName: string;
  contactNo: string;
}

export interface IStudent extends IUser {
  userId: mongoose.Types.ObjectId;
  guardianInfo: IGuardianInfo;
}
