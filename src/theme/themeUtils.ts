import { useContext } from 'react';

import { ThemeContext, ThemeContextType } from './ThemeContextProvider';

export const useThemeContext = (): ThemeContextType => {
  return useContext(ThemeContext);
};
