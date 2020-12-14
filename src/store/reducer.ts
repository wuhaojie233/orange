import { combineReducers } from 'redux'
import auth from './auth/reducer'
/**
 * 合并的Reducers
 */
const reducers = combineReducers({
  auth,
})
export default reducers
