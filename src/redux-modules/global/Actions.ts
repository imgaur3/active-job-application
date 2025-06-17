import { ExcelSheetPayload } from "./Types";

export const TOGGLE_SIDEBAR = 'global/TOGGLE_SIDEBAR';

export const EXCELREADER = 'EXCELREADER';
export const EXCELREADER_COMPLETE = 'EXCELREADER_COMPLETE';
export const EXCELREADER_LOADING = 'EXCELREADER_LOADING';
export const EXCELREADER_ERROR = 'EXCELREADER_ERROR';


export const toggleSidebar = (payload: unknown) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload,
  };
};

export const excelReader = (payload: ExcelSheetPayload) => {
  return {
    type: EXCELREADER,
    payload,
  };
};

export const excelReaderError = (payload: { message: string }) => {
  return{
    type: EXCELREADER_ERROR,
    payload,
  };
};