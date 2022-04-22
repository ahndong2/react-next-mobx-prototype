import React from "react";
import { Button } from "@/components";
import styled from "styled-components";
import variables from '@/styles/variables.module.scss';

const NewButton = styled.button`
  width: 200px;
  height: 50px;
  color: ${props => props.color || '#999'};
`;

// styled components
const Input = styled.input`
  border: 1px solid #000;
`;
// Extending Styles
const InputDashed = styled(Input)`
  border-style: dashed;
`;
const InputRequired = styled(Input).attrs({
  required: true,
})`
  border-color: red;
`;
const InputCheckbox = styled.input.attrs({
  type: 'checkbox',
  checked: true,
})`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

const SampleTemplate = (props) => {
  return (
    <div className="mb-5">
      <Button >버튼</Button>
      <Button disabled={true}>버튼</Button>

      <NewButton>Normal</NewButton>
      <NewButton color="red">Props</NewButton>
      <br />

      <Input />
      <InputDashed />
      <InputRequired />
      <InputCheckbox />
    </div>
  )};

export { SampleTemplate };
