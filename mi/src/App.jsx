import React, { Component } from 'react';
import {BrowserRouter as Router,
  Switch,
  Route
}  from "react-router-dom";

import Home from './components/home'
import  Category from './components/category'
import Shopcart from './components/shopcart'
import My from './components/my'
import ShopDetail from "./components/shopdetails";
import  Login from "./components/login"
import Year from "./components/year"
import Search  from "./components/search";

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={"/category" } component={Category}></Route>
            <Route path={"/shopcart" } component={Shopcart}></Route>
            <Route path={"/my" } component={My}></Route>
            <Route path={"/shopdetails:id" } component={ShopDetail}></Route>
            <Route path={"/login" } component={Login}></Route>
            <Route path={"/year" } component={Year}></Route>
            <Route path={"/search" } component={Search}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
