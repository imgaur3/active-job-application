import { IRoute } from "../../common/Types";
import MainLayout from "../../layouts/MainLayout";
import RegisterData from "./RegisterData";

export const RegisterDataRoute: IRoute = {
  path: '/register-data',
  exact: true,
  element: RegisterData,
  layout: MainLayout,
};
