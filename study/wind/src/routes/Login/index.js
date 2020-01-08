import React from "react";
import PropTypes from 'prop-types';
import { Input,Button,Form } from '@ali/wind';
import { Redirect } from 'dva/router';

const LOGIN_STORAGE_KEY = 'loginState';
const Logout = () =>{
    Login.logout();
    return (
        <Redirect to="/login"/>
    )
};
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            hasLogin:false
        }
    }

    /**
     * 使用 localStorage 模拟用户登录
     * @param {String} username
     */
    login() {
        localStorage.setItem(LOGIN_STORAGE_KEY,JSON.stringify(true));
    }
    static logout() {
        localStorage.removeItem(LOGIN_STORAGE_KEY);
    }
    static hasLogin() {
        return !!localStorage.getItem(LOGIN_STORAGE_KEY);
    }
    propTypes = {
        location:PropTypes.objectOf(PropTypes.any),
    }
    getDerivedStateFromProps() {
        // 注意: 由于使用了 hasLogin 这个带有副作用函数,
        // getDerivedStateFromProps 不再是一个纯函数,
        // 在实际的项目应用中, 不要尝试这样做.
        // 应当使用受控组件将 hasLogin 做为 props 传递进来, 比如使用 Redux
        // 在后面关于 model 的示例中, 我们将把这一段逻辑放到 Redux 中
        return {
            hasLogin:this.hasLogin(),
        }
    }
    onClick = () =>{
        this.login();
        this.setState({hasLogin:true});
    };
    getRedirectTo() {
        const {
            location:{
                state:{
                    refer='/'
                } = {},
            } ={},
        } =this.props;
        return refer;
    }

    render() {
        // 如果已经登录直接跳转
        if(this.state.hasLogin) {
            return (
                <Redirect to={this.getRedirectTo()}/>
            )
        }
        return (
            <Form>
                <Form.Item>
                    <Input placeholder="UserName"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Password" htmlType="password"/>
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.onClick}>提交</Button>
                </Form.Item>
            </Form>
        )
    }
}
export default Login
export {
    Logout,
}