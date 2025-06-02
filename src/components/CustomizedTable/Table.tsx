/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from '@mui/material';
import { get, isEmpty } from 'lodash';
import { useSelector, shallowEqual } from 'react-redux'; // Import shallowEqual
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { fontFamily } from '../../../src/common/utils/constants';


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
  context?: any;
  columns: any;
  tableData: any;
  isLoading: boolean;
  footerRow?: any;
  rowsPerPage: number;
  stickyAction?: boolean;

  onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
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
  const paginationData = (state: any, context: string) =>
    state.pagination?.[context] ?? {};
  const [paginatedListData, setPaginatedListData] = useState([]);
  const paginationStore = (state: any) => paginationData(state, context ?? '');
  const paginationStoreData = useSelector(paginationStore, shallowEqual);
  const pageCount = Math.ceil(tableData.length / rowsPerPage);

  useEffect(() => {
    const pageIndex = get(paginationStoreData, 'pageIndex', 1);
    const startIndex = (pageIndex - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData =
      !isEmpty(tableData) && tableData.slice(startIndex, endIndex);
    setPaginatedListData(paginatedData);

  }, [paginationStoreData, rowsPerPage, tableData]);

  const headers = (array: ArrayType[]) => {
    return (
      <>
        {array.map((i: any, n: number) => {
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

  return (
    <>
      <TableContainer sx={{
        '*':{
          fontFamily: fontFamily.primary,
        },
        overflow: 'auto',
        // height: 'calc(100vh - 480px)',
        height: '100%',
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
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                  }}>
                    Test
                  </Box>
                </TableCell>
              </TableRow>
            ) : !isEmpty(paginatedListData) ? (
              paginatedListData.map((rowItem: any, index: number) => (
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
                  {columns.map((columnItem: any, colIndex: number) => (
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
                    <AutoAwesomeIcon />
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
            page={
              get(paginationStoreData, 'pageIndex')
                ? get(paginationStoreData, 'pageIndex')
                : 1
            }
            onChange={onPageChange}
            color="primary"
            size="small"
            sx={{
              marginTop: 20,
              '& .MuiPaginationItem-icon': {
                color: '#404040',
              },
            }}
          />
        </Box>
      )}
    </>
  );
};

export default CustomizedTable;