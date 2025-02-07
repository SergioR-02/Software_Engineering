import cors from 'cors';

const ACCEPTED_ORIGINS: string[] = ['http://localhost:1234'];

interface CorsMiddlewareOptions {
  acceptedOrigins?: string[];
}

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS }: CorsMiddlewareOptions = {}): ReturnType<
  typeof cors
> =>
  cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (origin == null || acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
  });
