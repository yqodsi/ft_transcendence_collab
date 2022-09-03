import "../styles/globals.css";
import React from "react";
import SettingsProvider from "context/SettingsContext";
// import { appWithTranslation } from "next-i18next";
import Layout from "components/layout";

/**
 * This is _app
 * @return {JSX.Element}: The JSX code for home page.
 */
 function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <SettingsProvider>
        <Layout Component={Component} pageProps={pageProps} />
    </SettingsProvider>
  );
}

export default MyApp;