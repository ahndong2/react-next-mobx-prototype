import React from 'react';
import styles from './Select.module.scss';

export interface SelectOptions {
  label?: string;
  value?: string;
  disabled?: boolean;
}
export interface SelectProps {
  children?: React.ReactNode;
  id?: string;
  name?: string;
  className?: string;
  value?: string;
  multiple?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: SelectOptions[];
}

const defaultProps: SelectProps = {
  className: '',
  options: [],
  onChange: () => {},
};

const Select = (props: SelectProps) => {
  const { id, name, className, value, multiple, disabled, onChange, options } = props;

  return (
    <select
      id={id}
      name={name}
      className={`${styles.root} ${className}`}
      value={value}
      multiple={multiple}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
    >
      {options.map((v, i) => {
        return (
          <option key={i} value={v.value} disabled={v.disabled}>
            {v.label}
          </option>
        );
      })}
    </select>
  );
};
Select.defaultProps = defaultProps;

export { Select };
