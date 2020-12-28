import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'
import './login.less'
import GroupState from '../../store/group-state'
import { withRouter } from 'react-router'
const Login: FC = (props: any) => {
  console.warn(props)
  const [userName, setUserName] = useState()
  const [passWord, setPassWord] = useState()
  // const onFinish = (values: string) => {
  //   console.log('Received values of form: ', values)
  // }
  const userNameHandle = (data: any) => {
    setUserName(data.target.value)
  }
  const passWordHandle = (data: any) => {
    setPassWord(data.target.value)
  }
  // 登录
  const submit = async () => {
    await props.login(
      { username: userName, password: passWord },
      props.history.replace('/')
    )
  }
  return (
    <section className="login-wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={submit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
            value={userName}
            onChange={userNameHandle}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="password"
            value={passWord}
            onChange={passWordHandle}
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <a className="login-form-forgot">忘记了密码</a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          或者 <a href="">立即注册</a>
        </Form.Item>
      </Form>
    </section>
  )
}

export default GroupState(Login, { reducer: 'auth', states: ['user'] })
