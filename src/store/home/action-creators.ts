import { GET_MENU } from './const'
import http from '../../@core/_net/http'
const homeAction = {
  getMenus(params: any) {
    return (dispatch: any) => {
      http.post('queryMenus', params).then((res) => {
        const menus = res.data.menus
        dispatch({ type: GET_MENU, menus })
      })
    }
  },
}
export default homeAction
