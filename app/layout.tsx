"use client";

import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import DefaultTheme from '@themes/default';

import "@content/scss/common.scss";
import "@content/scss/popcontent.scss";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={DefaultTheme}>
          <CssBaseline />
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};


export default RootLayout;