import styles from './ButtonGroup.module.scss';

export interface ButtonGroupProps {}

const ButtonGroup = (props: ButtonGroupProps) => {
  console.log('ButtonGroup : ', props);

  return <div className={styles.ButtonGroup}>ButtonGroup</div>;
};
export { ButtonGroup };
