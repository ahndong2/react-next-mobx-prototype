import styles from './Search.module.scss';

export interface SearchProps {}

const Search = (props: SearchProps) => {
  console.log('Search : ', props);

  return <div className={styles.Search}>Search</div>;
};
export { Search };
