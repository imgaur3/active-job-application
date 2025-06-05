import MainLayout from "../../../src/layouts/MainLayout";
import { IRoute } from "../../../src/common/Types";
import Users from "./Users";

export const AllUsersRoute: IRoute = {
  path: '/all-users',
  exact: true,
  element: Users,
  layout: MainLayout,
};
