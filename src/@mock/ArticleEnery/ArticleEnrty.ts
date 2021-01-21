import Mock from 'mockjs'
export default Mock.mock('/api/queryArticleList', 'post', () => {
  return {
    code: '0000',
    articles: [
      {
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        id: 'ANO1',
        tag: ['advertisement'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO2',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        // tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
          { title: 'TypeScript', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO3',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO4',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },

      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO5',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO6',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO7',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO8',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO9',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO10',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
      {
        title: '[预热] 2020年度创作者榜单即将开启，为你喜爱的创作者投票吧',
        describe:
          '距离活动开始还有4天，掘金准备了丰厚的奖品邀请掘友参加，赶紧扫码进群，我们会在活动开始前提醒你参赛',
        id: 'ANO11',
        advertisement:
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        tag: ['writer'],
        src:
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed94daec50c4927b60587bb85c42a42~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp',
        praise: '56',
        comment: '64',
        releaseTime: '1天前',
        avatar:
          'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        name: '字节跳动',
        concern: '50',
        follwers: '26541',
        introduction: '前端架构师',
        labels: [
          { title: 'Javascript', id: 1 },
          { title: '前端', id: 2 },
        ],
        level: 5,
      },
    ],
  }
})
