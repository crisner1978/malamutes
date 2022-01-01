import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Header from "./Header";
import Modal from "./Modal";

const AppProvider = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Snow Legend Malamutes</title>
        <link rel="icon" href="/snowLegend.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot>
        <Header />
        {children}
        <Modal />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default AppProvider;
