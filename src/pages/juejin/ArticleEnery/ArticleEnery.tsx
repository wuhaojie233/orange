import React from 'react'
import './ArticleEnery.less'
import HeaderEnrty from '../HeaderEnery/HeaderEnrty';
import GroupState from 'store/group-state';
const ArticleEnery = (props: any) => {
    props.getArticles()
    return (
        <div className="article-enrty">
            <div className="entry-list-container">
                <HeaderEnrty></HeaderEnrty>
                <div className="articles-container">
                    {props.articleList && props.articleList.map((l: any) => {
                        return <div key={l.id} className="article-box">
                            <div className="info-box">
                                <div className="info-row meta-row">
                                    <ul className="meta-list">
                                        <li className="meta-item meta-username">{l.name}</li>
                                        <li className="meta-item meta-time">{l.releaseTime}</li>
                                        <li className="meta-item meta-tag">
                                            {l.labels && l.labels.map((label: any, index: number) => {
                                                return <a className="tag" key={label.id} >&nbsp;{label.title}&nbsp; </a>
                                            })}
                                        </li>
                                    </ul>
                                    {l.title}
                                </div>
                                <div className="info-row title-row">
                                    {l.title}
                                </div>
                                <div className="info-row action-row">
                                    {l.title}
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
            <aside>

            </aside>
        </div>
    )
}

export default GroupState(ArticleEnery, {
    reducer: 'article',
    states: ['articleList']
}) 