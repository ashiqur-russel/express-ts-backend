import mongoose, { Schema, Document } from 'mongoose';
import { IStudent, GuardianInfo } from './student.interface';

export const GuardianInfoSchema: Schema<GuardianInfo> = new Schema({
  fatherName: { type: String, default: null },
  motherName: { type: String, default: null },
  contactNo: { type: String, default: null },
});

const StudentSchema: Schema<IStudent & Document> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  guardianInfo: { type: GuardianInfoSchema, default: null },
});

export const Student = mongoose.model<IStudent & Document>(
  'Student',
  StudentSchema,
);
