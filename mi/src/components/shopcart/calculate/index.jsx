import React, {Component} from 'react';
import "./index.scss"
import {connect} from 'react-redux'
@connect(
  state => ({shop:state}),
  {}
)
class Index extends Component {
  render() {
    const data = this.props.shop.cart;
    return (

      <div className={"calculate"}>
        <div> <span>金额：<span>{data.price}</span>元</span> </div>
        <p>去结算</p>
      </div>
    );
  }
}

export default Index;
