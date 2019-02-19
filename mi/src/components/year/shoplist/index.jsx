import React, {Component} from 'react';
import  './index.scss'
import { Link } from "react-router-dom"
class Index extends Component {
  render() {
    const shop = this.props.shop
    return (
      <div className={"year_shoplist"}>
        {
          shop.length > 0 && (
            shop[0].map((item,index) => {
              return (
                <div className={"year_content"} key={index}>
                  <div  className={"year_content"}>
                    <div className={"year_logo"}>
                      <Link to={`/shopdetails${item[0].shopid}`}>
                        <img src={item[0].picurl} alt=""/>

                        <div>
                          <p><span className={"year_title"}>{item[0].title}</span><span className={"year_price"}>￥{item[0].price}起</span></p>
                          <p><span className={"year_des"}>{item[0].des}</span><span className={"year_buy"}>立即预约</span></p>
                        </div>
                      </Link>

                    </div>
                  </div>
                  <ul>
                    {
                      item[1].map((item,index) => {
                        return(
                          <li key={index}>
                            <Link to={`/shopdetails${item.shopid}`}>
                              <img  src={item.picurl} alt=""/>
                              <p className={"year_title"}>{item.title}</p>
                              <p className={"year_des"}>{item.des}</p>
                              <p className={"year_price"}>￥{item.price}起</p>
                              <p className={"year_buy"}>立即预约</p>
                            </Link>

                          </li>
                        )
                      })
                    }
                  </ul>
                </div>


              )
            })
          )
        }
      </div>
    );
  }
}

export default Index;
