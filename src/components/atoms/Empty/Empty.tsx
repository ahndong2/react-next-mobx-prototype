import styles from './Empty.module.scss';

export interface EmptyProps {}

const Empty = (props: EmptyProps) => {
  console.log('Empty : ', props);

  return <div className={styles.Empty}>Empty</div>;
};
export { Empty };
