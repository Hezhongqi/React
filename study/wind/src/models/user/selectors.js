import { createSelector } from 'reselect' // eslint-disable-line
import * as cons from './constants'

export const getState = state => state[cons.NAMESPACE] //eslint-disable-line
export const  getId = createSelector(getState,state=>state.id);
export const getUsername = createSelector(getState,state=>state.username)