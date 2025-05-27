import React from 'react';
import { Typography } from '@mui/material';

type FieldLabelProps = {
  text: string;
  required?: boolean;
};

const FieldLabel = ({ text, required }: FieldLabelProps) => {
  return (
    <Typography className='text-[#ffffff] font-[Albert_Sans] text-[14px] font-light'>
      {text}
      {required && <span>*</span>}
    </Typography>
  );
};

export default FieldLabel;
