import React from 'react'
import PropTypes from 'prop-types'
import  {Form,Input,Button } from '@ali/wind'
import './index.scoped.less'

//组件可以表示为一个 纯函数 。stateless 组件又称为 受控组件（Controlled）
const UserForm = () => (
  <div>
      <Form>
          <Form.Item label="用户名">
              <Input/>
          </Form.Item>
          <Form.Item label="密码">
              <Input placeholder="密码" htmlType="password"/>
          </Form.Item>
          <Form.Item>
              <Button onClick={this.add}>确定</Button>
          </Form.Item>
      </Form>
  </div>
);

UserForm.propTypes = {
    form:PropTypes.objectOf(PropTypes.any).isRequired,
}

export default UserForm
