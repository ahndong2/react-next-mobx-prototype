import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { ButtonStyle } from './type';

const cx = classNames.bind(styles);

export interface ButtonProps {
  style?: ButtonStyle;
  children?: any;
  disabled?: boolean;
};

export const  Button = (props:ButtonProps) => {
  const { children :content, disabled } = props;

  return <button className={styles.btn}>
    {content}
    <span className={cx('text', disabled ? 'one' : 'two')}>텍스트</span>
    <span className='test'>test</span>
  </button>;
}
