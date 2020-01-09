/* eslint-disable import/prefer-default-export */

import createService from '../../utils/createService'

// e.g.:
// export const describeInstances = createService('DescribeInstances')
const  mockService = (url,options ={}) =>new Promise((res)=>{
    const  mockDelay = 500 + Math.random()*2000;
    const  { type = 'GET',mockResponse } = options
    setTimeout(()=>{
        const response = mockResponse ?mockResponse({
            ...options,
            url,
            mockDelay
        }):`${type} ${url} success`
        res(response)
    },mockDelay)
});
export const get = id =>mockService(`/api/user/${id}`,{
    mockResponse(){
        return{
            id,
            username:'MockUsername'
        }
    }
})
export const create = params => mockService('/api/user/create',{
    type:'POST',
    params,
})
export const update = params => mockService('/api/user/update', {
    type: 'PUT',
    params,
})