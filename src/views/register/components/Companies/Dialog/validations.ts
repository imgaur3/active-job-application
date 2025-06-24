import * as yup from 'yup';

export const validateCompany = yup.object().shape({
  companyName: yup.string().required('Company Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  industry: yup
    .array()
    .of(yup.string())
    .min(1, 'Industry is required')
    .required('Industry is required'),
  country: yup
    .object({
      label: yup.string().required('Country is required'),
      code: yup.string(),
      phone: yup.string(),
    })
    .nullable()
    .required('Country is required'),
  platform: yup.string().required('Platform is required'),
  domain: yup.string().required('Website Link is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[\d\-+() ]+$/, 'Phone must be a valid number'),
});