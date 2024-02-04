'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../provider/theme/dark.theme';
import Card from '../components/molecules/Card/Card';
import { Grid } from '@mui/material';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter {
    characters {
      results {
        name
        image
      }
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientSideComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { loading, error, data } = useQuery(GET_CHARACTER);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container style={{ height: '100vh' }}>
        <Card
          title={data.characters.results[0].name}
          description="desc"
          imageUrl={data.characters.results[0].image}
        ></Card>
      </Grid>
    </ThemeProvider>
  );
};

export default ClientSideComponent;
