import Header from "components/Header";
import Head from "next/head";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Snow Legend Malamutes</title>
        <link rel="icon" href="/snowLegend.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
