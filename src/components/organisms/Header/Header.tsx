import styles from './Header.module.scss';

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  // console.log('Header : ', props);

  return <div className={styles.Header}>Header</div>;
};
export { Header };
