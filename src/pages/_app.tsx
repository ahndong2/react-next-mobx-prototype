import { useState } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import { useStore, RootStore } from '@/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const [pProps] = useState(pageProps);
  // const store = useStore(pProps);
  const [store] = useState(useStore(pageProps) as RootStore);

  return (
    <Provider {...store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
