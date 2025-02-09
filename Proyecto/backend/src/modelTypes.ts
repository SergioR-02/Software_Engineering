import { UserModel } from './models/UserModel';
import { ReportModel } from './models/ReportModel';

export interface Models {
  userModel: typeof UserModel;
  reportModel: typeof ReportModel;
}
