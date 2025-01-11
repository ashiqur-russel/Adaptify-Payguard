import bcrypt from 'bcrypt';
import config from '../../config';
import jwt from 'jsonwebtoken';

export const generateHashedPassword = async (
  password: string,
): Promise<string> => {
  const hashPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  return hashPassword;
};

export const createToken = (
  jwtPayload: {
    userId: string;
    role: string;
  },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
