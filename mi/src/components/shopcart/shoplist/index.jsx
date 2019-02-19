import React, {Component} from 'react';
import './index.scss'
import {connect} from 'react-redux'
import {addCart, delCart, getGoodsNum} from "../../../actions/cart";
import Axios from 'axios'

@connect(
  state => ({shop: state}),
  {addCart, delCart, getGoodsNum}
)
class Index extends Component {
  state = {
    goods: [],
    count: 0,
    price: 0
  }
  getData = () => {
    let {cart} = this.props.shop
    let shopid = Object.keys(cart);
    let {goods} = this.state
    shopid.forEach((item, index) => {
      let reg = /^\d+/
      if (reg.test(item)) {
        Axios.get('http://localhost:3001/shopdetails' + item)
          .then(res => {
            res['num'] = cart[item]
            goods.push(res)
            this.setState({
              goods
            })
          })
      }

    })
    this.getResult()
  }
  getResult = () => {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.totalPrice()
    }, 200)
  }

  componentDidMount() {
    this.getData()
  }

  addGoods = (index) => {
    let goods = this.state.goods;
    let {addCart} = this.props
    let id = goods[index].data.data.shopid;
    goods[index].num++;
    this.setState({
      goods
    })
    addCart({
      id,
      num: 1
    })
    this.totalPrice()
  }
  reduceGoods = (index) => {
    let goods = this.state.goods;
    let {addCart} = this.props
    let id = goods[index].data.data.shopid;
    if (goods[index].num >= 2) {
      goods[index].num--;
      this.setState({
        goods
      })
      addCart({
        id,
        num: -1
      })
    }
    this.totalPrice()
  }
  delGoods = (index) => {
    let goods = this.state.goods;
    let {delCart} = this.props;
    let id = goods[index].data.data.shopid;
    delCart(id)
    goods.splice(index, 1)
    this.setState({
      goods
    })
    this.totalPrice()
  }
  totalPrice = () => {
    let goods = this.state.goods;
    let {getGoodsNum} = this.props
    let count = 0;
    let price = 0;
    for (let key of goods) {
      price += key.data.data.price * key.num;
      count += key.num
    }
    this.setState({
      count,
      price
    })
    getGoodsNum({
      count,
      price
    })
  }

  render() {
    const data = this.state.goods
    return (
      <ul className={"shoplist"}>
        {
          data.length > 0 && data.map((item, index) => {
            return (
              <li key={index}>
                <div className={"shop_pic"}>
                  <img src={item.data.data.arrImg[0]} alt=""/>
                </div>
                <div className={"shop_right"}>
                  <p className={"title"}>{item.data.data.title}</p>
                  <p className={"price"}>售价：{item.data.data.price}元</p>
                  <div className={"shop_cal"}>
                    <div className={"btn"}>
                      <span onClick={this.reduceGoods.bind(this, index)}>-</span>
                      <span className={"id"}>{item.num}</span>
                      <span onClick={this.addGoods.bind(this, index)}>+</span>
                    </div>
                    <i className={"iconfont icon-shanchu"} onClick={this.delGoods.bind(this, index)}></i>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Index;
