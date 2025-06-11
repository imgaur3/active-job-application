import React from 'react';
import { Avatar, Box, Grid } from '@mui/material';
import { ProfilePhoto } from 'src/assets/images';
import { Button, FileUploadButton } from 'src/components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { InputTextField } from 'src/components/FormField';


const Profile = () => {
    const handleFileChange = (files: FileList | null) => {
        if (files) {
            // eslint-disable-next-line no-undef
            console.log('Selected files:', files);
        }
    };

    const { handleSubmit, getValues, control, reset } =
        useForm({
            mode: 'onSubmit',
            // resolver: yupResolver(validateCompany),
        });

    const onSubmit = () => {
        const formData = { ...getValues() };
        // eslint-disable-next-line no-undef
        console.log('Form Data:', formData);
    };

    const handleChange = () => {
        // eslint-disable-next-line no-undef
        console.log('test');
    }


    const onClose = () => {
        reset();
    };
    return (
        <Grid container spacing={2}>
            <Grid size={{ lg: 3 }}>
                <Box className="flex items-center justify-center flex-col gap-10">
                    <Avatar
                        alt="ProfileImage"
                        src={ProfilePhoto}
                        sx={{ width: 100, height: 100 }}
                    />
                    <FileUploadButton
                        label="Update"
                        startIcon={<CloudUploadIcon />}
                        multiple
                        accept=".pdf,.docx"
                        onFileChange={handleFileChange}
                        className='bg-[#119eb5]'
                    />
                </Box>
            </Grid>
            <Grid size={{ lg: 9 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Grid container sx={{
                            '& .MuiFormControl-root': {
                                padding: 1,
                            },
                        }}>
                            <Grid size={{ lg: 6 }}>
                                <InputTextField
                                    label="Name"
                                    name="name"
                                    control={control as unknown as Control<FieldValues>}
                                    variant="standard"
                                    placeholder="Name"
                                />
                            </Grid>
                            <Grid size={{ lg: 6 }}>
                                <InputTextField
                                    label="Email"
                                    name="email"
                                    control={control as unknown as Control<FieldValues>}
                                    variant="standard"
                                    placeholder="Email"
                                />
                            </Grid>
                            <Grid size={{ lg: 6 }}>
                                <InputTextField
                                    label="Role"
                                    name="role"
                                    control={control as unknown as Control<FieldValues>}
                                    variant="standard"
                                    placeholder="Role"
                                />
                            </Grid>
                            <Grid size={{ lg: 6 }}>
                                <InputTextField
                                    label="Other"
                                    name="other"
                                    control={control as unknown as Control<FieldValues>}
                                    variant="standard"
                                    placeholder="Other"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="absolute! bottom-15 right-20">
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
            </Grid>
        </Grid >
    )
}

export default Profile;