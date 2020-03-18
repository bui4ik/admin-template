import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { FormProps } from 'antd/es/form';
import AuthLayout from '../../layouts/AuthLayout';
import * as S from './styles';

const { Title } = Typography;

const SignIn = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: FormProps) => {
    console.log('Success:', values);
  };

  return (
    <AuthLayout>
      <S.Box>
        <Title>Company name</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </S.Box>
    </AuthLayout>
  );
};

export default SignIn;
