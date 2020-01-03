import intl from '@ali/wind-intl'

export default {
  filter: [
    {
      label: intl('instance.prop.id.label'),
      value: 'InstanceId',
    },
    {
      label: intl('instance.prop.name.label'),
      value: 'InstanceName',
    },
  ],
  defaultFilterValue: 'InstanceId',
  placeholder: '',
}
