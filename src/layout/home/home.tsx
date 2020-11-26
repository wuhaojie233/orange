import { Breadcrumb, Layout } from "antd";
import React, { FC } from 'react'
import RouterView from "../../routes/routes";
import Headers from '../headers/headers';
import Sidebar from '../sidebar/sidebar';
const { Content } = Layout
const Home: FC = () => {
    return (
        <Layout className="m-layout">
            <Headers></Headers>
            <Layout>
                <Sidebar></Sidebar>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <RouterView />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home
