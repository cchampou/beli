import theme from '../config/theme.json';

import { ThemeProvider } from 'emotion-theming';
import React from 'react';

const withThemeProvider = (Story,context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const globalTypes = {
  theme,
};
