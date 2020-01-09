// eslint react/prefer-stateless-function: "off"
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import './index.scoped.less'
//视图组件
import UserForm from "../../components/UserForm";
//数据模型
import  {actions} from '../../models/user'
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({})

@connect(mapStateToProps, mapDispatchToProps)
class CreateUser extends Component {
  static propTypes = {}

  static defaultProps = {}

  // avoid using state as much as possible
  state = {}

  render() {
    return (
        <div>
          <h3>创建用户</h3>
          <div>
            <UserForm {...this.props} />
          </div>
        </div>
    )
  }
}

export default CreateUser
