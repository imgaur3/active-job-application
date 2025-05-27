import { IRoute } from "../../common/Types";
import MainLayout from "../../layouts/MainLayout";
import JobSeekers from "./JobSeekers";


export const JobSeekerRoute: IRoute = {
  path: '/job-seekers',
  exact: true,
  element: JobSeekers,
  layout: MainLayout,
};
