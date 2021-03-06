import React from 'react'
import Headers from '../headers/headers'
import { Layout } from 'antd'
import RouterView from '../../../routes/routes'
import './home.less'
import Labels from '../labels/labels'
const { Content } = Layout
const Home = (props: any) => {
    return (
        <Layout className="j-layout">
            <Headers></Headers>
            <Labels></Labels>
            <Content
                className="site-layout-background"
            >
                <RouterView routes={props.routes}></RouterView>
            </Content>
        </Layout>
    )
}

export default Home
