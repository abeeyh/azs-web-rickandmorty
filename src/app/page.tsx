'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../provider/theme/dark.theme';
import EpisodesList from '../components/organisms/EpisodesList/EpisodeList';
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        marginTop={16}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <EpisodesList />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ClientSideComponent;
