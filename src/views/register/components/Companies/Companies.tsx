/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Table from '../../../../components/CustomizedTable/Table';
import { useNavigate } from 'react-router';
import { get } from 'lodash';
import { dialogClose, dialogOpen } from '../../../../redux-modules/dialog/Actions';
import { useDispatch } from 'react-redux';
import { Button, Tooltip } from '../../../../components/index';
import AddCompany from './Dialog/AddCompany';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { fontFamily } from '../../../../../src/common/utils/constants';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteCompany from './Dialog/DeleteCompany';
import EditCompany from './Dialog/EditCompany';

const Companies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteBlog, setDeleteBlog] = useState(null);
  const [editCompany, setEditCompany] = useState(null);


  const handleNavigate = (rowData: string) => {
    navigate(`/company/details/${rowData}`);
  };

  const handleEdit = (item: any) => {
    setEditCompany(item);
    dispatch(dialogOpen('editCompany'));
  };

  const handleDelete = (item: any) => {
    setDeleteBlog(item);
    dispatch(dialogOpen('deleteCompany'));
  };

  const handleDeleteCancel = () => {
    dispatch(dialogClose(''));
  };

  const colData = [
    {
      id: '1',
      title: 'Tata Consultancy Services',
      description: 'Pune, India',
      status: 'Active',
    },
    {
      id: '2',
      title: 'Infosys Technologies',
      description: 'Hydrabad, India',
      status: 'Inactive',
    },
    {
      id: '3',
      title: 'Wipro Technologies',
      description: 'Pune, India',
      status: 'inactive',
    },
    {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    },
    {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    }, {
      id: '4',
      title: 'Tech Mahindra',
      description: 'Mumbai, India',
      status: 'Active',
    },
  ];

  const columns = [
    {
      name: 'S.No.',
      key: 'sno',
      renderCell: (rowData: string) => (
        <p
          onClick={() => handleNavigate(rowData)}
        >
          {get(rowData, 'id')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Company Name',
      key: 'companyName',
      renderCell: (rowData: string) => (
        <p
          onClick={() => handleNavigate(rowData)}
        >
          {get(rowData, 'title')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Location',
      key: 'location',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'description')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Status',
      key: 'action',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'status') === 'Active' ? (
            <span className='text-green-500'>Active</span>
          ) : (
            <span className='text-red-500'>Inactive</span>
          )}
        </p>
      ),
      textAlign: 'right',
    },
    {
      name: 'Action',
      key: 'action',
      renderCell: () => (
        <Box>
          <Tooltip title={"Edit"} placement="top">
            <EditIcon className='text-[16px] text-[#11A5BD] cursor-pointer mr-[6px]' onClick={handleEdit} />
          </Tooltip>
          <Tooltip title={"Delete"} placement="top">
            <DeleteOutlineIcon className='text-[16px] text-[#11A5BD] cursor-pointer' onClick={handleDelete} />
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
    <Box>
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
        context={colData}
        columns={columns}
        tableData={colData}
        isLoading={false}
        rowsPerPage={20}
      />
      <AddCompany />
      <DeleteCompany
        title='Delete Company'
        deleteCompany={deleteBlog}
        handleClose={handleDeleteCancel}
      />
      <EditCompany
        title='Edit Company'
        handleClose={() => dispatch(dialogClose('editCompany'))}
        editCompany={editCompany}
      />
    </Box>
  )
}

export default Companies;
