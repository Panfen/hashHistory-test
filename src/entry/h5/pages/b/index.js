import React, { Component } from "react";
import { Button } from "antd-mobile";
import { hashHistory } from "react-router";

export default class B extends Component {
  
  componentDidMount() {
    document.title = '购物车';
    console.log('购物车');
  }

  render() {
    return <div className="container-wrap">
    	购物车
    	<Button type="primary" onClick={() => hashHistory.push('/c')}>跳转“付款页面”</Button>
    </div>
  }
}