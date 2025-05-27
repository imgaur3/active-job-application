import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  IconButton,
  InputAdornment,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { signInSchema } from './validation';
import { AuthActions, AuthSelectors } from '../../../redux-modules/auth';
import Button from '../../../components/Button/Button';
import { InputTextField } from '../../../components/FormField';
import { Link, useNavigate } from 'react-router';
import { LogInScreen } from '../../../assets/images';
import { LogoAi } from '../../../assets/svg';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const auth = useSelector(AuthSelectors.auth);

  const { isLoading, errorMessage } = auth;

  const { handleSubmit, getValues, control } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  });

  const handleTogglePasswordVisibility = (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = async () => {
    const payload = { ...getValues() };
    dispatch(AuthActions.logIn({ ...payload }));
    navigate('/dashboard');
    
  };

  useEffect(() => {
    if (errorMessage) {
      dispatch(AuthActions.emptyState());
    }
  });

  return (
    <Box className="flex flex-row justify-around items-center w-full p-4 max-sm:p-0! overflow-hidden">
     <Box className="flex w-[50%] max-sm:w-[100%]! sm:w-[100%]! h-full max-sm:m-0! rounded-xl max-sm:rounded-none!">
     <Box className="flex flex-col items-center justify-center w-full h-full p-4">
        <img src={LogoAi} alt={LogoAi} className='py-[40px]'/>
        <Box>
        <Typography className='text-[25px] text-[#FFFFFF] font-[Figtree]'>Welcome to ActiveJobs </Typography>
        <Typography className='text-[#1E1E1E] font-[Figtree]'>Ai-based job provider for your bright future.</Typography>
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
          <Box sx={{ marginTop: '20px' }}>
          <InputTextField
            label="Password"
            name="password"
            control={control as unknown as Control<FieldValues>}
            variant="standard"
            placeholder="Enter Password"
            required  
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onMouseDown={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          </Box>
          <Box className='flex flex-row items-center justify-between align-center mt-4'>
            <Button
              label="Login"
              variant="contained"
              type="submit"
              isLoading={isLoading}
              disabled={isLoading}
              className='my-[30px] text-[#404040] bg-[#ffffff]'
            />
            </Box>
        </form> 
        </Box>
        <Box className='py-[20px] pb-[40px] mt-10 flex justify-between'>
          <Typography className='text-[#404040] font-[Albert_Sans]'> <Link to="/forgot-password">Forgot Password?</Link></Typography>
        <Typography className='text-[#FFFFFF] font-[Figtree]'>Don&apos;t have account?<span className='text-[#000000]'><Link to={'/register'}>SignUp</Link></span></Typography>
        </Box>
        </Box>
     </Box>
     <Box className="flex w-[50%] sm:w-[100%]! h-screen items-center justify-center max-md:hidden! max-sm:hidden!">
     <img src={LogInScreen} alt={LogInScreen}/>
     </Box>
    </Box>
  );
};

export default SignIn;
