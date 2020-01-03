import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'dva/router'
import { RegionContextRoute } from '@ali/wind-rc-region'
import regions from './regions'
import List from './List'
import Detail from './Detail'

const Instance = ({ match }) => (
  <RegionContextRoute
    path={`${match.url}/:regionId?`}
    dataSource={regions}
    render={
      () => (
        <Fragment>
          <Switch>
            <Route
              path={`${match.url}/:regionId/item/:instanceId`}
              component={Detail}
            />
            <Route
              path={`${match.url}/:regionId`}
              component={List}
            />
          </Switch>
        </Fragment>
      )
    }
  />
)

Instance.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
}

export default Instance
