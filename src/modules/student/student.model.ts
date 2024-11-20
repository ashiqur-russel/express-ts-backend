import mongoose, { Schema, Document } from 'mongoose';
import { IStudent, GuardianInfo } from './student.interface';
import { UserSchema } from '../user/user.model';

export const GuardianInfoSchema: Schema<GuardianInfo> = new Schema({
  fatherName: { type: String, default: null },
  motherName: { type: String, default: null },
  contactNo: { type: String, default: null },
});

const StudentSchema: Schema<IStudent & Document> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  guardianInfo: { type: GuardianInfoSchema, default: null },
  isDeleted: { type: Boolean, default: false },
});

StudentSchema.add(UserSchema);

export const Student = mongoose.model<IStudent & Document>(
  'Student',
  StudentSchema,
);
