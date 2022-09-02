import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createCustomTheme } from "../theme/index";
import useSettings from "hooks/useSettings";
/**
 * This is _app
 * @return {JSX.Element}: The JSX code for home page.
 */
function Layout({ Component, pageProps }: { Component: any; pageProps: any }) {

  const { settings } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout;
