import 'whatwg-fetch';
import { hashHistory } from 'react-router';
import qs from 'qs';
import { message } from 'antd';
import moment from 'moment'

const postMessage = ({ type, data }) => { 
    const target = '*';
    const transfer = [];
    window.postMessage &&  window.postMessage( { data,type,time:moment().format('YYYY-MM-DD HH:MM:SS') },target,transfer)
}

/* eslint-disable */
function parseJSON(response) {

    return response.json();
}

function checkStatus(response) {
    
    
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * DATA数据处理
 * @param {*} data
 */
function getData(data) {
    postMessage({ data, type: 'response' })
    if (!data) {
        message.error("服务器返回数据NULL");
    }
    else {
        // 统一登录超时处理
        if (data && data.code === "SESSION_TIME_OUT" || data.desc === '未登录' || data.desc === 'token非法') {
            hashHistory.push('/login');
            return {};
        }
        if (data.code === "INVALID_TOKEN") {
            hashHistory.push('/login');
            return {};
        }
        // 成功后对出错的CODE统一处理
        if (!data.success && data.desc !== '未找到该openId对应的医生') {
            // message.error(data.desc || "请稍后重试。。。");
        }
    }
    return data;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, options) {
    const _options = {
        credentials: 'include',
        headers: {
            // h5
            'TK-AG': localStorage.getItem('TK_AG'),
            'TK-PA': localStorage.getItem('TK_PA'),
            // PC
            'TK-PC': localStorage.getItem('TK_PC'),
            "Content-Type": "application/json"
        },
        ...options
    };
    
    return fetch(url, _options)
        .then(checkStatus)
        .then(parseJSON)
        .then(getData)
        .catch(err => { err });
}

function get(url, data) {
    console.log('3333',url,data)
    if (data) {
        let dataString = qs.stringify(data)
    postMessage({ data: {url:`${url}?${dataString}`,data,method:'get'},type:'request'})

        return request(`${url}?${dataString}`, {
            method: 'get'
        })
    } else {
        return request(url, {
            method: 'get'
        })
    }
}

function post(url, data) {
    postMessage({ data: {url,data,method:'post'},type:'request' })
    return request(`${url}`, {
        method: 'post',
        body: JSON.stringify(data)
    })
}

export default {
    get, post
}