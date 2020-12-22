import { LOG_AUTH } from './const'
import http from '../../@core/_net/http'
const AuthAction = {
  login(params: any) {
    return (dispatch: any) => {
      http.post('login', params).then((res) => {
        const user = res.data.user
        dispatch({ type: LOG_AUTH, user })
      })
    }
  },
}
export default AuthAction
