import React, { useState, useEffect } from 'react';
import {
  Icon,
  Button,
  Checkbox,
  Radio,
  TextInput,
  NumberInput,
  PasswordInput,
  EmailInput,
  Select,
  Spinner,
  MenuList,
  MenuItem,
  RadioGroup,
} from '@/components';

import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const TestCheckbox = styled(Checkbox)`
  margin-right: 1rem;
`;

const SampleContainer = () => {
  const [data, setData] = useState({
    check1: true,
    check2: false,
    check3: true,
    gender: 'women',
    text: 'hello',
    number: 0,
    password: '',
    email: '',
    select: '2',
  });
  const selectOptions = [
    { label: 'test1', value: '1' },
    { label: 'test2', value: '2' },
    { label: 'test3', value: '3', disabled: true },
    { label: 'test4', value: '4' },
  ];
  const onChangeCheckbox = (e) => {
    const { id, checked } = e.target;
    console.log(e);
    setData({
      ...data,
      [id]: checked,
    });
  };
  const onChangeRadio = (e) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      [name]: checked,
    });
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const changeMenuList = (value) => {
    console.log(value);
  };

  useEffect(() => {
    /* setTimeout(() => {
      setData({
        ...data,
        check1: !data.check1,
        check2: !data.check2,
      });
    }, 1000); */
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="p-5 mb-10">
      <h2 className="text-2xl mb-5">Icon</h2>
      <div>
        <Icon icon={solid('coffee')} />
        <Icon icon={regular('bell')} />
        <Icon icon={faCoffee} />
        <Icon icon={faBell} />
      </div>

      <h2 className="text-2xl my-5">Button</h2>
      <div>
        <h3 className="font-bold">Variant</h3>
        <div>
          <Button className="w-12 h-12 text-white bg-lime-400 hover:bg-lime-500 rounded-full">
            <Icon icon={solid('coffee')} />
          </Button>
          <Button size="medium" className="m-4">
            <span>Text</span>
          </Button>
          <Button href="/" size="medium" className="m-4 hover:underline">
            <span>Link</span>
          </Button>
          <Button variant="filled" size="medium" className="m-4">
            <Icon icon={solid('bell')} />
            <span className="ml-1">Filled</span>
          </Button>
          <Button variant="outlined" size="medium" className="m-4">
            <span>Outlined</span>
          </Button>
        </div>
        <h3 className="font-bold">Size</h3>
        <div>
          <Button variant="filled" size="small" className="m-4">
            <span>Small</span>
          </Button>
          <Button variant="filled" size="medium" className="m-4">
            <span>Default</span>
          </Button>
          <Button variant="filled" size="large" className="m-4">
            <span>Large</span>
          </Button>
        </div>
        <h3 className="font-bold">Status</h3>
        <div>
          <Button variant="filled" size="medium" className="m-4">
            <span>Normal</span>
          </Button>
          <Button variant="filled" size="medium" className="hover m-4">
            <span>Hover</span>
          </Button>
          <Button variant="filled" size="medium" className="active m-4">
            <span>Active</span>
          </Button>
          <Button variant="filled" size="medium" disabled className="m-4">
            <span>Disabled</span>
          </Button>
        </div>
      </div>

      <h2 className="text-2xl my-5">Checkbox</h2>
      <div>
        <TestCheckbox id="check1" checked={data.check1} onChange={onChangeCheckbox}>
          label1
        </TestCheckbox>
        <TestCheckbox id="check2" checked={data.check2} onChange={onChangeCheckbox} disabled>
          label2
          <br />
          long textlong textlong textlong textlong textlong text
          <br />
          long textlong textlong textlong textlong textlong text
        </TestCheckbox>
        <Checkbox id="check3" checked={data.check3} variant="square" onChange={onChangeCheckbox} />
      </div>

      <h2 className="text-2xl my-5">Radio</h2>
      <div>
        <RadioGroup name="gender" defaultValue="women">
          <Radio id="radio1" value="men">
            남성
          </Radio>
          <Radio id="radio2" value="women" checked>
            여성
          </Radio>
          <Radio value="etc" disabled>
            기타
          </Radio>
        </RadioGroup>
      </div>

      <h2 className="text-2xl my-5">Input</h2>
      <div>
        <h3 className="py-2 font-bold">Text</h3>
        <TextInput
          id="text"
          value={data.text}
          placeholder="텍스트 입력"
          onChange={onChangeInput}
          autoComplete="off"
          useClear
          addIcon={<Icon size="sm" icon={solid('user')} className="text-blue-400" />}
        />

        <h3 className="py-2 font-bold">Number</h3>
        <NumberInput id="number" value={data.number} onChange={onChangeInput} />

        <h3 className="py-2 font-bold">Password</h3>
        <PasswordInput id="password" value={data.password} onChange={onChangeInput} useToggle />

        <h3 className="py-2 font-bold">Email</h3>
        <EmailInput id="email" value={data.email} onChange={onChangeInput} />
      </div>

      <h2 className="text-2xl my-5">Select</h2>
      <div>
        <Select
          id="select"
          name="select"
          value={data.select}
          onChange={onChangeInput}
          options={selectOptions}
        />
      </div>
      <h2 className="text-2xl my-5">Spinner</h2>
      <div>
        <Spinner />
        <Button size="large" className="w-32 mt-4 bg-slate-400 rounded-md">
          <Spinner type="ThreeDots" width={24} height={24} color="white" />
        </Button>
      </div>
      <h2 className="text-2xl my-5">MenuList</h2>
      <div>
        <MenuList onChange={changeMenuList}>
          <MenuItem label="1" value="1" />
          <MenuItem label="2" value="2" />
          <MenuItem label="3" value="3" />
        </MenuList>
      </div>
    </div>
  );
};

export { SampleContainer };
