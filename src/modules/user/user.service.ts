import { IUser, User } from './user.model';

export class UserService {
  constructor() {}

  async getAllUser(): Promise<IUser[]> {
    return await User.find({});
  }

  async checkUserType() {
    const user = await User.findById('d');
  }
}
