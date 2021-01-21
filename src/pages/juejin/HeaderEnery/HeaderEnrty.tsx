import React from 'react'
// import './HeaderEnrty.less'
import styles from './HeaderEnrtys.less'
const headerList = [
    { title: '热门', path: '3' },
    { title: '最新', path: '123' },
    { title: '热榜', path: 'aad' },
]
const HeaderEnrty = () => {

    return (
        <header className="enrty-header">
            <nav>
                {headerList.map(l => {
                    return <a href={l.path} key={l.path}>{l.title}</a>
                })}
            </nav>
        </header>

    )
}

export default HeaderEnrty

