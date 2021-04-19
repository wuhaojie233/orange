import { combineReducers } from 'redux'
import DemoReducer from './demo/reducer'
import DemoModalReducer from './modal/reducer'
const DemoReducers = combineReducers({
  demo: DemoReducer,
  modal: DemoModalReducer,
})
export default DemoReducers
