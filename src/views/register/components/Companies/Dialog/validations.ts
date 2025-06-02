import * as yup from 'yup';

export const validateCompany = yup.object().shape({
    name: yup.string().required(),
    email: yup
  .string()
  .email('Please enter valid email id')
  .required('This field is required')
});