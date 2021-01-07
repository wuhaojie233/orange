import React from 'react'
import Headers from '../headers/headers'
import { Layout } from 'antd'
import RouterView from '../../../routes/routes'
import './home.less'
const { Content } = Layout
const Home = (props: any) => {
    return (
        <Layout className="j-layout">
            <Headers></Headers>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <RouterView routes={props.routes}></RouterView>
            </Content>
        </Layout>
    )
}

export default Home
