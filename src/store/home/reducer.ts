import { fromJS } from 'immutable'
import { GET_MENU } from './const'
import state from './state'

const HomeReducer = (prevState = fromJS(state), action: any) => {
  switch (action.type) {
    case GET_MENU:
      return prevState.set('menus', action.menus)
    default:
      return prevState
  }
}
export default HomeReducer
