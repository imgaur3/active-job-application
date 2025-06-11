const CLIENT_ID = 'cl123';

const fontFamily = {
  primary: "'Mulish', sans-serif",
  secondary: "'Comfortaa', sans-serif",
};

export const formFieldConstants = {
  requiredConstant: 'This field is required',
  emailValidConstant: 'Please enter valid Email ID',
  emailRegex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const COMMON_ERRORS = {
  'auth/email-already-in-use': 'This email is already in use.'
};


export { CLIENT_ID, fontFamily, COMMON_ERRORS };
