import Mock from 'mockjs'
export default Mock.mock('/api/queryMenus', 'post', () => {
  return {
    code: '0000',
    menus: [
      {
        title: '系统菜单',
        path: '/',
        icon: 'home',
        children: [
          { title: '游戏', path: '/game', icon: 'home' },
          { title: '仪表盘', path: '/dashboard', icon: 'home' },
          { title: '关于我们', path: '/about', icon: 'home' },
        ],
      },
    ],
  }
})
