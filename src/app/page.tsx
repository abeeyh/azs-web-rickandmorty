'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '../components/atoms/Button/Button';
import { darkTheme } from '../provider/theme/dark.theme';
// import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles({
//   container: {
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

const ClientSideComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // const classes = useStyles();

  return (
    // <div className={classes.container}>
    <ThemeProvider theme={darkTheme}>
      <Button color="primary" text="button" variant="contained" />
    </ThemeProvider>
    // </div>
  );
};

export default ClientSideComponent;
