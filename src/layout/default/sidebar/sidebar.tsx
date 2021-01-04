import { Layout, Menu } from "antd";

import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import GroupState from "../../../store/group-state";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar: React.FC = (props: any) => {
  useEffect(() => {
    props.getMenus()
  }, [])

  const path = props.location.pathname
  const menusNodes = (menuList: any): any => {
    return menuList && menuList.map((m: any) => {
      if (!m.children) {
        return <Menu.Item key={m.path}>
          <Link to={m.path}>
            {m.title}
          </Link>
        </Menu.Item>
      } else {
        return <SubMenu key={m.path} title={m.title}>
          {menusNodes(m.children)}
        </SubMenu>
      }
    })

  }

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={path}
        style={{ height: "100%", borderRight: 0 }}
      >
        {menusNodes(props.menus)}
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="home pad">
          <Menu.Item key="1" ><Link to='/home/dashboard'>dashboard</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/home/about'>about</Link> </Menu.Item>
          <Menu.Item key="3"><Link to='/home/game'>game</Link></Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}
export default withRouter(GroupState(Sidebar, {
  reducer: 'home',
  states: ['menus']
}));
