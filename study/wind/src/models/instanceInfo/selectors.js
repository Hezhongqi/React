import { createSelector } from 'reselect' // eslint-disable-line
import { getActiveId } from '@ali/wind-rc-region'
import * as cons from './constants'

export const getState = (state) => state[cons.NAMESPACE] //eslint-disable-line

export const getInstanceId = createSelector(
  getState,
  state => state.InstanceId,
)

export const getData = createSelector(
  getState,
  state => ({
    InstanceId: state.InstanceId,
    InstanceName: state.InstanceName,
    Address: state.Address,
    CreateTime: state.CreateTime,
    Status: state.Status,
  })
)

export const getQuery = createSelector(
  getState,
  state => state.Query
)

export const getQueryWithRegionId = createSelector(
  getQuery,
  getActiveId,
  (query, regionId) => ({
    RegionId: regionId,
    ...query,
  })
)
