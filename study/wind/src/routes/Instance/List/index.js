import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Route, routerRedux } from 'dva/router'
import intl from '@ali/wind-intl'
import Page from '@ali/wind-rc-page'
import { actions } from '../../../models/instanceList'
import InstanceListContainer from '../../../containers/InstanceList'
import Edit from '../Edit'
import Delete from '../Delete'

const mapDispatchToProps = dispatch => ({
  onRefresh(url, isReload) {
    dispatch(routerRedux.push(url))
    isReload && dispatch(actions.updateQuery({}))
  },
})

@connect(null, mapDispatchToProps)
class InstanceList extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any),
    onRefresh: PropTypes.func,
  }

  render() {
    const {
      match: {
        url,
      } = {},
      onRefresh,
    } = this.props

    return (
      <Fragment>
        <Page>
          <Page.Header title={intl('ui.menu.instance.title')} />
          <Page.Content>
            <InstanceListContainer />
          </Page.Content>
        </Page>
        <Route
          path={`${url}/:operation(create|edit)/:instanceId?`}
          render={({ match }) => (
            <Edit
              match={match}
              onSuccess={() => {
                onRefresh(url, true)
              }}
              onClose={() => {
                onRefresh(url)
              }}
            />
          )}
        />
        <Route
          path={`${url}/delete/:instanceId?`}
          render={({ match }) => (
            <Delete
              match={match}
              onSuccess={() => {
                onRefresh(url, true)
              }}
              onClose={() => {
                onRefresh(url)
              }}
            />
          )}
        />
      </Fragment>
    )
  }
}

export default InstanceList
