import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Axios from "axios"
import './index.scss'
class Index extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/home/shop")
      .then(res => {
        this.setState({
          data: res.data.data[0]
        })
      })
  }

  render() {

    return (
      <div className={"shop m20"}>
        <ul>
          {
            this.state.data.length > 0 && (
              this.state.data.map((item, index) => {
                return (
                  <li key={index}>
                    <div className={"first"}>
                      <img src={this.state.data[index][0][0].picurl} alt={this.state.data[index][0][0].shopid}/>
                    </div>

                    <ul className={'shop_list'}>
                      {
                        this.state.data[index][1].map((item, index) => {
                          return (
                            <li key={index}>
                              <Link to={`/shopdetails${item.shopid}`}>
                                <div>
                                  <img src={item.picurl} alt={item.shopid}/>
                                </div>
                                <div className={"info"}>
                                  <p className={"info_title"}>{item.title}</p>
                                  <p className={"info_des"}>{item.des}</p>
                                  <p className={"info_price"}>￥{item.price}起</p>
                                </div>
                              </Link>

                            </li>

                          )
                        })


                      }

                    </ul>
                  </li>
                )
              })
            )


          }
        </ul>
      </div>
    );
  }
}

export default Index;
