import React from 'react';
import ImageWithFallback from '@/components/atoms/ImageWithFallback/ImageWithFallback';
import { Container, Grid, Typography, Skeleton } from '@mui/material';

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
  isLoading = true;
  return (
    <Container>
      <Grid
        container
        sx={{
          marginBottom: '16px',
          maxWidth: '500px',
          backgroundColor: '#479f76',
          borderRadius: '1.25rem',
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ImageWithFallback src={imageUrl} alt={title} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} sx={{ padding: '1rem' }}>
          {isLoading ? (
            <Skeleton variant="text" width={200} height={40} />
          ) : (
            <Typography variant="h2" className="card-title">
              {title}
            </Typography>
          )}
          {isLoading ? (
            <Skeleton variant="text" width={200} height={80} />
          ) : (
            <Typography variant="body1" className="card-description">
              {description}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Card;
