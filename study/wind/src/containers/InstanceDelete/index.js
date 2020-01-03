import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import intl from '@ali/wind-intl'
import { Dialog, Button } from '@ali/wind'
import { actions } from '../../models/instanceInfo'

const mapStateToProps = state => ({
  loading: actions.delete.isLoading(state),
})

const mapDispatchToProps = dispatch => ({
  onDelete(id) {
    return dispatch(actions.delete({
      InstanceId: id,
    }))
  },
})

@connect(mapStateToProps, mapDispatchToProps)
class InstanceDelete extends Component {
  static propTypes = {
    id: PropTypes.string,
    loading: PropTypes.bool,
    onDelete: PropTypes.func,
    onSuccess: PropTypes.func,
    onClose: PropTypes.func,
  }

  state = {
    visible: true,
    needReload: false,
  }

  onOk = () => {
    const { onDelete, id } = this.props
    onDelete(id).then(() => {
      this.setState({
        visible: false,
        needReload: true,
      })
    })
  }

  onClose = () => {
    this.setState({ visible: false })
  }

  getFooterButtons() {
    const { loading, id } = this.props
    return [
      <Button
        key={`btn-ok-delete-${id}`}
        type="primary"
        loading={loading}
        onClick={this.onOk}
      >
        {intl('ui.button.ok')}
      </Button>,
      <Button
        key={`btn-cancel-delete-${id}`}
        onClick={this.onClose}
      >
        {intl('ui.button.cancel')}
      </Button>,
    ]
  }

  afterClose = () => {
    const { needReload } = this.state
    const { onSuccess, onClose } = this.props
    if (needReload) {
      onSuccess()
    } else {
      onClose()
    }
  }

  render() {
    const { id } = this.props
    return id ? (
      <Dialog
        visible={this.state.visible}
        title={intl('instance.action.release.title')}
        style={{ width: '500px' }}
        footer={this.getFooterButtons()}
        onClose={this.onClose}
        afterClose={this.afterClose}
      >
        <p>{intl('instance.action.release.confirm', { id })}</p>
      </Dialog>
    ) : null
  }
}

export default InstanceDelete
