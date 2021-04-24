import { combineReducers } from 'redux'
import DemoReducer from './demo/reducer'
import DemoModalReducer from './modal/reducer'
import { DemoActionReducer } from './demoActions/reducer'
const DemoReducers = combineReducers({
  demo: DemoReducer,
  demoAction: DemoActionReducer,
  modal: DemoModalReducer,
})
export default DemoReducers
