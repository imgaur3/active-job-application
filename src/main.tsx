import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { StyledEngineProvider } from '@mui/material';

import App from './App.tsx';
import { configStore } from './redux-modules/store/index.ts';
import { ThemeContextProvider } from './theme';

import './index.css';

const { store } = configStore();
const persistor = persistStore(store);

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextProvider>
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
