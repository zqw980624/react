import React, {Component} from 'react';
import Header from "../../components/header"
import  Footer from "../../components/footer";
import ShopList from './shoplist'
import Calculate from './calculate'
import Axios from "axios"
class Index extends Component {
  state = {
    title:''
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/shopcart")
      .then(res => {
        this.setState({
          title:res.data.title
        })

      })
  }

  render() {
    return (
      <div className={"shopcart"}>
        <Header title={this.state.title}></Header>
        <ShopList></ShopList>
        <Calculate></Calculate>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
