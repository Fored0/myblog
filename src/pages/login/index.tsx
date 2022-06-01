import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.css'
function Login() {
  const [toRegister, setToRegister] = useState<boolean>(false)
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const wrapperCol={
    offset: 8, 
    span: 16,
  }
  const formStyle = {
    top: (window.screen.height - 400) / 2,
    left: (window.screen.width - 400) / 2,
  }
  const bgImg = "https://img0.baidu.com/it/u=896097389,2049594816&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"

  const onFinish = (e: any) => {
    console.log(e);
    navigate('/home')
  }
  const onFinishFailed = (err: any) => {
    alert('Please inter your userName and password')
  }
  const onReset = () => {
    form.resetFields()
  }

  return (
    <>
      <img
        className='login_background-img'
        style={{ width: window.screen.width, height: window.screen.height }}
        src={bgImg}
        alt="login_bgc" />
      <div className='login_form' style={formStyle} >
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={wrapperCol}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={wrapperCol} >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset} style={{marginLeft:30}}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
