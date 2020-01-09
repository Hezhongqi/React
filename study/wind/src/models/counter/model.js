import * as constants from './constants'
import { getValue } from "./selectors";
import {sync} from "./services";
//设计原则 上的错误
const getValueFromStorage = (key, defaultValue) => {
  const counterValue = localStorage.getItem(key)
  return counterValue ? JSON.parse(counterValue) : defaultValue
};
const setValueToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
};
//一个相对持久化的状态存储（value），用以保存计数
const initialState = {
  //value:0,
  value: getValueFromStorage('counterValue',0)
};

export default {
  namespace: constants.NAMESPACE,
  state: initialState,
/*
  在默认 model 中，提供了 dump 和 reset 两个 reducer 接口，分别用于同步数据和重置数据
  reducer 应当是一个 纯函数
*/
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
    //增加计数
    inc (state) {
      const incResult =state.value + 1;
      //这个导致非纯函数，
      //虽然不会影响程序的运行，但是会导致该 reducer 无法预测，可能引发不可预知的边界问题，不利于单元测试
      //setValueToStorage('counterValue',incResult)
      return {
        ...state,
        //保证纯函数，新增一个对象
        //value:state.value +1
        value:incResult
      }
    }
  },
  //持久化存储,通过 localStorage 持久化计数器
  /**
   * model 用来描述应用中数据状态，数据变化和业务流程，同步的数据状态变化应当由 reducer 负责；
   * 处理异步操作 ，组织业务逻辑和流程，带有副作用 (Side-Effects) 的操作，则应当交由 effect 负责
   */
  effects: {
    //persistentInc() 来处理应用中的副作用
    //每个 effect 可以是一个 Generator，或是一个包含 Generator
    // 和 saga-helper 的数组 [effect: Generator, helper: string]，
    // Generator 函数的参数分别为 action 和 effect，
    // 其中 action 指的是当前触发该 effect 的 action，
    // effect 是 Redux-Saga 的 effect 创建器，用于创建一个 effect 声明
    /**
     * 常用的创建器包括
     • put 创建一个 Effect 描述信息，发起一个 action。 这个 effect 是非阻塞型的，并且所有向下游抛出的错误（例如在 reducer 中），都不会冒泡回到 saga 当中
     • put.resolve 类似 put，但 effect 是阻塞型的（如果从 dispatch 返回了 promise，它将会等待其结果），并且会从下游冒泡错误。当发起一个 effect 类型的 action 时，多数情况下需要使用 put.resolve
     • call 创建一个 Effect 描述信息，用来命令 middleware 以参数 args 调用函数 fn。所有异步函数，Promise，Observable 或是包含副作用的函数，都应该使用 call 来声明调用
     • take 创建一个 Effect 描述信息，用来命令 middleware 在 Store 上等待指定的 action
     • select 创建一个 Effect 描述信息，用来命令 middleware 在当前 Store 的 state 上调用指定的选择器（即返回 selector(getState(), ...args) 的结果）
     * @param action
     * @param effect
     * @returns {Generator<*, void, ?>}
     */
    *persistenInc (action, effect) {
      const {call, put, select} = effect
      yield put({type: 'inc'})
      const currentValue = yield select(getValue)
      yield call(setValueToStorage,'counterValue',currentValue)
      //注意到我们使用了 call 来调用异步函数
      //这两种写法在 一定程度 上是一致的，无论使用哪种写法，effect 处理器都会最终调用 sync() 并等待其完成
      //call
      const  result = yield  call(sync,currentValue)
      //函数形式
      //yield sync(currentValue)
      /**
       * 区别：
       * yield call(sync, ...args) 只会返回一个 effect 描述对象（可以看做是发射一个信号），用于告知处理器接下来要做的事情，本身并不执行函数体，函数体的执行是由处理器来对其进行调度，返回最终结果
       * yield sync(...args) 会立即执行函数体，并返回 Promise 对象，处理器根据这个返回的 Promise 对象执行调度，并返回最终结果
       */
      console.log(result)
    },
  },

}
