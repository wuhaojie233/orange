import React, { useState } from 'react'
import { Menu, Layout, Input, Dropdown } from 'antd';
// const { SubMenu } = Menu;
import './headers.less'
import PCLogo from '@asstes/juejin/header/pc-logo.svg'
import MobileLogo from '@asstes/juejin/header/mb-logo.svg'
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
const { Header } = Layout
const { Search } = Input;
const menuList = [
    { title: '首页', key: 'menu-1', active: 'one' },
    { title: '沸点', key: 'menu-2', active: 'two' },
    { title: '小册', key: 'menu-3', active: 'three' },
    { title: '活动', key: 'menu-4', active: 'four' },
]

const Headers = () => {
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

    return <Header>
        <div className="header-wrapper">
            <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">

                <Menu.Item key="mail" >
                    {isMobile ? <img src={MobileLogo} alt="juejin" width="45" height="38" /> : <img src={PCLogo} alt="juejin" width="98" height="38" />}
                </Menu.Item>
                {menuList.map(m => {
                    return <Menu.Item key={m.key} >
                        <a className="m-title" href="#"> {m.title}</a>
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
                        <SearchOutlined />
                    } />
            </div>
            <div className="h-add">
                <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
            </div>
            <div className="m-notification">
                <BellOutlined />
            </div>
            <div className="h-menu">
            </div>
        </div>

    </Header>

}

export default Headers