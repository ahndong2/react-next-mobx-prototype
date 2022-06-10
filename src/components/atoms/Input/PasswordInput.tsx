import React, { useState } from 'react';
import { Button, Icon } from '@/components';
import { InputBase, InputType, InputProps } from './InputBase';
import styles from './Input.module.scss';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export interface PasswordInputProps extends InputProps {
  useToggle?: boolean;
}
const defaultProps: PasswordInputProps = {
  useToggle: false,
};

type typeObj = {
  type: string;
  visible: boolean;
  icon: object;
  title: string;
};
export const PasswordInput = ({ useToggle, ...props }: PasswordInputProps) => {
  const types: typeObj[] = [
    { type: InputType.PASSWORD, visible: false, icon: solid('eye'), title: 'Show' },
    { type: InputType.TEXT, visible: true, icon: solid('eye-slash'), title: 'Hide' },
  ];
  const [passwordType, setPasswordType] = useState(types[0]);
  const handlePasswordType = () => {
    setPasswordType(types.find((type) => type.visible === !passwordType.visible));
  };

  const toggleBtn = useToggle && (
    <Button title={passwordType.title} className={styles.button} onClick={handlePasswordType}>
      <Icon icon={passwordType.icon} fixedWidth />
    </Button>
  );
  return (
    <>
      <InputBase type={passwordType.type} {...props}>
        {toggleBtn}
      </InputBase>
    </>
  );
};
PasswordInput.defaultProps = defaultProps;
