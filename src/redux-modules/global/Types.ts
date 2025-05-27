export type Sidebar = {
    open: boolean;
  };

export type GlobalState = {
    sidebar: Sidebar;
    signedUrlLoading: boolean;
    errorMessage: string;
    urlResponse: null;
  };

  export type GlobalAction = {
    type: string;
    payload?: GlobalPayload;
  };

  export type GlobalPayload = {
    data: unknown;
  };

  export interface CalendarPayload {
  oAuthAccessToken: string | undefined;
  refreshToken: string | undefined;
}