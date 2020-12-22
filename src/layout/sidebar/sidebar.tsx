import { UserOutlined, NotificationOutlined } from '@ant-design/icons';

import { Layout, Menu } from "antd";

import React from "react";

import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar: React.FC = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="home pad">
          <Menu.Item key="1" ><Link to='/dashboard'>dashboard</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/about'>about</Link> </Menu.Item>
          <Menu.Item key="3"><Link to='/game'>game</Link></Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
export default Sidebar;