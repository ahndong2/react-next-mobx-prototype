import { useState } from 'react';
import { AppProps } from 'next/app';
import { Provider } from "mobx-react";
import {store, RootStore} from "@/store";
import '@/styles/globals.css';

interface State {
  Store: RootStore;
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [rootStore, setStore] = useState(store);

  return (
    <Provider {...rootStore}>
      <Component {...pageProps} />
    </Provider>
  )
}


// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };

export default MyApp
