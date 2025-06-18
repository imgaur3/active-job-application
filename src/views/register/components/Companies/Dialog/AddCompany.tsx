import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dialogClose } from '../../../../../redux-modules/dialog/Actions';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCompany } from './validations';
import { FieldLabel, InputTextField } from 'src/components/FormField';
import { Box, Grid } from '@mui/material';
import { AutocompleteField, Button, SwitchButton } from 'src/components';
import SelectField from 'src/components/FormField/SelectField';
import { WrapperDialog } from 'src/components/Dialog';
import { Countries } from 'src/common/utils/constants';
import { addCompany } from 'src/redux-modules/companies/Actions';
import Typography from 'src/components/WrappedTypography';
import { get } from 'lodash';
import { CompaniesSelectors } from 'src/redux-modules/companies';

const AddCompany = () => {
  const dispatch = useDispatch();
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const companyData = useSelector(CompaniesSelectors.companies);
  const { errorMessage } = companyData;

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
    const payload = {
      company: {
        companyName: formData.companyName,
        email: formData.email,
        status: Array.isArray(formData.status) ? formData.status.join(',') : formData.status,
        industry: Array.isArray(formData.industry) ? formData.industry.join(',') : formData.industry,
        country: formData.country,
        platform: formData.platform,
        domain: formData.domain,
        phone: formData.phone,
      }
    };

    dispatch(addCompany(payload));
  };
  return (
    <WrapperDialog
      id='applicationDialog'
      maxWidth='lg'
      title="Add Company"
      handleClose={onClose}
    >
      <Box sx={{
        '*': {
          paddingBottom: '2px',
        },
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography errorText={get(errorMessage, 'message')} />
          <Grid container spacing={2}>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <InputTextField
                label="Company Name"
                name="companyName"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Name"
                required
              />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <InputTextField
                label="Email"
                name="email"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter Email"
                required
              />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <SelectField
                name="industry"
                label="Industry"
                options={['Full-time', 'Part-Time', 'Freelance']}
                control={control as unknown as Control<FieldValues>}
                selected={selectedIndustry}
                onChange={() => setSelectedIndustry}
                defaultValue={['Full-time']}
              />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <FieldLabel text={'Country'} />
              <AutocompleteField
                label='Select your country'
                name="country"
                control={control as unknown as Control<FieldValues>}
                countries={Countries} />

            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <InputTextField
                label="Platform"
                name="platform"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter platform"
                required
              />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <InputTextField
                label="Website Link"
                name="domain"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter website"
                required
              />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <InputTextField
                label="Phone"
                name="phone"
                control={control as unknown as Control<FieldValues>}
                variant="standard"
                placeholder="Enter phone"
                required
              />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} className="flex items-center py-5!">
              <FieldLabel text={'Status'} />
              <SwitchButton
                checked={true}
                name="status"
                control={control as unknown as Control<FieldValues>}
                label="Company Status" />
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