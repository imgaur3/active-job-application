export type Sidebar = {
  open: boolean;
};

export type ErrorType = {
  message: string;
};

export type GlobalState = {
  sidebar: Sidebar;
  signedUrlLoading: boolean;
  errorMessage: string;
  urlResponse: null;
  isLoading: boolean;
  createOrUpdateError: ErrorType;
};

export type GlobalAction = {
  type: string;
  payload?: GlobalPayload;
};

export type GlobalPayload = {
  data: unknown;
};

export type ExcelSheetPayload = {
  file: Record<string, unknown>;
  cb: () => void;
}