import styles from './InputGroup.module.scss';

export interface InputGroupProps {}

const InputGroup = (props: InputGroupProps) => {
  console.log('InputGroup : ', props);

  return <div className={styles.InputGroup}>InputGroup</div>;
};
export { InputGroup };
