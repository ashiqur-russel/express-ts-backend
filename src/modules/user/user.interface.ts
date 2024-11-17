export interface IUser {
  username: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'tutor' | 'admin';
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address?: string;
}
