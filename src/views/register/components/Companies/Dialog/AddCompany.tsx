import React, { useState } from 'react';
import WrapperDialog from '../../.././../../components/Dialog';
import { useDispatch } from 'react-redux';
import { dialogClose } from '../../../../../redux-modules/dialog/Actions';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCompany } from './validations';
import { InputTextField } from 'src/components/FormField';
import { Box, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { Button } from 'src/components';
import SelectField from 'src/components/FormField/SelectField';

const AddCompany = () => {
  const dispatch = useDispatch();
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const onClose = () => {
    dispatch(dialogClose(''));
    reset(defaultValues);
  };

  const defaultValues = {
    companyName: '',
    email: '',
    status: '',
    industry: [],
  };


  const { handleSubmit, control, reset, } =
    useForm({
      mode: 'onSubmit',
      resolver: yupResolver(validateCompany),
    });
  const onSubmit = (formData: FieldValues) => {
    const dataToSend = {
      ...formData,
      industry: Array.isArray(selectedIndustry) ? selectedIndustry.join(',') : selectedIndustry,
    };
    // eslint-disable-next-line no-undef
    console.log(dataToSend, 'data');
    reset(defaultValues);
  };
  return (
    <WrapperDialog
      id='applicationDialog'
      maxWidth='sm'
      title="Add Company"
      handleClose={onClose}
    >
      <Box sx={{
        '*': {
          paddingBottom: '2px',
        },
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid size={{ lg: 12 }}>
              <InputTextField
                label="Company Name"
                name="companyName"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Name"
                required
              />
            </Grid>
            <Grid size={{ lg: 12 }}>
              <InputTextField
                label="Email"
                name="email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 12 }}>
              <FormLabel id="demo-radio-buttons-group-label" className='font-[Albert_Sans] text-[15px]'>Status</FormLabel>
              <Controller
                name="status"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <>
                    <RadioGroup
                      {...field}
                      aria-labelledby="demo-radio-buttons-group-label"
                      row
                    >
                      <FormControlLabel value="active" control={<Radio />} label="Active" />
                      <FormControlLabel value="inActive" control={<Radio />} label="In-Active" />
                    </RadioGroup>
                    {error && (
                      <Box sx={{ color: 'red', fontSize: 12, mt: 0.5 }}>
                        {error.message}
                      </Box>
                    )}
                  </>
                )}
              />
            </Grid>
            <Grid size={{ lg: 12 }}>
              <SelectField
                name="industry"
                label="Industry"
                options={['Full-time', 'Part-Time', 'Freelance']}
                control={control as unknown as Control<FieldValues>}
                selected={selectedIndustry}
                onChange={setSelectedIndustry}
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