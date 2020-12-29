import React from 'react'

import ReactDOM from 'react-dom'

import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './App'
import './index.less'
import reportWebVitals from './reportWebVitals'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store'
import historyRouter from './@core/_history/history';
moment.locale('zh-cn')
ReactDOM.render(
  <Provider store={store}>
    <Router history={historyRouter}>
      <App />
    </Router >
  </Provider>,
  document.getElementById('root')
)


reportWebVitals()
