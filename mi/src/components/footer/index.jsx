import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.scss'
import {connect} from 'react-redux'
@connect(
  state => ({shop:state}),
  {}
)
class Index extends Component {




  getData = () => {

    let data =JSON.parse(window.localStorage.getItem("shopInfo")?window.localStorage.getItem("shopInfo" ) :"{}")
    let count = 0;
    for( let key in data){
      count += data[key]
    }
    return count?count:""
  }





  render() {
    return (
      <div className={"footer"}>
        <NavLink exact  to={'/'}>
          <i className={"iconfont icon-weibiaoti--"}></i>
          <span>首页</span>
        </NavLink>
        <NavLink to={'/category'}>
          <i className={"iconfont icon-fenlei"}></i>
          <span>分类</span>
        </NavLink>
        <NavLink className={"shopcart"} to={'/shopcart'}>
          <i className={"iconfont icon-gouwuchekong"}></i>
          <span >购物车
            <div id={"count"}>{this.getData()}</div>
          </span>
        </NavLink>
        <NavLink to={'/my'}>
          <i className={"iconfont icon-tubiao-"}></i>
          <span>我的</span>
        </NavLink>


      </div>
    );
  }
}

export default Index;
