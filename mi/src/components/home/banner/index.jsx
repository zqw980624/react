import React, {Component} from 'react';
import './index.scss'
import { Carousel } from 'antd';
import Axios from 'axios'


class Index extends Component {
  state = {
    data:[]
  }
  componentDidMount() {
    Axios.get("http://localhost:3001/home/banner").then(res=>{
      this.setState({
        data:res.data.data
      })
    })
  }

  render() {
    return (
      <div className={"banner"}>
        <Carousel autoplay>
        {
          this.state.data.length > 0 && (
            this.state.data.map((item,index) => {
              return (

                  <img key={index} src={item.picurl} alt={item.shopid}/>

              )
            })
          )
        }
        </Carousel>
      </div>
    );
  }
}

export default Index;
