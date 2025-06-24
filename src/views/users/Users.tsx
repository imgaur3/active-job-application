import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { allUsersDetails } from 'src/redux-modules/users/Selectors';
import Typography from 'src/components/WrappedTypography';
import { fontFamily } from 'src/common/utils/constants';
import { Button, Tooltip } from 'src/components';
import { dialogOpen } from 'src/redux-modules/dialog/Actions';
import { get } from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Table from '../../components/CustomizedTable/Table';
import { User } from 'src/redux-modules/auth/Types';

const Users = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(allUsersDetails);
    const { isLoading, errorMessage } = usersData;
    const listData = get(usersData.users, 'data.users');

    const handleEdit = () => {
        dispatch(dialogOpen('editCompany'));
    };

    const handleDelete = () => {
        dispatch(dialogOpen('deleteCompany'));
    };

    const columns = [
        {
            name: 'Name',
            key: 'full_name',
            renderCell: (rowData: User) => (
                <p
                    className="cursor-pointer text-[#11A5BD] capitalize"
                >
                    {get(rowData, 'full_name')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Email',
            key: 'email',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'email')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Degree',
            key: 'degree',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'degree')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'DOB',
            key: 'dob',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'dob')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Experience',
            key: 'experience',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'experience')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Notice Period',
            key: 'notice_period',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'notice_period')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Overseas',
            key: 'overseas',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'overseas')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Salary',
            key: 'salary',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'salary')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Skills',
            key: 'skills',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'skills')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Specialization',
            key: 'specialization',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'specialization')}
                </p>
            ),
            textAlign: 'left' as const,
        },
        {
            name: 'Action',
            key: 'action',
            renderCell: () => (
                <Box>
                    <Tooltip title={"Edit"} placement="top">
                        <EditIcon className='text-[16px] text-[#11A5BD] cursor-pointer mr-[6px]' onClick={() => handleEdit()} />
                    </Tooltip>
                    <Tooltip title={"Delete"} placement="top">
                        <DeleteOutlineIcon className='text-[16px] text-[#11A5BD] cursor-pointer' onClick={() => handleDelete()} />
                    </Tooltip>
                </Box>
            ),
            textAlign: 'right' as const,
        },
    ];

    const handleOpen = () => {
        dispatch(dialogOpen('applicationDialog'));
    };

    return (
        <Box className="bg-[#d1e8ec] mt-4 rounded-3xl p-6">
            <Box>
                <Typography>{errorMessage}</Typography>
            </Box>
            <Box className="w-full flex justify-between text-right mb-4 items-center">
                <Typography className='text-[#11A5BD] text-[18px]!' sx={{ fontFamily: fontFamily.primary }}>Companies and thier details</Typography>
                <Button
                    label='Add Company'
                    type="submit"
                    isLoading={false}
                    disabled={false}
                    onClick={handleOpen}
                    className='bg-[#11A5BD]! text-[#FFFFFF] text-[12px]'
                    endIcon={<AddCircleOutlineIcon className='text-[20px]!' />}
                    sx={{ fontFamily: fontFamily.primary }}
                />
            </Box>
            <Table
                context={'all-users-table'}
                columns={columns}
                tableData={listData}
                isLoading={isLoading}
                rowsPerPage={20}
            />
        </Box>
    )
}

export default Users;