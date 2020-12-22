import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

// 获取当前 location
// const location = history.location

// 监听当前 location改变
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state)
// })

// //使用push、replace和go导航
// history.push('/home', { some: 'state' })

// //要停止侦听，请调用从listen（）返回的函数
// unlisten()

export default history
