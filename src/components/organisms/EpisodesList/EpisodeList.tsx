/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Card from '../../molecules/Card/Card';
import { Grid } from '@mui/material';

const EpisodesList: React.FC = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        setEpisodes(data.episodes.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <Grid container spacing={2}>
      {episodes.map((episode: any) => (
        <Grid item xs={12} sm={12} md={12} lg={12} key={episode.id}>
          <Card
            title={episode.name}
            description={episode.air_date}
            imageUrl={episode.imagem}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EpisodesList;
