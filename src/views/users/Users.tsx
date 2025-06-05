/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../src/redux-modules/users/Actions';
import { allUsersDetails } from '../../../src/redux-modules/users/Selectors';
import Typography from '../../../src/components/WrappedTypography';
import { fontFamily } from '../../../src/common/utils/constants';
import { Button, Tooltip } from '../../../src/components';
import { useNavigate } from 'react-router';
import { dialogOpen } from '../../../src/redux-modules/dialog/Actions';
import { get } from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Table from '../../components/CustomizedTable/Table';
import { User } from '../../../src/redux-modules/auth/Types';

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersData = useSelector(allUsersDetails);
    const { isLoading } = usersData;
    const usersList: User[] = (get(usersData.users, 'data'));
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);



    const handleNavigate = (rowData: string) => {
        navigate(`/company/details/${rowData}`);
    };

    const handleEdit = (rowData: User) => {
        dispatch(dialogOpen('editCompany'));
    };

    const handleDelete = (rowData: User) => {
        dispatch(dialogOpen('deleteCompany'));
    };


    const columns = [
        {
            name: 'Name',
            key: 'full_name',
            renderCell: (rowData: User) => (
                <p
                    className="cursor-pointer text-[#11A5BD]"
                >
                    {get(rowData, 'full_name')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Email',
            key: 'email',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'email')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Degree',
            key: 'degree',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'degree')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'DOB',
            key: 'dob',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'dob')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Experience',
            key: 'experience',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'experience')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Notice Period',
            key: 'notice_period',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'notice_period')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Overseas',
            key: 'overseas',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'overseas')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Salary',
            key: 'salary',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'salary')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Skills',
            key: 'skills',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'skills')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Specialization',
            key: 'specialization',
            renderCell: (rowData: User) => (
                <p>
                    {get(rowData, 'specialization')}
                </p>
            ),
            textAlign: 'left',
        },
        {
            name: 'Action',
            key: 'action',
            renderCell: (rowData: User) => (
                <Box>
                    <Tooltip title={"Edit"} placement="top">
                        <EditIcon className='text-[16px] text-[#11A5BD] cursor-pointer mr-[6px]' onClick={() => handleEdit(rowData)} />
                    </Tooltip>
                    <Tooltip title={"Delete"} placement="top">
                        <DeleteOutlineIcon className='text-[16px] text-[#11A5BD] cursor-pointer' onClick={() => handleDelete(rowData)} />
                    </Tooltip>
                </Box>
            ),
            textAlign: 'right',
        },
    ];

    const handleOpen = () => {
        dispatch(dialogOpen('applicationDialog'));
    };

    return (
        <Box className="bg-[#d1e8ec] mt-4 rounded-3xl p-6">
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
                tableData={usersList}
                isLoading={isLoading}
                rowsPerPage={20}
            />
        </Box>
    )
}

export default Users;