import { createStore } from 'redux'
import Store from './reducer'
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null
const store = createStore(Store, composeEnhancers && composeEnhancers())
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store
