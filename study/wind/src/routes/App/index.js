//<Router> 的子组件拆分为一个单独的模块，方便我们后续进行修改
import React from 'react';
import { Route, Switch, Redirect } from 'dva/router';
import Header from "../Header";
import Home from "../Home";
import List from "../Hzq/List";
import Detail from "../Hzq/Detail";
import NotFound from "../NotFound";
import Footer from "../Footer";
import LoginRoute from "../LoginRoute";
import Login, { Logout } from '../Login'

//在路由中，你可以使用参数来描述或约束组件的行为
const App = () =>(
    <div>
      <Route component={Header}/>
      <Switch>
          <LoginRoute exact path ="list" component={List} />
          <LoginRoute exact path ="/detail/:id?" component={Detail} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          {/*使用 component 属性代替了 render 属性*/}
          <Route exact path="/" component={Home}/>
{/*
          <Route exact path="/list" component={List}/>
*/}
          {/*<Route exact path="/detail" component={Detail}/>*/}
          {/*在 path 属性中增加参数表达式 :id ，路由命中后会将 id 这个参数传递给 Detail ，可以在 Detail 的 match 属性中访问到这个参数*/}
          {/*:id 参数变为可选参数*/}
          <Route exact path="/detail/:id?" component={Detail}/>
          <Route exact path="/404" component={NotFound}/>
        {/*<Route
            exact
            path="/"
            render={()=>(<div>Hello World</div>)}
        />
        <Route
            exact
            path="/list"
            render={() => (<div>List</div>)}
        />
        <Route
            exact
            path="/detail"
            render={() => (<div>detail</div>)}
        />
        <Route
            path="/404"
            render={() => (<div>404 Not Found</div>)}
        />*/}
        <Redirect to="/404"/>
      </Switch>
        <Footer/>
{/*
      <footer>Footer</footer>
*/}
    </div>
);
export default App







/*import React from 'react'
import { Switch, Route, Redirect } from 'dva/router'
import AppLayout from '@ali/wind-rc-app-layout'
import Nav from '../../components/Nav'
import Instance from '../Instance'
import Monitor from '../Monitor'

const App = () => (
  <AppLayout
    nav={<Nav />}
  >
    <Switch>
      <Route path="/instance" component={Instance} />
      <Route path="/monitor" component={Monitor} />
      <Redirect to="/instance" />
    </Switch>
  </AppLayout>
)

export default App*/
