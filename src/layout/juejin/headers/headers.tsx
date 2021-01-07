import React, { useState } from 'react'
import { Menu, Layout } from 'antd';
// const { SubMenu } = Menu;
import './headers.less'
const { Header } = Layout
const Headers = () => {
    const [state, setstate] = useState('')
    const handleClick = () => {

    }
    return <Header>
        <div className="header-wrapper">
            <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">
                <Menu.Item key="mail" >
                    掘金
        </Menu.Item>
                <Menu.Item key="mail" >
                    首页
        </Menu.Item>
                <Menu.Item key="app" disabled >
                    Navigation Two
        </Menu.Item>
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
                <Menu.Item key="alipay">
                    活动
            </Menu.Item>
            </Menu>
        </div>
    </Header>

}
export default Headers