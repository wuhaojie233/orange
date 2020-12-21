import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
// 通过applyMiddleware来结合多个Middleware,返回一个enhancer
const enhancer = applyMiddleware(thunk)
const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
  null

const store = createStore(
  reducers,
  composeEnhancers ? composeEnhancers(enhancer) : enhancer
)
export default store
