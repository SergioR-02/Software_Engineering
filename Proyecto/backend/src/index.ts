import express, { json } from 'express';
import { Models } from './modelTypes';
import { corsMiddleware } from './middlewares/cors';
import { MySQLDatabase } from './database/mysql';
import cookieParser from 'cookie-parser';
import { createAuthRouter } from './routes/authRoutes';
import { createReportRouter } from './routes/reportRoutes';
import { createUserRouter } from './routes/userRoutes';
import { createLocationRouter } from './routes/LocationRoutes';
import { createCategoryRouter } from './routes/CategoryRoutes';
// import 'dotenv/config'

export const createApp = async ({ models }: { models: Models }): Promise<express.Application> => {
  try {
    await MySQLDatabase.getInstance();

    const app = express();
    app.use(json());
    app.use(corsMiddleware());
    app.use(cookieParser());
    app.disable('x-powered-by');

    app.use('/auth', createAuthRouter(models.userModel));

    app.use('/user', createReportRouter(models.reportModel));

    app.use('/user', createUserRouter(models.userModel));

    app.use('/user', createCategoryRouter(models.categoryModel));

    app.use('/user', createLocationRouter(models.locationModel));

    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, () => {
      console.log(`server listening on port http://localhost:${PORT}`);
    });

    return app;
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};
