import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface CustomTypographyProps extends TypographyProps {
  isLoading?: boolean;
  title: string;
  description: string;
}

//TODO: criar testes e storybook
const Description: React.FC<CustomTypographyProps> = ({
  isLoading,
  title,
  description,
}) => {
  return (
    <>
      {isLoading ? (
        <>
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="text" width={200} height={80} />
        </>
      ) : (
        <>
          <Typography
            variant="h2"
            className="card-title"
            sx={{ fontSize: 'clamp(16px, 4vw, 24px)' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="card-description"
            sx={{ fontSize: 'clamp(16px, 4vw, 24px)' }}
          >
            {description}
          </Typography>
        </>
      )}
    </>
  );
};

export default Description;
