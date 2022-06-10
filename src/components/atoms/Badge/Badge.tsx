import styles from './Badge.module.scss';

export interface BadgeProps {}

const Badge = (props: BadgeProps) => {
  console.log('Badge : ', props);

  return <button className={styles.btn}>Badge</button>;
};
export { Badge };
