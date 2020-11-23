import { Breadcrumb, Layout } from "antd";
import "./App.less";
import Headers from "./layout/headers/headers";
import Sidebar from "./layout/sidebar/sidebar";
function App() {
  const { Content } = Layout
  return (
    <main>
      <Layout>
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

  );
}

export default App;
