import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  Box,
  TableCell,
  Pagination,
  Typography,
} from '@mui/material';
import { get, isEmpty } from 'lodash';
import { useSelector, shallowEqual } from 'react-redux';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { fontFamily } from '../../../src/common/utils/constants';
import CircularProgress from '@mui/material/CircularProgress';


type ArrayType = {
  name: string;
  key: string | number;
  textAlign?:
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent';
  minWidth?: number;
};

type tableProps = {
  context?: string;
  columns: any[]; //eslint-disable-line
  tableData: any[]; //eslint-disable-line
  isLoading: boolean;
  footerRow?: string;
  rowsPerPage: number;
  stickyAction?: boolean;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const CustomizedTable = ({
  context,
  columns = [],
  tableData = [],
  isLoading,
  rowsPerPage = 5,
  onPageChange,
  stickyAction = false,
}: tableProps) => {
  const paginationData = (state: any, context: string) => //eslint-disable-line
    state.pagination?.[context] ?? {};
  const [paginatedListData, setPaginatedListData] = useState<number[]>([]);
  const paginationStore = (state: any) => paginationData(state, context ?? ''); //eslint-disable-line
  const paginationStoreData = useSelector(paginationStore, shallowEqual);
  const pageCount = Math.ceil(tableData.length / rowsPerPage);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasUpdated, setHasUpdated] = useState(false);


  useEffect(() => {
    if (!hasUpdated) {
      const startIndex = (pageIndex - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const newPaginatedData = tableData.slice(startIndex, endIndex);
      setPaginatedListData(newPaginatedData);
      setHasUpdated(true);
    }
  }, [hasUpdated, pageIndex, rowsPerPage, tableData]);

  const headers = (array: ArrayType[]) => {
    return (
      <>
        {array.map((i: any, n: number) => { //eslint-disable-line
          return (
            <TableCell
              key={n}
              style={{
                textAlign: i.textAlign
                  ? i.textAlign
                  : i.key === 'srNo'
                    ? 'center'
                    : 'left',
                minWidth: i.minWidth ? i.minWidth : undefined,
                right: stickyAction && ['#'].includes(i.key) ? 0 : undefined,
              }}
              className={
                stickyAction && ['#'].includes(i.key)
                  ? 'sticky! z-10!'
                  : undefined
              }
            >
              <Box
                sx={{
                  '@media (max-width:425px)': {
                    fontSize: 14,
                  },
                }}
              >
                {i.name}
              </Box>
            </TableCell>
          );
        })}
      </>
    );
  };

  const handlePageChange = (event, value) => {
    setPageIndex(value);
    const startIndex = (value - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = tableData.slice(startIndex, endIndex);
    setPaginatedListData(paginatedData);
    onPageChange(event, value);
  };

  return (
    <>
      <TableContainer sx={{
        '*': {
          fontFamily: fontFamily.primary,
        },
        overflow: 'auto',
        height: 'calc(100vh - 350px)',
        '& .MuiTableContainer-root': {
          height: '100%',
        },
        '& .MuiTableCell-root': {
          padding: '15px',
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: '3%',
          lineHeight: '16px',
          maxWidth: 160,
        },
        '& .MuiTableCell-head': {
          background: '#ffffff',
          borderRadius: 0,
          border: 0,
          fontSize: 14,
          fontWeight: 400,
          height: '60px',
          '&:last-child': {
            padding: '0px 40px 0px 0px',
          },
        },
        '& .MuiTableCell-body': {
          height: '45px',
          '&:last-child': {
            padding: '0px 40px 0px 0px',
          },
        },
        '& p': {
          margin: 0,
        },
      }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>{headers(columns)}</TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Box className="flex items-center justify-center">
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            ) : !isEmpty(paginatedListData) ? (
              paginatedListData.map((rowItem: any, index: number) => ( //eslint-disable-line
                <TableRow
                  hover
                  key={`row_${rowItem?.id}_${index}`}
                  sx={{
                    '&:last-child th, &:last-child td': {
                      border: 'none',
                    },
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                      '& td': {
                        backgroundColor: '#f8f8f8',
                      },
                    },
                  }}
                >
                  {columns.map((columnItem: any, colIndex: number) => ( //eslint-disable-line
                    <React.Fragment key={`col_${index}_${colIndex}`}>
                      {columnItem.key && (
                        <TableCell
                          style={{
                            textAlign: columnItem.textAlign
                              ? columnItem.textAlign
                              : 'left',
                            minWidth: columnItem.minWidth
                              ? columnItem.minWidth
                              : undefined,
                            right:
                              stickyAction && ['#'].includes(columnItem.key)
                                ? 0
                                : undefined,
                          }}
                          className={
                            stickyAction && ['#'].includes(columnItem.key)
                              ? "sticky z-10"
                              : undefined
                          }
                        >
                          {get(columnItem, 'renderCell')
                            ? columnItem.renderCell(
                              rowItem,
                              rowItem[columnItem.key],
                            )
                            : rowItem[columnItem.key]}
                        </TableCell>
                      )}
                    </React.Fragment>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& $Img': {
                      width: '50px',
                      height: 'auto',
                      objectFit: 'contain',
                    },
                  }}>
                    <Box className="flex items-center py-10">
                      <Typography className='text-[#119eb5]'> No Data Found </Typography>
                      <AutoAwesomeIcon className='ml-5' />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {tableData.length > rowsPerPage && (
        <Box sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          margin: '20px 0px 15px 0px',
        }}>
          <Pagination
            count={pageCount}
            page={get(paginationStoreData, 'pageIndex')}
            onChange={handlePageChange}
            color="primary"
            size="small"
            sx={{
              '& .MuiPaginationItem-icon': {
                color: '#11A5BD',
              },
            }}
          />
        </Box>
      )}
    </>
  );
};

export default CustomizedTable;