import React, { ReactElement } from 'react';
import styles from './RadioGroup.module.scss';

export interface RadioGroupProps {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = (props: RadioGroupProps) => {
  console.log('RadioGroup : ', props);
  const { id, name, value, defaultValue, children, onChange } = props;

  return (
    <div className={styles.root}>
      {React.Children.map(children, (child) => {
        console.log('child', child);

        return React.cloneElement(child as ReactElement, {
          name: name,
          // checked: value === defaultValue,
        });
      })}
    </div>
  );
};
export { RadioGroup };
