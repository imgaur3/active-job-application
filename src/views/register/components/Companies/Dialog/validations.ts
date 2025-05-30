import * as yup from 'yup';

export const validateCompany = yup.object().shape({
    title: yup
    .string()
    .max(50, 'Not more than 50 characters')
});