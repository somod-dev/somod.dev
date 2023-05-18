import { CssBaseline } from "@mui/material";
import { GoogleAnalytics, ThemeOptionsProvider } from "mui-extended";
import { NextConfig } from "next";
import { AppProps } from "next/app";
import getConfig from "next/config";
import Head from "next/head";

const SomodApp = ({ Component, pageProps }: AppProps) => {
  const nextConfig: NextConfig = getConfig();

  const defaultThemeOptions =
    nextConfig?.publicRuntimeConfig?.defaultThemeOptions || {};

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CODE}
        />
      </Head>
      <CssBaseline enableColorScheme />
      <ThemeOptionsProvider themeOptions={defaultThemeOptions}>
        <Component {...pageProps} />
      </ThemeOptionsProvider>
    </>
  );
};

export default SomodApp;
