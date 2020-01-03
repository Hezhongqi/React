import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@ali/wind'
import './index.scoped.less'

const ChartInfoBlock = ({
  title = 'Title',
  loading,
  children,
}) => (
  <div styleName="container">
    <div styleName="title">
      <h3 styleName="title-text">{title}</h3>
      {
        loading && (<Icon type="loading" size="xs" />)
      }
    </div>
    <div styleName="content">
      {children && <children.type {...children.props} />}
    </div>
  </div>
)

ChartInfoBlock.propTypes = {
  title: PropTypes.node,
  loading: PropTypes.bool,
  children: PropTypes.node,
}

export default ChartInfoBlock
