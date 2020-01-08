/**
 * 应用的中枢，负责声明和调配应用所需的资源
 */
import { hot } from 'react-hot-loader'
// dva 首先是一个基于 redux 和 redux-saga 的数据流方案
import dva from 'dva'
import createLoading from 'dva-loading'
import createBrowserHistory from 'history/createBrowserHistory'
import { withProvider } from '@ali/wind-intl'
import { register } from '@ali/wind-rc-region'
import Router from './routes'
import instanceList from './models/instanceList'
import instanceInfo from './models/instanceInfo'
import cpuMonitor from './models/cpuMonitor'
import './styles/index.less'
//默认情况下，Wind 会创建一个使用 browserHistory 的 dva 实例
// 生产环境中，你可能需要对应用服务做一些配置，让其支持 browserHistory
const app = dva({
  history: createBrowserHistory(),
});
/*************************************部署插件Start**************************************/
//部署插件,app.use() API 快速地注册这些业务行为并进行使用
//地域组件 wind-rc-region 、风控组件 wind-rc-risk等
app.use(createLoading());
app.use(register(app));
/*************************************部署插件End****************************************/

/***********************************部署数据模型Start*************************************/
//部署数据模型,app.model() API，可以将数据模型部署在应用中
app.model(instanceList);
app.model(instanceInfo);
app.model(cpuMonitor);
/***********************************部署数据模型End***************************************/

/*************************************部署路由Start**************************************/
//React-Router@4.x 作为基础的路由系统
//路由的入口文件在 src/routes/index.js ，通过 app.router 将路由部署在应用中
app.router(Router);
/*************************************部署路由End****************************************/


/*************************************优化开发Start**************************************/
/**
 * hot
 * 启动应用并返回一个 React 组件
 * 使用了 react-hot-loader 优化开发时的体验，你可以不必每次改变代码之后都刷新页面
 */
const OriginApp = withProvider()(app.start())
const App = process.env.NODE_ENV === 'development' ?
    hot(module)(OriginApp) :
    OriginApp
/*************************************优化开发End****************************************/

export default App
