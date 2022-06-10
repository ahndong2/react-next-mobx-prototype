import styles from './Modal.module.scss';

export interface ModalProps {}

const Modal = (props: ModalProps) => {
  console.log('Modal : ', props);

  return <div className={styles.Modal}>Modal</div>;
};
export { Modal };
