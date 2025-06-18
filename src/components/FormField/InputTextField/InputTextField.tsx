import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { get } from 'lodash';
import { Box } from '@mui/material';

import { FieldLabel } from '..';
import { firstLetterCapitalise } from '../../../common/utils/helpers';

interface FormInputProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  label?: string;
  control: Control<FieldValues>;
  placeholder?: string;
  defaultValue?: string;
  onKeyDown?: () => void;
  onInputChange?: () => void;
}

export const InputTextField = ({
  name,
  required = false,
  label,
  control,
  placeholder,
  type,
  disabled,
  InputProps,
  InputLabelProps,
  defaultValue,
  onKeyDown,
  onInputChange,
  multiline,
}: FormInputProps) => {
  return (
    <Box>
      {label && <FieldLabel text={label} required={required}/>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box>
            <TextField
              autoComplete="off"
              fullWidth
              multiline={multiline}
              size="small"
              variant="outlined"
              type={type}
              value={value}
              className='text-[#404040] w-full'
              onKeyDown={onKeyDown}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(get(e, 'target.value').trimStart());
                if (onInputChange) onInputChange();
              }}
              placeholder={placeholder}
              InputProps={{
                ...InputProps,
                className: 'text-[#404040] placeholder:text-[#404040]',
              }}
              InputLabelProps={{
                ...InputLabelProps,
                classes: {
                  root: 'text-[#404040]',
                  focused: 'text-[#404040]!',
                }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#404040",
                  fontFamily: "albert sans",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#404040",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#404040",
                  fontWeight: "bold",
                },
                "& .MuiOutlinedInput-input:focus":{
                  borderColor: "#404040",
                },
                "& .MuiSvgIcon-root": {
                  color: "#404040",
                }
              }}
              disabled={disabled}
              error={!!error?.message}
              helperText={firstLetterCapitalise(get(error, 'message', ''))}
            />
          </Box>
        )}
      />
    </Box>
  );
};
