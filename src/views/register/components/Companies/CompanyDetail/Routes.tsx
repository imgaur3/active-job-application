import { IRoute } from "src/common/Types";
import CompanyDetail from "./CompanyDetail";
import MainLayout from "src/layouts/MainLayout";


export const CompaniesDetailRoute: IRoute = {
  path: '/companies/deatils/:id',
  exact: true,
  element: CompanyDetail,
  layout: MainLayout,
};
