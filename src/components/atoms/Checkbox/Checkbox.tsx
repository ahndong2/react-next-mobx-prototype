import { useEffect, useState, useRef } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Icon } from '@/components';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { CustomCheckboxTarget } from '@/types';

interface iconType {
  name: string;
  checked: object;
  unchecked: object;
  indeterminate: object;
}
const iconTypes: iconType[] = [
  {
    name: 'circle',
    checked: solid('circle-check'),
    unchecked: regular('circle-check'),
    indeterminate: solid('circle-minus'),
  },
  {
    name: 'square',
    checked: solid('square-check'),
    unchecked: regular('square-check'),
    indeterminate: solid('square-minus'),
  },
];

type iconStyle = 'circle' | 'square';
interface CheckboxProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: iconStyle;
  style?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange?: (value: CustomCheckboxTarget) => void;
}
const defaultProps: CheckboxProps = {
  onChange: () => {},
  checked: false,
  disabled: false,
  variant: 'circle',
};

const Checkbox = (props: CheckboxProps) => {
  // console.log('Checkbox : ', props);
  const {
    id,
    name,
    value,
    checked,
    indeterminate,
    disabled,
    className,
    children,
    variant,
    onChange,
  } = props;
  const icon = iconTypes.find((type) => type.name === variant);

  const checkboxRef = useRef(null);

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <>
      <label className={cx('root', { checked: checked, disabled: disabled }, className)}>
        <input
          ref={checkboxRef}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          className={cx('input')}
          onChange={onChange}
        />
        <Icon
          size="xl"
          icon={indeterminate ? icon.indeterminate : checked ? icon.checked : icon.unchecked}
          className={cx('icon')}
        />
        <div className={cx('label')}>{children}</div>
      </label>
    </>
  );
};
Checkbox.defaultProps = defaultProps;

export { Checkbox };
