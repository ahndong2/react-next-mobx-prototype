import { InputBase, InputProps, InputType } from './InputBase';

export interface NumberInputProps extends InputProps {
  inputMode?: string;
  pattern?: string;
}

const defaultProps: NumberInputProps = {};

const NumberInput = (props: NumberInputProps) => {
  return <InputBase type={InputType.NUMBER} inputMode="numeric" pattern="[0-9]*" {...props} />;
};
NumberInput.defaultProps = defaultProps;

export { NumberInput };
