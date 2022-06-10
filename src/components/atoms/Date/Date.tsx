import styles from './Date.module.scss';

export interface DateProps {}

const Date = (props: DateProps) => {
  console.log('Date : ', props);

  return <div className={styles.Date}>Date</div>;
};
export { Date };
