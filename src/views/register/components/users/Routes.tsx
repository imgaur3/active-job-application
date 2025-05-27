import { IRoute } from "../../../../common/Types";
import MainLayout from "../../../../layouts/MainLayout";
import Users from "./Users";

export const UsersRoute: IRoute = {
  path: '/users',
  exact: true,
  element: Users,
  layout: MainLayout,
};
