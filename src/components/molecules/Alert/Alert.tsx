import styles from './Alert.module.scss';

export interface AlertProps {}

const Alert = (props: AlertProps) => {
  console.log('Alert : ', props);

  return <div className={styles.Alert}>Alert</div>;
};
export { Alert };
