import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'
import './login.less'
const Login: FC = (props: any) => {
  const onFinish = (values: string) => {
    console.log('Received values of form: ', values)
  }
  const submit = () => {
    props.history.replace('/home')
  }
  return (
    <section className="login-wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            忘记了密码
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={submit}
          >
            登录
          </Button>
          或者 <a href="">立即注册</a>
        </Form.Item>
      </Form>
    </section>
  )
}

export default Login
