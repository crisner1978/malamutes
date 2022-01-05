import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

const AppProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Snow Legend Malamutes</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Alaskan Malamute Puppies: Snow Legend Malamutes of Murfreesboro, TN 37130, Ten (10) Puppies available for sale/adoption." />
        <meta property="og:title" title="Puppies Available: Alaskan Malamutes - Snow Legend Malamutes of Murfreesboro, TN 37130 are pleased to announce our first litter of TEN puppies born on 12/11/2021." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/snowLegend.png" />
      </Head>
      <RecoilRoot>
        <Header />
        {children}
        <Footer />
        <Modal />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default AppProvider;
