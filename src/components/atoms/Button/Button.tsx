import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export interface CustomButtonProps extends ButtonProps {
  text: string;
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
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
      {text || children}
    </Button>
  );
};

export default CustomButton;
