import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const Topbar: FunctionComponent = () => {
  return (
    <Header
      className="site-layout-background"
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    />
  );
};

export default Topbar;
