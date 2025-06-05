import { GET_ALL_USERS_COMPLETE, GET_ALL_USERS_ERROR, GET_ALL_USERS_LOADING } from "./Actions";
import { UserState, UserAction } from "./Types";

export const usersInitialState: UserState = {
  users: {
    fullname: "",
    email: "",
    password: "",
    dob: "",
    degree: "",
    specialization: "",
    certifications: "",
    skills: "",
    experience: 0,
    job_type: "",
    availability: "",
    notice_period: 0,
    salary: "",
    location: "",
    overseas: "",
    company_type: ""
  },
  isLoading: false,
  loggedIn: false,
  errorMessage: '',
  error: {
    message: '',
  },
};

const usersReducer = (state = usersInitialState, action: UserAction) => {
  switch (action.type) {
    case GET_ALL_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_ALL_USERS_COMPLETE:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case GET_ALL_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};

export default usersReducer;