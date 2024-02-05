import React from 'react';
import Card from '../../molecules/Card/Card';
import { Grid, Button, TextField } from '@mui/material';
import { useEpisodes } from '../../../context/EpisodesContext';

const EpisodesList: React.FC = () => {
  const {
    state: { episodes, isLoading, showFavorites, searchTitle },
    dispatch,
  } = useEpisodes();

  const toggleFavorite = (id: number) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  };

  const toggleWatched = (id: number) => {
    dispatch({ type: 'TOGGLE_WATCHED', payload: id });
  };

  const handleToggleFavorites = () => {
    dispatch({ type: 'SET_SHOW_FAVORITES', payload: !showFavorites });
  };

  const handleSearchTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_TITLE', payload: event.target.value });
  };

  const filteredEpisodes = showFavorites
    ? episodes.filter((episode) => episode.favorite)
    : episodes.filter((episode) =>
        episode.name.toLowerCase().includes(searchTitle.toLowerCase())
      );

  // TODO: mover os componentes de input e show whatched para um componente e a estilizacao para o EpisodeList.scss
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      flexDirection="column"
      padding={'2rem'}
    >
      <Grid
        container
        display="flex"
        spacing={2}
        sx={{ marginBottom: '2rem', width: '100%' }}
      >
        <Grid item xs={6} sx={{ width: '100%' }}>
          <TextField
            label="Buscar por título"
            value={searchTitle}
            onChange={handleSearchTitle}
            color="success"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={6} sx={{ width: '100%' }}>
          <Button
            onClick={handleToggleFavorites}
            variant={showFavorites ? 'contained' : 'outlined'}
            sx={{ width: '100%' }}
          >
            {showFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredEpisodes.map((episode) => (
          <Grid item xs={6} sm={6} md={6} lg={6} key={episode.id}>
            <Card
              title={episode.name}
              description={episode.air_date}
              imageUrl={
                episode.imagem ??
                'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg'
              }
              isLoading={isLoading}
              isFavorite={episode.favorite}
              isWatched={episode.watched}
              onToggleFavorite={() => toggleFavorite(episode.id)}
              onToggleWatched={() => toggleWatched(episode.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default EpisodesList;
