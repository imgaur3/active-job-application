/* eslint-disable no-undef */
import React from 'react';
import { Box, Tooltip, Typography } from "@mui/material";
import { Control, FieldValues, useForm } from "react-hook-form";
import { InputTextField } from "../../../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "../../../redux-modules/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { formFieldConstants } from '../../../common/utils/constants';
import { Button } from "../../../components";
import { ForgotPasswordImage } from '../../../../src/assets/images';
import { Link } from 'react-router';
import { LogoAi } from '../../../../src/assets/svg';
import { resetPassword } from '../../../../src/redux-modules/auth/Actions';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const forgotPasswordSchema = yup.object().shape({
    email: yup
      .string()
      .email(formFieldConstants.emailValidConstant)
      .required(formFieldConstants.requiredConstant)
  });

  const auth = useSelector(AuthSelectors.auth);
  const { isLoading, errorMessage } = auth;
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: FieldValues) => {
    const payload = { ...data };
    dispatch(resetPassword(payload.email));
    console.log(payload, 'payload');
  };
  return (
    <Box className="flex justify-around items-center w-full h-screen">
      <Box>
        <Box className="h-[10vh] flex items-end">
          <img src={LogoAi} alt={LogoAi} />
        </Box>
        <Box className="h-[80vh] flex justify-center items-center">
          <Box>
            <Typography className='text-4xl! mb-4! font-[Albert_Sans] text-[#11A5BD]'>Forget Password?</Typography>
            <Typography className='text-[16px]! font-[Albert_Sans]'>Don&apos;t worry, We&apos;ll reset your password
              and<br />  send you a link to create a new one.</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Tooltip title={errorMessage} disableInteractive>
                <Box>
                  <Typography>{errorMessage}</Typography>
                </Box>
              </Tooltip>
              <Box className="mt-6">
                <InputTextField
                  name="email"
                  control={control as unknown as Control<FieldValues>}
                  variant="standard"
                  placeholder="Enter Email"
                  required
                />
              </Box>
              <Box className='flex flex-row items-center justify-between'>
                <Button
                  label="Submit"
                  variant="contained"
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  className='my-[30px] text-[#FFFFFF] bg-[#11A5BD]'
                />
              </Box>
            </form>
          </Box>
        </Box>
        <Box className="h-[10vh]">
          <Typography className='font-[Albert_Sans]'><Link to={'/sign-in'}>Back to <span className='text-[#11A5BD] font-[500]!'>Signin</span></Link></Typography>
        </Box>
      </Box>
      <Box>
        <img src={ForgotPasswordImage} alt={ForgotPasswordImage} className='w-[500px]' />
      </Box>
    </Box>
  )
}

export default ForgotPassword;
