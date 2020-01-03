import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'
import Page from '@ali/wind-rc-page'
import InstanceInfo from '../../../containers/InstanceInfo'

class InstanceDetail extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any),
  }

  render() {
    const {
      match: {
        params: {
          instanceId,
        } = {},
      } = {},
    } = this.props

    return (
      <Page>
        <Page.Header
          title={instanceId}
          hasBackArrow
          renderBackArrow={backArrowElement => (
            <Link to="/instances">
              {backArrowElement}
            </Link>
          )}
        />
        <Page.Content>
          <InstanceInfo id={instanceId} />
        </Page.Content>
      </Page>
    )
  }
}

export default InstanceDetail
