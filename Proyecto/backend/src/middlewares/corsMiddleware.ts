import cors from 'cors';

export const corsMiddleware = () =>
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, '*'); // Permitir sin origen (ejemplo: Postman)
      return callback(null, origin); // Permitir cualquier origen dinámicamente
    },
    credentials: true, // Habilita envío de cookies o credenciales
  });
