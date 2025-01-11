import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import httpStatus from 'http-status';

export const registerUser = async (
  email: string,
  password: string,
  role?: 'user' | 'admin',
): Promise<void> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const newUser = new User({
    email,
    password,
    role: role,
    status: 'pending',
  });

  await newUser.save();
};

const loginUser = async (payload: TLoginUser) => {
  const { email, password } = payload;

  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError('User not found!', httpStatus.NOT_FOUND);
  }

  if (await User.isPasswordMatched(password, user.password)) {
    return user;
  } else {
    throw new AppError('Wrong password!', httpStatus.FORBIDDEN);
  }
};

export const AuthServices = { registerUser, loginUser };
