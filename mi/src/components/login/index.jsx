import React, {Component} from 'react';
import  './index.scss'
class Index extends Component {
  login = () => {
    let phone =   this.telChange()
    let pwd = this.pwdChange()
    let phoneReg = /^1\d{10}$/
    let pwdReg = /^\d{6}$/
    if(phoneReg.test(phone) && pwdReg.test(pwd)){
      let a = document.createElement("a")
      a.href = "/my";
      a.click()
    }
  }
  telChange = () => {

   return this.refs.phone.value
  }
  pwdChange = () => {

    return this.refs.pwd.value
  }
  render() {
    return (
      <div className={"login"}>
        <div className="logo">
          <img src={require('./milogo.png')} alt=""/>
        </div>
        <p>小米账号登录</p>
        <div className={"tel"}>
          <span>+68</span>
          <input ref={"phone"} onChange={this.telChange} className={"phone"} type="text" name="" id="" require="true" placeholder={"手机号码"}/>
        </div>
        <div className="tel">
          <input ref={"pwd"} onChange={this.pwdChange}  type="text" name="" id="" require="true" placeholder={"短信验证码"}/>
          <span className={"blue"}>获取验证码</span>
        </div>

        <div onClick={this.login} className={"start"}>立即登录/注册</div>
        <div className={"username"}>用户名密码登录</div>
      </div>
    );
  }
}

export default Index;
