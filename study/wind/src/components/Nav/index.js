import React from 'react'
import intl from '@ali/wind-intl'
import RoutableMenu from '@ali/wind-rc-console-menu/lib/RoutableMenu'
import './index.less'

const items = [
  {
    key: '/instance',
    label: intl('ui.menu.instance.title'),
    to: '/instance',
  },
  {
    key: '/monitor',
    label: intl('ui.menu.monitor.title'),
    to: '/monitor',
  },
]

const Nav = () => (
  <RoutableMenu
    header="Aliyun Wind"
    items={items}
  />
)

export default Nav
