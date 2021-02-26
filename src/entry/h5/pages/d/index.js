import React, { Component } from "react";
import { Button } from "antd-mobile";
import { hashHistory } from "react-router";

export default class D extends Component {

  componentDidMount() {
    document.title = '付款成功';
    // window.addEventListener('popstate', this.changeState);
  }

  /**
   * 页面关闭
   */
  componentWillUnmount() {
  	this.changeState()
	}

	changeState = () => {
		hashHistory.go(-2);
		setTimeout(function() {
			hashHistory.replace('/e');
		}, 5);
	}

  render() {
    return <div className="container-wrap">
    	付款成功
    </div>
  }
}