import React, {Component} from 'react';
import './index.scss'
class Index extends Component {
  render() {
    return (
      <div className={"year_nav"}>
        {
          this.props.nav.length>0 && (
            this.props.nav.map((item,index) => {
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
