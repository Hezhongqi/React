import { takeLatest } from '@ali/wind-effect-creator'
import * as constants from './constants'
import * as services from './services'

const initialState = {
  DataSource: [],
  Query: {},
  ColumnStatus: {
    createTime: 0,
  },
  TotalCount: 0,
  PageSize: 10,
  PageNumber: 1,
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
      const {
        List,
        PageNumber,
        PageSize,
        TotalCount,
      } = yield call(services.describeInstances, payload)

      yield put({
        type: 'dump',
        payload: {
          DataSource: List,
          PageNumber,
          PageSize,
          TotalCount,
        },
      })
    }),
  },
  subscriptions: {},
}
