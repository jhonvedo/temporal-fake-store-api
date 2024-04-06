import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  try {
    const decoded = verifyToken(token.replace("Bearer","").trim());
    //@ts-ignore
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

export default authMiddleware;