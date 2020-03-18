import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import Logo from '../../atoms/Logo';
import SideMenu from '../../atoms/SideMenu';

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const Sidebar: FunctionComponent<IProps> = ({ collapsed, onCollapse }) => {
  return (
    <Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Logo />
      <SideMenu />
    </Sider>
  );
};

export default Sidebar;
