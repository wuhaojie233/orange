import { FC } from 'react'
import Login from '../pages/auth/login'
import Home from '../layout/home/home'
import dashboard from '../page/dashboard/dashboard'
import Game from '../page/game/game'
import About from '../page/about/about'
export interface RouteIF {
  path?: string
  component?: FC
  exact?: boolean
  routes?: Array<RouteIF>
}

const routes: Array<RouteIF> = [
  { path: '/login', exact: true, component: Login },
  {
    path: '/home',
    exact: true,
    component: Home,
    routes: [
      {
        path: '/about',
        component: About,
      },
      {
        path: '/game',
        component: Game,
      },
      {
        path: '/dashboard',
        component: dashboard,
      },
      {
        path: '/',
        component: dashboard,
        exact: true,
      },
    ],
  },
  // { path: '', component: Login },
  // { path: '**', component: Login },
  //   {
  //     component: "./404",
  //   },
]
export default routes
