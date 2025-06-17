/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Upload from 'rc-upload';
import { get, isEmpty } from 'lodash';
import { Box, Container, Typography } from '@mui/material';
import Resizer from 'react-image-file-resizer';
import { errorMessageHandler } from 'src/common/utils/helpers';
import ImageIcon from '../WrappedImage';
import Loader from '../Loader';
import PhotoIcon from '@mui/icons-material/Photo';
import DescriptionIcon from '@mui/icons-material/Description';
import AlertDialog from '../WrappedAlertDialog';
import DialogComponent from '../Dialog';
import { DeleteIcon, DocumentIcon, UploadIcon } from 'src/assets/svg';
import { Tooltip } from '..';


type FileUploadProps = {
    content?: any;
    onSuccess?: any;
    disabled?: boolean;
    uploadLoading?: boolean;
    setSignedUrlErrorMessage?: any;
    fileSize?: any;
    fileExtensions?: string[];
    showSelectedFilePreview?: boolean;
    uploadedFiles?: any[];
    requestObject?: any;
};

const FileUpload = ({
    content,
    onSuccess,
    disabled,
    uploadLoading,
    setSignedUrlErrorMessage,
    fileSize = 10485760, // bytes in binary
    fileExtensions = [],
    showSelectedFilePreview = false,
    uploadedFiles = [],
    requestObject,
}: FileUploadProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [src, setSrc] = useState<string | undefined>('');
    const [imageData, setImageData] = useState<any>(null);
    const [selectedFile, setSelectedFile] = useState<Record<string, any>>({});
    const [selectedFileType, setSelectedFileType] = useState<string | undefined>(
        '',
    );
    const [invalidFormatDialog, setInvalidFormatDialog] =
        useState<boolean>(false);
    const [invalidFileSizeDialog, setInvalidFileSizeDialog] =
        useState<boolean>(false);

    const props = {
        multiple: false,
        async beforeUpload(file: any) {
            try {
                if (get(file, 'size') <= fileSize) {
                    const fileNameArray = file.name.split('.');
                    const fileExt = fileNameArray.pop();
                    const fileName = fileNameArray.join('.').replace(/\u202F/g, ' ');
                    if (
                        !isEmpty(fileExtensions) &&
                        !fileExtensions.includes(fileExt.toLowerCase())
                    ) {
                        setInvalidFormatDialog(true);
                        return Promise.reject();
                    }
                    if (['png', 'jpg', 'jpeg'].includes(fileExt.toLowerCase())) {
                        const resizedImage = await resizeFile(file);
                        onSuccess({
                            filename: fileName + '.' + fileExt,
                            documentName: get(requestObject, 'documentName'),
                            file: resizedImage,
                            ...requestObject,
                        });
                    } else {
                        onSuccess({
                            filename: fileName + '.' + fileExt,
                            documentName: get(requestObject, 'documentName'),
                            file,
                            ...requestObject,
                        });
                    }

                    if (showSelectedFilePreview) {
                        setSelectedFile(file);
                        setSelectedFileType(handleGetFileFormat(file.name));
                    } else {
                        setSelectedFile({});
                        setSelectedFileType('');
                    }
                    return Promise.reject();
                } else {
                    setInvalidFileSizeDialog(true);
                }
            } catch (err) {
                const message: string = errorMessageHandler(err);
                if (setSignedUrlErrorMessage) {
                    setSignedUrlErrorMessage(message);
                }
            }
        },
    };

    const formatBytes = (bytes: number, decimals = 2) => {
        if (!+bytes) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    };

    const handleGetFileFormat = (filename: string) => {
        let fileExtension = '';
        if (filename) {
            const extension = filename.slice(filename.lastIndexOf('.') + 1);
            if (extension) {
                fileExtension = extension.toLowerCase();
                if (['png', 'jpg', 'jpeg'].includes(fileExtension)) {
                    fileExtension = 'img';
                } else if (['doc', 'docx'].includes(fileExtension)) {
                    fileExtension = 'doc';
                } else if (['pdf'].includes(fileExtension)) {
                    fileExtension = 'pdf';
                } else if (['csv'].includes(fileExtension)) {
                    fileExtension = 'csv';
                } else if (['xlsx'].includes(fileExtension)) {
                    fileExtension = 'xlsx';
                }
            }
        }
        return fileExtension;
    };

    const handlePreviewIcon = (fileType: any, data: any) => {
        if (fileType) {
            switch (fileType) {
                case 'img':
                    return (
                        <img
                            src={get(data, 'documentUrl')}
                            alt={get(data, 'filename')}
                            onClick={() => {
                                setSrc(data.documentUrl || '');
                                setImageData(data);
                                setOpen(true);
                            }}
                        />
                    );
                case 'doc':
                    return (
                        <a href={get(data, 'documentUrl')} target="_blank" rel="noreferrer">
                            <ImageIcon src={DocumentIcon} />
                        </a>
                    );
                case 'pdf':
                    return (
                        <a href={get(data, 'documentUrl')} target="_blank" rel="noreferrer">
                            <ImageIcon src={<PhotoIcon />} />
                        </a>
                    );
                default:
                    return (
                        <a href={get(data, 'documentUrl')} target="_blank" rel="noreferrer">
                            <ImageIcon src={<DescriptionIcon />} />
                        </a>
                    );
            }
        }
    };

    const resizeFile = (file: any) => {
        return new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                500,
                500,
                'JPEG',
                100,
                0,
                (uri) => {
                    const uriString = uri as string;

                    // Convert the Base64 data to a Blob
                    // eslint-disable-next-line no-undef
                    const byteCharacters = atob(uriString.split(',')[1]);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'image/jpeg' });

                    // Create a File object from the Blob
                    const resizedFile = new File([blob], 'resized-image.jpeg', {
                        type: 'image/jpeg',
                    });

                    resolve(resizedFile);
                },
                'base64',
            );
        });
    };

    return (
        <>
            <div>
                <Box className='w-full! flex flex-col! justify-center items-center'>
                    <ImageIcon src={UploadIcon} className="w-[50px]" />
                    <Upload disabled={disabled} {...props}>
                        {content}
                    </Upload>
                </Box>

                {!isEmpty(uploadedFiles) && (
                    <Container>
                        {uploadedFiles.map((item: any) => (
                            <Box key={get(item, 'id')}>
                                {handlePreviewIcon(
                                    handleGetFileFormat(get(item, 'filename')),
                                    item,
                                )}
                                <Typography>
                                    {get(item, 'filename')}
                                </Typography>
                            </Box>
                        ))}
                    </Container>
                )}
                {!isEmpty(selectedFile) && showSelectedFilePreview && (
                    <Box>
                        <Box className="flex justify-between items-center bg-[#e2f5f8] p-2 rounded-2xl px-5! mt-4">
                            <Box>
                                {(selectedFileType === 'img' || isEmpty(selectedFileType)) && (
                                    <ImageIcon src={<PhotoIcon />} />
                                )}
                                {selectedFileType === 'doc' && (
                                    <ImageIcon src={<DescriptionIcon />} />
                                )}
                                {selectedFileType === 'pdf' && (
                                    <ImageIcon src={<PhotoIcon />} />
                                )}
                                <Typography>
                                    {get(selectedFile, 'name')}
                                </Typography>
                            </Box>
                            {uploadLoading && <Loader size={20} />}
                            <Tooltip title="Delete" placement='top'>
                                <ImageIcon
                                    src={DeleteIcon}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setSelectedFile({});
                                        setSelectedFileType('');
                                        if (onSuccess) {
                                            onSuccess(null);
                                        }
                                    }}
                                />
                            </Tooltip>
                        </Box>
                    </Box>
                )}
            </div>
            <DialogComponent
                open={isOpen}
                maxWidth={'md'}
                subheading={''}
                title={get(imageData, 'filename', '')}
                handleClose={() => {
                    setOpen(false);
                    setSrc('');
                    setImageData(null);
                }}
            >
                <img
                    src={src}
                    alt={get(imageData, 'filename')}
                />
            </DialogComponent>
            <AlertDialog
                dialogOpen={invalidFormatDialog}
                onClose={async () => setInvalidFormatDialog(false)}
                dialogHeading={'Invalid file extension'}
                dialogContent={
                    <>
                        <div>Allowed file formats are:</div>
                        <div>{fileExtensions.join(', ')}</div>
                    </>
                }
            />
            <AlertDialog
                dialogOpen={invalidFileSizeDialog}
                onClose={async () => setInvalidFileSizeDialog(false)}
                dialogHeading={'Invalid file size'}
                dialogContent={
                    <>
                        <div>File size should be less than {formatBytes(fileSize)}</div>
                    </>
                }
            />
        </>
    );
};

export default FileUpload;
