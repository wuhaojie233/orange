import { createBrowserHistory } from 'history'
import { useHistory } from 'react-router'

const historyRouter = createBrowserHistory()

const push = historyRouter.push
const replace = historyRouter.replace
const BeforeEachEnter = (to: any, next: any) => {
  // do something...
  let s = useHistory()
  //   let useRoute = useRouteMatch()
  console.log(to)
  console.log(s)
  //   console.log(useRoute)
  next(to)
}

historyRouter.push = (to: any) => {
  BeforeEachEnter(to, push)
}

historyRouter.replace = (to: any) => {
  BeforeEachEnter(to, replace)
}

export default historyRouter
