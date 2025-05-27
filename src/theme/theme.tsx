import { PaletteMode } from '@mui/material';
import { amber, grey, teal } from '@mui/material/colors';

const primaryPalette = {
  main: '#000000', // Black
  dark: '#FFF8F3', // Light Orange 2
  light: '#FFFCF9', // Light Orange 3
  contrastText: '#FFFFFF',
};

const secondaryPalette = {
  main: '#FFDFC3',
  dark: '#FFF8F3',
  light: '#FFFCF9',
  contrastText: '#FFFFFF',
};

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => {
  const commonValues = {
    primary: primaryPalette,
    secondary: secondaryPalette,
    divider: mode === 'light' ? amber[200] : teal[500],
    text: {
      primary: mode === 'light' ? grey[900] : '#fff',
      secondary: mode === 'light' ? grey[800] : grey[500],
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    error: {
      main: '#b70808',
      dark: '#FF5151',
      light: '#FFF1F1',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA726',
      dark: '#F57C00',
      light: '#FFB74D',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#b9b9b9',
      dark: '#0288D1',
      light: '#4E4E50',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#66BB6A',
      dark: '#388E3C',
      light: '#81C784',
      contrastText: '#FFFFFF',
    },
  };

  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            ...commonValues,
          }
        : {
            // palette values for dark mode
            ...commonValues,
            background: {
              default: teal[600],
              paper: teal[600],
            },
          }),
    },
  };
};

export default theme;
