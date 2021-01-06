import { LOG_AUTH } from './const'
import http from '../../@core/_net/http'
import { push } from 'react-router-redux'
const AuthAction = {
  login(params: any, callback?: any) {
    return (dispatch: any) => {
      http.post('login', params).then((res) => {
        const user = res.data.user
        dispatch({ type: LOG_AUTH, user })
        sessionStorage.setItem('user', JSON.stringify(user))
        callback && callback()
        dispatch(push('/'))
      })
    }
  },
}
export default AuthAction
