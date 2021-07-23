import React from 'react';
import { Input, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const Affaire = () => (
  <div className="affaire">
    <div className="site-input-group-wrapper">
      <br />
      <Input.Group compact>
        <Input style={{ width: '50%' }} defaultValue="0571" />
        <Input style={{ width: '50%' }} defaultValue="26888888" />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Select defaultValue="Zhejiang">
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Input.Search style={{ width: '40%' }} defaultValue="0571" />
        <Input.Search allowClear style={{ width: '40%' }} defaultValue="26888888" />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Input.Search allowClear style={{ width: '40%' }} defaultValue="0571" />
        <Input.Search allowClear style={{ width: '40%' }} defaultValue="26888888" />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <InputNumber />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <DatePicker style={{ width: '50%' }} />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Input style={{ width: '30%' }} defaultValue="input content" />
        <DatePicker.RangePicker style={{ width: '70%' }} />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Select defaultValue="Option1-1">
          <Option value="Option1-1">Option1-1</Option>
          <Option value="Option1-2">Option1-2</Option>
        </Select>
        <Select defaultValue="Option2-2">
          <Option value="Option2-1">Option2-1</Option>
          <Option value="Option2-2">Option2-2</Option>
        </Select>
      </Input.Group>
      <br />
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">Between</Option>
          <Option value="2">Except</Option>
        </Select>
        <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
        <Input
          className="site-input-split"
          style={{
            width: 30,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: 'none',
          }}
          placeholder="~"
          disabled
        />
        <Input
          className="site-input-right"
          style={{
            width: 100,
            textAlign: 'center',
          }}
          placeholder="Maximum"
        />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Select defaultValue="Sign Up" style={{ width: '30%' }}>
          <Option value="Sign Up">Sign Up</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
        <AutoComplete style={{ width: '70%' }} placeholder="Email" options={[{ value: 'text 1' }, { value: 'text 2' }]} />
      </Input.Group>
      <br />
      <Input.Group compact>
        <Select style={{ width: '30%' }} defaultValue="Home">
          <Option value="Home">Home</Option>
         </Select>
        <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
      </Input.Group>
      <br />
      <Input.Group compact>
        <TextArea rows={4} />
      </Input.Group>
    </div>
  </div>
);

export default Affaire;
