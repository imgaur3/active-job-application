import { IRoute } from "../../common/Types";
import MainLayout from "../../layouts/MainLayout";
import Settings from "./Settings";

export const SettingsRoute: IRoute = {
  path: '/settings',
  exact: true,
  element: Settings,
  layout: MainLayout,
};
