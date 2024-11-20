import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { ITutor } from '../tutor/tutor.interface';
import { IUser } from './user.interface';
import { User } from './user.model';

export class UserService {
  constructor() {}

  async getAllUser(): Promise<IUser[]> {
    return await User.find({});
  }

  async deleteUser(id: string): Promise<IStudent | ITutor | null> {
    const user = await User.findById(id).lean<IStudent | ITutor>();
    if (!user) {
      throw new Error('User not found');
    }

    if (user.isDeleted) {
      throw new Error('User is already deleted!');
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    ).lean<IStudent | ITutor>();

    if (user.role === 'student') {
      await Student.updateOne({ userId: id }, { isDeleted: true });
    }

    if (user.role === 'tutor') {
      await Student.updateOne({ userId: id }, { isDeleted: true });
    }

    return updatedUser;
  }
}
