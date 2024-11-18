import { IUser } from './user.interface';
import { User } from './user.model';

export class UserService {
  constructor() {}

  async getAllUser(): Promise<IUser[]> {
    return await User.find({});
  }
}
