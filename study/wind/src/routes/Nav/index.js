import React from "react";
import { NavLink } from 'dva/router'
import './index.less'
const Nav = () => (
    <div className="app-nav">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink  to="/list" >List</NavLink>
    </div>
);
export default Nav