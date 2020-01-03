import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InstanceEdit from '../../../containers/InstanceEdit'

class Edit extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any),
    onSuccess: PropTypes.func,
    onClose: PropTypes.func,
  }

  render() {
    const {
      match: {
        params: {
          instanceId,
        },
      } = {},
      onSuccess,
      onClose,
    } = this.props

    return (
      <InstanceEdit
        id={instanceId}
        onSuccess={onSuccess}
        onClose={onClose}
      />
    )
  }
}

export default Edit
