import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withProps } from 'recompose'
import intl from '@ali/wind-intl'
import Table from '@ali/wind-rc-table'
import Link from '@ali/wind-rc-link'
import { Context } from '@ali/wind-rc-region'
import { actions, selectors } from '../../models/instanceList'
import columnsConfig from './columns'
import searchConfig from './search'

const mapStateToProps = state => ({
  dataSource: selectors.getDataSource(state),
  page: selectors.getPage(state),
  query: selectors.getQueryWithRegionId(state),
  loading: actions.fetch.isLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetch(query = {}) {
    dispatch(actions.fetch(query))
  },
  onRefresh(query = {}) {
    dispatch(actions.updateQuery(query))
  },
  onPageChange(pageNumber) {
    const data = { PageNumber: pageNumber }
    dispatch(actions.dump(data))
    dispatch(actions.updateQuery(data))
  },
  onPageSizeChange(pageSize) {
    dispatch(actions.updateQuery({
      PageNumber: 1,
      PageSize: pageSize,
    }))
  },
  onSearch(value, filterValue) {
    dispatch(actions.updateQuery({
      PageNumber: 1,
      [filterValue]: value,
    }))
  },
})

const withPagination = paginationProps => withProps((ownerProps) => {
  const { page, onPageChange, onPageSizeChange } = ownerProps
  if (page || paginationProps) {
    return {
      pagination: {
        ...paginationProps,
        ...page,
        onChange: onPageChange,
        onPageSizeChange,
      },
    }
  }
})

const withSearch = searchProps => withProps((ownerProps) => {
  const { search, onSearch } = ownerProps
  if (search || searchProps) {
    return {
      search: {
        ...searchProps,
        ...search,
        onSearch,
      },
    }
  }
})

const withOperation = withProps((ownerProps) => {
  const { operation: propsOperation } = ownerProps
  return {
    operation: (
      propsOperation ||
      (
        <Context.Consumer>
          {
            ({ activeId }) => (
              <Link
                to={`/instance/${activeId}/create`}
                shape="button"
                type="primary"
              >
                {intl('instance.action.create.title')}
              </Link>
            )
          }
        </Context.Consumer>
      )
    ),
  }
})

@connect(mapStateToProps, mapDispatchToProps)
@withPagination()
@withSearch(searchConfig)
@withOperation
class InstanceList extends Component {
  static propTypes = {
    fetch: PropTypes.func,
    query: PropTypes.objectOf(PropTypes.any),
    loading: PropTypes.bool,
    dataSource: PropTypes.arrayOf(PropTypes.object),
    pagination: PropTypes.objectOf(PropTypes.any),
    search: PropTypes.objectOf(PropTypes.any),
    operation: PropTypes.node,
  }

  componentDidMount() {
    const { fetch, query } = this.props
    fetch(query)
  }

  componentDidUpdate(prevProps) {
    const { fetch, query } = this.props
    if (prevProps.query !== query) {
      fetch(query)
    }
  }

  render() {
    return (
      <Table
        loading={this.props.loading}
        columns={columnsConfig}
        dataSource={this.props.dataSource}
        pagination={this.props.pagination}
        search={this.props.search}
        operation={this.props.operation}
      />
    )
  }
}

export default InstanceList
