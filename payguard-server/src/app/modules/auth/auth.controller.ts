import { Request, Response } from 'express';
import { AuthServices } from './auth.service';

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const result = await AuthServices.registerUser(email, password, role);
    res.status(201).json({ message: 'User registered successfully', result });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const AuthController = {
  register,
};
