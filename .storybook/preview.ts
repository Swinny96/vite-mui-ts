import type { Preview } from '@storybook/react';
import '../src/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// MUI Fonts

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import '../src/index.scss';

// MUI Themes
import { lightTheme, darkTheme } from '../src/themes.js';

// Only import this if you want to use Bootstrap's
// JQuery helpers
import 'bootstrap/dist/js/bootstrap.bundle';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider,withThemeByDataAttribute } from '@storybook/addon-styling';

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

// Import your fontface CSS files here
// Don't have any? We recommend installing and using @fontsource/roboto

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      // Uncomment for theme switching
      defaultTheme: 'light',
      Provider: ThemeProvider,
      themes: {
        light: lightTheme,
        dark: darkTheme,
      }
    }),
    /*withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-bs-theme',
    }),*/
  ],
};

export default preview;
