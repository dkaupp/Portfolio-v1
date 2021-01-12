import Head from "next/head";
import "../styles/styles.css";
import { NavigationContextProvider } from "../context/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <NavigationContextProvider>
        <Component {...pageProps} />
      </NavigationContextProvider>
    </>
  );
}

export default MyApp;
