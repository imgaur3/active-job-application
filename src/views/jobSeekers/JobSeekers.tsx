import React from 'react';
import { Box, Typography } from "@mui/material";
import get from "lodash/get";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fontFamily } from "../../../src/common/utils/constants";
import { dialogOpen } from "../../../src/redux-modules/dialog/Actions";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Tooltip } from '../../components/index';
import Table from '../../components/CustomizedTable/Table';
import { setTablePageIndex } from 'src/redux-modules/pagination/Action';
import AddJobSeeker from './components/AddJobSeeker';


const JobSeekers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (rowData: string) => {
    navigate(`/company/details/${rowData}`);
  };

  const handleEdit = () => {
    dispatch(dialogOpen('editCompany'));
  };

  const handleDelete = () => {
    dispatch(dialogOpen('deleteCompany'));
  };

  const handlePageChange = (_event: any, page: number) => { //eslint-disable-line
    dispatch(setTablePageIndex({ context: 'companyContext', pageIndex: page }));
  };


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
    dispatch(dialogOpen('addJobSeeker'));
  };
  return (
    <>
      <Box className="bg-[#d1e8ec] mt-4 rounded-3xl p-6">
        <Box className="w-full flex justify-between text-right mb-4 items-center">
          <Typography className='text-[#11A5BD] text-[18px]!' sx={{ fontFamily: fontFamily.primary }}>Companies and thier details</Typography>
          <Button
            label='Add Job Seeker'
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
          context={'job-seekers'}
          columns={columns}
          tableData={[]}
          isLoading={false}
          rowsPerPage={20}
          onPageChange={handlePageChange}
        />
      </Box>
      <AddJobSeeker />
    </>
  )
};

export default JobSeekers;