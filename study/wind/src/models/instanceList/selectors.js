import { createSelector } from 'reselect' // eslint-disable-line
import { getActiveId } from '@ali/wind-rc-region'
import * as cons from './constants'

export const getState = (state) => state[cons.NAMESPACE] //eslint-disable-line

export const getDataSource = createSelector(
  getState,
  state => state.DataSource
)

export const getPage = createSelector(
  getState,
  state => ({
    current: state.PageNumber,
    pageSize: state.PageSize,
    total: state.TotalCount,
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

export const getColumnStatus = createSelector(
  getState,
  state => state.ColumnStatus
)
