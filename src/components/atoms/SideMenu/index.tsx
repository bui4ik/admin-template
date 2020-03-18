import React, { FunctionComponent } from 'react';
import {
  UserOutlined,
  VideoCameraOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Menu } from 'antd';
import routes from '../../../config/routes';
import * as S from './styles';

const SideMenu: FunctionComponent<RouteComponentProps> = ({ location }) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
    <Menu.Item key={routes.root}>
      <UserOutlined style={{ fontSize: '16px' }} />
      <S.Link to={routes.root}>Profile</S.Link>
    </Menu.Item>
    <Menu.Item key={routes.users}>
      <TeamOutlined style={{ fontSize: '16px' }} />
      <S.Link to={routes.users}>Users</S.Link>
    </Menu.Item>
    <Menu.Item key={routes.media}>
      <VideoCameraOutlined style={{ fontSize: '16px' }} />
      <S.Link to="/media">Media</S.Link>
    </Menu.Item>
  </Menu>
);

export default withRouter(SideMenu);
