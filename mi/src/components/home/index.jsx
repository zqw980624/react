import React, {Component} from 'react';
import  Header from './header'
import Banner from './banner'
import Category from './category'
import Reccomed from './recommed'
import M8 from './m8'
import ShopList from './shoplist'
import  Footer from '../footer'
class Index extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <Category></Category>
        <Reccomed></Reccomed>
        <M8></M8>
        <ShopList></ShopList>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
