import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export interface AuthRequest extends Request {
  user?: any;
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { id: (decoded as any).id } });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

export const checkRole = (roles: string[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        res.status(401).json({ message: 'Please authenticate.' });
        return;
      }

      if (!roles.includes(req.user.role)) {
        res.status(403).json({ message: 'Access denied.' });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
};
