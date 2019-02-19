import React, {Component} from 'react';
import './index.scss'
import Axios from "axios";
import {Link} from "react-router-dom"

class Index extends Component {
  state = {
    data: []
  }
  componentDidMount()
  {
    Axios.get("http://localhost:3001/home/recommod").then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }
  render() {

    return (
      <div className={"recommed m20"}>
        <div className={"r_left"}>
        {
          this.state.data.length > 0 && (
            this.state.data[0].map((item,index) => {
              return (
                <div key={item.shopid}>
                  <Link to={`/shopdetails${item.shopid}`}>
                    <img src={item.picurl} alt={item.shopid}/>
                  </Link>
                </div>
              )
            })
          )
        }

        </div>
        <div className={"r_right"}>
          {
            this.state.data.length > 0 && (
              this.state.data[1].map((item,index) => {
                return (
                  <div key={item.shopid}>
                    <a href="">
                      <img src={item.picurl} alt={item.shopid}/>
                    </a>

                  </div>
                )
              })
            )
          }


        </div>
      </div>
    );
  }
}

export default Index;
