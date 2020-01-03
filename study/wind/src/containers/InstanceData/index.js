// eslint react/prefer-stateless-function: "off"
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { actions, selectors } from '../../models/instanceInfo'

const mapStateToProps = state => ({
  data: selectors.getData(state),
  query: selectors.getQueryWithRegionId(state),
  isFetchLoading: actions.fetch.isLoading(state),
  isCreateLoading: actions.create.isLoading(state),
  isDeleteLoading: actions.delete.isLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetch(query) {
    return dispatch(actions.fetch(query))
  },
  reset() {
    return dispatch(actions.reset())
  },
  create(data) {
    return dispatch(actions.create(data))
  },
  delete(id) {
    return dispatch(actions.delete({
      Id: id,
    }))
  },
})

@connect(mapStateToProps, mapDispatchToProps)
class InstanceBaseInfo extends Component {
  static propTypes = {
    id: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    data: PropTypes.objectOf(PropTypes.any),
    // eslint-disable-next-line react/no-unused-prop-types
    loading: PropTypes.bool,
    reset: PropTypes.func,
    fetch: PropTypes.func,
    query: PropTypes.objectOf(PropTypes.any),
    render: PropTypes.func,
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    const { query, id } = this.props
    if (prevProps.id !== id || prevProps.query !== query) {
      this.fetchData()
    }
  }

  componentWillUnmount() {
    this.props.reset()
  }

  fetchData() {
    const { reset, fetch, query, id } = this.props
    reset()

    if (id) {
      fetch({
        ...query,
        InstanceId: id,
      })
    }
  }

  render() {
    return this.props.render(this.props)
  }
}

export default InstanceBaseInfo
