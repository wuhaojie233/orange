import React, { FC } from 'react'

import Login from '../pages/auth/login'
import Home from '../layout/home/home'
import dashboard from '../page/dashboard/dashboard'
import Game from '../page/game/game'
import About from '../page/about/about'
import { Redirect } from 'react-router-dom'
export interface RouteIF {
  path?: string
  component?: FC
  exact?: boolean
  routes?: Array<RouteIF>
  render?: any
}

const routes = [
  { path: '/login', exact: true, component: Login },
  {
    path: '/',
    component: Home,
    routes: [
      // {
      //   path: '/',
      //   exact: true,
      //   render: () => <Redirect to={'/recommend'} />
      // },
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
  // { path: '/', exact: true, render: () => <Redirect to={'/login'} /> },
  // { path: '**', render: () => <Redirect to={'/login'} /> },
]

export default routes
