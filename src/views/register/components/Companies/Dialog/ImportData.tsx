/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FileUpload } from 'src/components';
import { dialogClose } from 'src/redux-modules/dialog/Actions';
import { Box, Typography } from '@mui/material';
import { COMPANIES_DATA } from 'src/common/utils/constants';
import { WrapperDialog } from 'src/components/Dialog';
import { isEmpty } from 'lodash';
import { excelReader, excelReaderError } from 'src/redux-modules/global/Actions';
import { GlobalSelectors } from 'src/redux-modules/global';

const ImportData = () => {
    const dispatch = useDispatch();
    const status = useSelector(GlobalSelectors.globalExcelReader)
    const [fileUploadReq, setFileUploadReq] = useState<any>(null);
    const { createOrUpdateError, isLoading } = status;

    const handleUpload = async () => {
        if (!isEmpty(fileUploadReq)) {
            dispatch(excelReader(fileUploadReq));
        }
    };
    const onClose = useCallback(() => {
        dispatch(dialogClose(''));
        dispatch(excelReaderError({ message: '' }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(excelReaderError({ message: '' }));
    }, [dispatch])

    return (
        <WrapperDialog
            id='importCSVData'
            maxWidth="sm"
            title='Upload CSV Data'
            handleClose={onClose}
        >
            <Typography color='error'>
                {createOrUpdateError.message}
            </Typography>
            <Box className="border-[1px] border-[#11A5BD] rounded-xl border-dashed p-10">
                <FileUpload
                    fileExtensions={['csv', 'xlsx']}
                    onSuccess={(req: any) => setFileUploadReq(req)}
                    showSelectedFilePreview={true}
                    content={
                        <Box className="w-full! justify-center items-center text-center">
                            <Typography className='font-[Albert_Sans] text-gray-400 text-[15px]'>Files supported CSV, Excel</Typography>
                            <Button
                                label='Upload File'
                                isLoading={false}
                                className="text-[#11A5BD] bg-[#f2f2f2] mt-2!"
                            />
                        </Box>
                    }
                    requestObject={{
                        documentName: COMPANIES_DATA,
                    }}
                />
            </Box>
            <Button
                onClick={handleUpload}
                label='Send File'
                className={`${!fileUploadReq ? 'bg-[#404040]' : 'bg-[#11A5BD]'} text-white! text-center mt-5! w-full`}
                disabled={!fileUploadReq}
                isLoading={isLoading}
            />
            <Typography className='text-center font-[Albert_Sans] text-xl mt-4!'>
                Please download this file and<br /> filled data according to thier names!
            </Typography>
            <a
                href="/Doc/DummyFile.csv"
                download
                style={{ display: 'block', textAlign: 'center', marginTop: 16, color: 'blue', textDecoration: 'underline' }}
            >
                Download Sample Template
            </a>
        </WrapperDialog>
    )
}

export default ImportData;