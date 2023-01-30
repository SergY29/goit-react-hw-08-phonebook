import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import { store } from 'redux/store';
import { App } from 'components/App';
import './index.css';



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
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
