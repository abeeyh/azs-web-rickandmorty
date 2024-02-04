'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../provider/theme/dark.theme';
import Card from '../components/molecules/Card/Card';
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
      <Grid container style={{ height: '100vh' }}>
        <Card
          title={`data.characters.results[0].name`}
          description="desc"
          imageUrl={`data.characters.results[0].image`}
        ></Card>
      </Grid>
    </ThemeProvider>
  );
};

export default ClientSideComponent;
