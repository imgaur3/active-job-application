import React from 'react';
import  Table  from '../../../../components/Table';
import { Box } from '@mui/material';

type CompanyRow = { id: string; name: string; email: string; role: string };

const Companies = () => {
  const columnsElements: { field: keyof CompanyRow; headerName: string }[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'role', headerName: 'Role' },
  ];

  const rowElements: CompanyRow[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor' },
    { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Viewer' },
  ];

  return (
    <Box>
      <Table rowData={rowElements} columnDefs={columnsElements} />
    </Box>
  )
}

export default Companies;
