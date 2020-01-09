
/*
我们又可以使用函数来封装对于 action 的生成接口，这个函数称之为 actionCreator
在 dispatch 的时候使用 actionCreator 代替字面量声明
*/
import { NAMESPACE } from './constants'

export const inc = () => ({
    type: `${NAMESPACE}/inc`,
})