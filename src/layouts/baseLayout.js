import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const BaseLayout = props => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={props => {
            console.log(props);
          }}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="home" />
                <span>数据管理</span>
              </span>
            }
          >
            <Menu.Item key="2">用户列表</Menu.Item>
            <Menu.Item key="3">商家列表</Menu.Item>
            <Menu.Item key="4">食品列表</Menu.Item>
            <Menu.Item key="5">订单列表</Menu.Item>
            <Menu.Item key="6">管理员列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="plus" />
                <span>添加数据</span>
              </span>
            }
          >
            <Menu.Item key="7">添加商铺</Menu.Item>
            <Menu.Item key="8">添加商品</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="star" theme="filled" />
                <span>图表</span>
              </span>
            }
          >
            <Menu.Item key="9">用户分布</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="edit" theme="filled" />
                <span>编辑</span>
              </span>
            }
          >
            <Menu.Item key="10">文本编辑</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="setting" theme="filled" />
                <span>设置</span>
              </span>
            }
          >
            <Menu.Item key="11">管理员设置</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon type="info-circle" theme="filled" />
                <span>说明</span>
              </span>
            }
          >
            <Menu.Item key="12">说明</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#eff2f7', paddingLeft: '20px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>数据管理</Breadcrumb.Item>
            <Breadcrumb.Item>用户列表</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ background: '#fff', height: '100%' }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
