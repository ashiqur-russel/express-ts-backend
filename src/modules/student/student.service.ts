import { IStudent } from './student.interface';
import { Student } from './student.model';

export class StudentService {
  constructor() {}

  async getAllStudent(): Promise<IStudent[]> {
    const students = await Student.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'student',
        },
      },
      {
        $unwind: {
          path: '$student',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          guardianInfo: 1,
          'student.username': 1,
          'student.email': 1,
          'student.name': 1,
          'student.role': 1,
          'student.bloogGroup': 1,
          'student.address': 1,
        },
      },
    ]);

    return students;
  }
}
