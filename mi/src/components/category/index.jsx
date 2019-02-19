import React, {Component} from 'react';
import Footer from "../../components/footer"
import Header from "../../components/header"
import LeftNav from "./leftnav";
import Main from './content'
import Axios from "axios"
class Index extends Component {
  state = {
    title:''
  }
  componentDidMount() {


      Axios.get("http://localhost:3001/category")
        .then(res => {
          this.setState({
            title:res.data.title
          })
        })

    let aLiLeft = document.querySelectorAll('.category .nav li');
    aLiLeft.forEach((item,index) => {

      item.onclick = function () {
        for(let i=0;i<aLiLeft.length;i++){
          aLiLeft[i].className = ""
        }
        this.className = "active"
      }
    })
    let alist = document.querySelectorAll('.main .main_list');
    document.onmousewheel = function(){
      alist.forEach((item,index) => {


        if(item.getBoundingClientRect().y<400){
          aLiLeft.forEach((item,index) => {
            item.className =""
          })
          aLiLeft[index].className = "active"
        }


      })
    }
  }

  render() {
    return (
      <div className={"category"}>
        <Header title = {this.state.title}></Header>
        <LeftNav></LeftNav>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
