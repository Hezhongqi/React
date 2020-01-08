import React from 'react'
import PropTypes from 'prop-types'
/*
import { Router,Route,Switch,Redirect } from 'dva/router'
*/
import { Router } from  'dva/router'
//报错信息：Uncaught Error: A <Router> may have only one child element
/**
 * 在 React Router 4 里，<Router> 只接受一个 node 作为子组件，
 * 这与 v3 版本的设计 完全不同（类似的改变还有 <Route> 组件，稍后我们详细讲解有关路由嵌套的部分），
 * 我们需要对我们的代码做一些改变，用一个 <div> 节点包裹所有的 <Route> 节点
 */
//
/**
 * @param history
 * @returns {*}
 * @constructor
 */
import App from './App'
const AppRouter = ({ history }) =>(
    <Router history={history}>
        {/*Router只允许只有一个node,需要<div>*/}
        <App/>

    </Router>
);

//迁移至组件内
//<div>
//             {/*引入 <Switch> 组件减少匹配的执行次数*/}
//             {/*路由匹配将使用短路策略*/}
//             <Switch>
//                 <Route
//                     exact
//                     path="/"
//                     render={()=>(<div>Hello World</div>)}
//                 />
//                 <Route
//                     exact
//                     path="/list"
//                     render={() => (<div>List</div>)}
//                 />
//                 <Route
//                     exact
//                     path="/detail"
//                     render={() => (<div>detail</div>)}
//                 />
//                 {/*一个不带 path 属性的 <Route>,如果之前的路由匹配均未命中，则渲染 404 页面*/}
//                 {/*<Route
//                     render={() => (<div>404 Not Found</div>)}
//                 />*/}
//                 <Route
//                     path="/404"
//                     render={() => (<div>404 Not Found</div>)}
//                 />
//                 {/*所有不符合路由表规则的路径，重定向到*/}
//                 <Redirect to="/404"/>
//             </Switch>
//         </div>
AppRouter.propTypes = {
    //无论任何 path （/，/anyroute，/any/route）
    //都会输出 Hello world 。这是由于 React Route 4 的 不完全匹配 特性导致的
    //exact 属性对于匹配规则的差异
    history: PropTypes.objectOf(PropTypes.any),
};
export default AppRouter
/*
import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route } from 'dva/router'
import App from './App'

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
)

AppRouter.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}

export default AppRouter
*/
