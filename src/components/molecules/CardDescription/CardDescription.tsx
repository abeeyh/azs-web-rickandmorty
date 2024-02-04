import React from 'react';
import { Grid, IconButton, Badge } from '@mui/material';
import Description from '@/components/atoms/Description/Description';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

interface CardDescriptionProps {
  isLoading: boolean;
  title: string;
  description: string;
  isFavorite: boolean;
  isWatched: boolean;
  onToggleFavorite?: () => void;
  onToggleWatched?: () => void;
}

// TODO: criar storybook e testes
const CardDescription: React.FC<CardDescriptionProps> = ({
  isLoading,
  title,
  description,
  isFavorite,
  isWatched,
  onToggleFavorite,
  onToggleWatched,
}) => {
  //TODO: mover a estilizacao para o CardDescription.scss

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        sx={{ paddingLeft: '1rem', paddingTop: '1rem' }}
      >
        <Description
          description={description}
          title={title}
          isLoading={isLoading}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={1}
        sx={{
          textAlign: 'center',
        }}
      >
        <IconButton onClick={onToggleFavorite}>
          <Badge
            badgeContent={
              isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />
            }
          />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={1}
        sx={{
          textAlign: 'center',
        }}
      >
        <IconButton onClick={onToggleWatched}>
          <Badge
            badgeContent={
              isWatched ? <DesktopWindowsIcon /> : <DesktopAccessDisabledIcon />
            }
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardDescription;
