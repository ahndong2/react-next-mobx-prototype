import styles from './Footer.module.scss';

export interface FooterProps {}

const Footer = (props: FooterProps) => {
  // console.log('Footer : ', props);

  return <div className={styles.Footer}>Footer</div>;
};
export { Footer };
