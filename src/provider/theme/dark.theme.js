import { createTheme } from '@mui/material/styles';
import { green, teal, common } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[400],
    },
    secondary: {
      main: teal[200],
    },
  },
  typography: {
    allVariants: {
      color: common['white'],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: green[400],
        },
      },
    },
  },
});
