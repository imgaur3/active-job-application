export type LoginPayload = {
    email: string;
    password: string;
  };
  
  export type User = {
    name: string;
    email: string;
    id: string;
  };
  
  export type AuthPayload = {
    user: User;
  };
  
  export type AuthState = {
    user: User;
    isLoading: boolean;
    loggedIn: boolean;
    errorMessage?: string;
  };
  
  export type AuthAction = {
    type: string;
    payload?: AuthPayload;
  };

  export type ResetPasswordPayload = {
    email: string;
  }
  