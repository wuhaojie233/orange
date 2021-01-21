import { fromJS } from 'immutable'
import { GET_ARTCLEENRTY_LIST } from './const'
import state from './state'

const HomeReducer = (prevState = fromJS(state), action: any) => {
  switch (action.type) {
    case GET_ARTCLEENRTY_LIST:
      return prevState.set('articleList', action.Articles)
    default:
      return prevState
  }
}
export default HomeReducer
