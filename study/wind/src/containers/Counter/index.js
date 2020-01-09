// eslint react/prefer-stateless-function: "off"
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import './index.scoped.less'
import {Button} from '@ali/wind'
import { selectors,actions } from  '../../models/counter'
import { inc } from '../../models/counter/custom-actions'
//将数据模型中定义的状态和接口映射到组件的属性上
//有一段丑陋的代码
/**
 * 性能开销
    每一次对 value 的访问，都不可避免地对 state 对象进行访问，层级嵌套越深，访问的开销也就越大
 * 维护成本高
    • 假设 counter.value 会被 n 个容器组件所使用
    • 需求变化，需要在应用中维护另一个计数器，两个计数器之间互不影响
 * 引入了reselect
     • 以函数的方式进行接口声明，对数据状态进行访问
     • 利用函数缓存的特性，减少访问带来的性能开销（借助 Immutable 还可以进一步减少访问性能开销，并减少组件渲染中不必要的更新，目前 Wind 暂时没有支持 state 的 Immutable 化，我们在近期会推出 Immutable 的解决方案）
     • 计算衍生的数据和状态，减少不必要的 state 定义
     • 每一个 Selector 可以作为另一个 Selector 的输入，组合成为新的 Selector
 */
/*const mapStateToProps = state => ({
  value:state['@counter'].value
})*/
const  mapStateToProps = state =>({
      value:selectors.getValue(state),
    }
);
/**
 * 存在的复用性低的代码
 * Redux 中的 action 是一个对象描述，type 描述了 action 的类型，
 * dispatch(action) 会执行所有已经注册的 reducer ，
 * 每一个 reducer 通过当前传入的 action.type 执行既定的逻辑和更新策略（在 dva 中，
 * 所有在 model 上声明的 reducers 和 effects
 * 都会被自动注册一个与其对应的关注 action.type={namespace}/{(reducer|effect)name} 的 reducer ）
 * 我们使用 Flux Standard Action 作为 action 的标准定义，所有的 action 的派发都必须遵从 FSA 定义
 * @param dispatch
 * @returns {{onIncreate(): void}}
 */
/**
 * dispatch({
      type: '@namespace/reducer',
      payload: {
        field: value,
      },
      })
 * @param dispatch
 * @returns {{onIncreate(): void}}
 */
const mapDispatchToProps = dispatch => ({
  onIncreate() {
      //持久化
      dispatch(actions.persistenInc())
    //框架自带:
    //dispatch(actions.inc())
    //优化1：
    //dispatch(inc())
    /*dispatch({
      type: '@counter/inc',
    })*/
  }
})
//高阶组件 connect 将 counter 的 value 和 inc 映射到 <Counter> 的属性中，
// 并且借助 componentDidMount 生命周期方法，在组件加载后，会将这两个属性打印到浏览器控制台上，便于你进行观察
@connect(mapStateToProps, mapDispatchToProps)
class Counter extends Component {
  static propTypes = {
    value:PropTypes.number,
    onIncreate:PropTypes.func,
  }

  static defaultProps = {}

  // avoid using state as much as possible
  state = {}
  componentDidMount() {
    const { value,onIncreate } = this.props
    console.log(value)
    console.log(onIncreate)
  }

  render() {
    return (
      <div>
        <h1>Counter:{this.props.value}</h1>
        <Button onClick={this.props.onIncreate}>增加</Button>
      </div>
    )
  }
}

export default Counter
