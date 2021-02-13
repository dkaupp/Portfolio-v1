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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Hello my name is Dieter Kaupp, I'm a full stack web developer and use different technologies to create responsive, powerful and fully custom websites/applications."
        />
        <meta
          name="keywords"
          content="kaupp porfolio, kaupp developer, kaupp web developer, kaupp javascript"
        />
      </Head>
      <NavigationContextProvider>
        <Component {...pageProps} />
      </NavigationContextProvider>
    </>
  );
}

export default MyApp;
