import { combineReducers } from 'redux'
import auth from './auth/reducer'
import home from './home/reducer'
import article from './ArticleEnrty/reducer'

/**
 * 合并的Reducers
 */
const reducers = combineReducers({
  auth,
  home,
  article,
})
export default reducers
