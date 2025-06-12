import * as yup from 'yup';

export const validateCompany = yup.object().shape({
  companyName: yup.string().required(),
  email: yup
    .string()
    .email('Please enter valid email id')
    .required('This field is required'),
  status: yup.string().required('Status is required'),
});