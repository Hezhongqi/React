import React,{ Suspense  } from "react";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import  routes from './routes/router';

function Main() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Switch>
                    {
                        //遍历配置文件，生成路由列表
                        routes.map((route,index)=>{
                            return(
                                //路由配置中的全部属性作为Route的属性
                                <Route key={index} {...route}/>
                            )
                        })
                    }
                    {/*根路径重定向到 /Index*/}
                    <Redirect from='/' to='/Index'></Redirect>
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}
export default Main
/*
class Main extends Component{
    render() {
        return(
            <BrowserRouter>

                <Route path="/" component={}></Route>
            </BrowserRouter>
        )

    }

}*/
