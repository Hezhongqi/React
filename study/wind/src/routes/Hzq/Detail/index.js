import React from 'react'
import { Redirect } from 'dva/router'

/*const Detail = () => (
    <div>Detail</div>
)*/
/*const Detail = ({ match }) => (
    /!*<h2>
        <span>id: </span>
        <strong>{match.params.id}</strong>
    </h2>*!/
);*/
const Detail = ({ match }) => {
    const {params: {id} = {}} = match;
    //如果没有获取到id属性，重定向/list
    if (!id) {
        return (
            <Redirect to="/list"/>
        )
    }
    return (
        <h2>
            <span>id: </span>
            <strong>{id}</strong>
        </h2>
    )
};

export default Detail