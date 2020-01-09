//Wind 提供了一个工厂函数帮你自动生成每个 model 所需的 actionCreator
import createActions from '@ali/wind-action-creator'
import model from './model'

// 通过 createActions 工厂可以创建一个包含 reducers 和 effects 的 action creator
// 例如一个 model 中的声明定义如下:
// const model = {
//   ...
//   reducers: { reducerA, reducerB },
//   effects: { effectA, effectB, effectC },
//   ...
// }
// 将该 model 传入 createActions 可以创建和 reducer 和 effect 对应的 action creator:
// 每一个 action creator 都是一个函数, 可以表达为
// ActionCreator: (payload: any): FluxStandardAction
// 你可以在 dispatch 的时候直接调用这些 action creator, 如:
// dispatch(actions.reducerA({ name: 'test' }))
// dispatch(actions.effectA({ name: 'test' }))
// 另外, wind 集成了 dva-loading, 为了方便读取 loading state,
// 对于 effect , 除了会返回对应的 action creator 之外, 还会在该 action creator 上附加
// 对于该 effect 的 loading state selector:
// const mapStateToProps = state => ({
//   isEffectALoading: actions.effectA.isLoading(state),
// })

/**
 * 通过 createActions 工厂可以创建一个包含对应 model 中定义的 reducers 和 effects 的 actionCreator 集合，
 * 每一个 actionCreator 都是一个 纯函数 ，
 * 接收可选的 payload 和 meta 参数（推荐使用 object 描述 payload 和 meta ，
 * 为程序提供可延展性），返回一个 FSA 标准的 action 对象
 */
export default createActions(model)
