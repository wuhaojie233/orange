import React, { useState } from 'react'
import { Menu, Layout, Input, Dropdown, Avatar } from 'antd';
// const { SubMenu } = Menu;
import './headers.less'
import PCLogo from '@asstes/juejin/header/pc-logo.svg'
import MobileLogo from '@asstes/juejin/header/mb-logo.svg'
import { BellFilled, SearchOutlined, CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';
const { Header } = Layout
const menuList = [
    { title: '首页', key: 'menu-1', active: 'one', path: '' },
    { title: '沸点', key: 'menu-2', active: 'two', path: '' },
    { title: '小册', key: 'menu-3', active: 'three', path: '' },
    { title: '购物车', key: 'menu-4', active: 'four', path: '/cart' },
]

const Headers = (props: any) => {
    const isMobile = false

    const [state, setState] = useState('menu-1')
    const handleClick = (event: any) => {
        setState(event.key);
    }
    const onSearch = (value: any) => console.log(value);
    const handleMenuClick = () => {

    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">发布沸点</Menu.Item>
        </Menu>
    );
    const jumpMenu = (item: any) => {
        props.history.push(item.path || "/")
    }
    return <Header className="headers-view">
        <div className="header-wrapper">
            <div>
                {isMobile ? <img className="logo" src={MobileLogo} alt="juejin" width="45" height="38" /> : <img className="logo" src={PCLogo} alt="juejin" width="98" height="38" />}
            </div>
            <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">
                {menuList.map(m => {
                    return <Menu.Item key={m.key} >
                        <a onClick={() => jumpMenu(m)} className="m-title" > {m.title}</a>
                    </Menu.Item>
                })}
                {/* <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu> */}

            </Menu>
            <div className="h-search">
                <Input
                    className="search-text"
                    placeholder="搜索掘金"
                    suffix={
                        <SearchOutlined className="icon-search" />
                    } />
            </div>
            <div className="h-add">
                <Dropdown.Button icon={<CaretDownOutlined className="b-icon" />} overlay={menu}>写文章</Dropdown.Button>
            </div>
            <div className="m-notification">
                <BellFilled className="icon-bell" />
            </div>
            <div className="h-avatar">
                <Avatar
                    className="avatar"
                    icon={<UserOutlined />}
                />
            </div>
        </div>

    </Header>

}

export default withRouter(Headers)