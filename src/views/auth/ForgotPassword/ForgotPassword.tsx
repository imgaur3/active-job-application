import React from 'react';
import { Box, Tooltip, Typography } from "@mui/material";
import { Control, FieldValues, useForm } from "react-hook-form";
import { InputTextField } from "../../../components/FormField";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../../redux-modules/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { formFieldConstants } from '../../../common/utils/constants';
import { Button } from "../../../components";
import { Link } from "react-router";

const ForgotPassword = () => {

    const forgotPasswordSchema = yup.object().shape({
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

      const auth = useSelector(AuthSelectors.auth);
      const { isLoading, errorMessage } = auth;
      const { handleSubmit, getValues, control } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(forgotPasswordSchema),
      });

        const onSubmit = () => {
          const payload = { ...getValues() };
          // dispatch(AuthActions.logIn({ ...payload }));
          //   navigate('/dashboard');
          // eslint-disable-next-line no-undef
          console.log(payload);
        };
  return (
   <Box>
        <Typography>Forget Password?</Typography>
        <Typography>Enter your registered mail.</Typography>
          <form onSubmit={handleSubmit(onSubmit)} className='pt-[40px]'>
          <Tooltip title={errorMessage} disableInteractive>
            <Box>
              <Typography>{errorMessage}</Typography>
            </Box>
          </Tooltip>
          <InputTextField
            label="Email"
            name="email"
            control={control as unknown as Control<FieldValues>}
            variant="standard"
            placeholder="Enter Email"
            required
          />
        <Box className='flex flex-row items-center justify-between'>
            <Button
              label="Login"
              variant="contained"
              type="submit"
              isLoading={isLoading}
              disabled={isLoading}
              className='my-[30px] text-[#404040] bg-[#ffffff]'
            />
            <Typography className='text-[#FFFFFF] font-[Albert_Sans]'> <Link to="/forgot-password">Forgot Password?</Link></Typography>
            </Box>
        </form>
        <Typography><Link to={'/sign-in'}>Back to Signin</Link></Typography>
   </Box>
  )
}

export default ForgotPassword;
