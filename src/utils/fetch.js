import 'whatwg-fetch';
import { appVerison, userAgent } from '../constants';
import { Toast } from 'antd-mobile';
import { isWeixin } from '../config/env';

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
    if (!data) {
        Toast.fail("服务器返回数据NULL");
    }
    else {
        
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
export default function request(url, options) {
    let headers = { "appVersion": appVerison, userAgent};
    if (isWeixin || true) {
        headers = {
            ...headers,
        }
    }
    if (options && options.headers) {
        headers = {
            ...headers,
            ...options.headers,
        };
    }
    const _options = { credentials: 'include', ...options, headers };
    return fetch(url, _options)
        .then(checkStatus)
        .then(parseJSON)
        .then(getData)
        .catch(error => ({ error }));
}