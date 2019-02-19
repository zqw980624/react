import React, {Component} from 'react';
import './index.scss'
class Index extends Component {
  render() {
    return (
      <div className={"top_pic"}>
        {
          this.props.header.length>0 && (
            this.props.header.map((item,index) => {
              return (
                <img key={index} src={item} alt=""/>
              )
            })
          )
        }
      </div>
    );
  }
}

export default Index;
