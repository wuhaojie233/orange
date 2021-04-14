import React from 'react'
import './HeaderEnrty.less'
// import styles from './HeaderEnrtys.less'
// import './HeaderEnrty.less'
// import styles from './HeaderEnrtys.less'
import { withRouter } from 'react-router'
const headerList = [
  { title: '热门', path: '3' },
  { title: '最新', path: '123' },
  { title: '热榜', path: 'aad' },
  { title: 'demo', path: '/demo' },
]

const HeaderEnrty = (props: any) => {
  const jump = (e: any) => {
    props.history.replace(e.path)
  }
  return (
    <header className="enrty-header">
      <nav>
        {headerList.map((l) => {
          return (
            <a onClick={() => jump(l)} key={l.path}>
              {l.title}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default withRouter(HeaderEnrty)
