/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { WrapperDialog } from 'src/components/Dialog';
import { AutocompleteField, Button, SwitchButton } from 'src/components';
import { get, isEmpty } from 'lodash';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Countries } from 'src/common/utils/constants';
import { InputTextField, FieldLabel } from 'src/components/FormField';
import SelectField from 'src/components/FormField/SelectField';
import { useDispatch, useSelector } from 'react-redux';
import { dialogClose } from 'src/redux-modules/dialog/Actions';
import Typography from 'src/components/WrappedTypography';
import { CompaniesSelectors } from 'src/redux-modules/companies';
import { editCompanyAction } from 'src/redux-modules/companies/Actions';

type Props = {
    handleClose: () => void;
    title: string;
    editCompany: unknown;
};

const EditCompany = ({ title, handleClose, editCompany }: Props) => {
    const dispatch = useDispatch();
    const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
    const [isActive, setIsActive] = useState(false);

    const companyData = useSelector(CompaniesSelectors.companies);
    const { errorMessage } = companyData;

    const onClose = () => {
        handleClose();
        reset({});
        dispatch(dialogClose(''));
    };

    const { handleSubmit, control, setValue, reset } =
        useForm({
            mode: 'onSubmit',
            // resolver: yupResolver(validateCompany),
        });
    const onSubmit = (formData: FieldValues) => {
        const payload = {
            id: formData.id,
            companyName: formData.companyName,
            email: formData.email,
            status: Array.isArray(formData.status) ? formData.status.join(',') : formData.status,
            industry: Array.isArray(formData.industry) ? formData.industry.join(',') : formData.industry,
            country: formData.country,
            platform: formData.platform,
            domain: formData.domain,
            phone: formData.phone,
        };

        dispatch(editCompanyAction(payload));
    };

    useEffect(() => {
        if (!isEmpty(editCompany)) {
            setValue('id', get(editCompany, 'id'));
            setValue('companyName', get(editCompany, 'name'));
            setValue('phone', get(editCompany, 'company_phone'));
            setValue('domain', get(editCompany, 'company_domain'));
            setValue('email', get(editCompany, 'email'));
            setValue('country', get(editCompany, 'location'));
            setValue('platform', get(editCompany, 'platform'));
            setValue('location', get(editCompany, 'lcoation'));
            setValue('status', get(editCompany, 'status'))
        }
    }, [editCompany, setValue]);
    return (
        <WrapperDialog
            id='editCompany'
            maxWidth={'sm'}
            title={title}
            handleClose={onClose}
        >
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography errorText={get(errorMessage, 'message')} />
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <InputTextField
                                label="Company Name"
                                name="companyName"
                                value={get(editCompany, 'name')}
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Name"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <InputTextField
                                label="Email"
                                value={get(editCompany, 'email')}
                                name="email"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Email"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <SelectField
                                name="industry"
                                label="Industry"
                                options={['Full-time', 'Part-Time', 'Freelance']}
                                control={control as unknown as Control<FieldValues>}
                                selected={selectedIndustry}
                                onChange={setSelectedIndustry}
                                defaultValue={['Full-time']}
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <FieldLabel text={'Country'} />
                            <AutocompleteField
                                label='Select your country'
                                name="country"
                                control={control as unknown as Control<FieldValues>}
                                countries={Countries}
                                getOptionLabel={option => option || ''}
                                isOptionEqualToValue={(option: any, value: any) =>
                                    option.id === get(value, 'id', '') ||
                                    value === undefined ||
                                    value === ''
                                }
                            />

                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <InputTextField
                                label="Platform"
                                name="platform"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                value={get(editCompany, 'platform')}
                                placeholder="Enter platform"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <InputTextField
                                label="Website Link"
                                name="domain"
                                value={get(editCompany, 'domain')}
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter website"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }}>
                            <InputTextField
                                label="Phone"
                                name="phone"
                                value={get(editCompany, 'phone')}
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter phone"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 12, sm: 12 }} className="flex items-center py-5!">
                            <FieldLabel text={'Status'} />
                            <SwitchButton
                                name="status"
                                control={control as unknown as Control<FieldValues>}
                                label="Company Status"
                                checked={isActive}
                                onChange={(e: any) => {
                                    setIsActive(e.target.checked);
                                }}
                            />
                            <Typography>{isActive}</Typography>
                        </Grid>
                    </Grid>
                    <Box className="flex justify-end mt-5">
                        <Button
                            label="Update"
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

export default EditCompany;