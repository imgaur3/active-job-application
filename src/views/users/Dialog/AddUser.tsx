import React, { useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { WrapperDialog } from 'src/components/Dialog';
import { useDispatch } from 'react-redux';
import { dialogClose } from 'src/redux-modules/dialog/Actions';
import { Control, FieldValues, useForm, useFieldArray } from 'react-hook-form';
import Typography from 'src/components/WrappedTypography';
import { InputTextField } from 'src/components/FormField';
import { Button, DateField, FileUploadButton } from 'src/components';
import { fontFamily } from 'src/common/utils/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SelectField from 'src/components/FormField/SelectField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const AddUser = () => {
    const dispatch = useDispatch();
    const handleClose = () => dispatch(dialogClose('userAdd'));
    const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);

    const defaultValues = {
        fullName: '',
        date: '',
        degree: '',
        specialization: '',
        certificates: [
            { title: '', url: '' }
        ],
    };

    const { handleSubmit, control, reset } = useForm({
        defaultValues,
        mode: 'onSubmit',
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'certificates',
    });

    const onClose = () => {
        dispatch(dialogClose(''));
        reset(defaultValues);
    };

    const onSubmit = (data: FieldValues) => {
        console.log('Submitted data:', data); //eslint-disable-line
    };

    const handleFileChange = (files: FileList | null) => {
        if (files) {
            // eslint-disable-next-line no-undef
            console.log('Selected files:', files);
        }
    };

    return (
        <Box>
            <WrapperDialog
                id="userAdd"
                title="Add User"
                maxWidth="md"
                handleClose={handleClose}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{ fontFamily: fontFamily.primary }}>
                        Personal Information
                    </Typography>
                    <hr className="border-[#F2F2F2] my-4" />

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Full Name"
                                name="fullName"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Name"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <Typography className="text-[12px] font-[Albert_Sans]">Date of Birth*</Typography>
                            <DateField
                                name="date"
                                label=""
                                control={control as unknown as Control<FieldValues>}
                                required
                            />
                        </Grid>
                    </Grid>

                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Education Details
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Degree"
                                name="degree"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Degree"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Specialization"
                                name="specialization"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Specialization"
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Box className="flex items-center">
                            <Typography sx={{ fontFamily: fontFamily.primary }}>
                                Certificates
                            </Typography>
                            <ControlPointIcon onClick={() => append({ title: '', url: '' })} className='cursor-pointer text-[#18a0b9] ml-2' />
                        </Box>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>

                    {fields.map((item, index) => (
                        <Grid container spacing={2} key={item.id} alignItems="center">
                            <Grid size={{ lg: 5, md: 5, sm: 11, xs: 11 }}>
                                <InputTextField
                                    label="Certification Title"
                                    name={`certificates.${index}.title`}
                                    control={control as unknown as Control<FieldValues>}
                                    variant="standard"
                                    placeholder="Enter Certificate Title"
                                    required
                                />
                            </Grid>
                            <Grid size={{ lg: 5, md: 5, sm: 11, xs: 11 }}>
                                <InputTextField
                                    label="Certification URL"
                                    name={`certificates.${index}.url`}
                                    control={control as unknown as Control<FieldValues>}
                                    variant="standard"
                                    placeholder="Enter Certificate URL"
                                    required
                                />
                            </Grid>
                            <Grid size={{ lg: 2, md: 2, sm: 11, xs: 11 }} textAlign="center">
                                {fields.length > 1 && (
                                    <IconButton
                                        aria-label="delete"
                                        color="error"
                                        onClick={() => remove(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </Grid>
                        </Grid>
                    ))}

                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Technical Skills
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Technical Skills"
                                name="technicalSkills"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Degree"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Proficiency"
                                name="proficiency"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Specialization"
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Professional Experience
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Past Role"
                                name="pastRole"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Degree"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Year of Experience"
                                name="experience"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Specialization"
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Job Types
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <SelectField
                                name="jobType"
                                label="Job Type"
                                options={['Full-time', 'Part-Time', 'Freelance']}
                                control={control as unknown as Control<FieldValues>}
                                selected={selectedIndustry}
                                onChange={() => setSelectedIndustry}
                                defaultValue={['Full-time']}
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <SelectField
                                name="availability"
                                label="Availability"
                                options={['Immediate', 'Available', 'Future Available']}
                                control={control as unknown as Control<FieldValues>}
                                selected={selectedIndustry}
                                onChange={() => setSelectedIndustry}
                            />
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Notice Period
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Required time before joining"
                                name="requiredTime"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter required time"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Salary Expectation"
                                name="salaryExpectation"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Compansation"
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Preferred Job Locations
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Preferred Job Location"
                                name="preferredJobLocation"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Preferred Job Location"
                                required
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Specify interest in international roles"
                                name="specifiedInterest"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Specify interest"
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Typography sx={{ fontFamily: fontFamily.primary }}>
                            Upload CV/Resume
                        </Typography>
                        <hr className="border-[#F2F2F2] my-4" />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <FileUploadButton
                                label="Update"
                                startIcon={<CloudUploadIcon />}
                                multiple
                                accept=".pdf,.docx"
                                onFileChange={handleFileChange}
                                className='bg-[#119eb5]'
                            />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <InputTextField
                                label="Industry Preference"
                                name="industryPreference"
                                control={control as unknown as Control<FieldValues>}
                                variant="standard"
                                placeholder="Enter Industry Preference"
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box className="flex justify-end mt-5">
                        <Button
                            isLoading={false}
                            label="Submit"
                            type="submit"
                            className="bg-[#18a0b9] px-5! text-[#ffffff] mr-5!"
                        />
                        <Button
                            label="Cancel"
                            onClick={onClose}
                            className="border-[1px] border-[#18a0b9] px-5! text-[#18a0b9]"
                        />
                    </Box>
                </form>
            </WrapperDialog>
        </Box>
    );
};

export default AddUser;
