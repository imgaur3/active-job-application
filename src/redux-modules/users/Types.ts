export type UserAction = {
  type: string;
  payload?: UserPayload;
};

export type UserPayload = {
  user: User;
};

export type ErrorType = {
  message: string;
};


export type UserState = {
  users: User;
  isLoading: boolean;
  loggedIn: boolean;
  errorMessage?: string;
  error: ErrorType
};


export type User = {
  fullname: string;
  email: string;
  password: string;
  dob: string;
  degree: string;
  specialization: string;
  certifications: string;
  skills: string;
  experience: number;
  job_type: string;
  availability: string;
  notice_period: number;
  salary: string;
  location: string;
  overseas: string;
  company_type: string;
} 