import { USER_ROLE } from './user.constant';

export interface IUser {
  id: string;
  password: string;
  email: string;
  role: 'admin' | 'user';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export type TUserRole = keyof typeof USER_ROLE;
