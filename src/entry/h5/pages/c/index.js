import React, { Component } from "react";
import { Button } from "antd-mobile";
import { hashHistory } from "react-router";

export default class C extends Component {
  
  componentDidMount() {
    document.title = '付款';
    console.log('付款');
  }

  render() {
    return <div className="container-wrap">
    	付款
    	<Button type="primary" onClick={() => hashHistory.push('/d')}>跳转“付款结果页”</Button>
    </div>
  }
}