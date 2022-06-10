import styles from './Nav.module.scss';

export interface NavProps {}

const Nav = (props: NavProps) => {
  // console.log('Nav : ', props);

  return <div className={styles.Nav}>Nav</div>;
};
export { Nav };
