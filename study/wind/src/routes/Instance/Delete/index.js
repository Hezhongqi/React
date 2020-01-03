import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InstanceDelete from '../../../containers/InstanceDelete'

class Delete extends Component {
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
      <InstanceDelete
        id={instanceId}
        onSuccess={onSuccess}
        onClose={onClose}
      />
    )
  }
}

export default Delete
