import { createApp } from './index';
import { UserModel } from './models/UserModel';
import { ReportModel } from './models/ReportModel';

createApp({ models: { userModel: UserModel, reportModel: ReportModel } });
