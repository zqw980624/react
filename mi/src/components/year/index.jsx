import React, {Component} from 'react';
import Header from "../home/header"
import Footer from "../footer"
import TopPic from "./toppic"
import Nav  from "./nav"
import ShopList from "./shoplist";
import Axios from "axios";

class Index extends Component {
  state = {
    header:[],
    nav:[],
    shop: []
  }
  componentDidMount() {

    Axios.get("http://localhost:3001/year/header")
      .then(res => {

        this.setState({
          header:res.data.header,
          nav:res.data.nav,
          shop:res.data.shop
        })
      })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <TopPic header={this.state.header}></TopPic>
        <Nav nav={this.state.nav}></Nav>
        <ShopList shop={this.state.shop}></ShopList>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
