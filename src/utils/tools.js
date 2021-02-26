import React, { Component } from 'react';
import { Select, Col, Checkbox } from 'antd';
import moment from 'moment';
import { isProd } from 'src/config/env';

const Option = Select.Option;

export const renderTagCheckBox = (valueList=[]) => {
    if(!valueList){
        valueList = [];
    }
    let _children = [];
    for (let i = 0; i < valueList.length; i++) {
        if(valueList[i].id == "9999"){
            _children.push(<Col style={{display:"inline-block"}}><Checkbox value={valueList[i].id}>其它(请手动输入后回添加)</Checkbox></Col>)
        }
        else{
            _children.push(<Col style={{display:"inline-block"}}><Checkbox value={valueList[i].id}>{valueList[i].name}</Checkbox></Col>)
        }
    }
    return _children;
};

export const renderTag = (valueList=[]) => {

    if(!valueList){
        valueList = [];
    }
    let _children = [];
    for (let i = 0; i < valueList.length; i++) {
        _children.push(<Option key={Math.ceil(Math.random()*100000000)} value={valueList[i].id}>{valueList[i].name}</Option>);
    }

    return _children;
};

export function parseStoreObj(storeObj) {
    return JSON.parse(JSON.stringify(storeObj));
}

// 去左右空格
export function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

// 距现在时间
export function restTime(date) {
    const ms = new Date().getTime() - new Date(date).getTime();
    if (ms > 1000 * 60 * 60 * 24 * 365) {
        return Math.floor(ms / (1000 * 60 * 60 * 24 * 365)) + '年前';
    }
    if (ms > 1000 * 60 * 60 * 24 * 30) {
        return Math.floor(ms / (1000 * 60 * 60 * 24 * 30)) + '月前';
    }
    if (ms > 1000 * 60 * 60 * 24) {
        return Math.floor(ms / (1000 * 60 * 60 * 24)) + '天前';
    }
    if (ms > 1000 * 60 * 60) {
        return Math.floor(ms / (1000 * 60 * 60)) + '小时前';
    }
    if (ms > 1000 * 60) {
        return Math.floor(ms / (1000 * 60)) + '分钟前';
    }
    return '1分钟内'
}

export const GetQueryString = (paraName) => {
    var url = document.location.toString();
    var arrObj = url.split("?")
    var length = arrObj.length;

    if (arrObj.length > 1) {
        var arrPara = arrObj[length -1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return "";
    }
    else {
        return "";
    }
}

export function parseQueryString(url) {
    var obj = {};
    var keyvalue = [];
    var key = "",
        value = "";
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    for (var i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = keyvalue[1];
        obj[key] = value;
    }
    return obj;
}

export function scrollTop (el, from = 0, to = 0, duration = 100, endCallback) {
    const interval = 1000 / 60
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, interval)
            }
        )
    }
    const difference = Math.abs(from - to)
    const step = Math.ceil(difference / duration * interval)
    function scroll (start, end, step) {
        if (start === end) {
            endCallback && endCallback()
            return
        }
    
        let d = (start + step > end) ? end : start + step
        if (start > end) {
            d = (start - step < end) ? end : start - step
        }
    
        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

export const report = (event, label, config) => {
    if (isProd) {
        TDAPP.onEvent(event, label, {
            ...config, 
            platfrom: navigator.userAgent,
            time: moment().format('YYYY-MM-DD HH:mm:ss')
        });
    }
}

export const isValidPhone = (phone) => {
    return /^1(3|4|5|6|7|8|9)\d{1}\d{4}\d{4}$/.test(phone);
}

export const isValidIdCard = (idCard) => {
    return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/.test(idCard);
}