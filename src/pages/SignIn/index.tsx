import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import AuthLayout from '../../layouts/AuthLayout';
import * as selectors from '../../store/auth/selectors';
import { RootReducer } from '../../interfaces/redux';
import { signinRequestAC } from '../../store/auth/actions';
import * as S from './styles';

const { Title } = Typography;

interface IProps {
  isAuthLoading: boolean;
  signIn: (values: any) => void;
}

const SignIn = ({ isAuthLoading, signIn }: IProps) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <AuthLayout>
      <S.Box>
        <Title>Company name</Title>
        {isAuthLoading ? (
          <div>Loading</div>
        ) : (
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={signIn}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
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
        )}
      </S.Box>
    </AuthLayout>
  );
};

const mapStateToProps = (state: RootReducer) => ({
  isAuthLoading: selectors.authLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: bindActionCreators(signinRequestAC, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
