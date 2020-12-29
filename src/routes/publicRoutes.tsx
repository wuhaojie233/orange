import React, { FC } from 'react'

import Login from '../pages/auth/login'
import Home from '../layout/home/home'
import dashboard from '../page/dashboard/dashboard'
import Game from '../page/game/game'
import About from '../page/about/about'
import { Redirect, Route } from 'react-router-dom';
export interface RouteIF {
  path?: string
  component?: FC
  exact?: boolean
  routes?: Array<RouteIF>
  render?: any
  to?: string
}

const routes = [
  { path: '/login', exact: true, component: Login },
  {
    path: '/',
    component: Home,
    auth: true,
    routes: [
      {
        path: '/game',
        component: Game,
        auth: true,
      },
      {
        path: '/dashboard',
        component: dashboard,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/',
        component: dashboard,
        exact: true,
      },
      { component: About },
    ],
  },

  { component: About },
]

export default routes
