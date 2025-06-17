import { RootState } from "../store/rootState";

export const sidebarToggle = (state: RootState) => state.global.sidebar;

export const globalExcelReader = (state: RootState) => state.global;
