import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import RouteWrapper from './Routes';
import { AuthWrapper } from './components';
import { useThemeContext } from './theme';
import './App.css';

function App() {
  const { theme } = useThemeContext();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AuthWrapper>
            <RouteWrapper />
          </AuthWrapper>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
