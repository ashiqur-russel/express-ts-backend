import { IUser } from '../user/user.interface';

export interface IGuardianInfo {
  fatherName: string;
  motherName: string;
  contactNo: string;
}

export interface IStudent extends IUser {
  guardianInfo: IGuardianInfo;
}
