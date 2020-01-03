import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route } from 'dva/router'
import App from './App'

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
)

AppRouter.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}

export default AppRouter
