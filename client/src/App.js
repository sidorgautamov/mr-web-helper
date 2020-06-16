import React, {Fragment} from 'react';
import CallbackForm from './components/CallbackFrom';
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { purple, amber, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[50],
      main: purple[500],
      dark: purple[900]
    },
    secondary: {
      light: amber[50],
      main: amber[500],
      dark: amber[900]
    },
    text: {
      primary: grey[50],
      secondary: grey[900]
    }
  },

  breakpoints: {
    values: {
      xs: 20, /* 320px */
      sm: 35, /* 560px */
      md: 60, /* 960px */
      lg: 80, /* 1280px */
      xl: 128 /* 2048px */
    },
    unit: 'rem'
  },

  typography: {
    fontFamily: '"Jost", sans-serif',
    fontSize: 12,
    fontWeight: '600',
    h3: {
      transition: 'font-size 1s ease-out 0s',
      '@media screen and (min-width:20rem)': {
        fontSize: '1.75rem'
      },
      '@media screen and (min-width:35rem)': {
        fontSize: '2rem'
      },
      '@media screen and (min-width:60rem)': {
        fontSize: '2.25rem'
      },
      '@media screen and (min-width:80rem)': {
        fontSize: '2.5rem'
      },
      '@media screen and (min-width:120rem)': {
        fontSize: '3rem'
      }
    },
    body1: {
      transition: 'font-size 1s ease-out 0s',
      '@media screen and (min-width:20rem)': {
        fontSize: '1rem'
      },
      '@media screen and (min-width:35rem)': {
        fontSize: '1.5rem'
      },
      '@media screen and (min-width:60rem)': {
        fontSize: '1.8rem'
      },
      '@media screen and (min-width:80rem)': {
        fontSize: '2.2rem'
      },
      '@media screen and (min-width:120rem)': {
        fontSize: '2.5rem'
      }
    },
    body2: {
      transition: 'font-size 1s ease-out 0s',
      '@media screen and (min-width:20rem)': {
        fontSize: '0.75rem'
      },
      '@media screen and (min-width:35rem)': {
        fontSize: '1rem'
      },
      '@media screen and (min-width:60rem)': {
        fontSize: '1.25rem'
      },
      '@media screen and (min-width:80rem)': {
        fontSize: '1.5rem'
      },
      '@media screen and (min-width:120rem)': {
        fontSize: '1.75rem'
      }
    },
    button: {
      transition: 'font-size 1s ease-out 0s',
      fontWeight: '300',
      '@media screen and (min-width:20rem)': {
        fontSize: '1rem'
      },
      '@media screen and (min-width:35rem)': {
        fontSize: '1.25rem'
      },
      '@media screen and (min-width:60rem)': {
        fontSize: '1rem'
      },
      '@media screen and (min-width:80rem)': {
        fontSize: '1.25rem'
      },
      '@media screen and (min-width:120rem)': {
        fontSize: '1.8rem'
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <CallbackForm />
      </Fragment>
    </ThemeProvider>
  );
}