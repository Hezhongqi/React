/**
 *  加载应用相关的模块
 *  将应用组件渲染到指定的 DOM 节点
 *  整个入口文件的代码非常少，一般情况下，你不需要对这些代码做出改变
 */
import React from 'react'
import { render } from 'react-dom'
import './initializer'
import App from './app'

render(
    <App />,
    document.getElementById('app')
);
