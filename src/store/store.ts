import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
// 通过applyMiddleware来结合多个Middleware,返回一个enhancer
const enhancer = applyMiddleware(thunk)
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) ||
  enhancer

const store = createStore(
  reducers,
  composeEnhancers && composeEnhancers(enhancer)
)
export default store
