import Head from "next/head";
import "../styles/styles.css";
import { NavigationContextProvider } from "../context/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dieter Kaupp | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello my name is Dieter Kaupp, I'm a full stack web developer and use different technologies to create responsive, powerful and fully custom websites/applications."
        />
        <meta
          name="keywords"
          content="kaupp porfolio, kaupp developer, kaupp web developer, kaupp javascript"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="6DFC3C" />
        <meta name="theme-color" content="6DFC3C" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavigationContextProvider>
        <Component {...pageProps} />
      </NavigationContextProvider>
    </>
  );
}

export default MyApp;
