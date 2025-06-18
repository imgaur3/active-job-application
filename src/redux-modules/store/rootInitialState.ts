import { authInitialState } from '../auth/reducer';
import { RootState } from './rootState';

export const rootInitialState: RootState = {
  auth: authInitialState,
  global: {
    sidebar: {
      open: false
    },
    signedUrlLoading: false,
    errorMessage: '',
    urlResponse: null,
    isLoading: false,
    createOrUpdateError: {
      message: ''
    }
  },
  dialog: {
    openModelIds: []
  },
  users: {
    users: {
      fullname: '',
      email: '',
      password: '',
      dob: '',
      degree: '',
      specialization: '',
      certifications: '',
      skills: '',
      experience: 0,
      job_type: '',
      availability: '',
      notice_period: 0,
      salary: '',
      location: '',
      overseas: '',
      company_type: ''
    },
    isLoading: false,
    loggedIn: false,
    errorMessage: '',
    error: {
      message: ''
    }
  },
  companies: {
    isLoading: false,
    errorMessage: '',
    company: {
      companyName: '',
      email: '',
      status: false,
      industry: [],
      country: undefined,
      platform: '',
      domain: '',
      phone: 0
    }
  },
  excelReader: {
    sidebar: {
      open: false
    },
    signedUrlLoading: false,
    errorMessage: '',
    urlResponse: null,
    isLoading: false,
    createOrUpdateError: {
      message: ''
    }
  }
};
