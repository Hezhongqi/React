import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select } from '@ali/wind'
import intl from '@ali/wind-intl'
import SlidePanel from '@ali/wind-rc-slide-panel'
import { createForm } from 'rc-form'
import InstanceData from '../InstanceData'
import address from './address'

class InstanceEdit extends Component {
  static propTypes = {
    id: PropTypes.string,
    form: PropTypes.objectOf(PropTypes.any),
    // eslint-disable-next-line react/no-unused-prop-types
    onSuccess: PropTypes.func,
    onClose: PropTypes.func,
  }

  getFooterButtons(dataProps) {
    const { form, onSuccess, onClose } = this.props
    return [
      {
        text: intl('ui.button.ok'),
        onClick: () => {
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            dataProps
              .create(values)
              .then(onSuccess)
          })
        },
        options: {
          type: 'primary',
          disabled: (
            dataProps.isFetchLoading ||
            this.hasErrors()
          ),
          loading: dataProps.isCreateLoading,
        },
      },
      {
        text: intl('ui.button.cancel'),
        onClick: onClose,
      },
    ]
  }

  hasErrors() {
    const { form: { getFieldsError } } = this.props
    const fieldsError = getFieldsError()
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  renderForm = this.renderForm.bind(this)

  renderForm(props) {
    const { data } = props
    const {
      id,
      form: {
        getFieldDecorator,
        getFieldError,
      },
      onClose,
    } = this.props
    const exactAddressDataSource = (id && data.Address) ?
      [{ value: data.Address, label: data.Address }].concat(address) :
      address

    const instanceNameError = getFieldError('InstanceName')

    return (
      <SlidePanel autoClose={false}>
        <SlidePanel.Item
          visible
          title={
            id ?
              intl('instance.action.edit.title') :
              intl('instance.action.create.title')
          }
          footerButtons={this.getFooterButtons(props)}
          onClose={onClose}
        >
          <Form
            labelAlign="top"
          >
            <Form.Item
              label={intl('instance.prop.name.label')}
              validateState={instanceNameError ? 'error' : 'success'}
              help={instanceNameError}
            >
              {
                getFieldDecorator('InstanceName', {
                  initialValue: data.InstanceName,
                  rules: [
                    {
                      required: true,
                      message: intl('instance.form.edit.name.error.required'),
                    },
                  ],
                })(
                  <Input />
                )
              }
            </Form.Item>
            <Form.Item
              label={intl('instance.prop.address.label')}
            >
              {
                getFieldDecorator('Address', {
                  initialValue: data.Address,
                })(
                  <Select
                    style={{ width: '100%' }}
                    dataSource={exactAddressDataSource}
                  />
                )
              }
            </Form.Item>
          </Form>
        </SlidePanel.Item>
      </SlidePanel>
    )
  }

  render() {
    return (
      <InstanceData
        id={this.props.id}
        form={this.props.form}
        render={this.renderForm}
      />
    )
  }
}

export default createForm()(InstanceEdit)
