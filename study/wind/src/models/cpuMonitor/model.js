import { takeLatest } from '@ali/wind-effect-creator'
import * as constants from './constants'
import * as services from './services'

const initialState = {
  categories: [],
  series: [],
}

export default {
  namespace: constants.NAMESPACE,
  state: initialState,
  reducers: {
    dump(state, action) {
      const { payload = {} } = action
      return {
        ...state,
        ...payload,
      }
    },
    reset(state, action) {
      const { payload = {} } = action
      return {
        ...state,
        ...initialState,
        ...payload,
      }
    },
  },
  effects: {
    fetch: takeLatest(function* ({ payload }, { call, put }) {
      const result = yield call(services.getData, payload)
      yield put({
        type: 'dump',
        payload: {
          ...result,
        },
      })
    }),
  },
  subscriptions: {},
}
