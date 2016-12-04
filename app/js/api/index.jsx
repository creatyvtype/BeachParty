import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'

var debug = process.env.NODE_ENV !== 'production',
    baseURL = 'http://localhost:9393'
if (!debug) { baseURL = 'https://beach-api.herokuapp.com'}
axiosDefaults.baseURL = 'https://beach-api.herokuapp.com'

export function getBall() {
    return axios({
        requestId: 'ball',
        method: 'get',
        url: '/ball',
        cancelPreviousReqeust: true
    })
}

