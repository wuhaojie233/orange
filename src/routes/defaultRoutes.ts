import { FC } from 'react'

import About from '../page/about/about'
import Dashboard from '../page/dashboard/dashboard'
import Game from '../page/game/game'
import Login from '../pages/auth/login'
export interface RouteIF {
  path?: string
  component?: FC
  exact?: boolean
  routes?: Array<RouteIF>
}

const routes: Array<RouteIF> = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
    routes: [
      {
        path: '/about',
        component: About,
      },
      {
        path: '/game',
        component: Game,
      },
      { path: '/login', exact: true, component: Login },
      //   {
      //     component: "./404",
      //   },
    ],
  },
  //   {
  //     component: "./404",
  //   },
]
export default routes
