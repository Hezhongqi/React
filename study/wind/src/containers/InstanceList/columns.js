import React from 'react';
import intl from '@ali/wind-intl';
import Actions, { LinkButton } from '@ali/wind-rc-actions';
import Link from '@ali/wind-rc-link';
import { Route } from 'dva/router';
import { Context } from '@ali/wind-rc-region';
import DateTime from '@ali/wind-rc-datetime';
import InstanceStatus from '../../components/InstanceStatus';
import { Status } from '../../components/InstanceStatus/constants';

const isInstanceDisabled = item => item.Status === Status.DISABLED;

const isMutationOperationDisabled =
  item => isInstanceDisabled(item) || item.Status === Status.STOPPED;

export default [
  {
    key: 'instanceName',
    title: intl('instance.prop.name.label'),
    dataIndex: 'InstanceName',
    cell: (value, index, record) => (
      <Link to={`item/${record.InstanceId}`} relative>
        {value}
      </Link>
    ),
  },
  {
    key: 'instanceIp',
    title: intl('instance.prop.address.label'),
    dataIndex: 'Address',
  },
  {
    key: 'createTime',
    title: intl('instance.prop.create_time.label'),
    dataIndex: 'CreateTime',
    cell: value => <DateTime value={value} />,
  },
  {
    key: 'status',
    title: intl('instance.prop.status.label'),
    dataIndex: 'Status',
    cell: value => <InstanceStatus value={value} />,
  },
  {
    key: 'operator',
    title: intl('ui.table.column.operator.title'),
    dataIndex: 'InstanceId',
    cell: (value, index, record) => (
      <Context.Consumer>
        {({ activeId }) => (
          <Route
            render={({ history }) => (
              <Actions>
                <LinkButton
                  onClick={() => {
                    history.push(`/instance/${activeId}/item/${value}`);
                  }}
                  disabled={isInstanceDisabled(record)}
                >
                  {intl('ui.table.column.operator.detail')}
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    history.push(`/instance/${activeId}/edit/${value}`);
                  }}
                  disabled={isInstanceDisabled(record)}
                >
                  {intl('ui.table.column.operator.edit')}
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    history.push(`/instance/${activeId}/item/${value}`);
                  }}
                  disabled={isMutationOperationDisabled(record)}
                >
                  {intl('ui.table.column.operator.manage')}
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    history.push(value);
                  }}
                  disabled={isMutationOperationDisabled(record)}
                >
                  {intl('ui.table.column.operator.pause')}
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    history.push(`/instance/${activeId}/delete/${value}`);
                  }}
                >
                  {intl('ui.table.column.operator.release')}
                </LinkButton>
              </Actions>
            )}
          />
        )}
      </Context.Consumer>
    ),
  },
];
