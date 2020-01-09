/* eslint-disable import/prefer-default-export */

import createService from '../../utils/createService'
export const sync = value =>new Promise((res)=>{
    const  mockDelay = 500 + Math.random()*2000;
    setTimeout(()=>{
        res(`value(${value}) was successful synced`)
    },mockDelay)
})
// e.g.:
// export const describeInstances = createService('DescribeInstances')
