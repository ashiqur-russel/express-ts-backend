import mongoose, { Schema, Document } from 'mongoose';
import { ITutor } from './tutor.interface';

const TutorSchema: Schema<ITutor & Document> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  department: { type: String, default: null },
});

export const Tutor = mongoose.model<ITutor & Document>('Tutor', TutorSchema);
