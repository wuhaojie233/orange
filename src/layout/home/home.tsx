import { Breadcrumb, Layout } from "antd";
import React, { FC } from 'react'
import Headers from '../headers/headers';
import Sidebar from '../sidebar/sidebar';
import RouterView from '../../routes/routes';
import AuthRoutes from "../../routes/pages/auth";
import { Route } from "react-router";
import About from '../../page/about/about';
import { renderRoutes } from 'react-router-config';
const { Content } = Layout
const Home: FC = (props: any) => {
    console.warn(props.route.routes)
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
                        {/* <RouterView routes={AuthRoutes} /> */}
                        {renderRoutes(props.route.routes)}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home
