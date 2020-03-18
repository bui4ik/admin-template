import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootReducer } from '../../interfaces/redux';
import Sidebar from '../../components/molecules/Sidebar';
import Topbar from '../../components/molecules/Topbar';
import * as selectors from '../../store/view/selectors';
import { toggleSidebarAC } from '../../store/view/actions';

const { Content } = Layout;

interface IProps {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const DefaultLayout: FunctionComponent<IProps> = ({
  children,
  isSidebarCollapsed,
  toggleSidebar,
}) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar collapsed={isSidebarCollapsed} onCollapse={toggleSidebar} />
      <Layout>
        <Topbar />
        <Content style={{ padding: '20px 50px', marginTop: 64 }}>
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state: RootReducer) => ({
  isSidebarCollapsed: selectors.isSidebarCollapsedSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleSidebar: bindActionCreators(toggleSidebarAC, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
