import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme';
import ExchangeProvider from './state/ExchangesContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ExchangeProvider>
        <App />
      </ExchangeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
