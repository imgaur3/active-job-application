import { IRoute } from "../../../../common/Types";
import MainLayout from "../../../../layouts/MainLayout";
import Companies from "./Companies";

export const CompaniesRoute: IRoute = {
  path: '/companies',
  exact: true,
  element: Companies,
  layout: MainLayout,
};
