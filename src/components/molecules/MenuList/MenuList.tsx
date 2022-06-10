import styles from './MenuList.module.scss';

export interface MenuListProps {}

const MenuList = (props: MenuListProps) => {
  console.log('MenuList : ', props);

  return <div className={styles.MenuList}>MenuList</div>;
};
export { MenuList };
