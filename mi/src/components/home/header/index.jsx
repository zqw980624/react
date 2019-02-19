import React, {Component} from 'react';
import  './index.scss'
import {Link,NavLink } from "react-router-dom"
class Index extends Component {
  componentDidMount() {
    let right = document.querySelectorAll(".h_right")[0]
    let navlist = document.querySelectorAll(".navlist")[0]
    right.ontouchend = function () {
      if(this.style.transform ===""){
        this.style.transform = "rotate(90deg)"
        navlist.style.height = "2.6rem"
      }else{
        this.style.transform = ""
        navlist.style.height = 0;
      }
    }
  }

  render() {
    return (
      <div className={'fixTop'}>
        <div className={'h_top'}>
          <div>
            <i>
              <img src={require('./1.png')} alt=""/>
            </i>
            <div className={"search"}>
              <Link to="/search">
                <i className={"iconfont icon-sousuo"}></i>
                <span>搜索商品名称</span>
              </Link>
            </div>
            <Link to={"/my"}>
              <i className={"iconfont icon-tubiao-"}></i>
            </Link>

          </div>

        </div>
        <div className={'h_scroll'}>
          <div className={"h_left"}>
            <div>
              <NavLink to="/" exact><span>推荐</span></NavLink>
              <NavLink to="/year"><span>年货节</span></NavLink>

            </div>
          </div>
          <div className={"h_right"}>
              <i className={"iconfont icon-jiantou1"}></i>
          </div>
          <div className={"navlist"} >
            <p>全部</p>
            <ul>
              <li className={"select"}>
                <NavLink to="/" exact><span>推荐</span></NavLink>
              </li>
              <li>
                <NavLink to="/year"><span>年货节</span></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
