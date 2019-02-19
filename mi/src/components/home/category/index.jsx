import React, {Component} from 'react';
import './index.scss'
import Axios from 'axios';


class Index extends Component {
  state = {
    data:[]
  }
  componentDidMount() {
    Axios.get("http://localhost:3001/home/category").then(res=>{
      this.setState({
        data:res.data.data
      })
    })
  }

  render() {
    return (
      
        <ul className={"category"}>
          {
            this.state.data.length > 0 && (
              this.state.data.map((item,index) => {
                return (
                  <li key={item.shopid}>
                    <a href="/">
                      <img src={item.picurl} alt={item.shopid}/>
                    </a>
                  </li>
                )
              })
            )
          }

        </ul>

    );
  }
}

export default Index;
