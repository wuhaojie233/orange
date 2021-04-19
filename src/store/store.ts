import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import historyRouter from '../@core/_history/history'
import DemoReducers from 'storeDemo/reducers'

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
  compose
// 初始化路由中间器
const routerWare = routerMiddleware(historyRouter)
// 初始化store 组合 添加 thunk/路由中间器
// 通过applyMiddleware来结合多个Middleware,返回一个enhancer
const store = createStore(
  // reducers,
  DemoReducers,
  composeEnhancers(applyMiddleware(thunk, routerWare))
)
export default store
