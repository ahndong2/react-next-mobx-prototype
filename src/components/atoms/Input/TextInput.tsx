import React from 'react';
import { InputBase, InputProps, InputType } from './InputBase';

export type TextInputProps = InputProps;

export const TextInput = (props: TextInputProps) => {
  return <InputBase type={InputType.TEXT} {...props} />;
};
