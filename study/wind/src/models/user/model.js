import * as constants from './constants'
import {get,create,update} from "./services";

const initialState = {
  id:null,
  username:null
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
    *get({payload},{call,put}) {
      const { id } = payload
      const result = yield call(get,id)
      yield put({
        type:'dump',
        payload:result
      })
    },
    *create({payload},{call}) {
      yield call(create,payload)
    },
    * update({ payload }, { call }) {
      yield call(update, payload)
    },

  },
}
