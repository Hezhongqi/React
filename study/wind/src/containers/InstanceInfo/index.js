import React, { Component } from 'react'
import PropTypes from 'prop-types'
import intl from '@ali/wind-intl'
import Info from '@ali/wind-rc-info'
import DataFields from '@ali/wind-rc-data-fields'
import DateTime from '@ali/wind-rc-datetime'
import InstanceStatus from '../../components/InstanceStatus'
import InstanceData from '../InstanceData'

const fieldItems = [
  {
    dataIndex: 'InstanceId',
    label: intl('instance.prop.id.label'),
  },
  {
    dataIndex: 'InstanceName',
    label: intl('instance.prop.name.label'),
  },
  {
    dataIndex: 'Address',
    label: intl('instance.prop.address.label'),
  },
  {
    dataIndex: 'CreateTime',
    label: intl('instance.prop.create_time.label'),
    render: value => (<DateTime value={value} />),
  },
  {
    dataIndex: 'Status',
    label: intl('instance.prop.status.label'),
    render: value => (<InstanceStatus value={value} />),
  },
]

class InstanceBaseInfo extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  renderInfo = this.renderInfo.bind(this)

  renderInfo(props) {
    const { data } = props
    return (
      <Info
        title={intl('instance.info.base.title')}
      >
        <DataFields
          items={fieldItems}
          dataSource={data}
        />
      </Info>
    )
  }

  render() {
    return (
      <InstanceData
        id={this.props.id}
        render={this.renderInfo}
      />
    )
  }
}

export default InstanceBaseInfo
