/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';


interface props {
    children?: ReactNode;
    type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
    className?: any;
    gutterBottom?: any;
    sx?: any;
    onClick?: any;
    style?: any;
    errorText?: string;
    errorTextStyles?: string;
}

const WrappedTypography = ({
    children,
    type,
    className,
    gutterBottom,
    sx,
    onClick,
    style,
    errorText,
    errorTextStyles,
}: props) => {
    return (
        <div>
            <Typography
                sx={sx}
                gutterBottom={gutterBottom}
                variant={type}
                onClick={onClick}
                style={style}
                className={
                    type === 'body1'
                        ? ''
                        : type === 'body2'
                            ? '' : type === 'h1'
                                ? '' : type === 'h2'
                                    ? '' : type === 'h3'
                                        ? ''
                                        : type === 'h4'
                                            ? '' : type === 'h5'
                                                ? '' : type === 'h6'
                                                    ? '' : type === 'subtitle1'
                                                        ? '' : type === 'subtitle2'
                                                            ? ''
                                                            : className
                }
            >
                {children}
            </Typography>
            {
                errorText && (
                    <Typography className={errorTextStyles}>
                        {errorText}
                    </Typography>
                )
            }
        </div >
    );
};

export default WrappedTypography;
