import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import { Provider } from "react-redux"
import 'antd/lib/carousel/style/css'
import  "./common/css/reset.css";

import  configstore from './store/configstore'
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
const store = configstore();



ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
