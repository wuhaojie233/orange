import { RouteIF } from '../defaultRoutes'
import About from '../../page/about/about'
import Game from '../../page/game/game'
import Dashboard from '../../page/dashboard/dashboard'

const AuthRoutes: Array<RouteIF> = [
  {
    exact: true,
    path: '/about',
    component: About,
  },
  {
    exact: true,
    path: '/game',
    component: Game,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
]
export default AuthRoutes
