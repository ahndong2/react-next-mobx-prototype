import React, { useState } from 'react';
import { InputBase, InputProps, InputType } from './InputBase';

export type EmailInputProps = InputProps;

const defaultProps: EmailInputProps = {};

export const EmailInput = (props: EmailInputProps) => {
  const { onChange } = props;
  const [validate, setValidate] = useState(false);
  const validateEmailType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    setValidate(pattern.test(value));
    onChange(e);
  };
  return (
    <InputBase type={InputType.EMAIL} {...props} onChange={validateEmailType} validate={validate} />
  );
};
EmailInput.defaultProps = defaultProps;
