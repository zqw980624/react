import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './index.scss'
class Index extends Component {
  back = () => {
    window.history.go(-1)

  }
  render() {
    return (
      <div className={"header"}>
        <div  onClick={this.back}>
          <i className={"iconfont icon-zuojiantou"}></i>
        </div>
        <span>{this.props.title}</span>
        <Link to="/search">
          <i className={"iconfont icon-sousuo6"}></i>
        </Link>

      </div>
    );
  }
}

export default Index;
