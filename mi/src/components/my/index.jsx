import React, {Component} from "react";
import "./index.scss"
import Head from "./head"

import Orders from "./order";
import OrderNav from "./ordernav";
import Spacing from "./spacing";
import Footer from '../../components/footer'
class My extends Component {
    render() {
        return (
            <div className="App">
                <Head />
                <Orders/>
                <OrderNav/>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_member"}>
                        <a href="/">
                            会员中心

                        </a>
                    </li>
                    <li className={"i_wallet"}>
                        <a href="/">
                            我的优惠

                        </a>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_service"}>
                        <a href="/">
                            服务中心

                        </a>
                    </li>
                    <li className={"i_mihome"}>
                        <a href="/">
                            小米之家

                        </a>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_fcode"}>
                        <a href="/">
                            F 码通道

                        </a>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_settings"}>
                        <a href="/">

                                设置


                        </a>
                    </li>
                </ul>
                <div className={"s_bottom"}></div>
                <Footer/>
            </div>
        );
    }
}

export default My;
