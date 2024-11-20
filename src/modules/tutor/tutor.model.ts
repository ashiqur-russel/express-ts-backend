import mongoose, { Schema, Document } from 'mongoose';
import { ITutor } from './tutor.interface';
import { UserSchema } from '../user/user.model';

const TutorSchema: Schema<ITutor & Document> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  department: { type: String, default: null },
  isDeleted: { type: Boolean, default: false },
});

TutorSchema.add(UserSchema);

export const Tutor = mongoose.model<ITutor & Document>('Tutor', TutorSchema);
