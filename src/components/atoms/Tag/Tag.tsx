import styles from './Tag.module.scss';

export interface TagProps {}

const Tag = (props: TagProps) => {
  console.log('Tag : ', props);

  return <div className={styles.Tag}>Tag</div>;
};
export { Tag };
