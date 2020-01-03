import React ,{ Component } from 'react';
//webpackchunkname:Home
const Home = React.lazy(()=>import('../pages/home/Home'));
const Dashboard = React.lazy(()=>import('../pages/dashboard/Dashboard' ));
//路由组件则采用react提供的react.lazy方法进行路由懒加载，降低首屏渲染的时间
//react.lazy需要和Suspense组件配套使用,如下，用Suspense组件包裹根组件，fallback是过渡组件，必传
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/dashboard',
        component:Dashboard
    }
]


/*
import { Route, Switch } from 'react-router-dom';
*/
/*
import App from './../App'
*/
/**
 *路由文件配置,Router 配置
 */
/*const  router = () =>(
    <div>
        <Switch>
            <Route
                path="/"
                render ={props =>(
                    <App>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/test" component={Test} />
                            <Route path="/message/:id" component={Message} />
                            {/!*路由不正确时，默认跳回home页面*!/}
                            <Route render={() => "路由不正确"} />
                        </Switch>
                    </App>
                )} />
        </Switch>
    </div>
);*/
/*
export default router*/
