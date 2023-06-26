import React, { useState, useRef, useEffect } from 'react'
import { Form, Input, Button, Dialog } from 'antd-mobile'
import { Cell, CountDown } from '@nutui/nutui-react';
import axios from 'axios'
import  { nanoid } from 'nanoid'
export default (props) => {
  const onFinish = (values) => {
    let tel = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
    let pass = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (!tel.test(values.tel)) {
      Dialog.alert({
        content: '手机号格式不正确',
        closeOnMaskClick: true,
      })
      return
    } else if (!pass.test(values.pass)) {
      Dialog.alert({
        content: '密码格式不正确',
        closeOnMaskClick: true,
      })
      return
    } else if (code != values.code) {
      Dialog.alert({
        content: '验证码错误',
        closeOnMaskClick: true,
      })
      return
    } else {
      let obj={
        tel:values.tel,
        password:values.pass,
        id:nanoid()
      }
      axios.get('/regis',{params:obj}).then((res) => {
        
        if(res.data.code==1){
            props.history.push('/login')
        }else if(res.data.code==0){
            Dialog.alert({
              content:`${res.data.msg}`
            })  
        }
      })
    }
  }

  const [code, setCode] = useState('')
  const getCode = () => {
    let ran = Math.random().toString(16).slice(2, 8).toUpperCase()
    setCode(ran)
  }

  return (
    <>
      <Form
        layout='vertical'
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            注册
          </Button>
        }
      >
        <Form.Item
          name='tel'
          label='手机号'
          rules={[{ required: true, message: '手机号不能为空' }]}
        >
          <Input placeholder='请输入手机号' />
        </Form.Item>
        <Form.Item
          name='pass'
          label='密码'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input placeholder='请输入密码' />
        </Form.Item>
        <Form.Item
          label='短信验证码'
          name='code'
          extra={<a onClick={() => { getCode() }} >{code ? code : '发送验证码'}</a>}
          rules={[{ required: true, message: '验证码不能为空' }]}
        >
          <Input placeholder='请输入验证码' />

        </Form.Item>
      </Form>
    </>
  )
}
