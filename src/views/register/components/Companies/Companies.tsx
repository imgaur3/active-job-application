import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Table from '../../../../components/CustomizedTable/Table';
import { useNavigate } from 'react-router';
import { get } from 'lodash';
import { dialogClose, dialogOpen } from '../../../../redux-modules/dialog/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Tooltip } from '../../../../components/index';
import AddCompany from './Dialog/AddCompany';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { fontFamily } from 'src/common/utils/constants';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteCompany from './Dialog/DeleteCompany';
import EditCompany from './Dialog/EditCompany';
import { companies } from 'src/redux-modules/companies/Selectors';
import UploadIcon from '@mui/icons-material/Upload';
import ImportData from './Dialog/ImportData';
import ReplyIcon from '@mui/icons-material/Reply';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { EditCompanyPayload } from 'src/redux-modules/companies/Types';
import { setTablePageIndex } from 'src/redux-modules/pagination/Action';


const Companies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companyList = useSelector(companies);
  const [deleteBlog, setDeleteBlog] = useState({});
  const [editCompany, setEditCompany] = useState({});


  const listData = get(companyList.company, 'data');
  const companiesList = get(listData, 'data.companies', []);

  const handleNavigate = (rowData: string) => {
    navigate(`/company/details/${rowData}`);
  };

  const handleEdit = (item: EditCompanyPayload) => {
    setEditCompany(item);
    dispatch(dialogOpen('editCompany'));
  };

  const handleDelete = (item: EditCompanyPayload) => {
    setDeleteBlog(item);
    dispatch(dialogOpen('deleteCompany'));
  };

  const handleDeleteCancel = () => {
    dispatch(dialogClose(''));
  };

  const columns = [
    {
      name: 'S.No.',
      key: 'serial_no',
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
      key: 'name',
      renderCell: (rowData: string) => (
        <p
          onClick={() => handleNavigate(rowData)}
        >
          {get(rowData, 'name')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Type',
      key: 'type',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'type')}
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
      name: 'Email',
      key: 'email',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'email')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Location',
      key: 'location',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'location')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Platform',
      key: 'platform',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'platform')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Company Domain',
      key: 'company_domain',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'company_domain')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Company Phone',
      key: 'company_phone',
      renderCell: (rowData: string) => (
        <p>
          {get(rowData, 'company_phone')}
        </p>
      ),
      textAlign: 'left',
    },
    {
      name: 'Action',
      key: 'action',
      renderCell: (rowData: any) => ( //eslint-disable-line
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

  const handleCSV = () => {
    dispatch(dialogOpen('importCSVData'));
  }


  const handleExport = () => {
    if (!listData) {
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(listData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Companies');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'file.xlsx');
  };

  const handlePageChange = (_event: any, page: number) => { //eslint-disable-line
    dispatch(setTablePageIndex({ context: 'companyContext', pageIndex: page }));
  };

  return (
    <Box>
      <Box className="w-full flex justify-between text-right mb-4 items-center">
        <Box>
          <Button
            label='Import'
            endIcon={<UploadIcon className='w-[20px]' />}
            className='bg-[#11A5BD]! text-[#FFFFFF] text-[12px] font-[Albert_Sans] mr-2!'
            onClick={handleCSV}
          />
          <Button
            label='Export'
            endIcon={<ReplyIcon className='w-[20px] scale-x-[-1]' />}
            className='bg-[#11A5BD]! text-[#FFFFFF] text-[12px] font-[Albert_Sans]'
            onClick={handleExport}
          />
        </Box>
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
        context={'companyContext'}
        columns={columns}
        tableData={companiesList}
        isLoading={false}
        rowsPerPage={5}
        onPageChange={handlePageChange}
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
      <ImportData />
    </Box>
  )
}

export default Companies;
