import { takeLatest } from '@ali/wind-effect-creator'
import * as constants from './constants'
import * as services from './services'

const initialState = {
  InstanceId: null,
  InstanceName: '',
  Address: '',
  CreateTime: null,
  Status: 0,
  Query: {},
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
    updateQuery(state, action) {
      const { payload = {} } = action
      return {
        ...state,
        Query: {
          ...state.Query,
          ...payload,
        },
      }
    },
  },
  effects: {
    fetch: takeLatest(function* ({ payload }, { call, put }) {
      const result = yield call(services.getInstance, payload)
      yield put({
        type: 'dump',
        payload: result,
      })
    }),

    * create({ payload }, { call }) {
      yield call(services.createInstance, payload)
    },

    * delete({ payload }, { call }) {
      yield call(services.deleteInstances, payload)
    },
  },
  subscriptions: {},
}
