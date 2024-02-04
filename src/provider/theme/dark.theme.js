import { createTheme } from '@mui/material/styles';
import { green, blueGrey, teal, common } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[400],
    },
    secondary: {
      main: teal[200],
    },
    background: {
      default: blueGrey[900],
      paper: blueGrey[800],
    },
  },
  typography: {
    allVariants: {
      color: common['white'],
    },
  },
});
