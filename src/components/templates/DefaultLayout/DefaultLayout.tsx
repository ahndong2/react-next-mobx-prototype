import { Header, Nav, Main, Footer } from '@/components';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
  return (
    <div id="wrap" className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Nav />
        <div className={styles.page}>
          <Main>{children}</Main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { DefaultLayout };
