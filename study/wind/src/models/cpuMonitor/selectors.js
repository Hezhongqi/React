import { createSelector } from 'reselect' // eslint-disable-line
import * as cons from './constants'

export const getState = (state) => state[cons.NAMESPACE] //eslint-disable-line

export const getData = createSelector(
  getState,
  state => ({
    series: state.series,
    categories: state.categories,
  })
)
