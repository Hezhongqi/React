import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import intl from '@ali/wind-intl'
import { AreaStackChart } from '@ali/dongs-chart'
import { selectors, actions } from '../../models/cpuMonitor'
import ChartInfoBlock from '../../components/ChartInfoBlock'

const mapStateToProps = state => ({
  data: selectors.getData(state),
  loading: actions.fetch.isLoading(state),
})

const mapDispatchToProps = dispatch => ({
  onReload() {
    dispatch(actions.fetch({}))
  },
})

@connect(mapStateToProps, mapDispatchToProps)
class CpuMonitor extends Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any),
    loading: PropTypes.bool,
    onReload: PropTypes.func,
  }

  componentDidMount() {
    this.props.onReload()
  }

  render() {
    const { data, loading } = this.props
    return (
      <ChartInfoBlock
        title={intl('monitor.cpu.title')}
        loading={loading}
      >
        {loading ? null : <AreaStackChart data={data} />}
      </ChartInfoBlock>
    )
  }
}

export default CpuMonitor
