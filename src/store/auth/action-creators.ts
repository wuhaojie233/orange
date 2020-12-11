import { GET_USER_INFO } from './const'
export const action = {
  usefInfo() {
    return {
      type: GET_USER_INFO,
      userInfo: { name: '超级管理员', username: 'admin', pwd: 'admin' },
    }
  },
}
