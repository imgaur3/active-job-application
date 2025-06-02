import React from 'react';
import WrapperDialog from '../../.././../../components/Dialog';
import { useDispatch } from 'react-redux';
import { dialogClose } from '../../../../../redux-modules/dialog/Actions';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCompany } from './validations';
import { InputTextField } from '../../../../../../src/components/FormField';
import { Box, Grid } from '@mui/material';
import { Button } from '../../../../../../src/components';

const AddCompany = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(dialogClose(''));
    reset();
  };

  const { handleSubmit, getValues, control, reset } =
    useForm({
      mode: 'onSubmit',
      resolver: yupResolver(validateCompany),
    });

  const onSubmit = () => {
    const formData = { ...getValues() };
    // eslint-disable-next-line no-undef
    console.log('Form Data:', formData);
  };

  return (
    <WrapperDialog
      id='applicationDialog'
      maxWidth='lg'
      title="Add Company"
      handleClose={onClose}
    >
      <Box className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Name"
                name="name"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Name"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>

            <Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid><Grid size={{ lg: 6 }}>
              <InputTextField
                label="Email"
                name="Your Email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
          </Grid>
          <Box className="flex justify-end mt-5">
            <Button
              label="Submit"
              type="submit"
              className='bg-[#18a0b9] px-5! text-[#ffffff] mr-5!'
            />
            <Button
              label="Cancel"
              onClick={onClose}
              className='border-[1px] border-[#18a0b9] px-5! text-[#18a0b9]'
            />
          </Box>
        </form>
      </Box>
    </WrapperDialog>
  )
}
export default AddCompany;