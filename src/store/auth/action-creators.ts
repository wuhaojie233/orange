import { LOG_AUTH } from './const'
import http from '../../@core/_net/http'
import { push } from 'react-router-redux'
const AuthAction = {
  login(params: any) {
    return (dispatch: any) => {
      http.post('login', params).then(async (res) => {
        const user = res.data.user
        await dispatch({ type: LOG_AUTH, user })
        await sessionStorage.setItem('user', JSON.stringify(user))
        await dispatch(push('/'))
      })
    }
  },
}
export default AuthAction
