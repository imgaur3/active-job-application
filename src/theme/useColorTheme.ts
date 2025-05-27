/* eslint-disable no-undef */
import { createTheme, PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';

import { getDesignTokens } from './theme';

const COLOR_MODE_KEY = 'colorMode';

export const useColorTheme = () => {
  const storedMode = localStorage.getItem(COLOR_MODE_KEY);
  const [mode, setMode] = useState<PaletteMode>(
    (storedMode as PaletteMode) || 'light',
  );

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    localStorage.setItem(COLOR_MODE_KEY, newMode);
    setMode(newMode);
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode],
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
