import React from 'react';
import { Typography } from '@mui/material';

type FieldLabelProps = {
  text: string;
  required?: boolean;
};

const FieldLabel = ({ text, required }: FieldLabelProps) => {
  return (
    <Typography className='text-[#404040] font-[Albert_Sans] text-[14px] font-light pb-1!'>
      {text}
      {required && <span>*</span>}
    </Typography>
  );
};

export default FieldLabel;
