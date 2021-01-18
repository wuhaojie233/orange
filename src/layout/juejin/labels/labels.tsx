import React from 'react'
import './labels.less'
const list = [
    { title: '推荐', path: '' },
    { title: '关注', path: '' },
    { title: '后端', path: '' },
    { title: '前端', path: '' },
    { title: 'Android', path: '' },
    { title: 'iOS', path: '' },
    { title: '人工智能', path: '' },
    { title: '开发工具', path: '' },
    { title: '代码认识', path: '' },
    { title: '阅读', path: '' },
]

const Labels = () => {
    return (
        <div className="labels-wrapper">
            <nav>
                <div className="nav-list">
                    {list.map(l => {
                        return <a key={l.title} className="nav-item">{l.title}</a>
                    })}
                    <a className="nav-item right">标签管理</a>
                </div>
            </nav>

        </div>

    )
}

export default Labels
