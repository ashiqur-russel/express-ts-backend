export interface IUser {
  username: string;
  name: string;
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  isActive: string;
  password: string;
  gender: 'male' | 'female';
  role: 'student' | 'tutor' | 'admin';
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address?: string;
  isDeleted: boolean;
}
