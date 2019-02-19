import React, {Component} from "react";
import "./index.scss"

class Orders extends Component {
    render() {
        return (
            <div className={"orders"}>
                <p className={"title"}>
                    我的订单
                </p>
                <p className={"all_orders"}>
                    <a href="/">
                        全部订单

                    </a>

                </p>
            </div>
        );
    }
}

export default Orders;
