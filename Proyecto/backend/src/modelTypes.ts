import { UserModel } from './models/UserModel';
import { ReportModel } from './models/ReportModel';
import { CategoryModel } from './models/CategoryModel';
import { LocationModel } from './models/LocationModel';

export interface Models {
  userModel: typeof UserModel;
  reportModel: typeof ReportModel;
  categoryModel: typeof CategoryModel;
  locationModel: typeof LocationModel;
}
