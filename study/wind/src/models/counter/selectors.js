//Selector 完成了对数据状态访问的改造
import { createSelector } from 'reselect' // eslint-disable-line
import * as cons from './constants'

export const getState = state => state[cons.NAMESPACE] //eslint-disable-line
//们在这个模块的基础上，实现对 value 读取的 Selector
/**
 * createSelector 用来创建一个拥有缓存的 Selector，
 * 它的参数包括若干输入 selectors 和一个组合函数 combiner，
 * 并将输入 selectors 的返回值作为参数传递给 combiner，
 * 由 transformer 返回最终的结果。同 reducer 一样，
 * Selector 和 Combiner 也应当是 纯函数
 * @type {OutputSelector<unknown, unknown, (res: unknown) => unknown>}
 */

export const getValue = createSelector(
    getState,
    state =>state.value
)