import React, {Component} from 'react';
import './index.scss'
class Index extends Component {
  back = () => {
    window.history.go(-1)
  }

  render() {
    return (
      <div className={"Search"}>
        <div className={"search_header"}>
          <span>
            <i onClick={this.back} className={"iconfont icon-zuojiantou"}></i>
          </span>
          <div>
            <input type="text" placeholder={"搜索商品名称"}/>
          </div>
          <span>
            <i className={"iconfont icon-sousuo"}></i>
          </span>
        </div>
        <p>热门搜索</p>
        <img src={require("./1.jpg")} alt=""/>
        <ul className={"search_top"}>
          <li>红米Node7</li>
          <li>净水滤芯免费领</li>
          <li>四单元圈铁耳机</li>
          <li>米家电动剃须刀刀头</li>
          <li>电动牙刷头</li>
          <li>小米8 SE</li>
        </ul>
        <p>常用分类</p>
        <ul>
          <li>红米Node7</li>
          <li>净水滤芯免费领</li>
          <li>四单元圈铁耳机</li>
          <li>米家电动剃须刀刀头</li>
          <li>电动牙刷头</li>
          <li>小米8 SE</li>
        </ul>
      </div>
    );
  }
}

export default Index;
