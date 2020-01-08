import React from 'react'
import Nav from "../Nav";
import { Route, Switch } from 'dva/router'

const Header = () => (
    <header>
        <h1>AppName</h1>
        {/*在 /404 路径下，不要显示导航栏。在这里，我们借助 <Switch> 和 <Route> 来根据当前的路径判断是否显示 Nav*/}
        <Switch>
            <Route path="/404" render={() => null} />
            <Route component={Nav}/>
        </Switch>
        {/*<Nav/>*/}
    </header>
);

export default Header