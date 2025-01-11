import { User } from '../user/user.model';

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

export const AuthServices = { registerUser };
