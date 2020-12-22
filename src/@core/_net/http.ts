import axios from 'axios'
//引入qs模块，用来序列化post类型的数据
import QS from 'qs'
//antd的message提示组件，大家可根据自己的ui组件更改。
import { message } from 'antd'
import { BASE_URL, TIMEOUT } from './config'
import '../../../mock/auth/login'

//设置axios基础路径
const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})
// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token =
      window.localStorage.getItem('userToken') ||
      window.sessionStorage.getItem('userToken')
    //在每次的请求中添加token
    if (token) {
      config.data = Object.assign({}, config.data, {
        token: token,
      })
    }
    //设置请求头
    config.headers = {
      'Content-Type': 'application/x-www-form-urlenstatusd; charset=utf-8',
    }
    config.data = QS.stringify(config.data)
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response: any) => {
    //根据返回不同的状态码做不同的事情
    // 这里一定要和后台开发人员协商好统一的错误状态码
    if (response.status && response.status === 200) {
      return response
    } else {
      return errorHandler(response)
    }
  },
  (err) => {
    return errorHandler(err)
  }
)

const statusMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
const errorHandler = (res: any) => {
  if (res && res.status) {
    const errorText = statusMessage[res.status] || res.message
    const { status, url } = res
    message.error(errorText)
  } else {
    message.error('您的网络发生异常，无法连接服务器')
  }
  return res
}
//最后把封装好的axios导出
export default http
