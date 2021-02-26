import React, { Component } from "react";
import { Button } from "antd-mobile";
import { hashHistory } from "react-router";

export default class A extends Component {
  
  componentDidMount() {
    document.title = '商品详情';
    console.log('商品详情');
  }

  render() {
    return <div className="container-wrap">
      商品详情
    	<Button type="primary" onClick={() => hashHistory.push('/b')}>跳转“加入购物车”</Button>
    </div>
  }
}