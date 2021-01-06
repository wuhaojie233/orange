import './App.less'
import React, { Dispatch, FC, Suspense, useContext, useEffect, useState } from 'react'
import routes from './routes/publicRoutes'
import RouterView from './routes/routes'
import { withRouter } from 'react-router-dom';

import { AuthContext } from './@core/_context/authContext';
import historyRouter from './@core/_history/history';
const App: FC = (props: any) => {
  // let [isAuth, Dispatch] = useContext(AuthContext)
  const push = historyRouter.push
  const replace = historyRouter.replace
  const BeforeEachEnter = (to: any, next: any) => {
    // do something...
    console.log(props)
    console.log(to)
    next(to)
  }
  useEffect(() => {
    historyRouter.push = (to: any) => {
      BeforeEachEnter(to, push)
    }

    historyRouter.replace = (to: any) => {
      BeforeEachEnter(to, replace)
    }
  }, [])
  const [isAuth, setAuth] = useState(sessionStorage.getItem('user') ? true : false)
  const context = { isAuth, setAuth }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AuthContext.Provider value={context}>
        <RouterView routes={routes} ></RouterView>
      </AuthContext.Provider>
    </Suspense>
  )
}
export default withRouter(App)
