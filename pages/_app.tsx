import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
