import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Union } from '@/types';
import { Button, Icon } from '@/components';
import styles from './Input.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const InputType = {
  TEXT: 'text',
  NUMBER: 'number',
  PASSWORD: 'password',
  EMAIL: 'email',
};
export interface InputProps {
  id?: string;
  type?: Union<typeof InputType>;
  value?: string | number;
  placeholder?: string;
  spellCheck?: boolean;
  className?: string;
  autoComplete?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  validate?: boolean;
  useClear?: boolean;
  addIcon?: React.ReactNode;
}

const defaultProps: InputProps = {
  type: 'text',
  spellCheck: false,
  className: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

interface RootProps {
  error?: boolean;
}
const Root = styled.span<RootProps>`
  border-radius: ${({ theme }) => theme.radius};
  ${({ error, theme }) => {
    if (error === false) {
      return css`
        color: ${theme.colors.error};
        &:hover,
        &:focus-within {
          color: ${theme.colors.error};
        }
      `;
    }
  }}
`;
const Input = styled.input`
  caret-color: ${({ theme }) => theme.colors.primary};
`;

// Boolean을 props로 전달할 수 없어서 우회
export const InputBase = ({ validate, useClear, addIcon, children, ...props }: InputProps) => {
  // console.log('InputBase : ', props);
  const { id, type, value, placeholder, spellCheck, className, onChange, onFocus, onBlur } = props;

  const inputRef = useRef(null);

  const clearInput = () => {
    const event = new Event('input', { bubbles: true });
    inputRef.current.value = '';
    inputRef.current.dispatchEvent(event);
    inputRef.current.focus();
  };

  // console.log(`${id} : ${validate}`);

  const clearBtn = useClear && value && (
    <Button className={styles.button} onClick={clearInput}>
      <Icon icon={solid('circle-xmark')} fixedWidth />
    </Button>
  );

  const inputIcon = addIcon && <i className={styles.icon}>{addIcon}</i>;

  return (
    <Root className={cx('root', className)} error={value && validate}>
      {inputIcon}
      <Input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        spellCheck={spellCheck}
        {...props}
        className={cx('input')}
        onChange={onChange}
        onInput={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
      {clearBtn}
    </Root>
  );
};
InputBase.defaultProps = defaultProps;
