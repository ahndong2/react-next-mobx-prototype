import styles from './Pagination.module.scss';

export interface PaginationProps {}

const Pagination = (props: PaginationProps) => {
  console.log('Pagination : ', props);

  return <div className={styles.Pagination}>Pagination</div>;
};
export { Pagination };
