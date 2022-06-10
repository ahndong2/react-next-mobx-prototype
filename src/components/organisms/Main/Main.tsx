import styles from './Main.module.scss';

export interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <div className={styles.Main}>{children}</div>;
};
export { Main };
