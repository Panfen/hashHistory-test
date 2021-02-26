import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import './index.css';
import store from "./stores/index"
import { isProd, isApp } from 'src/config/env'

const stores = {
  ...store
};

const App = () => {
  return (
    <Provider {...stores} key='router'><RouterConfig /></Provider>
  )
}
useStrict(true);
ReactDOM.render(<App />, document.getElementById('root'));