import { GET_ARTCLEENRTY_LIST } from './const'
import http from '../../@core/_net/http'
const ArticleEnrtyAction = {
  getArticles(params: any) {
    return (dispatch: any) => {
      http.post('queryArticleList', params).then((res) => {
        const Articles = res.data.articles
        dispatch({ type: GET_ARTCLEENRTY_LIST, Articles })
      })
    }
  },
}
export default ArticleEnrtyAction
