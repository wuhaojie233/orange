import Mock from 'mockjs'
export default Mock.mock('/api/login', 'post', (user: Request) => {
  return {
    code: '0000',
    user: {
      name: '管理员',
      userId: '1111',
      token: '4545zxc456skxcjkaljkclsajk',
    },
  }
})
