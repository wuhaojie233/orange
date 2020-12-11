import { fromJS } from 'immutable'
import { GET_USER_INFO } from './const'
import state from './state'

const UserReducer = (prevState = fromJS(state), action: any) => {
  switch (action.type) {
    case GET_USER_INFO:
      return prevState.set('userInfo', action.userInfo)
    default:
      return prevState
  }
}
export default UserReducer
