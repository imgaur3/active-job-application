import React from 'react';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';


type ButtonProps = {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  className?: string | undefined;
  isLoading?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  endIcon?: ReactNode;
  sx?: object;
};

const MButton = ({
  label,
  variant,
  type,
  onClick,
  className,
  isLoading,
  children,
  disabled,
  endIcon,
  sx,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <Button
        variant={variant}
        color="primary"
        title={label}
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
        sx={sx}
        {...rest}
      >
        {isLoading && <CircularProgress color="inherit" size={20} />}
        {label}
        {children}
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </Button>
    </>
  );
};

export default MButton;
