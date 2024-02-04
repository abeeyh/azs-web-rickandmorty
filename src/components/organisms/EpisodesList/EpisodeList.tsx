import React, { useEffect, useState } from 'react';
import Card from '../../molecules/Card/Card';
import { Grid, Button, TextField } from '@mui/material';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  characters: {
    id: number;
    name: string;
  }[];
  imagem?: string;
  favorite: boolean;
  watched: boolean;
}

const EpisodesList: React.FC = () => {
  // TODO: mover isto para um contexto e utilizar reducer
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    // TODO: adicionar apollo para fazer a consulta
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query {
                    episodes {
                      results {
                        id
                        name
                        air_date
                          characters {
                            id
                            name
                          }
                        }
                      }
                    }
            `,
          }),
        });

        const { data } = await response.json();
        const episodesWithFavorite = data.episodes.results.map(
          (episode: Episode) => ({
            ...episode,
            favorite: false,
            watched: false,
          })
        );
        setEpisodes(episodesWithFavorite);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  const toggleFavorite = (id: number) => {
    setEpisodes((prevEpisodes) =>
      prevEpisodes.map((episode) =>
        episode.id === id
          ? { ...episode, favorite: !episode.favorite }
          : episode
      )
    );
  };

  const toggleWatched = (id: number) => {
    setEpisodes((prevEpisodes) =>
      prevEpisodes.map((episode) =>
        episode.id === id ? { ...episode, watched: !episode.watched } : episode
      )
    );
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleSearchTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  const filteredEpisodes = showFavorites
    ? episodes.filter((episode) => episode.favorite)
    : episodes.filter((episode) =>
        episode.name.toLowerCase().includes(searchTitle.toLowerCase())
      );
  // TODO: mover os componentes de input e show whatched para um componente
  return (
    <Grid container spacing={2} display="flex" flexDirection="column">
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
        {filteredEpisodes.map((episode: Episode) => (
          <Grid item xs={12} sm={12} md={12} lg={12} key={episode.id}>
            <Card
              title={episode.name}
              description={episode.air_date}
              imageUrl={episode.imagem ?? ''}
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
