import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type VariantProp = 'filled' | 'outlined';
type SizeProp = 'small' | 'medium' | 'large';
interface ButtonProps {
  variant?: VariantProp;
  size?: SizeProp;
  title?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: object;
  href?: string | object;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
const defaultProps: ButtonProps = {
  onClick: () => {},
};

const Button = (props: ButtonProps) => {
  // console.log('Button : ', props);
  const {
    variant,
    size,
    title,
    disabled,
    className,
    children,
    href,
    onClick,
    onMouseDown,
    onFocus,
    onBlur,
  } = props;
  const classProps = className ? String(className).split(' ') : null;
  const buttonRef = useRef(null);

  const router = useRouter();
  const handleClick = (e) => {
    href && router.push(href);
    onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      title={title}
      disabled={disabled}
      className={cx('root', variant, size, classProps)}
      onClick={handleClick}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};
Button.defaultProps = defaultProps;

export { Button };
