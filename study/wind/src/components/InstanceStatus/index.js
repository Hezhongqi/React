import React from 'react'
import PropTypes from 'prop-types'
import StatusIndicator from '@ali/wind-rc-status-indicator'
import { StatusIndicatorMap } from './constants'
import './index.less'

const InstanceStatus = ({
  value,
}) => {
  const status = StatusIndicatorMap[value]

  if (status) {
    return (
      <StatusIndicator type={status.type}>
        {status.label}
      </StatusIndicator>
    )
  } else {
    return null
  }
}

InstanceStatus.propTypes = {
  value: PropTypes.number,
}

export default InstanceStatus
