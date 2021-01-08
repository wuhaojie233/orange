import { lazy } from 'react'

const Login = lazy(() => import('../pages/auth/login'))
const Home = lazy(() => import('../layout/juejin/home/home'))
const dashboard = lazy(() => import('../page/dashboard/dashboard'))
const Game = lazy(() => import('../page/game/game'))
const About = lazy(() => import('../page/about/about'))

const routes = [



  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/game',
        component: Game,
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
  {
    path: '/system',
    component: Game,
    auth: true,
  },
  { path: '/login', exact: true, component: Login },
  { component: About },
]

export default routes
