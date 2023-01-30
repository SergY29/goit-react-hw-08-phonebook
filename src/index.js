import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#778ce8',
      main: '#2a3eb1',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffc400',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
