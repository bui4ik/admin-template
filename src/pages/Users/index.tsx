import React from 'react';
import { Typography } from 'antd';
import DefaultLayout from '../../layouts/DefaultLayout';
import AntTable from '../../components/molecules/AntTable';

const { Title } = Typography;

const Users = () => (
  <DefaultLayout>
    <Title level={2}>Users</Title>
    <AntTable />
  </DefaultLayout>
);

export default Users;
