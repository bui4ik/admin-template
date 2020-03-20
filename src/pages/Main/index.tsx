import React from 'react';
import { Typography } from 'antd';
import DefaultLayout from '../../layouts/DefaultLayout';

const { Title } = Typography;

const Main = () => {
  return (
    <DefaultLayout>
      <Title level={2}>Main</Title>
    </DefaultLayout>
  );
};

export default Main;
