import React, { Fragment, useContext } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../@core/_context/authContext';


const RouterView = (props: any) => {
  const auth: any = useContext(AuthContext)
  return (
    <Fragment>
      <Switch>
        {props.routes.map((route: any, index: number) => {
          if (route.auth && !auth.isAuth) {
            // if (route.auth && !sessionStorage.getItem('user')) {
            console.log('router-->redirect:' + '/login')
            return <Redirect key={index} to="/login"></Redirect>
          } else {
            return <Route exact={route.exact}
              key={index}
              path={route.path}
              render={p => (
                <route.component {...p} routes={route.routes}
                  routerState={route}
                ></route.component>)
              }></Route>
          }
        })
        }
        {/* { resolveRouter(props.routes)} */}
        {/* <Route exact path="/" component={Login} /> */}
        {/* <Redirect to="/login"></Redirect> */}
      </Switch>
    </Fragment >
  )
}

export default RouterView
