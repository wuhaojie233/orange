import { combineReducers } from 'redux'
import UserReducer from './auth/reducer'
/**
 * 合并的Reducers
 */
const reducers = combineReducers({
  user: UserReducer,
})
export default reducers
