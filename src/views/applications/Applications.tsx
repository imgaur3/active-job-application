import { Box, Tooltip } from '@mui/material';
import { get } from 'lodash';
import React from 'react';
import { Table } from 'src/components';
import { User } from 'src/redux-modules/auth/Types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { dialogOpen } from 'src/redux-modules/dialog/Actions';

const Applications = () => {
  const dispatch = useDispatch();

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
      textAlign: 'right' as const,
    },
  ];

  const handleEdit = (rowData: User) => {
    dispatch(dialogOpen('editCompany'));
  };

  const handleDelete = (rowData: User) => {
    dispatch(dialogOpen('deleteCompany'));
  };
  return (
    <Box className="bg-[#d1e8ec] mt-4 rounded-3xl p-6 h-[calc(100vh-120px)]!">
      <Box className="w-full flex justify-between text-left items-center">
        <Table
          context={'all-users-table'}
          columns={columns}
          tableData={[]}
          isLoading={false}
          rowsPerPage={20}
        />
      </Box>
    </Box>
  )
}

export default Applications;