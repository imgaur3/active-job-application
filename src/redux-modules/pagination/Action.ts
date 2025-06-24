import { PaginationInit } from './Types';
export const INIT_PAGINATION = 'INIT_PAGINATION';
export const SET_PAGINATION_PAGE_INDEX = 'SET_PAGINATION_PAGE_INDEX';

export const registerPagination = (init: PaginationInit) => {
  return {
    type: INIT_PAGINATION,
    payload: init,
  };
};

export const setTablePageIndex = (payload: {
  context: string;
  pageIndex: number;
}) => {
  return {
    type: SET_PAGINATION_PAGE_INDEX,
    payload: payload,
  };
};
