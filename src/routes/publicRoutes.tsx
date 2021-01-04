import { lazy } from 'react'

const Login = lazy(() => import('../pages/auth/login'))
const Home = lazy(() => import('../layout/default/home/home'))
const dashboard = lazy(() => import('../page/dashboard/dashboard'))
const Game = lazy(() => import('../page/game/game'))
const About = lazy(() => import('../page/about/about'))

const routes = [
  { path: '/login', exact: true, component: Login },
  {
    path: '/system',
    component: Game,
    auth: true,
  },

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
  { component: About },
]

export default routes
