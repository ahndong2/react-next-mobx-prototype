import { useEffect, useState, useRef } from 'react';
import styles from './Radio.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Icon } from '@/components';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

export interface RadioProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const defaultProps: RadioProps = {
  onChange: () => {},
  checked: false,
  disabled: false,
};

const Radio = (props: RadioProps) => {
  console.log('Radio : ', props);
  const { id, name, value, checked, disabled, className, children, onChange } = props;

  const radioRef = useRef(null);

  const icon = {
    checked: solid('circle-dot'),
    unchecked: regular('circle-dot'),
  };

  return (
    <>
      <label className={cx('root', { checked: checked, disabled: disabled }, className)}>
        <input
          ref={radioRef}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          className={cx('input')}
          onChange={onChange}
        />
        <Icon size="xl" icon={checked ? icon.checked : icon.unchecked} className={cx('icon')} />
        <div className={cx('label')}>{children}</div>
      </label>
    </>
  );
};
Radio.defaultProps = defaultProps;

export { Radio };
