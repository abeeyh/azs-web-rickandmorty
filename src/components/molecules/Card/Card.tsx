import React from 'react';
import ImageWithFallback from '@/components/atoms/ImageWithFallback/ImageWithFallback';
import { Grid } from '@mui/material';
import Description from '@/components/atoms/Description/Description';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  isLoading?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  isLoading,
}) => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: '#479f76',
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ImageWithFallback src={imageUrl} alt={title} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} sx={{ paddingLeft: '1rem' }}>
          <Description
            isLoading={isLoading}
            title={title}
            description={description}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
