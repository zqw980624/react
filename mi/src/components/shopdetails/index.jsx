import React, {Component} from 'react';
import {Link}  from "react-router-dom";
import Axios from "axios";
import { Carousel } from 'antd';

import { addCart } from "../../actions/cart"
import  './index.scss'


import {connect} from 'react-redux'
@connect(
  state => ({shop:state}),
  {addCart}
)
class Index extends Component {
  state = {
    data:[],
    num:0,
    id:0
  }

  componentDidMount() {
    let id = this.props.match.params.id
    Axios.get('http://localhost:3001/shopdetails'+id)
      .then(res=>{
        this.setState({
          data:[res.data.data],
          id
        })
      })
  }
  getData = () => {

    let data =JSON.parse(window.localStorage.getItem("shopInfo")?window.localStorage.getItem("shopInfo" ) :"{}")
    let count = 0;
    for( let key in data){
      count += data[key]
    }

    return count?count:""
  }
  add = () => {
    if(this.state.num >=20) return


    this.state.num ++;
    this.setState({
      num: this.state.num
    })
  }
  reduce = () => {
    if(this.state.num <=0) return
    this.state.num --;
    this.setState({
      num: this.state.num
    })
  }
  submitRedux = () => {
    let {id,num} =this.state
    let { addCart } = this.props
    if(this.state.num <= 0) return
    addCart({
          id,
          num
        })

  }

  back = () => {
    window.history.go(-1)
  }
  render() {
    const cart = this.props.shop.cart;
    let count =0;
    for(let key in cart){

      count += cart[key]
    }
    const data = this.state.data[0]
    return (
      <div className={"shopdetails"}>

        <div className={"header_pic"}>
          <div>
            <i onClick={this.back} className={"iconfont icon-zuojiantou"}></i>
            <i className={"iconfont icon-fenxiang"}></i>
          </div>
        </div>
        <div className={"banner_pic"}>
          <Carousel>
            {
              this.state.data.length> 0 && (
                this.state.data[0].arrImg.map((item,index) => {
                  return (
                    <div className={"item"} key={index}>
                      <img src={item} alt={index}/>
                    </div>
                  )
                })
              )
            }
          </Carousel>
        </div>
        {
          data?<div className={"detail_info"}>
            <p className={"title"}>{data.title}</p>
            <p className={"des"}>{data.des}</p>
            <p className={"price"}>￥{data.price}</p>
          </div>:""
        }



        <div className={"shop_num"}>
          <span>购买数量：</span>
          <div className={"btn"}>
            <span onClick={this.reduce}>-</span>
            <span className={"num"}>{this.state.num}</span>
            <span onClick={this.add}>+</span>
          </div>
        </div>
        <div className={"shop_bottom"}>
          <div className={"left"}>
            <Link to={'/'}>
              <i className={"iconfont icon-weibiaoti--"}></i>
              <span>首页</span>
            </Link>
            <Link className={"shopcart"} to={'/shopcart'}>
              <i className={"iconfont icon-gouwuchekong"}></i>
              <span >购物车
            <div id={"count"}>{this.getData()}</div>
          </span>
            </Link>
          </div>
          <p onClick={this.submitRedux}>加入购物车</p>
        </div>
      </div>
    );
  }
}

export default Index;
