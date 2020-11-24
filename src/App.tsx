import { Breadcrumb, Layout } from "antd";
import "./App.less";
import Headers from "./layout/headers/headers";
import Sidebar from "./layout/sidebar/sidebar";
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
function App() {
  const { Content } = Layout
  return (
    <Router>
      <main>
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
                Content
           </Content>
            </Layout>
          </Layout>
        </Layout>
      </main>
    </Router>
  );
}

const createRouter = (routes: any, props: any) => (
  <Router>
    <div>
      {/* 自动生成 Link 标签 */}
      {createLink(routes, props)}
      <hr />
      {/* 自动生成 Route 标签 */}
      {createRoute(routes, props)}
    </div>
  </Router>
)
createRouter(RouteConfig, props)
export default App;
