//直接引入css等，借助webpack
//1.引入依赖,采用ES6语法  ====>babel编译
import React from 'react'
//2.新建一个类，继承
class Welcome extends React.Component{
    render() {
        //实现列表方法
        const todoList = ['a','b','c'];
        const isLogin = true;
        const test = <h1> test </h1>;
        console.log(test);
        //原始写法
        /*return React.createElement("h1", {
            className: "test"
        }, "a1", React.createElement("span", {
            className: "tets1"
        }, " a2"));*/
        return (
            //<!--严格的格式-->JSX=====>可以不用{}
            <div className="this" htmlFor="">
                <h1>hello react</h1>
                {'dsdsds'}<br/>
                {12+32}<br/>
                {[1,2,3]}
                <ul>
                    {
                        todoList.map(item =>
                            <li>{item}</li>
                        )
                    }
                </ul>
                {isLogin ? <p>true</p> : <p>false</p>}
            </div>

        )
    }
}
//3.导出整个类
export default Welcome