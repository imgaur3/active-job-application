import React from 'react';
import { Typography } from '@mui/material';

type FieldLabelProps = {
  text: string;
  required?: boolean;
};

const FieldLabel = ({ text, required }: FieldLabelProps) => {
  return (
    <Typography className='text-[#ffffff] font-[Figtree] text-[16px] font-normal'>
      {text}
      {required && <span>*</span>}
    </Typography>
  );
};

export default FieldLabel;
