import { combineReducers } from 'redux'
import auth from './auth/reducer'
import home from './home/reducer'
/**
 * 合并的Reducers
 */
const reducers = combineReducers({
  auth,
  home,
})
export default reducers
