import React, { Component } from 'react'
import { Route, Redirect } from 'dva/router'
import Login from '../Login'
const LoginRoute = ({component:Component,...restProps}) =>(
    <Route
        {...restProps}
        render={
            props => (
                Login.hasLogin()?
                    (<Component {...props}/>):
                    (
                        <Redirect
                            to={{
                                pathname:'/login',
                                state:{
                                    refer:props.location
                                },
                            }}
                        />
                    )
            )
        }
    />
);
export default LoginRoute