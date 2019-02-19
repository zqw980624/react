import React, {Component} from "react";
import "./index.scss"
import {Link} from "react-router-dom"
class Index extends Component {
    render() {
        return (
            <header className={"hd"}>
                <div className={"avatar"}>
                    <img src={require("./img/avatar.png")} alt="avatar"/>
                </div>
                <div className={"login"}>
                  <Link to={"/login"}> 登录/注册</Link>
                 </div>
            </header>
        );
    }
}

export default Index;
