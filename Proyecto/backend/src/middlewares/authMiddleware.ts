import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '../config';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    res.status(401).json({ message: 'Token no proporcionado' });
    return;
  }

  jwt.verify(token, JWT_CONFIG.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Token inválido' });
      return;
    }

    // Añadir el usuario decodificado a la solicitud
    req.body.user = decoded;
    next();
  });
};
