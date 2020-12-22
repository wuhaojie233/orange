import Mock from 'mockjs'
export default Mock.mock('/api/login', 'post', (user: any) => {
  return {
    code: 200,
    data: {
      user: {
        name: '管理员',
        userId: '1111',
        token: '4545zxc456skxcjkaljkclsajk',
      },
    },
  }
})
