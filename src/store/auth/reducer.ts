import { fromJS } from 'immutable'
import { LOG_AUTH } from './const'
import state from './state'

const UserReducer = (prevState = fromJS(state), action: any) => {
  switch (action.type) {
    case LOG_AUTH:
      return prevState.set('user', action.user)
    default:
      return prevState
  }
}
export default UserReducer
