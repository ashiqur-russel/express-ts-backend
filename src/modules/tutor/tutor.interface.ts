import { IUser } from '../user/user.interface';

export interface ITutor extends IUser {
  department: string;
}
