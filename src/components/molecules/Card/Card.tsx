import React from 'react';
import ImageWithFallback from '@/components/atoms/ImageWithFallback/ImageWithFallback';
import { Grid } from '@mui/material';
import CardDescription from '../CardDescription/CardDescription';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  isLoading?: boolean;
  isFavorite?: boolean;
  isWatched?: boolean;
  onToggleFavorite?: () => void;
  onToggleWatched?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  isLoading,
  isFavorite,
  isWatched,
  onToggleFavorite,
  onToggleWatched,
}) => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: '#479f76',
          borderRadius: '1.5rem',
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ImageWithFallback src={imageUrl} alt={title} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <CardDescription
            title={title}
            description={description}
            isLoading={isLoading || false}
            isFavorite={isFavorite || false}
            isWatched={isWatched || false}
            onToggleFavorite={onToggleFavorite}
            onToggleWatched={onToggleWatched}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
