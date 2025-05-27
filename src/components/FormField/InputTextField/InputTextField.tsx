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
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      {label && <FieldLabel text={label} required={required} />}
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
              className='text-[#ffffff] w-full'
              onKeyDown={onKeyDown}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(get(e, 'target.value').trimStart());
                if (onInputChange) onInputChange(e);
              }}
              placeholder={placeholder}
              InputProps={{
                ...InputProps,
                className: 'text-[#ffffff] placeholder:text-[#ffffff]',
              }}
              InputLabelProps={{
                ...InputLabelProps,
                classes: {
                  root: 'text-[#ffffff]',
                  focused: 'text-[#ffffff]!',
                }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  fontFamily: "albert sans",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffff",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#2e2e2e",
                  fontWeight: "bold",
                },
                "& .MuiOutlinedInput-input:focus":{
                  borderColor: "#ffffff",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
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
