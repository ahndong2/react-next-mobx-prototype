import styles from './MenuItem.module.scss';

export interface MenuItemProps {
  label?: string;
  value?: string;
  onClick?: (value: MenuItemProps) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const { label, value, onClick } = props;

  const clickItem = (e) => {
    e.preventDefault();
    onClick({ label, value });
  };
  return (
    <li className={styles.MenuItem} onClick={clickItem}>
      {label}
    </li>
  );
};
export { MenuItem };
