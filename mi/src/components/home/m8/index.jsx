import React, {Component} from 'react';
import './index.scss'
import Axios from 'axios'
import {Link} from "react-router-dom"
class Index extends Component {
  state = {
    data:[]
  }
  componentDidMount() {
    Axios.get("http://localhost:3001/home/m8")
      .then(res => {
        this.setState({
          data:res.data.data
        })
      })
  }

  render() {

    return (
      <div className={"m8 m20"}>
        <Link to="/shopdetails1">
          {
            this.state.data.length> 0 && (
              this.state.data.map((item,index) => {
                return(
                   <img key={item.shopid}  src={item.picurl} alt={item.shopid}/>
                  )

              })

            )
          }

        </Link>
      </div>
    );
  }
}

export default Index;
