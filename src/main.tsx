import React from 'react'

import './index.css'
import App from './App'
import { store } from './redux/config/store'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
// @ts-nocheck


const Root = () => (
  <div >
    <Provider store={store}>
      <App/>
    </Provider>
  </div>
);
  render(<Root />, document.getElementById('root'));

