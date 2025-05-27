import * as yup from 'yup';

import { formFieldConstants } from '../../../common/utils/constants';
export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email(formFieldConstants.emailValidConstant)
    .required(formFieldConstants.requiredConstant)
    .matches(
      formFieldConstants.emailRegex,
      formFieldConstants.emailValidConstant,
    ),
  password: yup.string().max(30).required(formFieldConstants.requiredConstant),
});
