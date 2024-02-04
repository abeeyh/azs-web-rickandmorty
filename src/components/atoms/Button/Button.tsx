import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export interface CustomButtonProps extends ButtonProps {
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

//TODO: criar testes
const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  color,
  onClick,
  disabled,
  type,
  fullWidth,
  size,
  children,
}) => {
  return (
    <Button {...{ variant, color, onClick, disabled, type, fullWidth, size }}>
      {children}
    </Button>
  );
};

export default CustomButton;
