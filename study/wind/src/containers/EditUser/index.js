// eslint react/prefer-stateless-function: "off"
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import './index.scoped.less'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

@connect(mapStateToProps, mapDispatchToProps)
class EditUser extends Component {
  static propTypes = {}

  static defaultProps = {}

  // avoid using state as much as possible
  state = {}

  render() {
    return (
      <div>EditUser</div>
    )
  }
}

export default EditUser
