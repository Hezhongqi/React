import React, { Component } from 'react'
import intl from '@ali/wind-intl'
import Page from '@ali/wind-rc-page'
import CpuMonitor from '../../containers/CpuMonitor'

class Monitor extends Component {
  render() {
    return (
      <Page>
        <Page.Header title={intl('ui.menu.monitor.title')} />
        <Page.Content>
          <CpuMonitor />
        </Page.Content>
      </Page>
    )
  }
}

export default Monitor
