'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../provider/theme/dark.theme';
import EpisodesList from '../components/organisms/EpisodesList/EpisodeList';
import { EpisodesProvider } from '../context/EpisodesContext';
import { Grid } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientSideComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <EpisodesProvider>
        <Grid
          container
          justifyContent="center"
          style={{ minHeight: '100vh' }}
          marginTop={8}
        >
          <EpisodesList />
        </Grid>
      </EpisodesProvider>
    </ThemeProvider>
  );
};

export default ClientSideComponent;
