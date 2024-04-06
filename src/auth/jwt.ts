import jwt from 'jsonwebtoken';
import { User } from '../models/user';

const SECRET = process.env.JWT_SECRET || "secret";

const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

const verifyToken = (token: string): User => {
  try {
    const decoded = jwt.verify(token, SECRET) as User;
    return decoded;
  } catch (error) {
    throw new Error('Invalid Token');
  }
};

export { generateToken, verifyToken };

